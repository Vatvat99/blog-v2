// Par Julien Royer :  http://forum.alsacreations.com/topic-5-3716-2.html#p154887

//Afficher son email en limitant les risques de spam (camion pourriel)
if (document.childNodes && document.getElementById && document.createTextNode && {}.hasOwnProperty) {

(function(cns, doc, win) {

	function createEl(n) {

		var a, i = 0, e = doc.createElementNS ? doc.createElementNS("http://www.w3.org/1999/xhtml", n) : doc.createElement(n);

		while ((a = arguments[++i])) {

			if (typeof a === "string") {

				e.appendChild(doc.createTextNode(a));

			} else {

				for (var p in a) {

					if (a.hasOwnProperty(p)) {

						e[p] = a[p];

					}

				}

			}

		}



		return e;

	}



	function clsRe(c) {

		return new RegExp("(^|\\s)" + c + "(\\s|$)");

	}



	function hasCls(e, c) {

		return clsRe(c).test(e.className);

	}



	function getElsCN(c, t) {

		var els = doc.getElementsByTagName(t), res = [], re = clsRe(c);

		for (var i = 0, e; (e = els[ i]); ++i) {

			if (re.test(e.className)) {

				res[res.length] = e;

			}

		}



		return res;

	}



	function chgEl(el, o) {

		var m = o.user + "@" + o.host + "." + o.domain, a = createEl("a", {href: "mailto:" + m, className: cns.email}, o.name || m);

		if (el.title) {

			a.title = el.title;

		}

		el.parentNode.replaceChild(a, el);

	}



	function initEl(el) {

		var o = {}, ss = el.getElementsByTagName("span");

		for (var i = 0, s; (s = ss[ i]); ++i) {

			for (var j in cns) {

				if (cns.hasOwnProperty(j) && hasCls(s, cns[j])) {

					o[j] = s.firstChild && s.firstChild.nodeValue;

				}

			}

		}



		if (o.user && o.host && o.domain) {

			chgEl(el, o);

		}

	}



	function initEls(els) {

		for (var i = 0, e; (e = els[ i]); ++i) {

			initEl(e);

		}

	}



	function init() {

		if (!init.done) {

			init.done = true;

			initEls(getElsCN(cns.email, "span"));

		}

	}



	function addLoadEvt(f) {

		if (doc.addEventListener) {

			doc.addEventListener("DOMContentLoaded", f, false);

		}



		if (win.addEventListener) {

			win.addEventListener("load", f, false);

		} else if (doc.addEventListener) {

			doc.addEventListener("load", f, false);

		} else if (win.attachEvent) {

			win.attachEvent("onload", f);

		}

	}



	addLoadEvt(init);

})({

	email: "email", user: "u", host: "h", domain: "d", name: "n"

}, document, this);

}