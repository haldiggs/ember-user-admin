Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["breadcrumbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<ol class=\"breadcrumb\">\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.index", options) : helperMissing.call(depth0, "link-to", "user.index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "view.pageTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n</ol>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Admin");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Users");
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "controllers.user.fullName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<ol class=\"breadcrumb\">\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "controllers.user.fullName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n</ol>\r\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.pageTitle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/gravatar-image"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("gravatarUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("User List");
  }

  data.buffer.push("<h1>User Administration</h1>\r\n<hr />\r\n<p>\r\n    Select what you want to do from below...\r\n</p>\r\n<ul id=\"home-list\"> \r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'id': ("user-link")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li><a href=\"#\">Roles</a></li>\r\n    <li><a href=\"#\">Logs</a></li>\r\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["roles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \r\n    ");
  stack1 = helpers['if'].call(depth0, "userIsAssigned", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <tr class=\"alert alert-success\">\r\n        <td>\r\n            <span class=\"glyphicon glyphicon-ok\"></span>\r\n        </td>\r\n        <td>\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   \r\n        </td>\r\n        <td>\r\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeRole", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Revoke</a>\r\n        </td>\r\n    </tr>\r\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <tr>\r\n        <td>\r\n        </td>\r\n        <td>\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </td>\r\n        <td>\r\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignRole", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Assign</a>\r\n        </td>        \r\n    </tr>\r\n    ");
  return buffer;
  }

  data.buffer.push("<table class=\"table\">\r\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <p class=\"text-centered\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("email"),
    'size': (200)
  },hashTypes:{'email': "ID",'size': "INTEGER"},hashContexts:{'email': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("\r\n            </p>\r\n            <h4>");
  stack1 = helpers._triageMustache.call(depth0, "fullName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n            <table class=\"table table-striped\">\r\n                <tr><td>Username:</td><td>");
  stack1 = helpers._triageMustache.call(depth0, "userName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td></tr>\r\n                <tr><td>Twitter:</td><td>");
  stack1 = helpers._triageMustache.call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td></tr>\r\n                <tr><td>Bio: </td><td>");
  stack1 = helpers._triageMustache.call(depth0, "bio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td></tr>\r\n                <tr><td>Email: </td><td>");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td></tr>\r\n            </table>\r\n            <p>\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["user/addnote"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "UserAdmin.BreadcrumbView", {hash:{
    'pageTitle': ("Add Note")
  },hashTypes:{'pageTitle': "STRING"},hashContexts:{'pageTitle': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n<h3>Add a Note to ");
  stack1 = helpers._triageMustache.call(depth0, "controllers.user.first", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'s Account</h3>\r\n<form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNote", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n    <p>\r\n        <textarea id=\"new-note\" rows=\"5\" class=\"form-control\" placeholder=\"Add your note...\"></textarea>\r\n    </p>\r\n    <p>\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Add Note\" />\r\n    </p>\r\n</form>\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "notes", "controllers.user.notes", options) : helperMissing.call(depth0, "render", "notes", "controllers.user.notes", options))));
  return buffer;
  
});

Ember.TEMPLATES["user/changeroles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "UserAdmin.BreadcrumbView", {hash:{
    'pageTitle': ("Change Roles")
  },hashTypes:{'pageTitle': "STRING"},hashContexts:{'pageTitle': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n<h3>Roles</h3>\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "roles", "roles", options) : helperMissing.call(depth0, "render", "roles", "roles", options))));
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["user/editinfo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "UserAdmin.BreadcrumbView", {hash:{
    'pageTitle': ("Edit User")
  },hashTypes:{'pageTitle': "STRING"},hashContexts:{'pageTitle': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n\r\n<h3>Basic Information</h3>\r\n<form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUser", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"UserName\">User name</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.userName"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"Email\">Email</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.email"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"Email\">First</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.first"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"Email\">Last</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.last"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"Email\">Twitter</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.twitter"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<label class=\"col-md-2 control-label\" for=\"Email\">Bio</label>\r\n		<div class=\"col-md-10\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controllers.user.bio"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n    <hr />\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" value=\"save\" class=\"btn btn-success\" />\r\n    </div>\r\n</form>");
  return buffer;
  
});

Ember.TEMPLATES["user/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Edit Basic Info");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Change User Roles");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Add a Note");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr>\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.fromDate || (depth0 && depth0.fromDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "note.created_at", options) : helperMissing.call(depth0, "fromDate", "note.created_at", options))));
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "note.note", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n            </tr>\r\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n            <tr>\r\n                <td><i>Nothing yet...</i></td>\r\n            </tr>                \r\n            ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr>\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.fromDate || (depth0 && depth0.fromDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "log.created_at", options) : helperMissing.call(depth0, "fromDate", "log.created_at", options))));
  data.buffer.push("</td>\r\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "log.entry", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n            </tr>\r\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\r\n            <tr>\r\n                <td><i>Nothing yet...</i></td>\r\n            </tr>\r\n            ");
  }

  data.buffer.push(escapeExpression(helpers.view.call(depth0, "UserAdmin.BreadcrumbView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n<hr />\r\n<h2>Choose what you want to do:</h2>\r\n<ul>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.editinfo", options) : helperMissing.call(depth0, "link-to", "user.editinfo", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.changeroles", options) : helperMissing.call(depth0, "link-to", "user.changeroles", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.addnote", options) : helperMissing.call(depth0, "link-to", "user.addnote", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n</ul>\r\n<hr />\r\n<div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <h4>Notes</h4>\r\n        <table class=\"table table-striped\">\r\n            ");
  stack1 = helpers.each.call(depth0, "note", "in", "controllers.user.notes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </table>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <h4>Logs</h4>\r\n        <table class=\"table table-striped\">\r\n            ");
  stack1 = helpers.each.call(depth0, "log", "in", "controllers.user.logs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </table>        \r\n\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["user/notes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <tr>\r\n        <td>");
  data.buffer.push(escapeExpression((helper = helpers.fromDate || (depth0 && depth0.fromDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created_at", options) : helperMissing.call(depth0, "fromDate", "created_at", options))));
  data.buffer.push("</td>\r\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "note", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n    </tr>\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n    <tr>\r\n        <td><i>No notes yet...</i></td>\r\n    </tr>\r\n    ");
  }

  data.buffer.push("<table class=\"table table-striped\">\r\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <tr>\r\n        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "", options) : helperMissing.call(depth0, "link-to", "user", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "", options) : helperMissing.call(depth0, "link-to", "user", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n        <td>");
  data.buffer.push(escapeExpression((helper = helpers.fromDate || (depth0 && depth0.fromDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created_at", options) : helperMissing.call(depth0, "fromDate", "created_at", options))));
  data.buffer.push("</td>\r\n    </tr>\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("email"),
    'size': (80)
  },hashTypes:{'email': "ID",'size': "INTEGER"},hashContexts:{'email': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "first", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "last", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\r\n    <tr>\r\n        <td colspan=\"3\"><i>No users...</i></td>\r\n    </tr>\r\n    ");
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n        <h3>Find a User By Email or Last Name</h3>\r\n        <form class=\"form-inline\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchForUser", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("searchTerm"),
    'class': ("form-control"),
    'placeholder': ("Search by email or last name")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            <button class=\"btn btn-success\">go</button>\r\n        </form>\r\n    </div>\r\n    <hr />\r\n</div>\r\n<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n<table class=\"table table-striped\" id=\"users-list\">\r\n    <tr>\r\n        <th>User</th>\r\n        <th>Name</th>\r\n        <th>Member Since</th>\r\n    </tr>\r\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</table>\r\n");
  return buffer;
  
});