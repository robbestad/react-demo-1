/**
 * @jsx React.DOM
 */
var SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function() {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
        this.intervals.map(clearInterval);
    }
};

var Masthead = React.createClass({
    mixins: [SetIntervalMixin], // Use the mixin
    componentDidMount: function() {
        this.setInterval(this.tick, 1); // Call a method on the mixin
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 0); // Call a method on the mixin
    },
    tick: function() {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var width=document.body.clientWidth;
        this.setProps({scrollTop: -scrollTop, logoTop:scrollTop/1.75, width: width});
    },
    render: function() {
        var divStyle= {
            position: 'absolute',
            top: this.props.scrollTop,
            left: '0',
            width: '100%',
            height: '100%',
            background: 'transparent',
//            background: 'url(img/bg.png) no-repeat 50% 50%',
//            backgroundSize:'cover',
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

        return  <div class="masthead" style={divStyle}>
             <h1 style={logoStyle}>{this.props.title}</h1>
            </div>;
    }
});

React.renderComponent(
    <Masthead title="React" />,
        document.getElementById('masthead')
);