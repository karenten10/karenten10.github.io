<html>
	<head>
		<script type="text/javascript">
			//console.log("=====> 1");

			/*
			//畫面一開始的時候,因為此時還沒有產生div1,所以畫面此時會抓不到div1
			//var div1 = document.getElementById("div1");
			div1.innerHTML = "111222";
			//console.log("====> div1 = " + div1);
			*/

			function testNode() {
				var div0 = document.getElementById("div0");
				var div0ChildNode0 = div0.childNodes[1];
				console.log("====> div0ChildNode0 = " + div0ChildNode0);

				var div1 = document.getElementById("div1");
				div1.innerHTML = "111222";
				console.log("=======> div1 = " + div1);
				var div1NodeValue = div1.nodeValue;
				console.log("====> div1NodeValue = " + div1NodeValue);

				var p1 = document.getElementById("p1");
				var p1NodeValue = p1.nodeValue;
				console.log("=======> p1 = " + p1);
				console.log("====> p1NodeValue = " + p1NodeValue);

				var domNodeBtn = document.getElementById("domNodeBtn");
				var domNodeBtnNodeValue = domNodeBtn.nodeValue;
				console.log("====> domNodeBtnNodeValue = " + domNodeBtnNodeValue);
			}

			function testNode2() {
				console.log("===> testNode2");
				var bodyAR = document.getElementsByTagName("body");
				console.log("===> bodyAR ");

				// for (var i = 0; i < bodyAR.length; i++) {
				// 	var currentNode = bodyAR[i];
				// 	getChildNodes(currentNode, "   ");
				// }

				var div0 = bodyAR[0].childNodes[1];
				showNodeInfo(div0, "    ");

				//firstChild和lastChild通常都是textNode
				//因為第1個和最後1個元件通常都是text
				var firstTextNode = div0.firstChild;
				showNodeInfo(firstTextNode, "    ");

				var lastTextNode = div0.lastChild;
				showNodeInfo(lastTextNode, "    ");				
			}

			function testNode3() {
				var p3 = document.getElementById("p3");
				// p3.firstChild.nodeValue = "You are really not alone.";

				//showNodeInfo(p3.childNodes[0], " ");
				//showNodeInfo(p3.childNodes[1], " ");
				//showNodeInfo(p3.childNodes[2], " ");

				while (p3.firstChild) {
					console.log("=====> remove firstChild");
					p3.removeChild(p3.firstChild);
				}
				
				//p3.removeChild(p3.childNodes[0]);
				//p3.removeChild(p3.childNodes[1]);
				//這行會有error：Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node. 
				//p3.removeChild(p3.childNodes[2]);
				p3.appendChild(document.createTextNode("You are really not alone."));
			}

			function showNodeInfo(node, tabSpace) {
				console.log(tabSpace + "===> node = " + node);

				//元件所在網頁位置
				// console.log(tabSpace + "	==> node baseURI = " + parentNode.baseURI);

				console.log(tabSpace + "	- node name = " + node.nodeName);
				console.log(tabSpace + "	- node localName = " + node.localName);
				console.log(tabSpace + "	- node namespaceURI = " + node.namespaceURI);
				console.log(tabSpace + "	- node type = " + node.nodeType);
				console.log(tabSpace + "	- node value =>" + node.nodeValue + "<=");	
			}

			function getChildNodes(parentNode, tabSpace) {
				console.log(tabSpace + "===> node = " + parentNode);

				//元件所在網頁位置
				// console.log(tabSpace + "	==> node baseURI = " + parentNode.baseURI);

				console.log(tabSpace + "	- node name = " + parentNode.nodeName);
				console.log(tabSpace + "	- node localName = " + parentNode.localName);
				console.log(tabSpace + "	- node namespaceURI = " + parentNode.namespaceURI);
				console.log(tabSpace + "	- node type = " + parentNode.nodeType);
				console.log(tabSpace + "	- node value =>" + parentNode.nodeValue + "<=");

				var childNodesAR = parentNode.childNodes;
				console.log(tabSpace + "	- childNodesAR length = " + childNodesAR.length);

				for (var i = 0; i < childNodesAR.length; i++) {
					var childNode = childNodesAR[i];
					
					getChildNodes(childNode, tabSpace+"     ");


				}
			}

			function testDomTree() {
				console.log("===> window = " + window);

				// navigator
				var navigator = window.navigator;
				console.log("	===> navigator = " + navigator);
				console.log("		===> navigator appCodeName = " + navigator.appCodeName);
				console.log("		===> navigator appName = " + navigator.appName);

				//location
				var location = window.location;
				//console.log("	===> location = " + location);

				//frames
				var frames = window.frames;
				console.log("	===> frames = " + frames);
				console.log("		===> frames.length = " + frames.length);
				for (var i = 0; i < frames.length; i++) {
					var currentFrame = frames[i];
					console.log("		===> currentFrame = " + currentFrame);
				}				

				//screen
				var screen = window.screen;
				console.log("	===> screen = " + screen);
				console.log("		===> screen.availHeight = " + screen.availHeight);
				console.log("		===> screen.availWidth = " + screen.availWidth);

				//history
				var history = window.history;
				console.log("	===> history = " + history);
				//history.back();

				//document
				var document = window.document;
				getChildNodes(document, "	");
				
			}
		</script>	
	</head>
	<body>
		<div id="div0" style="margin-top:100px;text-align:center;">
			<div id="div1">AAA</div>
			<br />
			<p id="p1">BBB</p>
			<p id="p2">
				CCC
			</p>
			<p id="p3">
				You are <strong>not</strong> alone. 
			</p>
			<input type="button" id="domNodeBtn" value="DOM Node" onclick="testNode()">
			<input type="button" id="domNodeBtn2" value="DOM Node2" onclick="testNode2()">
			<input type="button" id="domNodeBtn3" value="DOM Node3" onclick="testNode3()">
			<input type="button" id="domTreeBtn" value="DOM Tree" onclick="testDomTree()">
		</div>
	</body>
</html>
