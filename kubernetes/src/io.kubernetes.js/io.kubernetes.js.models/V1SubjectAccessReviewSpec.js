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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes', 'io.kubernetes.js/io.kubernetes.js.models/V1ResourceAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1NonResourceAttributes'), require('./V1ResourceAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1SubjectAccessReviewSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1NonResourceAttributes, root.KubernetesJsClient.V1ResourceAttributes);
  }
}(this, function(ApiClient, V1NonResourceAttributes, V1ResourceAttributes) {
  'use strict';




  /**
   * The V1SubjectAccessReviewSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1SubjectAccessReviewSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1SubjectAccessReviewSpec</code>.
   * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1SubjectAccessReviewSpec
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V1SubjectAccessReviewSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1SubjectAccessReviewSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1SubjectAccessReviewSpec} The populated <code>V1SubjectAccessReviewSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extra')) {
        obj['extra'] = ApiClient.convertToType(data['extra'], {'String': ['String']});
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
      }
      if (data.hasOwnProperty('nonResourceAttributes')) {
        obj['nonResourceAttributes'] = V1NonResourceAttributes.constructFromObject(data['nonResourceAttributes']);
      }
      if (data.hasOwnProperty('resourceAttributes')) {
        obj['resourceAttributes'] = V1ResourceAttributes.constructFromObject(data['resourceAttributes']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
    }
    return obj;
  }

  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   * @member {Object.<String, Array.<String>>} extra
   */
  exports.prototype['extra'] = undefined;
  /**
   * Groups is the groups you're testing for.
   * @member {Array.<String>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * NonResourceAttributes describes information for a non-resource access request
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes} nonResourceAttributes
   */
  exports.prototype['nonResourceAttributes'] = undefined;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ResourceAttributes} resourceAttributes
   */
  exports.prototype['resourceAttributes'] = undefined;
  /**
   * User is the user you're testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
   * @member {String} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


