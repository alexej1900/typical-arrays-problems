
exports.min = function min (array) {
  let min = 0;
  if (arguments.length == 0) min = 0;
  else for (i=0; i<array.length; i++){
        if (array[i] < min) min = array[i];
    }
    return (arguments.length == 0)? 0:min;
}

exports.max = function max (array) {
 let max = 0;
    if (arguments.length == 0) max = 0;
    else for (i=0; i<array.length; i++){
        if (array[i] > max) max = array[i];
    }
    return (arguments.length == 0)? 0:max;
}

exports.avg = function avg (array) {
  let avg = 0;
  if (arguments.length == 0) avg = 0;
  else for (i=0; i<array.length; i++){
        avg += array[i];
    }
return (arguments.length == 0)? 0:avg/array.length;
}
