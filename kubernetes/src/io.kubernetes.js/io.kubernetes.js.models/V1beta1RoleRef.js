/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1RoleRef = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1beta1RoleRef model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1RoleRef
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1RoleRef</code>.
   * RoleRef contains information that points to the role being used
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1RoleRef
   * @class
   * @param apiGroup {String} APIGroup is the group for the resource being referenced
   * @param kind {String} Kind is the type of resource being referenced
   * @param name {String} Name is the name of resource being referenced
   */
  var exports = function(apiGroup, kind, name) {
    var _this = this;

    _this['apiGroup'] = apiGroup;
    _this['kind'] = kind;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>V1beta1RoleRef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1RoleRef} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1RoleRef} The populated <code>V1beta1RoleRef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiGroup')) {
        obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * APIGroup is the group for the resource being referenced
   * @member {String} apiGroup
   */
  exports.prototype['apiGroup'] = undefined;
  /**
   * Kind is the type of resource being referenced
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Name is the name of resource being referenced
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


