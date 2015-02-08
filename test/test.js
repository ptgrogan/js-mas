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
 
var mas = require("../lib/mas");

var entity = new mas.sd.Entity();
console.log(entity);

var flow = new mas.sd.Flow({getValue: function() {return 10;}} );
console.log(flow.getValue());

var stock = new mas.sd.Stock({initValue: 1, getDerivative: function() { return flow.getValue(); } });
console.log(stock.getValue());
stock.init();
console.log(stock.getValue());
stock.tick(0.5);
console.log(stock.getValue());
stock.tock();
console.log(stock.getValue());