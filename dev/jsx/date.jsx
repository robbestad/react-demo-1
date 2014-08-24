/**
 * @jsx React.DOM
 */
var DateApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'React is UP & has been successfully running for ' + seconds + ' seconds.';

        return <p>{message}</p>;
    }
});
var start = new Date().getTime();
setInterval(function() {
    React.renderComponent(
        <DateApplication elapsed={new Date().getTime() - start} />,
        document.getElementById('container')
    );
}, 50);