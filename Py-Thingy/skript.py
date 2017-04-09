import urllib.request as urllib
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from time import sleep

chrome_options = Options()
chrome_options.add_argument('--dns-prefetch-disable')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--lang=en-US')
browser = webdriver.Chrome('./assets/chromedriver', chrome_options=chrome_options)
browser.implicitly_wait(25)
browser.get("https://www.pexels.com/")

search_input =  browser.find_element_by_xpath('//input[@placeholder="Search for free photos…"]')
search_input.send_keys('sea')
search_input.submit()

photo = browser.find_element_by_class_name('photo-item')
photo.click()

#photo_prev = browser.find_element_by_class_name('image-section__image')
#photo_prev.click()
img = browser.find_element_by_class_name('js-download').get_attribute("href")
browser.get(img)

sleep(2)

download = browser.current_url

print("Trying to get: " + download)
req = urllib.Request(download, headers={'User-Agent' : "Magic Browser"}) 
con = urllib.urlopen( req )
#output = open("file01.png","wb")
#output.write(download.read())
#output.close()

browser.back()
browser.back()

sleep(3)

browser.close()
