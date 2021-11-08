// * _
(function (root) {
  console.log(this);
  var _ = function (data) {
    if (!(this instanceof _)) {
      return new _(data); // *
    }
    this.wrapper = data;
  };

  _.unique = function (source, callback) {
    var _ref = [];
    for (let i = 0; i < source.length; i++) {
      var _target = callback ? callback(source[i]) : source[i];
      if (_ref.indexOf(_target) === -1) {
        _ref.push(_target);
      }
    }
    return _ref;
  };

  _.chain = function (source) {
    var _instance = _(source); // * special 实例对像
    _instance._chain = true;
    return _instance;
  };

  function model(instance, outcome) {
    if (instance._chain) {
      instance.wrapper = outcome;
      return instance;
    }
    return outcome;
  }

  _.process = function (target) {
    var res = [];
    for (var name in target) {
      res.push(name);
    }
    return res;
  };

  // * 参数 返回值
  _.template = function (source, name) {
    source.push(name);
    return source;
  };

  _.prototype.ending = function () {
    return this.wrapper;
  };
  // * mixin 混入 unique

  var beforeHook = function (arr, callback) {
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  };

  _.mixin = function (target) {
    beforeHook(_.process(target), function (key) {
      var _func = target[key];
      _.prototype[key] = function () {
        var _decon = this.wrapper
          ? [this.wrapper, ...arguments]
          : [...arguments];
        console.log(_decon);
        return model(this, _func.apply(this, _decon));
      };
    });
  };

  _.mixin(_);
  root._ = _;
})(this);
