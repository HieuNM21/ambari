/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.StackUpgradeHistory = DS.Model.extend({
  requestId: DS.attr('number'),
  clusterName: DS.attr('string'),
  direction: DS.attr('string'),
  fromVersion: DS.attr('string'),
  toVersion: DS.attr('string'),
  requestStatus: DS.attr('string'),
  upgradeType: DS.attr('string'),
  downgradeAllowed: DS.attr('boolean'),
  skipFailures: DS.attr('boolean'),
  skipServiceCheckFailures: DS.attr('boolean'),
  endTime: DS.attr('number'),
  startTime: DS.attr('number'),
  createTime: DS.attr('number')
});

App.StackUpgradeHistory.FIXTURES = [];
