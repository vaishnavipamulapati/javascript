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
    root.KubernetesJsClient.V1PodCondition = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1PodCondition model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1PodCondition
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1PodCondition</code>.
   * PodCondition contains details for the current condition of this pod.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1PodCondition
   * @class
   * @param status {String} Status is the status of the condition. Can be True, False, Unknown. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @param type {String} Type is the type of the condition. Currently only Ready. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   */
  var exports = function(status, type) {
    var _this = this;





    _this['status'] = status;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>V1PodCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1PodCondition} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1PodCondition} The populated <code>V1PodCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastProbeTime')) {
        obj['lastProbeTime'] = ApiClient.convertToType(data['lastProbeTime'], 'Date');
      }
      if (data.hasOwnProperty('lastTransitionTime')) {
        obj['lastTransitionTime'] = ApiClient.convertToType(data['lastTransitionTime'], 'Date');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Last time we probed the condition.
   * @member {Date} lastProbeTime
   */
  exports.prototype['lastProbeTime'] = undefined;
  /**
   * Last time the condition transitioned from one status to another.
   * @member {Date} lastTransitionTime
   */
  exports.prototype['lastTransitionTime'] = undefined;
  /**
   * Human-readable message indicating details about last transition.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Status is the status of the condition. Can be True, False, Unknown. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Type is the type of the condition. Currently only Ready. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


