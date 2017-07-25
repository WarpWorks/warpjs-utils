/* eslint-disable no-console */

module.exports = (level, arg1, arg2, arg3, arg4) => {
    var tracelevel = 1; // 0=ignore
    if (tracelevel >= level && arg1 && arg2) {
        console.log(arg1 + '():');
        console.log(' - ' + arg2);
        if (arg3) {
            console.log(' - ' + arg3);
        }
        if (arg4) {
            console.log(' - ' + arg4);
        }
    }
};
