
var TweetBox = React.createClass({
    getInitialState: function(){
        return {
            text: "",
            photoAdded: false
        };
    },
    handleChange: function(e){
        this.setState({ text: e.target.value });
    },
    togglePhoto: function(e){
        this.setState({ photoAdded: !this.state.photoAdded });
    },
    overflowAlert: function(){
    
        let len = this.state.photoAdded ? 140 - this.state.text.length - 23 : 140 - this.state.text.length;
        
        if(this.state.photoAdded) {
            var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
            var overflowText = this.state.text.substring(140 - 23);
        } 
        else{
            var beforeOverflowText = this.state.text.substring(140 - 10, 140);
            var overflowText = this.state.text.substring(140);
        }
    
        if(len < 0){
            return (
                <div className="alert alert-warning">
                    <strong>Oops! Too Long:</strong>
                     &nbsp;...{beforeOverflowText}
                    <strong className="bg-danger">{overflowText}</strong>
                </div>
            );
        }
        else{
            return "";
        }
        
    },
    render: function(){
        return (

            <div className="well clearfix">

                { this.overflowAlert() }

                <textarea className="form-control" onChange={ this.handleChange }></textarea>

                <br />

                <button 
                    className="btn btn-primary pull-right" 
                    disabled={ this.state.text.length === 0 && !this.state.photoAdded}
                >Tweet</button>
               
                <button className="btn btn-default pull-right" onClick={ this.togglePhoto }>
                    { this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
                </button>

                <span>{ this.state.photoAdded ? 140 - this.state.text.length - 23 : 140 - this.state.text.length }</span>

            </div>

        );
    }
});


ReactDOM.render(
    <TweetBox />,
    document.getElementById("container")
);

