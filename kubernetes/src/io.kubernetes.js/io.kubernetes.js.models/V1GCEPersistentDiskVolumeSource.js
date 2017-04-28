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
    root.KubernetesJsClient.V1GCEPersistentDiskVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1GCEPersistentDiskVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1GCEPersistentDiskVolumeSource</code>.
   * Represents a Persistent Disk resource in Google Compute Engine.  A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource
   * @class
   * @param pdName {String} Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   */
  var exports = function(pdName) {
    var _this = this;



    _this['pdName'] = pdName;

  };

  /**
   * Constructs a <code>V1GCEPersistentDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource} The populated <code>V1GCEPersistentDiskVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('partition')) {
        obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
      }
      if (data.hasOwnProperty('pdName')) {
        obj['pdName'] = ApiClient.convertToType(data['pdName'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {Number} partition
   */
  exports.prototype['partition'] = undefined;
  /**
   * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {String} pdName
   */
  exports.prototype['pdName'] = undefined;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;



  return exports;
}));


