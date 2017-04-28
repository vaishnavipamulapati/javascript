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
    root.KubernetesJsClient.ExtensionsV1beta1ScaleStatus = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExtensionsV1beta1ScaleStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/ExtensionsV1beta1ScaleStatus
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>ExtensionsV1beta1ScaleStatus</code>.
   * represents the current status of a scale subresource.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/ExtensionsV1beta1ScaleStatus
   * @class
   * @param replicas {Number} actual number of observed instances of the scaled object.
   */
  var exports = function(replicas) {
    var _this = this;

    _this['replicas'] = replicas;


  };

  /**
   * Constructs a <code>ExtensionsV1beta1ScaleStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/ExtensionsV1beta1ScaleStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/ExtensionsV1beta1ScaleStatus} The populated <code>ExtensionsV1beta1ScaleStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replicas')) {
        obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = ApiClient.convertToType(data['selector'], {'String': 'String'});
      }
      if (data.hasOwnProperty('targetSelector')) {
        obj['targetSelector'] = ApiClient.convertToType(data['targetSelector'], 'String');
      }
    }
    return obj;
  }

  /**
   * actual number of observed instances of the scaled object.
   * @member {Number} replicas
   */
  exports.prototype['replicas'] = undefined;
  /**
   * label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   * @member {Object.<String, String>} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   * @member {String} targetSelector
   */
  exports.prototype['targetSelector'] = undefined;



  return exports;
}));


