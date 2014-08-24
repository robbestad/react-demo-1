/**
 * @jsx React.DOM
 */
var DateApplication = React.createClass({displayName: 'DateApplication',
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'React is UP & has been successfully running for ' + seconds + ' seconds.';

        return React.DOM.p(null, message);
    }
});
var start = new Date().getTime();
setInterval(function() {

    var seconds =new Date().getTime() - start;
    $(".masthead").css("top",-$(window).scrollTop()/2+"px");

    React.renderComponent(
        DateApplication({elapsed: seconds}),
        document.getElementById('container')
    );
}, 50);