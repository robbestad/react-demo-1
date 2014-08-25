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

var Menu = React.createClass({
    mixins: [SetIntervalMixin], // Use the mixin
    componentDidMount: function() {
        this.setInterval(this.tick, 1); // Call a method on the mixin
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 0); // Call a method on the mixin
    },
    tick: function() {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var menuTop = document.getElementById("menu").style.position;
        var width=document.body.clientWidth;

        this.setProps({scrollTop: scrollTop, menuTop:menuTop, width: width});
    },
    render: function () {
        var width = ((document.getElementById("mainRow").clientWidth) / 3) - 2;

        var opacity = this.props.scrollTop/500 <= 1.0 ? this.props.scrollTop/700 > 0.0 ? this.props.scrollTop/500 : 0.0 : 1.0;

        if(this.props.scrollTop>=222){
            opacity=1.0;
            $(".mainRow").css("paddingTop",'30px');
            $(".masthead").css("background",'white');

            // this.state.stickified=true;
            var divStyle= {
                display: 'block',
                position: 'fixed',
                top: '0px',
                width: document.getElementById("mainRow").clientWidth+"px",
                background: 'white'
            }
            var liStyle = {
                'float': 'left',
                'width': width+"px",
                'padding': '10px 5px',
                'borderTop': '0',
                'borderBottom': '1px solid black'
            }
        }
        else {
           // this.state.stickified=false;
            var divStyle= {
                display: 'block',
                position: 'relative',
//            top: '170px',
                width: document.getElementById("mainRow").clientWidth+"px",
                'background': 'white'
            }
            var liStyle = {
                'float': 'left',
                'width': width+"px",
                'padding': '10px 5px',
                'borderTop': '1px solid black',
                'borderBottom': '1px solid black'
            }
        }


        $(".content").css("opacity",opacity);
        var ulStyle = {
            'display': 'block',
            'height': '30px',
            'marginBottom': '10px',
            'listStyle': 'none outside none',
            'margin': '0px',
            'padding': '0px',
            'textAlign': 'center'
        }




        return <section style={divStyle} id="menu">
            <div>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="#automation">{this.props.scrollTop}</a>
                    </li>
                    <li style={liStyle}><a href="#speed">-{this.props.scrollTop}</a>
                    </li>
                    <li style={liStyle}><a href="#source"></a>
                    </li>
                </ul>
            </div>
        </section>;

    }
});

React.renderComponent(
    <Menu title="React" />,
    document.getElementById('menu')
);