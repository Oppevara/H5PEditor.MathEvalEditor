
H5PEditor.widgets.math_eval_editor = H5PEditor.MathEvalEditor = (function ($) {

  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
    this.applet = undefined;
    this.data = h5p_get_data_obj(this.params);
  }
   
  C.prototype.appendTo = function ($container) {
    
    this.applet = new math_eval_wrapper("viewer");
    $container.append(this.applet.el);
    try {
      this.applet.data = this.data.data;
    } catch(ex) {}

  };


  C.prototype.save = function() {
    var data = {"data" : undefined};
    
    try { 
      data.data = this.applet.data;
    } catch(ex) {}

    this.params = h5p_get_data_str(data);
    this.setValue(this.field, this.params);
  };


  C.prototype.validate = function () { this.save(); return true; };
  C.prototype.remove = function () {};
 
 
  return C;
})(H5P.jQuery); 



