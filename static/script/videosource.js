/**
 * @fileOverview Requirejs module containing antie.VideoSource class.
 *
 * @preserve Copyright (c) 2013 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

require.def(
    'antie/videosource',
    ['antie/mediasource'],
    function(MediaSource) {
        'use strict';

        /**
         * An video media source. Provides storage of source and type information about an video media source.
         * @name antie.VideoSource
         * @class
         * @extends antie.MediaSource
         * @param {String} src The URI of the media.
         * @param {String} type The type of the media.
         */
        var VideoSource = MediaSource.extend(/** @lends antie.VideoSource.prototype */ {
            /**
             * Get the media type of this source. In this case <code>MediaType.MEDIA_TYPE_VIDEO</code>.
             * @returns The media type of this content.
             */
            getMediaType: function() {
                return MediaSource.MEDIA_TYPE_VIDEO;
            }
        });

        return VideoSource;
    });
