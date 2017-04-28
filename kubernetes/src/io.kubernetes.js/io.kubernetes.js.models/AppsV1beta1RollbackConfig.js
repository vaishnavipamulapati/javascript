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
    root.KubernetesJsClient.AppsV1beta1RollbackConfig = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppsV1beta1RollbackConfig model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1RollbackConfig
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>AppsV1beta1RollbackConfig</code>.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1RollbackConfig
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AppsV1beta1RollbackConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1RollbackConfig} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/AppsV1beta1RollbackConfig} The populated <code>AppsV1beta1RollbackConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The revision to rollback to. If set to 0, rollbck to the last revision.
   * @member {Number} revision
   */
  exports.prototype['revision'] = undefined;



  return exports;
}));


