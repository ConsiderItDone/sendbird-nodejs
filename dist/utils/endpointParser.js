'use strict';

var _ = require('lodash');
var endpointParamRegExp = /\{(\w+?)\}/g;

function matchAll(str, re) {
    var ret = [];
    var m = void 0,
        i = 0;
    while (m = re.exec(str)) {
        ret.push({
            i: i++,
            key: m[0],
            name: m[1]
        });
    }
    return ret;
}

module.exports = {
    parse: function parse(endpoint) {
        var template = _.template(endpoint, {
            interpolate: endpointParamRegExp
        });
        return {
            args: matchAll(endpoint, endpointParamRegExp),
            compile: function compile(args) {
                var params = _.zipObject(_.map(this.args, 'name'), args);
                return template(params);
            }
        };
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9lbmRwb2ludFBhcnNlci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsImVuZHBvaW50UGFyYW1SZWdFeHAiLCJtYXRjaEFsbCIsInN0ciIsInJlIiwicmV0IiwibSIsImkiLCJleGVjIiwicHVzaCIsImtleSIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyc2UiLCJlbmRwb2ludCIsInRlbXBsYXRlIiwiaW50ZXJwb2xhdGUiLCJhcmdzIiwiY29tcGlsZSIsInBhcmFtcyIsInppcE9iamVjdCIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsSUFBSUMsUUFBUSxRQUFSLENBQVY7QUFDQSxJQUFNQyxzQkFBc0IsYUFBNUI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEVBQXZCLEVBQTJCO0FBQ3ZCLFFBQU1DLE1BQU0sRUFBWjtBQUNBLFFBQUlDLFVBQUo7QUFBQSxRQUFPQyxJQUFJLENBQVg7QUFDQSxXQUFPRCxJQUFJRixHQUFHSSxJQUFILENBQVFMLEdBQVIsQ0FBWCxFQUF5QjtBQUNyQkUsWUFBSUksSUFBSixDQUFTO0FBQ0xGLGVBQUdBLEdBREU7QUFFTEcsaUJBQUtKLEVBQUUsQ0FBRixDQUZBO0FBR0xLLGtCQUFNTCxFQUFFLENBQUY7QUFIRCxTQUFUO0FBS0g7QUFDRCxXQUFPRCxHQUFQO0FBQ0g7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUI7QUFFYkMsU0FGYSxpQkFFUEMsUUFGTyxFQUVHO0FBQ1osWUFBTUMsV0FBV2pCLEVBQUVpQixRQUFGLENBQVdELFFBQVgsRUFBcUI7QUFDbENFLHlCQUFhaEI7QUFEcUIsU0FBckIsQ0FBakI7QUFHQSxlQUFPO0FBQ0hpQixrQkFBTWhCLFNBQVNhLFFBQVQsRUFBbUJkLG1CQUFuQixDQURIO0FBRUhrQixtQkFGRyxtQkFFS0QsSUFGTCxFQUVXO0FBQ1Ysb0JBQU1FLFNBQVNyQixFQUFFc0IsU0FBRixDQUFZdEIsRUFBRXVCLEdBQUYsQ0FBTSxLQUFLSixJQUFYLEVBQWlCLE1BQWpCLENBQVosRUFBc0NBLElBQXRDLENBQWY7QUFDQSx1QkFBT0YsU0FBU0ksTUFBVCxDQUFQO0FBQ0g7QUFMRSxTQUFQO0FBT0g7QUFiWSxDQUFqQiIsImZpbGUiOiJlbmRwb2ludFBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgZW5kcG9pbnRQYXJhbVJlZ0V4cCA9IC9cXHsoXFx3Kz8pXFx9L2c7XG5cbmZ1bmN0aW9uIG1hdGNoQWxsKHN0ciwgcmUpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBsZXQgbSwgaSA9IDA7XG4gICAgd2hpbGUgKG0gPSByZS5leGVjKHN0cikpIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgaTogaSsrLFxuICAgICAgICAgICAga2V5OiBtWzBdLFxuICAgICAgICAgICAgbmFtZTogbVsxXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBwYXJzZShlbmRwb2ludCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoZW5kcG9pbnQsIHtcbiAgICAgICAgICAgIGludGVycG9sYXRlOiBlbmRwb2ludFBhcmFtUmVnRXhwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXJnczogbWF0Y2hBbGwoZW5kcG9pbnQsIGVuZHBvaW50UGFyYW1SZWdFeHApLFxuICAgICAgICAgICAgY29tcGlsZShhcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gXy56aXBPYmplY3QoXy5tYXAodGhpcy5hcmdzLCAnbmFtZScpLCBhcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbn07Il19