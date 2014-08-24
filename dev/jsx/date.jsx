/**
 * @jsx React.DOM
 */
var Masthead = React.createClass({
    render: function() {
        var divStyle= {
            position: 'absolute',
            top: this.props.scrollTop,
            left: '0',
            width: '100%',
            height: '270px',
            background: 'url(img/bg.jpg) no-repeat 50% 50%',
            backgroundSize:'cover',
            transform: 'translateZ(0) scale(1)',
            zIndex: '-1',
            textAlign: 'center'
        }

        var logoStyle = {
            //width: '100%',
            top: this.props.logoTop,
            //margin: '50px auto',
            color: 'black',
            width: '150px',
            fontSize: '5em',
            left: (this.props.width/2)-110+"px",
            position: 'absolute'
        }

        return  <div style={divStyle}>
             <h1 style={logoStyle}>React</h1>
            </div>;
    }


});

setInterval(function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var width=document.body.clientWidth;
    React.renderComponent(
        <Masthead width={width} scrollTop={-scrollTop} logoTop={$(window).scrollTop()/1.75} />,
        document.getElementById('masthead')
    );
}, 0);