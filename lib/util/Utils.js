/*
 * Copyright 2015 Paul T. Grogan
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    /**
     * Utilities.
     * @type Object
     */
    function Utils() {}

    /**
     * Gets the integer part of a number.
     * @param {Number} number the number
     * @returns {Number} the integer part
     */
    Utils.prototype.intPart = function(number) {
        if(number > 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    };

    /**
     * Generates a "version 4" globally-unique identifier (GUID).
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     * @returns {String} the guid
     */
    Utils.prototype.guid = (function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16).substring(1);
        }
        return function() {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();
        };
    })();
    
    return Utils;
});