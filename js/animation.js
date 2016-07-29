(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 566,
	fps: 24,
	color: "#F0931D",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.tete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhREgQiVhtixiYQljkviQjaQEvAPEhBNQCpAsAbAGQBmAXBZACQGmAHGcheIhFFhQgYB4g9BrQg8BthcBRQidCKihABIgCAAQjEAAimjPg");
	this.shape.setTransform(281.5,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkZHvQijgBiciKQhbhRg+htQg7hrgYh4IhGlhQGbBeGngHQBYgCBngXQAbgGCpgsQEhhNEvgPQiPDalkEvQixCYiVBtQimDPjEAAIgBAAg");
	this.shape_1.setTransform(90.8,49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArCMoQlJjhAAmMQAAjLBejaQBbjQCdixQCeiyC7hnQDHhsC8AAQCpAAC2BoQCtBkCUCrQCVCtBVDLQBbDYAADJQAAGUkhDmQkQDYm0gBQnBABkojKg");
	this.shape_2.setTransform(183.2,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.3,202);


(lib.systemeU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgnAoQgGgLAAgSIAAhEIAZAAIAABEQAAAMADAFQAEAKANAAQAOAAAFgKQACgFAAgMIAAhEIAZAAIAABEQAAASgGALQgKASgeABQgcgBgLgSg");
	this.shape.setTransform(160.9,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg8AAIAAAYIA2AAIAAASIg2AAIAAAfIA+AAIAAAUg");
	this.shape_1.setTransform(145.7,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAhA5IAAhMIAAgKIAAgJIgWBfIgWAAIgVhfIAAAJIAAAKIAABMIgWAAIAAhxIAjAAIATBYIAUhYIAjAAIAABxg");
	this.shape_2.setTransform(133.5,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg8AAIAAAYIA2AAIAAASIg2AAIAAAfIA+AAIAAAUg");
	this.shape_3.setTransform(121.7,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgLA5IAAhdIgiAAIAAgUIBbAAIAAAUIgiAAIAABdg");
	this.shape_4.setTransform(111.2,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AghAyQgNgKAAgSIAXAAQABAIADAEQAGAHANAAQAIAAAGgCQAKgEAAgKQAAgFgFgDQgFgDgLgDIgKgDQgTgEgHgEQgLgGAAgRQAAgQALgKQAMgKAVAAQARAAANAJQANAKABASIgYAAQAAgKgJgEQgGgDgGAAQgKAAgFADQgGAEAAAHQAAAGAGADQADACAMADIASAFQANADAHADQAKAIAAAQQAAAPgMALQgMAKgWAAQgVAAgNgKg");
	this.shape_5.setTransform(101.1,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AgKA5IAAgrIgohGIAdAAIAWAyIAXgyIAbAAIgnBGIAAArg");
	this.shape_6.setTransform(90.4,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AghAyQgNgKAAgSIAXAAQABAIADAEQAGAHANAAQAIAAAGgCQAKgEAAgKQAAgFgFgDQgFgDgLgDIgKgDQgTgEgHgEQgLgGAAgRQAAgQALgKQAMgKAVAAQARAAANAJQANAKABASIgYAAQAAgKgJgEQgGgDgGAAQgKAAgFADQgGAEAAAHQAAAGAGADQADACAMADIASAFQANADAHADQAKAIAAAQQAAAPgMALQgMAKgWAAQgVAAgNgKg");
	this.shape_7.setTransform(79.8,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnkC4Ijfi2IDfi6ISnAAIAAFwIrHABg");
	this.shape_8.setTransform(108.6,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,37.1);


(lib.picto2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(1,1,1).p("AhogtQAaBbBJABQBGAAAohd");
	this.shape.setTransform(27.9,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AmaP4Qi9hKiTiHQiWiIhSixQhXi5AAjMQAAh+AniLQiHBWiUgeQh+gah3hpQhbhRg9htQg8hrgYh7IhGlgQGcBeGmgIQBbgBBmgXQAbgGCpgtQEhhNEvgPQAfgCAXAAQAfAAAkAEQEfAREbBLQCeAqAiAIQBkAWBZABQGmAIGcheIhGFgQgYB7g8BrQg9BshbBSQiGB2iNASQinAViWiBQAsCVAACIQAADNhRC9QhOC1iNCNQiOCMi2BNQi9BQjMAAQjOAAjChLgAs0B1IAtBRQA7BcBQBOQBtBpCHA/QCyBSDRAAQDHAACxhSQCGg/BwhpQBThNA/hcQAhguARgjIg2gbQgXAtgtA8QhaB3h1BUQAKgsgRgyQhIjThnhgQhyhsizAAQi3AAhrBWQhpBShlDgQgdBCAKAzQgwgjgmgmQhLhHg4hXIgqhLgAGSj/QBVAFBIAuIAhgyQhVg3hlgGQhxgHhlA2IAdA1QBMgpBSAAIAXABgAl0k7QhlAGhVA3IAgAyQBJguBUgFQBggHBWAvIAdg1QhagwhjAAIgZABg");
	this.shape_1.setTransform(27.9,16.4,0.15,0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAcAAATATQATAUABAaQgBAbgTAUQgTATgcAAQgaAAgUgTg");
	this.shape_2.setTransform(26.2,18,0.15,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
	this.shape_3.setTransform(30,18,0.15,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1,1).p("AgvgWIAJAWQANAXAXAAQAVAAARgXQAIgKAEgM");
	this.shape_4.setTransform(27.9,15.1,1,1,0,0,0,0.2,-10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgSAQQgCgCALgOQAJgNAHgCQAIgBADAEQADAEgDAHQgEAFgOAHQgMAFgEAAIgCAAg");
	this.shape_5.setTransform(50.4,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(1,1,1).p("AAOgbQAFANgHAaQgHAcgFAAQgDAAgIgeQgHgbAFgKQAGgMAHAAQAJAAAFAMg");
	this.shape_6.setTransform(13.4,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("Ah1A4QgPgLgBgHQgCgIAEgDQAEgDAHADQAHAEAIAQQAHAQgDACIAAABQgDAAgNgKgAB5gRQgDAAgDgSQgCgSAEgGQAEgHAFABQAFAAADAIQACAIgGAQQgGAQgDAAIAAAAg");
	this.shape_7.setTransform(14.9,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21.1,55.9,54.3);


(lib.picto1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AguAvQgTgTgBgcQABgaATgUQAUgUAaAAQAbAAAUAUQATAUAAAaQAAAcgTATQgUAUgbAAQgaAAgUgUg");
	this.shape.setTransform(29.7,18,0.15,0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("ArgMoQlJjhAAmMQAAiAAniJQiHBUiUgcQh+gah3hqQhbhRg9hsQg8hsgYh6IhGlgQGgBeGigIQBbgBBmgYQAcgFCogtQEhhNEvgPQAfgCAXgBQAiABAhAEQEfAREbBMQCeApAiAHQBkAXBZABQGiAIGgheIhGFgQgYB6g8BsQg9BshbBRQiGB3iNASQinATiWiAQAsCUAACKQAAGUkiDmQkPDXm1AAQnBAAkojJgAFtFuIg3FoQCDAJAwhIQAegrgGhHQgHhOgyhFQgbgmgsAAQgKAAgKACgADaGqQg4AegmAQIgLDbQAyAIAuALIAzALIA0lUQggAOg+AfgAm7FmQgXAJgKAjIgCAJQgdBlgGAsQgJBMAfAiQAoAvB3gCIg2lkQgQgDgMAAQgRAAgMAGgAkaLFQAlgCArgHIA7gJIgMjwIg+gdQhNgkgngQgAhdKuQAtgEAnAAQAlAAAjADIAKjDQgjAKgeAAQgsgBhEgagAlXE6QAtAOBmAxQBKAjAlAPQA7AXAigBQAlABA2gWQAegMBCgiQBZguAsgNQBLgVAxAdQg1h4g1hIQg9hShMgpQAwhOBSgsQBMgoBVABIABg8QhmgBhYAvQhlA2g4BiQhBgVhQAAQhxgBhQAdIAMgGQg3hjhmg2QhYgvhlABIAAA8QBVgBBMAoQBTAsAwBPQhHAlg6BHQg4BGg1B1QAVgKAcAAQAgAAAoAMgAuaErQgNAYgFAPQgEAOAAARQAAAaAMARQAMASARAAQASAAANgSQAMgRAAgaQAAgRgEgOQgEgPgNgYQgRgegDgTQgEARgRAggAsiB3QgNAYgFAPQgEAOAAARQAAAaAMARQAMASARAAQASAAANgSQAMgRAAgaQAAgRgEgOQgEgPgNgYQgRgegDgTQgEARgRAggAGCp/QgNAYgFAPQgEAPAAARQAAAZAMASQAMARARAAQASAAANgRQAMgTAAgYQAAgSgEgOQgEgQgNgXQgRgegDgTQgEARgRAgg");
	this.shape_1.setTransform(27.9,15.1,0.15,0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AguAvQgTgTAAgcQAAgaATgUQAUgUAaAAQAbAAAUAUQATAUAAAaQAAAcgTATQgUAUgbAAQgaAAgUgUg");
	this.shape_2.setTransform(25.9,18,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,30.3);


(lib.monoprix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAVA5IgVgnIgWAnIgcAAIAlg5Igjg4IAdAAIATAlIAVglIAbAAIgjA3IAmA6g");
	this.shape.setTransform(158.6,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_1.setTransform(151.1,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAUA5IgBgGIgBgKIAAgLQgBgLgEgEQgDgDgKAAIgWAAIAAAtIgYAAIAAhxIA2AAQAMAAAGADQAHADAEAFQAEAEABAGQADAFAAAHQAAAIgFAIQgDAHgKACQAIADADAGQAEAGgBAMIAAAIIABAKQABAFAEACIAAADgAgWgFIAYAAQAIAAAEgCQAGgEAAgJQAAgLgGgDQgEgCgHAAIgZAAg");
	this.shape_2.setTransform(143.3,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgqA5IAAhxIAvAAQASAAAKAJQAKAIAAATQAAAUgKAHQgKAJgTgBIgWAAIAAAqgAgSgCIAUAAQAIAAAEgEQAFgFAAgJQAAgIgFgEQgEgEgIAAIgUAAg");
	this.shape_3.setTransform(132.3,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_4.setTransform(120.6,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAWA5IgthQIAABQIgWAAIAAhxIAZAAIAsBOIAAhOIAWAAIAABxg");
	this.shape_5.setTransform(108.6,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_6.setTransform(96.6,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AAhA5IAAhMIAAgKIAAgJIgWBfIgWAAIgVhfIAAAJIAAAKIAABMIgWAAIAAhxIAjAAIATBYIAVhYIAiAAIAABxg");
	this.shape_7.setTransform(83.8,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("As6C4IAAlwIWdAAIDZC2IjZC6g");
	this.shape_8.setTransform(131.3,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14.1,241,37);


(lib.lidl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgnA5IAAhxIAYAAIAABdIA4AAIAAAUg");
	this.shape.setTransform(133.8,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgvA5IAAhxIAwAAQAKAAAHACQANAFAHAKQAGAIACAKQACALAAAIQAAAVgJARQgMAVgaAAgAgYAlIAWAAQAQAAAGgRQAEgJAAgLQAAgRgGgKQgFgJgPAAIgWAAg");
	this.shape_1.setTransform(123,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_2.setTransform(114.7,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgoA5IAAhxIAZAAIAABdIA3AAIAAAUg");
	this.shape_3.setTransform(108.1,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApQC4IAAlwIPBAAIDgC8IjgC0g");
	this.shape_4.setTransform(130.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,37);


(lib.leclerc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape.setTransform(152.4,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgEQgEgDgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQAMAAAGADQAHACAEAGQADAEACAFQACAGAAAHQAAAIgDAIQgFAHgJACQAIADADAGQADAGABAMIAAAIIAAALQABAEADACIAAADgAgVgFIAXAAQAIAAAEgCQAHgEAAgJQAAgLgHgDQgEgCgHAAIgYAAg");
	this.shape_1.setTransform(141.1,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg7AAIAAAYIA3AAIAAASIg3AAIAAAfIA+AAIAAAUg");
	this.shape_2.setTransform(130.1,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgnA5IAAhxIAYAAIAABdIA4AAIAAAUg");
	this.shape_3.setTransform(120,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_4.setTransform(108.9,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg7AAIAAAYIA3AAIAAASIg3AAIAAAfIA+AAIAAAUg");
	this.shape_5.setTransform(98.2,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AgnA5IAAhxIAYAAIAABdIA4AAIAAAUg");
	this.shape_6.setTransform(88.1,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AnpC4IjPi7IDPi1ISiAAIAAFwg");
	this.shape_7.setTransform(109.1,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,37);


(lib.intermarché = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg6AAIAAAYIA2AAIAAATIg2AAIAAAdIA9AAIAAAVg");
	this.shape.setTransform(174.5,-23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AAWA5IAAgzIgrAAIAAAzIgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_1.setTransform(163.1,-23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_2.setTransform(151.5,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgDQgEgEgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQAMAAAGADQAHADAEAFQADAEACAGQACAFAAAGQAAAJgDAIQgFAHgJACQAIADADAGQADAGABAMIAAAIIAAAKQABAFADACIAAADgAgVgFIAXAAQAIAAAEgCQAHgDAAgKQAAgKgHgEQgEgCgHAAIgYAAg");
	this.shape_3.setTransform(140.2,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AAcA5IgIgXIgoAAIgIAXIgZAAIAphxIAZAAIApBxgAAOANIgOgrIgOArIAcAAg");
	this.shape_4.setTransform(128.5,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAhA5IAAhMIAAgJIAAgJIgWBeIgVAAIgWheIAAAJIAAAJIAABMIgWAAIAAhxIAjAAIATBZIAUhZIAjAAIAABxg");
	this.shape_5.setTransform(116.1,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AAUA5IgBgGIgBgKIAAgLQgBgLgEgDQgDgEgKAAIgWAAIAAAtIgXAAIAAhxIA1AAQAMAAAGADQAHADAEAFQADAEADAGQACAFAAAGQAAAJgFAIQgDAHgKACQAIADADAGQADAGAAAMIAAAIIABAKQABAFADACIAAADgAgWgFIAYAAQAIAAAEgCQAGgDAAgKQAAgKgGgEQgEgCgHAAIgZAAg");
	this.shape_6.setTransform(103.8,-23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg7AAIAAAYIA1AAIAAATIg1AAIAAAdIA9AAIAAAVg");
	this.shape_7.setTransform(92.8,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0931D").s().p("AgLA5IAAhdIgiAAIAAgUIBbAAIAAAUIgiAAIAABdg");
	this.shape_8.setTransform(82.3,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0931D").s().p("AAWA5IgthQIAABQIgWAAIAAhxIAZAAIArBOIAAhOIAXAAIAABxg");
	this.shape_9.setTransform(71.7,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0931D").s().p("AgKA5IAAhxIAWAAIAABxg");
	this.shape_10.setTransform(63.7,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(2,2,1).p("AgJALIAUgV");
	this.shape_11.setTransform(174,-30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ApcC4Ijli9IDlizIWdAAIAAFwg");
	this.shape_12.setTransform(120.5,-17.3,1,1,0,0,0,11.4,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.2,241,37);


(lib.herta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAcA5IgHgXIgpAAIgIAXIgZAAIAphxIAZAAIApBxgAAOANIgOgrIgNArIAbAAg");
	this.shape.setTransform(141.7,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgLA5IAAhdIgiAAIAAgUIBbAAIAAAUIgiAAIAABdg");
	this.shape_1.setTransform(132.2,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgDQgEgEgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQAMAAAGADQAHACAEAGQADAEACAGQACAFAAAGQAAAJgDAIQgFAHgJACQAIADADAGQADAGABAMIAAAIIAAAKQABAFADACIAAADgAgVgFIAXAAQAIAAAEgCQAHgDAAgKQAAgKgHgEQgEgCgHAAIgYAAg");
	this.shape_2.setTransform(121.7,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg7AAIAAAYIA3AAIAAATIg3AAIAAAeIA+AAIAAAUg");
	this.shape_3.setTransform(110.8,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AAWA5IAAg0IgrAAIAAA0IgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_4.setTransform(99.4,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AllC4Ijji4IDji4IOuAAIAAFwg");
	this.shape_5.setTransform(107.8,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14.2,241,37);


(lib.henaff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgoA5IAAhxIBRAAIAAAUIg5AAIAAAbIAxAAIAAARIgxAAIAAAxg");
	this.shape.setTransform(152.8,152.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgoA5IAAhxIBRAAIAAAUIg5AAIAAAbIAxAAIAAARIgxAAIAAAxg");
	this.shape_1.setTransform(143,152.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAcA5IgIgXIgoAAIgIAXIgZAAIAphxIAZAAIApBxgAAOAOIgOgsIgOAsIAcAAg");
	this.shape_2.setTransform(132,152.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AAWA5IgthQIAABQIgWAAIAAhxIAZAAIArBOIAAhOIAXAAIAABxg");
	this.shape_3.setTransform(120.5,152.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg6AAIAAAZIA2AAIAAASIg2AAIAAAdIA9AAIAAAVg");
	this.shape_4.setTransform(109.6,152.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAWA5IAAgzIgrAAIAAAzIgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_5.setTransform(98.2,152.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApnC4IAAlwIP/AAIDPC2IjPC6g");
	this.shape_6.setTransform(124.8,146.7,1,1,0,0,0,-9.9,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,134.4,241,37);


(lib.fleurymichon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAWA5IgthPIAABPIgWAAIAAhxIAZAAIArBOIAAhOIAXAAIAABxg");
	this.shape.setTransform(185.7,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_1.setTransform(173.7,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAWA5IAAg0IgrAAIAAA0IgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_2.setTransform(161.7,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_3.setTransform(150.1,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_4.setTransform(142.1,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAhA5IAAhMIAAgKIAAgJIgWBfIgWAAIgVhfIAAAJIAAAKIAABMIgWAAIAAhxIAjAAIATBYIAUhYIAjAAIAABxg");
	this.shape_5.setTransform(133.4,31.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AgKA5IAAgrIgohGIAdAAIAWAyIAXgyIAbAAIgnBGIAAArg");
	this.shape_6.setTransform(117.2,31.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgEQgEgDgKAAIgVAAIAAAtIgYAAIAAhxIA1AAQAMAAAGADQAHACAEAGQADAEADAFQABAGAAAHQAAAIgDAIQgFAHgJACQAIADADAGQADAGABAMIAAAIIAAALQABAEADACIAAADgAgVgFIAXAAQAIAAAEgCQAHgDAAgKQAAgKgHgEQgEgCgHAAIgYAAg");
	this.shape_7.setTransform(106.9,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0931D").s().p("AgnAnQgGgJAAgTIAAhFIAZAAIAABFQAAAMADAFQAEAKANAAQAOAAAFgKQACgFAAgMIAAhFIAZAAIAABFQAAATgGAJQgKAUgeAAQgcAAgLgUg");
	this.shape_8.setTransform(95.2,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg8AAIAAAZIA2AAIAAARIg2AAIAAAeIA+AAIAAAVg");
	this.shape_9.setTransform(84.4,31.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0931D").s().p("AgoA5IAAhxIAZAAIAABcIA4AAIAAAVg");
	this.shape_10.setTransform(74.3,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0931D").s().p("AgoA5IAAhxIBRAAIAAAUIg5AAIAAAaIAxAAIAAASIgxAAIAAAxg");
	this.shape_11.setTransform(64.5,31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("As/C5IAAlwIWdAAIDiC6IjiC2g");
	this.shape_12.setTransform(131.8,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,13.8,241,37);


(lib.cora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAcA5IgIgYIgoAAIgIAYIgZAAIAphxIAZAAIApBxgAAOAOIgOgsIgNAsIAbAAg");
	this.shape.setTransform(138.3,-24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AAUA5IgBgGIgCgKIAAgLQAAgLgEgEQgDgDgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQALAAAHADQAGACAFAGQADAEACAFQACAGAAAHQAAAIgEAIQgDAHgKACQAIADADAGQADAGAAAMIAAAIIABALQABAEAEACIAAADgAgVgFIAXAAQAIAAAEgCQAGgDABgKQgBgKgGgEQgEgCgHAAIgYAAg");
	this.shape_1.setTransform(126.9,-24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_2.setTransform(114.8,-24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_3.setTransform(102.7,-24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Al7C4IjGjBIDGivIO9ABIAAFwg");
	this.shape_4.setTransform(109.1,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.5,241,37.1);


(lib.Casino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape.setTransform(145.4,-82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AAWA5IgthQIAABQIgWAAIAAhxIAZAAIAsBOIAAhOIAWAAIAABxg");
	this.shape_1.setTransform(133.4,-82.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgLA5IAAhxIAWAAIAABxg");
	this.shape_2.setTransform(125.4,-82.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AghAyQgNgKAAgSIAXAAQABAIADAEQAGAHANAAQAIAAAGgCQAKgEAAgKQAAgFgFgDQgFgDgLgDIgKgDQgTgEgHgEQgLgGAAgRQAAgQALgKQAMgKAVAAQARAAANAJQANAKABASIgYAAQAAgKgJgEQgGgDgGAAQgKAAgFADQgGAEAAAHQAAAGAGADQADACAMADIASAFQANADAHADQAKAIAAAQQAAAPgMALQgMAKgWAAQgVAAgNgKg");
	this.shape_3.setTransform(117.9,-82.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AAcA5IgHgXIgpAAIgIAXIgZAAIAphxIAZAAIApBxgAAOAOIgOgsIgOAsIAcAAg");
	this.shape_4.setTransform(106.8,-82.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_5.setTransform(95.2,-82.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Am0C4Ijui+IDuiyIRXAAIAAFwg");
	this.shape_6.setTransform(120.5,-76,1,1,0,0,0,11.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-100.9,241,37);


(lib.carrefour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgEQgEgDgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQALAAAHADQAGACAFAGQADAEACAFQACAGAAAHQAAAIgDAIQgEAHgKACQAIADADAGQADAGAAAMIAAAIIABALQABAEAEACIAAADgAgVgFIAXAAQAIAAAEgCQAHgEAAgJQAAgLgHgDQgEgCgHAAIgYAAg");
	this.shape.setTransform(165.9,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgnAoQgGgLAAgSIAAhEIAZAAIAABEQAAAMADAFQAEAKANAAQAOAAAFgKQACgFAAgMIAAhEIAZAAIAABEQAAASgGALQgKASgeABQgcgBgLgSg");
	this.shape_1.setTransform(154.2,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_2.setTransform(142.3,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgoA5IAAhxIBRAAIAAAUIg5AAIAAAaIAxAAIAAATIgxAAIAAAwg");
	this.shape_3.setTransform(131.6,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg8AAIAAAYIA2AAIAAASIg2AAIAAAfIA+AAIAAAUg");
	this.shape_4.setTransform(121.3,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgEQgEgDgKAAIgVAAIAAAtIgZAAIAAhxIA2AAQAMAAAGADQAHACAEAGQADAEACAFQACAGAAAHQAAAIgDAIQgFAHgJACQAIADADAGQADAGABAMIAAAIIAAALQABAEADACIAAADgAgVgFIAXAAQAIAAAEgCQAHgEAAgJQAAgLgHgDQgEgCgHAAIgYAAg");
	this.shape_5.setTransform(110,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AAUA5IgCgGIAAgKIAAgLQgBgLgEgEQgDgDgKAAIgWAAIAAAtIgXAAIAAhxIA1AAQAMAAAGADQAGACAFAGQAEAEACAFQACAGAAAHQAAAIgFAIQgEAHgJACQAIADADAGQAEAGAAAMIAAAIIAAALQABAEADACIAAADgAgWgFIAYAAQAIAAAEgCQAGgEAAgJQAAgLgGgDQgEgCgHAAIgZAAg");
	this.shape_6.setTransform(98.5,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AAcA5IgHgYIgpAAIgIAYIgZAAIAphxIAZAAIApBxgAAOANIgOgrIgNArIAbAAg");
	this.shape_7.setTransform(86.8,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_8.setTransform(75.2,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("As8C4IAAlwIWdAAIDcC3IjcC5g");
	this.shape_9.setTransform(131.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14,241,37);


(lib.bordeauChesnel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AgnA5IAAhxIAYAAIAABcIA4AAIAAAVg");
	this.shape.setTransform(201.5,206.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg6AAIAAAZIA2AAIAAARIg2AAIAAAeIA9AAIAAAVg");
	this.shape_1.setTransform(191.2,206.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAWA5IgthPIAABPIgWAAIAAhxIAZAAIArBOIAAhOIAXAAIAABxg");
	this.shape_2.setTransform(179.8,206.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AghAyQgNgKAAgSIAXAAQABAIADAEQAGAHANAAQAIAAAGgCQAKgEAAgKQAAgFgFgDQgFgDgLgDIgKgDQgTgEgHgEQgLgGAAgRQAAgQALgKQAMgKAVAAQARAAANAJQANAKABASIgYAAQAAgKgJgEQgGgDgGAAQgKAAgFADQgGAEAAAHQAAAGAGADQADACAMADIASAFQANADAHADQAKAIAAAQQAAAPgMALQgMAKgWAAQgVAAgNgKg");
	this.shape_3.setTransform(168.7,206.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgqA5IAAhxIBSAAIAAAUIg6AAIAAAZIA2AAIAAARIg2AAIAAAeIA9AAIAAAVg");
	this.shape_4.setTransform(158.3,206.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAWA5IAAgzIgrAAIAAAzIgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_5.setTransform(146.9,206.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_6.setTransform(135.3,206.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0931D").s().p("AgnAnQgGgJAAgTIAAhFIAZAAIAABFQAAAMADAFQAEAKANAAQAOAAAFgKQACgFAAgMIAAhFIAZAAIAABFQAAATgGAJQgKAUgegBQgcABgLgUg");
	this.shape_7.setTransform(119.4,206.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0931D").s().p("AAcA5IgIgYIgoAAIgIAYIgZAAIAphxIAZAAIApBxgAAOAOIgOgsIgOAsIAcAAg");
	this.shape_8.setTransform(107.9,206.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0931D").s().p("AgqA5IAAhxIBTAAIAAAUIg8AAIAAAZIA2AAIAAARIg2AAIAAAeIA+AAIAAAVg");
	this.shape_9.setTransform(97.1,206.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0931D").s().p("AgvA5IAAhxIAwAAQAKAAAHACQANAEAHALQAGAJACAKQACAKAAAJQAAAVgJAPQgMAWgaAAgAgYAlIAWAAQAQAAAGgRQAEgJAAgLQAAgRgGgKQgFgJgPAAIgWAAg");
	this.shape_10.setTransform(85.9,206.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0931D").s().p("AAUA5IgCgGIgBgKIAAgLQAAgLgDgEQgEgDgKAAIgWAAIAAAtIgXAAIAAhxIA1AAQAMAAAGADQAGACAFAGQAEAEACAFQABAGABAGQAAAJgEAIQgFAHgJACQAIADADAGQAEAGAAAMIAAAIIAAALQABAEADACIAAADgAgWgFIAYAAQAIAAAEgCQAHgDgBgKQABgKgHgEQgEgCgHAAIgZAAg");
	this.shape_11.setTransform(74.3,206.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0931D").s().p("AgkAvQgSgQAAgfQAAgeASgQQANgNAXAAQAYAAANANQASAQAAAeQAAAfgSAQQgNANgYAAQgXAAgNgNgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAIgKQAIgLAAgTQAAgSgIgKQgIgLgOAAQgNAAgIALg");
	this.shape_12.setTransform(62.2,206.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0931D").s().p("AguA5IAAhxIA2AAQAVAAAJAMQAFAHAAAKQAAALgFAGQgDAEgGADQAJADAEAGQAFAHAAAJQAAAKgFAJQgEAFgEAEQgGAEgIABQgHACgJAAgAgXAlIAaAAQAIAAAEgCQAHgEAAgKQAAgKgHgDQgEgBgHgBIgbAAgAgXgLIAaAAQAIAAAEgCQAFgEAAgHQAAgIgGgDQgFgBgJAAIgXAAg");
	this.shape_13.setTransform(50.3,206.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AtUC4Ijei6IDei2IeHABIAAFwg");
	this.shape_14.setTransform(125.1,200.4,1,1,0,0,0,10.1,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,188.1,241,37.1);


(lib.auchan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0931D").s().p("AAWA5IgthQIAABQIgWAAIAAhxIAZAAIArBOIAAhOIAXAAIAABxg");
	this.shape.setTransform(-8.2,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0931D").s().p("AAcA5IgIgYIgoAAIgIAYIgZAAIAphxIAaAAIAoBxgAAOANIgOgrIgOArIAcAAg");
	this.shape_1.setTransform(-19.8,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0931D").s().p("AAWA5IAAg0IgrAAIAAA0IgYAAIAAhxIAYAAIAAAsIArAAIAAgsIAYAAIAABxg");
	this.shape_2.setTransform(-31.4,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("AgjAsQgOgQAAgcQAAgcAQgQQAOgPATAAQAdAAANATQAIALAAALIgYAAQgCgIgEgFQgGgHgNAAQgLAAgHALQgHAKAAASQAAATAHAKQAIAJAKAAQANAAAGgIQAEgFACgIIAYAAQgDASgNAMQgMAMgUAAQgXAAgOgQg");
	this.shape_3.setTransform(-43,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0931D").s().p("AgnAoQgGgLAAgSIAAhEIAZAAIAABEQAAAMADAGQAEAJANAAQAOAAAFgJQACgGAAgMIAAhEIAZAAIAABEQAAASgGALQgKASgeABQgcgBgLgSg");
	this.shape_4.setTransform(-54.5,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0931D").s().p("AAcA5IgIgYIgoAAIgIAYIgZAAIAphxIAZAAIApBxgAAOANIgOgrIgOArIAcAAg");
	this.shape_5.setTransform(-66,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqqC4IAAlwIR8ABIDZC2IjZC6g");
	this.shape_6.setTransform(-29.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.6,14,241,37.1);


(lib.cochonMonoprix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1).p("ADWBLQA7hWBegpQBTglBdAHAoehJQBegHBSAlQBeApA8BW");
	this.shape_2.setTransform(-0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F0931D").ss(10,1).p("ADUBFQA+hTBfglQBTghBcAKAofhBQBdgLBTAiQBeAlA/BT");
	this.shape_3.setTransform(-0.4,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1).p("ADSA/QBBhQBfghQBUgeBbAOAogg6QBbgOBUAeQBfAhBCBQ");
	this.shape_4.setTransform(-0.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F0931D").ss(10,1).p("ADQA6QBEhNBhgdQBUgaBaASAoigyQBagRBVAaQBgAdBFBN");
	this.shape_5.setTransform(-0.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(10,1).p("ADOA1QBHhKBhgZQBWgXBYAWAojgpQBZgWBVAXQBhAZBIBK");
	this.shape_6.setTransform(-0.5,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F0931D").ss(10,1).p("AolggQBZgZBVATQBiAVBKBGADMAwQBKhHBigVQBWgTBYAZ");
	this.shape_7.setTransform(-0.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F0931D").ss(10,1).p("AomgYQBXgcBWAPQBjARBNBEADKArQBNhDBjgRQBWgQBXAd");
	this.shape_8.setTransform(-0.6,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F0931D").ss(10,1).p("AongOQBWggBWALQBkANBRBBADIAnQBQhABjgNQBYgMBVAg");
	this.shape_9.setTransform(-0.7,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0931D").ss(10,1).p("AopgFQBVgkBYAJQBkAJBTA9ADGAjQBTg9BkgJQBYgJBVAk");
	this.shape_10.setTransform(-0.7,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(10,1).p("ADEAfQBWg6BlgFQBZgFBTAmAoqADQBTglBZAEQBlAFBWA6");
	this.shape_11.setTransform(-0.8,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F0931D").ss(10,1).p("ADCAcQBYg3BmgBQBagBBSApAorANQBSgpBZABQBmABBZA3");
	this.shape_12.setTransform(-0.9,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0931D").ss(10,1).p("ADAAYQBcgzBnADQBaACBRAtAotAXQBRgsBbgCQBmgDBcAz");
	this.shape_13.setTransform(-0.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:30,x:-37,y:4.3}},{t:this.shape,p:{rotation:-30,y:3.3}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_1,p:{rotation:0,x:-38.5,y:2.3}},{t:this.shape,p:{rotation:0,y:2.3}}]},1).wait(1));

	// bouche
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F0931D").ss(10,1).p("AG1grQBzg2BIASQBbAYA0CLAr+BoQBiioBoggQBSgYBtA8QA/AkCABa");
	this.shape_14.setTransform(-1.7,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0931D").ss(10,1).p("AFTgoQCJgyBgARQB2AWBSCAAsDBgQB1icB6gdQBegWB2A4QBOAgCKBT");
	this.shape_15.setTransform(-1.6,65.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F0931D").ss(10,1).p("ADxgkQCeguB4APQCSAUBwB2AsIBYQCIiPCNgaQBpgVB/AzQBdAeCUBM");
	this.shape_16.setTransform(-1.6,65.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F0931D").ss(10,1).p("ACQghQCzgqCQAOQCsATCPBqAsNBQQCbiBCggZQB0gSCIAuQBsAbCcBF");
	this.shape_17.setTransform(-1.5,65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F0931D").ss(10,1).p("AAvgdQDIgmCpANQDHAQCsBgAsSBIQCuh0CygWQCAgRCSAqQB6AYCnA+");
	this.shape_18.setTransform(-1.5,64.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F0931D").ss(10,1).p("AgxgaQDbghDBALQDiAODKBVAsWBAQDBhnDEgUQCLgPCbAmQAcAEAeAGQByAXCNAr");
	this.shape_19.setTransform(-1.4,64.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F0931D").ss(10,1).p("Ag3ggQC9gSCxAIQD9ANDoBKAsbA4QDUhaDXgRQCVgNCkAgQAAAAABAAQCXATC7AwAiSgWQAtgGAugE");
	this.shape_20.setTransform(-1.3,64.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F0931D").ss(10,1).p("AgugiQCbgHCWAFQEYALEGBAAsgAwQDnhNDqgOQCMgKCVATQAXADAXAEQClARDFAoAjzgTQBkgKBhgF");
	this.shape_21.setTransform(-1.3,64.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F0931D").ss(10,1).p("AgXgfQAkAEAmAFQC2AODPAhAgXgfQBzgCBzAEQEzAJEkA0AslAoQD6hAD8gMQCJgHCPAMAlVgQQCigMCcgD");
	this.shape_22.setTransform(-1.2,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F0931D").ss(10,1).p("AAMgZQAtADAuAFQDGALDZAaAAMgZQBIAABGACQFPAHFCAqAsqAgQENgzEPgJQCMgGCOAJAm3gMQDmgNDdAA");
	this.shape_23.setTransform(-1.1,63.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F0931D").ss(10,1).p("ABZgRQAiACAiACQDUAJDjATABZgRQAHAAAHAAQFpAFFfAfAoYgJQA0gCA0gBQBhgGBigDQCigFCkAJAsuAYQC/gZC/gLQEJgIEAAD");
	this.shape_24.setTransform(-1.1,63.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F0931D").ss(10,1).p("AC0gJQAPAAAPABQDjAGDtAMAlCgLQC9gCC3ACQBBABBBABQFCAFE+ARAlCgLQA7gBA6gBQDAgEDBAIAp6gFQCdgECbgCAszAQQD5gTD4gI");
	this.shape_25.setTransform(-1,63.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F0931D").ss(10,1).p("AjkgFQAcgBAcAAQDYgCDcAFQAXAAAYABQCnACCnACQAvABAvABQAGAAAHAAQAlABAkABArbgCQCogCCoAAQA3AAA4gBQAcAAAcAAQBzAABxABQCbAACcACAs4AIQDWgIDXgE");
	this.shape_26.setTransform(-1,63.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F0931D").ss(10,1).p("As9AAIZ7AA");
	this.shape_27.setTransform(-0.9,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// groin
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_28.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(14));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


(lib.cochonLidl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bouche
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9A3QAggxBAgpQB/hVCXAhQBPASA0AhQAbASAtApQAlAlAgAOQAuAVBKAAQBKAAAxgbQAcgQAsgsQArgpAhgRQA2gbBRAAQCYAAB3BWQA7AsAdAs");
	this.shape_2.setTransform(0.9,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// groin
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_3.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


(lib.cochonHerta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1).p("ADWBLQA7hWBegpQBTglBdAHAoehJQBegHBSAlQBeApA8BW");
	this.shape_2.setTransform(-0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F0931D").ss(10,1).p("ADUBFQA+hTBfglQBTghBcAKAofhBQBdgLBTAiQBeAlA/BT");
	this.shape_3.setTransform(-0.4,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1).p("ADSA/QBBhQBfghQBUgeBbAOAogg6QBbgOBUAeQBfAhBCBQ");
	this.shape_4.setTransform(-0.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F0931D").ss(10,1).p("ADQA6QBEhNBhgdQBUgaBaASAoigyQBagRBVAaQBgAdBFBN");
	this.shape_5.setTransform(-0.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(10,1).p("ADOA1QBHhKBhgZQBWgXBYAWAojgpQBZgWBVAXQBhAZBIBK");
	this.shape_6.setTransform(-0.5,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F0931D").ss(10,1).p("AolggQBZgZBVATQBiAVBKBGADMAwQBKhHBigVQBWgTBYAZ");
	this.shape_7.setTransform(-0.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F0931D").ss(10,1).p("AomgYQBXgcBWAPQBjARBNBEADKArQBNhDBjgRQBWgQBXAd");
	this.shape_8.setTransform(-0.6,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F0931D").ss(10,1).p("AongOQBWggBWALQBkANBRBBADIAnQBQhABjgNQBYgMBVAg");
	this.shape_9.setTransform(-0.7,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0931D").ss(10,1).p("AopgFQBVgkBYAJQBkAJBTA9ADGAjQBTg9BkgJQBYgJBVAk");
	this.shape_10.setTransform(-0.7,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(10,1).p("ADEAfQBWg6BlgFQBZgFBTAmAoqADQBTglBZAEQBlAFBWA6");
	this.shape_11.setTransform(-0.8,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F0931D").ss(10,1).p("ADCAcQBYg3BmgBQBagBBSApAorANQBSgpBZABQBmABBZA3");
	this.shape_12.setTransform(-0.9,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0931D").ss(10,1).p("ADAAYQBcgzBnADQBaACBRAtAotAXQBRgsBbgCQBmgDBcAz");
	this.shape_13.setTransform(-0.9,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F0931D").ss(10,1).p("AC+ALQBggvBnAJQBaAHBPAxAotAdQBPgxBagHQBngJBgAv");
	this.shape_14.setTransform(-1,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0931D").ss(10,1).p("AC/AGQBggtBmALQBbAJBNAyAosAfQBOgyBagJQBngLBfAt");
	this.shape_15.setTransform(-1,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F0931D").ss(10,1).p("AC/ACQBggsBnANQBaAKBMA0AorAhQBNg0BZgKQBngNBgAs");
	this.shape_16.setTransform(-1,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F0931D").ss(10,1).p("AC/gBQBhgrBmAOQBZAMBMA1AoqAjQBMg1BZgNQBmgNBhAr");
	this.shape_17.setTransform(-1,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F0931D").ss(10,1).p("AC/gFQBigqBlAQQBaANBLA3AoqAlQBLg3BagNQBlgQBiAq");
	this.shape_18.setTransform(-1,2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F0931D").ss(10,1).p("AC/gJQBjgoBlARQBZAPBKA4AopAnQBKg4BZgPQBlgRBjAo");
	this.shape_19.setTransform(-1,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F0931D").ss(10,1).p("ADAgOQBjgmBkATQBZAQBJA5AooAoQBJg5BZgQQBlgTBiAm");
	this.shape_20.setTransform(-1,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F0931D").ss(10,1).p("ADAgSQBkglBkAVQBYASBIA6AonAqQBIg6BYgSQBlgVBjAl");
	this.shape_21.setTransform(-1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:30,x:-37,y:4.3}},{t:this.shape,p:{rotation:-30,y:3.3}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_1,p:{rotation:0,x:-38.5,y:2.3}},{t:this.shape,p:{rotation:0,y:2.3}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// bouche
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F0931D").ss(10,1).p("AG1grQBzg2BIASQBbAYA0CLAr+BoQBiioBoggQBSgYBtA8QA/AkCABa");
	this.shape_22.setTransform(-1.7,65.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F0931D").ss(10,1).p("AFTgoQCJgyBgARQB2AWBSCAAsDBgQB1icB6gdQBegWB2A4QBOAgCKBT");
	this.shape_23.setTransform(-1.6,65.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F0931D").ss(10,1).p("ADxgkQCeguB4APQCSAUBwB2AsIBYQCIiPCNgaQBpgVB/AzQBdAeCUBM");
	this.shape_24.setTransform(-1.6,65.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F0931D").ss(10,1).p("ACQghQCzgqCQAOQCsATCPBqAsNBQQCbiBCggZQB0gSCIAuQBsAbCcBF");
	this.shape_25.setTransform(-1.5,65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F0931D").ss(10,1).p("AAvgdQDIgmCpANQDHAQCsBgAsSBIQCuh0CygWQCAgRCSAqQB6AYCnA+");
	this.shape_26.setTransform(-1.5,64.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F0931D").ss(10,1).p("AgxgaQDbghDBALQDiAODKBVAsWBAQDBhnDEgUQCLgPCbAmQAcAEAeAGQByAXCNAr");
	this.shape_27.setTransform(-1.4,64.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F0931D").ss(10,1).p("Ag3ggQC9gSCxAIQD9ANDoBKAsbA4QDUhaDXgRQCVgNCkAgQAAAAABAAQCXATC7AwAiSgWQAtgGAugE");
	this.shape_28.setTransform(-1.3,64.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F0931D").ss(10,1).p("AgugiQCbgHCWAFQEYALEGBAAsgAwQDnhNDqgOQCMgKCVATQAXADAXAEQClARDFAoAjzgTQBkgKBhgF");
	this.shape_29.setTransform(-1.3,64.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F0931D").ss(10,1).p("AgXgfQAkAEAmAFQC2AODPAhAgXgfQBzgCBzAEQEzAJEkA0AslAoQD6hAD8gMQCJgHCPAMAlVgQQCigMCcgD");
	this.shape_30.setTransform(-1.2,64);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F0931D").ss(10,1).p("AAMgZQAtADAuAFQDGALDZAaAAMgZQBIAABGACQFPAHFCAqAsqAgQENgzEPgJQCMgGCOAJAm3gMQDmgNDdAA");
	this.shape_31.setTransform(-1.1,63.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F0931D").ss(10,1).p("ABZgRQAiACAiACQDUAJDjATABZgRQAHAAAHAAQFpAFFfAfAoYgJQA0gCA0gBQBhgGBigDQCigFCkAJAsuAYQC/gZC/gLQEJgIEAAD");
	this.shape_32.setTransform(-1.1,63.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F0931D").ss(10,1).p("AC0gJQAPAAAPABQDjAGDtAMAlCgLQC9gCC3ACQBBABBBABQFCAFE+ARAlCgLQA7gBA6gBQDAgEDBAIAp6gFQCdgECbgCAszAQQD5gTD4gI");
	this.shape_33.setTransform(-1,63.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F0931D").ss(10,1).p("AjkgFQAcgBAcAAQDYgCDcAFQAXAAAYABQCnACCnACQAvABAvABQAGAAAHAAQAlABAkABArbgCQCogCCoAAQA3AAA4gBQAcAAAcAAQBzAABxABQCbAACcACAs4AIQDWgIDXgE");
	this.shape_34.setTransform(-1,63.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F0931D").ss(10,1).p("As9AAIZ7AA");
	this.shape_35.setTransform(-0.9,63.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F0931D").ss(10,1).p("As3gJQDCAJDHAGQDWAGDYAAQDWAADUgGQDKgGDEgK");
	this.shape_36.setTransform(-0.9,62.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F0931D").ss(10,1).p("AsxgVQC8AVDIAMQDVAMDYAAQDWAADTgMQDLgMC+gX");
	this.shape_37.setTransform(-0.9,62.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F0931D").ss(10,1).p("AsrggQC4AgDJASQDTASDXAAQDXAADRgSQDLgSC5gj");
	this.shape_38.setTransform(-1,62.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F0931D").ss(10,1).p("AsmgrQC0ArDJAYQDSAXDXABQDZAADOgYQDMgYC0gv");
	this.shape_39.setTransform(-1,62.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F0931D").ss(10,1).p("Asgg3QCvA3DLAeQDPAdDXABQDZAADNgdQDMgfCvg7");
	this.shape_40.setTransform(-1,62.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F0931D").ss(10,1).p("AsahCQCqBCDLAkQDPAkDXAAQDZAADLgkQDNgkCphH");
	this.shape_41.setTransform(-1,61.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F0931D").ss(10,1).p("AsUhNQCkBNDNAqQDNAqDXAAQDaAADJgpQDOgrCjhT");
	this.shape_42.setTransform(-1,61.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F0931D").ss(10,1).p("AsOhYQCgBYDNAwQDLAwDYAAQDaAADHgvQDOgxCehf");
	this.shape_43.setTransform(-1.1,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	// groin
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_44.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(22));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


(lib.cochonHenaff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1).p("ADWBLQA7hWBegpQBTglBdAHAoehJQBegHBSAlQBeApA8BW");
	this.shape_2.setTransform(-0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F0931D").ss(10,1).p("ADUBFQA+hTBfglQBTghBcAKAofhBQBdgLBTAiQBeAlA/BT");
	this.shape_3.setTransform(-0.4,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1).p("ADSA/QBBhQBfghQBUgeBbAOAogg6QBbgOBUAeQBfAhBCBQ");
	this.shape_4.setTransform(-0.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F0931D").ss(10,1).p("ADQA6QBEhNBhgdQBUgaBaASAoigyQBagRBVAaQBgAdBFBN");
	this.shape_5.setTransform(-0.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(10,1).p("ADOA1QBHhKBhgZQBWgXBYAWAojgpQBZgWBVAXQBhAZBIBK");
	this.shape_6.setTransform(-0.5,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F0931D").ss(10,1).p("AolggQBZgZBVATQBiAVBKBGADMAwQBKhHBigVQBWgTBYAZ");
	this.shape_7.setTransform(-0.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F0931D").ss(10,1).p("AomgYQBXgcBWAPQBjARBNBEADKArQBNhDBjgRQBWgQBXAd");
	this.shape_8.setTransform(-0.6,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F0931D").ss(10,1).p("AongOQBWggBWALQBkANBRBBADIAnQBQhABjgNQBYgMBVAg");
	this.shape_9.setTransform(-0.7,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0931D").ss(10,1).p("AopgFQBVgkBYAJQBkAJBTA9ADGAjQBTg9BkgJQBYgJBVAk");
	this.shape_10.setTransform(-0.7,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(10,1).p("ADEAfQBWg6BlgFQBZgFBTAmAoqADQBTglBZAEQBlAFBWA6");
	this.shape_11.setTransform(-0.8,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F0931D").ss(10,1).p("ADCAcQBYg3BmgBQBagBBSApAorANQBSgpBZABQBmABBZA3");
	this.shape_12.setTransform(-0.9,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0931D").ss(10,1).p("ADAAYQBcgzBnADQBaACBRAtAotAXQBRgsBbgCQBmgDBcAz");
	this.shape_13.setTransform(-0.9,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F0931D").ss(10,1).p("AC+AMQBfgvBnAIQBbAHBPAxAotAdQBPgxBagHQBogIBfAv");
	this.shape_14.setTransform(-1,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0931D").ss(10,1).p("AC/AHQBfgtBnAKQBbAIBOAzAotAfQBPgzBagIQBngKBgAt");
	this.shape_15.setTransform(-1,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F0931D").ss(10,1).p("AC+AEQBhgsBmALQBaAKBOAzAosAgQBOgzBagKQBmgLBgAs");
	this.shape_16.setTransform(-1,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F0931D").ss(10,1).p("AC/AAQBhgrBmANQBaALBMA1AorAiQBNg1BZgLQBmgNBhAr");
	this.shape_17.setTransform(-1,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:30,x:-37,y:4.3}},{t:this.shape,p:{rotation:-30,y:3.3}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_1,p:{rotation:0,x:-38.5,y:2.3}},{t:this.shape,p:{rotation:0,y:2.3}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// bouche
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F0931D").ss(10,1).p("AG1grQBzg2BIASQBbAYA0CLAr+BoQBiioBoggQBSgYBtA8QA/AkCABa");
	this.shape_18.setTransform(-1.7,65.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F0931D").ss(10,1).p("AFTgoQCJgyBgARQB2AWBSCAAsDBgQB1icB6gdQBegWB2A4QBOAgCKBT");
	this.shape_19.setTransform(-1.6,65.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F0931D").ss(10,1).p("ADxgkQCeguB4APQCSAUBwB2AsIBYQCIiPCNgaQBpgVB/AzQBdAeCUBM");
	this.shape_20.setTransform(-1.6,65.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F0931D").ss(10,1).p("ACQghQCzgqCQAOQCsATCPBqAsNBQQCbiBCggZQB0gSCIAuQBsAbCcBF");
	this.shape_21.setTransform(-1.5,65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F0931D").ss(10,1).p("AAvgdQDIgmCpANQDHAQCsBgAsSBIQCuh0CygWQCAgRCSAqQB6AYCnA+");
	this.shape_22.setTransform(-1.5,64.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F0931D").ss(10,1).p("AgxgaQDbghDBALQDiAODKBVAsWBAQDBhnDEgUQCLgPCbAmQAcAEAeAGQByAXCNAr");
	this.shape_23.setTransform(-1.4,64.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F0931D").ss(10,1).p("Ag3ggQC9gSCxAIQD9ANDoBKAsbA4QDUhaDXgRQCVgNCkAgQAAAAABAAQCXATC7AwAiSgWQAtgGAugE");
	this.shape_24.setTransform(-1.3,64.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F0931D").ss(10,1).p("AgugiQCbgHCWAFQEYALEGBAAsgAwQDnhNDqgOQCMgKCVATQAXADAXAEQClARDFAoAjzgTQBkgKBhgF");
	this.shape_25.setTransform(-1.3,64.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F0931D").ss(10,1).p("AgXgfQAkAEAmAFQC2AODPAhAgXgfQBzgCBzAEQEzAJEkA0AslAoQD6hAD8gMQCJgHCPAMAlVgQQCigMCcgD");
	this.shape_26.setTransform(-1.2,64);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F0931D").ss(10,1).p("AAMgZQAtADAuAFQDGALDZAaAAMgZQBIAABGACQFPAHFCAqAsqAgQENgzEPgJQCMgGCOAJAm3gMQDmgNDdAA");
	this.shape_27.setTransform(-1.1,63.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F0931D").ss(10,1).p("ABZgRQAiACAiACQDUAJDjATABZgRQAHAAAHAAQFpAFFfAfAoYgJQA0gCA0gBQBhgGBigDQCigFCkAJAsuAYQC/gZC/gLQEJgIEAAD");
	this.shape_28.setTransform(-1.1,63.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F0931D").ss(10,1).p("AC0gJQAPAAAPABQDjAGDtAMAlCgLQC9gCC3ACQBBABBBABQFCAFE+ARAlCgLQA7gBA6gBQDAgEDBAIAp6gFQCdgECbgCAszAQQD5gTD4gI");
	this.shape_29.setTransform(-1,63.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F0931D").ss(10,1).p("AjkgFQAcgBAcAAQDYgCDcAFQAXAAAYABQCnACCnACQAvABAvABQAGAAAHAAQAlABAkABArbgCQCogCCoAAQA3AAA4gBQAcAAAcAAQBzAABxABQCbAACcACAs4AIQDWgIDXgE");
	this.shape_30.setTransform(-1,63.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F0931D").ss(10,1).p("As9AAIZ7AA");
	this.shape_31.setTransform(-0.9,63.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F0931D").ss(10,1).p("As3gKQDBAKDGAGQDYAFDYABQDXAADWgGQDJgGDCgL");
	this.shape_32.setTransform(-0.9,62.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F0931D").ss(10,1).p("AsxgVQC8AVDHAMQDWAMDYAAQDXAADUgMQDKgMC9gX");
	this.shape_33.setTransform(-0.9,62.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F0931D").ss(10,1).p("AsrggQC4AgDIASQDTARDYABQDYAADRgSQDLgSC4gj");
	this.shape_34.setTransform(-1,62.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F0931D").ss(10,1).p("AsmgrQC0ArDJAYQDSAXDXABQDZAADOgYQDMgYC0gv");
	this.shape_35.setTransform(-1,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// groin
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_36.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(18));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


(lib.cochonFleuy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1).p("ADWBLQA7hWBegpQBTglBdAHAoehJQBegHBSAlQBeApA8BW");
	this.shape_2.setTransform(-0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F0931D").ss(10,1).p("ADUBFQA+hTBfglQBTghBcAKAofhBQBdgLBTAiQBeAlA/BT");
	this.shape_3.setTransform(-0.4,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1).p("ADSA/QBBhQBfghQBUgeBbAOAogg6QBbgOBUAeQBfAhBCBQ");
	this.shape_4.setTransform(-0.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F0931D").ss(10,1).p("ADQA6QBEhNBggdQBVgaBaASAoigxQBagSBUAaQBhAdBEBN");
	this.shape_5.setTransform(-0.4,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(10,1).p("ADNA1QBIhKBhgZQBVgXBZAWAojgpQBZgVBVAWQBhAZBIBK");
	this.shape_6.setTransform(-0.5,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F0931D").ss(10,1).p("AokggQBXgZBWATQBiAVBLBGADLAwQBLhHBhgVQBXgTBXAZ");
	this.shape_7.setTransform(-0.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F0931D").ss(10,1).p("AomgYQBXgcBWAPQBjARBNBEADKArQBNhDBjgRQBWgQBXAd");
	this.shape_8.setTransform(-0.6,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F0931D").ss(10,1).p("AongOQBWggBWALQBkANBRBBADIAnQBQhABjgNQBYgMBVAg");
	this.shape_9.setTransform(-0.7,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// bouche
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9A3QAggxBAgpQB/hVCXAhQBPASA0AhQAbASAtApQAlAlAgAOQAuAVBKAAQBKAAAxgbQAcgQAsgsQArgpAhgRQA2gbBRAAQCYAAB3BWQA7AsAdAs");
	this.shape_10.setTransform(0.9,64.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9AtQAggtBAgoQB/hPCXAiQBPARA0AiQAbARAtAqQAlAkAgAOQAuAVBKAAQBKAAAxgbQAcgPAsgsQArgpAhgRQA2gbBRAAQCYAAB3BQQA7ApAdAp");
	this.shape_11.setTransform(0.9,64.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9AhQAggpBAglQB/hKCXAiQBPARA0AiQAbARAtAqQAlAkAgAOQAuAVBKAAQBKAAAxgbQAcgPAsgsQArgpAhgRQA2gbBRAAQCYAAB3BLQA7AlAdAm");
	this.shape_12.setTransform(0.9,64.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9AWQAggnBAgiQB/hDCXAhQBPASA0AhQAbASAtApQAlAlAgAOQAuAVBKAAQBKAAAxgbQAcgQAsgsQArgpAhgRQA2gbBRAAQCYAAB3BHQA7AhAdAj");
	this.shape_13.setTransform(0.9,64.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9ALQAggkBAgfQCAg+CWAiQBPARA0AiQAbARAtAqQAlAkAgAOQAuAVBKAAQBKAAAxgbQAcgPAsgsQArgpAhgRQA2gbBRAAQCYAAB3BAQA7AeAdAh");
	this.shape_14.setTransform(0.9,64.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9AAQAgghBAgcQCAg4CWAhQBPASA0AhQAbASAtApQAlAlAgAOQAuAVBKAAQBKAAAxgbQAcgQAsgsQArgpAhgRQA2gbBRAAQCYAAB3A7QA7AbAdAd");
	this.shape_15.setTransform(0.9,64.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9gKQAgggBAgZQCAgyCWAhQBPASA0AhQAbASAtApQAlAlAgAOQAuAVBKAAQBKAAAxgbQAcgQAsgsQArgpAhgRQA2gbBRAAQCYAAB3A1QA7AYAdAb");
	this.shape_16.setTransform(0.9,64.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9gWQAggcBAgWQCAgtCWAiQBPARA0AiQAbARAtAqQAlAkAgAOQAuAVBKAAQBKAAAxgbQAcgPAsgsQArgpAhgRQA2gbBRAAQCYAAB3AvQA7AXAdAV");
	this.shape_17.setTransform(0.9,64.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F0931D").ss(10,1,1).p("Ar9ggQAggaBAgTQCAgnCWAiQBPARA0AiQAbARAtAqQAlAkAgAOQAuAVBKAAQBKAAAxgbQAcgPAsgsQArgpAhgRQA2gbBRAAQCYAAB3ApQA7AUAdAT");
	this.shape_18.setTransform(0.9,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// groin
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_19.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(9));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


(lib.cochonCarrefour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0931D").ss(10,1).p("AC4AcQhQgwhbgGQhmgHheAw");
	this.shape.setTransform(36.5,3.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0931D").ss(10,1).p("Ai3AcQBQgwBbgGQBmgHBeAw");
	this.shape_1.setTransform(-37,4.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0931D").ss(10,1).p("ADWBLQA7hWBegpQBTglBdAHAoehJQBegHBSAlQBeApA8BW");
	this.shape_2.setTransform(-0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F0931D").ss(10,1).p("ADUBFQA+hTBfglQBTghBcAKAofhBQBdgLBTAiQBeAlA/BT");
	this.shape_3.setTransform(-0.4,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0931D").ss(10,1).p("ADSA/QBBhQBfghQBUgeBbAOAogg6QBbgOBUAeQBfAhBCBQ");
	this.shape_4.setTransform(-0.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F0931D").ss(10,1).p("ADQA6QBEhNBhgdQBUgaBaASAoigyQBagRBVAaQBgAdBFBN");
	this.shape_5.setTransform(-0.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0931D").ss(10,1).p("ADOA1QBHhKBhgZQBWgXBYAWAojgpQBZgWBVAXQBhAZBIBK");
	this.shape_6.setTransform(-0.5,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F0931D").ss(10,1).p("AolggQBZgZBVATQBiAVBKBGADMAwQBKhHBigVQBWgTBYAZ");
	this.shape_7.setTransform(-0.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F0931D").ss(10,1).p("AomgYQBXgcBWAPQBjARBNBEADKArQBNhDBjgRQBWgQBXAd");
	this.shape_8.setTransform(-0.6,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F0931D").ss(10,1).p("AongOQBWggBWALQBkANBRBBADIAnQBQhABjgNQBYgMBVAg");
	this.shape_9.setTransform(-0.7,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0931D").ss(10,1).p("AopgFQBVgkBYAJQBkAJBTA9ADGAjQBTg9BkgJQBYgJBVAk");
	this.shape_10.setTransform(-0.7,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F0931D").ss(10,1).p("ADEAfQBWg6BlgFQBZgFBTAmAoqADQBTglBZAEQBlAFBWA6");
	this.shape_11.setTransform(-0.8,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F0931D").ss(10,1).p("ADCAcQBYg3BmgBQBagBBSApAorANQBSgpBZABQBmABBZA3");
	this.shape_12.setTransform(-0.9,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0931D").ss(10,1).p("ADAAYQBcgzBnADQBaACBRAtAotAXQBRgsBbgCQBmgDBcAz");
	this.shape_13.setTransform(-0.9,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F0931D").ss(10,1).p("AC+AKQBgguBnAJQBaAHBPAyAotAeQBPgyBagHQBngJBgAu");
	this.shape_14.setTransform(-1,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0931D").ss(10,1).p("AC/AFQBggsBmAKQBbAKBNAyAosAfQBOgyBagKQBngKBfAs");
	this.shape_15.setTransform(-1,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F0931D").ss(10,1).p("AC/ABQBggrBnAMQBaALBMA0AorAhQBMg0BagLQBngMBgAq");
	this.shape_16.setTransform(-1,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F0931D").ss(10,1).p("AC/gCQBhgrBmAOQBaANBLA1AoqAjQBLg1BagNQBmgOBhAr");
	this.shape_17.setTransform(-1,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F0931D").ss(10,1).p("AC/gHQBigpBmAQQBZAPBKA2AopAlQBKg3BZgOQBmgQBiAp");
	this.shape_18.setTransform(-1,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F0931D").ss(10,1).p("ADAgLQBignBlASQBZAQBJA4AooAnQBJg4BZgQQBlgSBjAo");
	this.shape_19.setTransform(-1,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F0931D").ss(10,1).p("ADAgQQBjglBlATQBYASBIA5AonApQBIg5BYgSQBlgUBjAm");
	this.shape_20.setTransform(-1,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F0931D").ss(10,1).p("ADAgUQBkgkBkAWQBYATBHA7AomAsQBHg7BYgTQBkgWBkAj");
	this.shape_21.setTransform(-1,3.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F0931D").ss(10,1).p("ADAgZQBkgiBkAYQBYAVBGA8AolAuQBGg8BYgVQBjgYBlAi");
	this.shape_22.setTransform(-1,3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F0931D").ss(10,1).p("ADAgdQBlggBkAZQBXAXBFA9AokAwQBFg9BXgXQBkgZBlAf");
	this.shape_23.setTransform(-1,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F0931D").ss(10,1).p("ADAgiQBmgeBjAcQBXAYBEA/AojAyQBEg+BXgZQBjgbBmAe");
	this.shape_24.setTransform(-1,3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F0931D").ss(10,1).p("ADAgmQBngcBjAdQBWAaBDBAAoiA1QBDhABWgaQBjgdBnAc");
	this.shape_25.setTransform(-1,3.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F0931D").ss(10,1).p("ADBgqQBngaBiAfQBWAbBCBCAohA3QBChBBWgcQBigfBnAb");
	this.shape_26.setTransform(-1,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F0931D").ss(10,1).p("ADBguQBogZBiAhQBWAdBABDAogA6QBAhDBWgdQBighBoAY");
	this.shape_27.setTransform(-1,3.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F0931D").ss(10,1).p("ADBgyQBpgXBhAjQBWAfA/BEAofA8QA/hEBWgfQBhgiBpAW");
	this.shape_28.setTransform(-1,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:30,x:-37,y:4.3}},{t:this.shape,p:{rotation:-30,y:3.3}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_1,p:{rotation:0,x:-38.5,y:2.3}},{t:this.shape,p:{rotation:0,y:2.3}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_1,p:{rotation:-17,x:-38.5,y:2.2}},{t:this.shape,p:{rotation:17,y:2.3}}]},1).wait(1));

	// bouche
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F0931D").ss(10,1).p("AG1grQBzg2BIASQBbAYA0CLAr+BoQBiioBoggQBSgYBtA8QA/AkCABa");
	this.shape_29.setTransform(-1.7,65.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F0931D").ss(10,1).p("AFTgoQCJgyBgARQB2AWBSCAAsDBgQB1icB6gdQBegWB2A4QBOAgCKBT");
	this.shape_30.setTransform(-1.6,65.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F0931D").ss(10,1).p("ADxgkQCeguB4APQCSAUBwB2AsIBYQCIiPCNgaQBpgVB/AzQBdAeCUBM");
	this.shape_31.setTransform(-1.6,65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F0931D").ss(10,1).p("ACQghQCzgqCQAOQCsATCPBqAsNBQQCbiBCggZQB0gSCIAuQBsAbCcBF");
	this.shape_32.setTransform(-1.5,65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F0931D").ss(10,1).p("AAvgdQDIgmCpANQDHAQCsBgAsSBIQCuh0CygWQCAgRCSAqQB6AYCnA+");
	this.shape_33.setTransform(-1.5,64.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F0931D").ss(10,1).p("AgxgaQDbghDBALQDiAODKBVAsWBAQDBhnDEgUQCLgPCbAmQAcAEAeAGQByAXCNAr");
	this.shape_34.setTransform(-1.4,64.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F0931D").ss(10,1).p("Ag3ggQC9gSCxAIQD9ANDoBKAsbA4QDUhaDXgRQCVgNCkAgQAAAAABAAQCXATC7AwAiSgWQAtgGAugE");
	this.shape_35.setTransform(-1.3,64.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F0931D").ss(10,1).p("AgugiQCbgHCWAFQEYALEGBAAsgAwQDnhNDqgOQCMgKCVATQAXADAXAEQClARDFAoAjzgTQBkgKBhgF");
	this.shape_36.setTransform(-1.3,64.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F0931D").ss(10,1).p("AgXgfQAkAEAmAFQC2AODPAhAgXgfQBzgCBzAEQEzAJEkA0AslAoQD6hAD8gMQCJgHCPAMAlVgQQCigMCcgD");
	this.shape_37.setTransform(-1.2,64);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F0931D").ss(10,1).p("AAMgZQAtADAuAFQDGALDZAaAAMgZQBIAABGACQFPAHFCAqAsqAgQENgzEPgJQCMgGCOAJAm3gMQDmgNDdAA");
	this.shape_38.setTransform(-1.1,63.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F0931D").ss(10,1).p("ABZgRQAiACAiACQDUAJDjATABZgRQAHAAAHAAQFpAFFfAfAoYgJQA0gCA0gBQBhgGBigDQCigFCkAJAsuAYQC/gZC/gLQEJgIEAAD");
	this.shape_39.setTransform(-1.1,63.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F0931D").ss(10,1).p("AC0gJQAPAAAPABQDjAGDtAMAlCgLQC9gCC3ACQBBABBBABQFCAFE+ARAlCgLQA7gBA6gBQDAgEDBAIAp6gFQCdgECbgCAszAQQD5gTD4gI");
	this.shape_40.setTransform(-1,63.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F0931D").ss(10,1).p("AjkgFQAcgBAcAAQDYgCDcAFQAXAAAYABQCnACCnACQAvABAvABQAGAAAHAAQAlABAkABArbgCQCogCCoAAQA3AAA4gBQAcAAAcAAQBzAABxABQCbAACcACAs4AIQDWgIDXgE");
	this.shape_41.setTransform(-1,63.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F0931D").ss(10,1).p("As9AAIZ7AA");
	this.shape_42.setTransform(-0.9,63.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F0931D").ss(10,1).p("As3gJQDIAJDNAGQDRAGDRAAQDQAADPgGQDPgGDKgK");
	this.shape_43.setTransform(-0.9,62.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F0931D").ss(10,1).p("AsxgVQDCAVDNAMQDQALDSABQDSAADNgMQDQgMDDgX");
	this.shape_44.setTransform(-1,62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F0931D").ss(10,1).p("AsrggQC8AgDNASQDPASDTAAQDTAADNgSQDPgSC9gj");
	this.shape_45.setTransform(-1,62.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F0931D").ss(10,1).p("AsmgrQC3ArDNAYQDOAYDUAAQDVAADMgYQDPgYC3gv");
	this.shape_46.setTransform(-1,62.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F0931D").ss(10,1).p("Asgg3QCxA3DOAeQDNAdDVABQDWAADKgdQDPgfCxg7");
	this.shape_47.setTransform(-1,62.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F0931D").ss(10,1).p("AsahCQCrBCDOAkQDMAjDWABQDXAADKgkQDPgkCqhH");
	this.shape_48.setTransform(-1,61.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F0931D").ss(10,1).p("AsUhNQCmBNDNAqQDMApDXABQDYAADJgpQDOgrCkhT");
	this.shape_49.setTransform(-1.1,61.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F0931D").ss(10,1).p("AsOhYQCgBYDNAwQDLAwDYAAQDaAADHgvQDOgxCehf");
	this.shape_50.setTransform(-1.1,61.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F0931D").ss(10,1).p("AsJhjQCbBjDNA2QDLA2DYAAQDcAADGg1QDOg3CYhr");
	this.shape_51.setTransform(-1.1,61.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F0931D").ss(10,1).p("AsDhuQCVBuDOA9QDJA7DaAAQDdABDEg8QDOg9CSh3");
	this.shape_52.setTransform(-1.1,61.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F0931D").ss(10,1).p("Ar9h5QCPB5DOBDQDIBBDbAAQDeABDEhBQDOhFCLiC");
	this.shape_53.setTransform(-1.1,60.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F0931D").ss(10,1).p("Ar3iEQCKCEDNBJQDIBGDcABQDfABDDhIQDNhKCFiP");
	this.shape_54.setTransform(-1.2,60.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F0931D").ss(10,1).p("AryiQQCECQDPBPQDGBMDdABQDhABDChNQDNhRB/ib");
	this.shape_55.setTransform(-1.2,60.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F0931D").ss(10,1).p("ArsibQB+CbDOBVQDGBTDeAAQDiABDBhTQDNhXB5in");
	this.shape_56.setTransform(-1.2,60.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F0931D").ss(10,1).p("ArmimQB5CmDOBbQDFBZDfABQDjAADAhZQDMheBziy");
	this.shape_57.setTransform(-1.2,60.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F0931D").ss(10,1).p("ArgixQBzCxDOBhQDEBfDgABQDlAAC/hfQDMhkBsi+");
	this.shape_58.setTransform(-1.2,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(1));

	// groin
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F0931D").s().p("Al2EhQiwhPBKimQBljeBphUQBrhXC3AAQCzABByBsQBnBiBIDRQAyCUirBLQiIA7jjABQjygBiIg8gABkizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATgAiUizQgUAUAAAbQAAAdAUATQAUATAbABQAcgBAUgTQATgTAAgdQAAgbgTgUQgUgTgcAAQgbAAgUATg");
	this.shape_59.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(30));

	// Calque 4
	this.instance = new lib.tete();
	this.instance.setTransform(0,20,1,1,0,0,0,186.1,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-81,372.3,202);


// stage content:



(lib.cochonv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		/* Evénement MouseClick
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction dans laquelle vous pouvez ajouter votre propre code personnalisé.
		
		Instructions :
		1. Ajoutez votre code personnalisé sur une nouvelle ligne sous la ligne indiquant "// Début de votre code personnalisé" ci-après.
		Le code s’exécute lorsque vous cliquez sur l’occurrence de symbole.
		*/
		
		this.carrefour.addEventListener("click", fl_MouseClickHandlerCarrefour.bind(this));
		
		function fl_MouseClickHandlerCarrefour()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealCarrefour').foundation('open');
			// Fin de votre code personnalisé
		}
		
		/* Evénement MouseClick
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction dans laquelle vous pouvez ajouter votre propre code personnalisé.
		
		Instructions :
		1. Ajoutez votre code personnalisé sur une nouvelle ligne sous la ligne indiquant "// Début de votre code personnalisé" ci-après.
		Le code s’exécute lorsque vous cliquez sur l’occurrence de symbole.
		*/
		
		this.herta.addEventListener("click", fl_MouseClickHandlerHerta.bind(this));
		
		function fl_MouseClickHandlerHerta()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealHerta').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.henaff.addEventListener("click", fl_MouseClickHandlerHenaff.bind(this));
		
		function fl_MouseClickHandlerHenaff()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealHenaff').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.monoprix.addEventListener("click", fl_MouseClickHandlerMonoprix.bind(this));
		
		function fl_MouseClickHandlerMonoprix()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealAuchan').foundation('open');
			// Fin de votre code personnalisé
		}

		this.monoprix_1.addEventListener("click", fl_MouseClickHandlerMonoprix_1.bind(this));
		
		function fl_MouseClickHandlerMonoprix_1()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealMonoprix').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.intermarche.addEventListener("click", fl_MouseClickHandlerIntermarche.bind(this));
		
		function fl_MouseClickHandlerIntermarche()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealIntermarche').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.fleurymichon.addEventListener("click", fl_MouseClickHandlerFleuryMichon.bind(this));
		
		function fl_MouseClickHandlerFleuryMichon()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealFleuryMichon').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.cora.addEventListener("click", fl_MouseClickHandlerCora.bind(this));
		
		function fl_MouseClickHandlerCora()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealCora').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.lidl.addEventListener("click", fl_MouseClickHandlerLidl.bind(this));
		
		function fl_MouseClickHandlerLidl()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealLidl').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.leclerc.addEventListener("click", fl_MouseClickHandlerLeclerc.bind(this));
		
		function fl_MouseClickHandlerLeclerc()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealLeclerc').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.systemeU.addEventListener("click", fl_MouseClickHandlerSystemeU.bind(this));
		
		function fl_MouseClickHandlerSystemeU()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealSystemeU').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.casino.addEventListener("click", fl_MouseClickHandlerCasino.bind(this));
		
		function fl_MouseClickHandlerCasino()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealCasino').foundation('open');
			// Fin de votre code personnalisé
		}
		
		this.bordeauChesnel.addEventListener("click", fl_MouseClickHandlerBordeauChesnel.bind(this));
		
		function fl_MouseClickHandlerBordeauChesnel()
		{
			// Début de votre code personnalisé
			// Ce code d’exemple affiche les mots "L’utilisateur a cliqué sur la souris" dans le panneau de sortie.
			//alert("L’utilisateur a cliqué sur la souris");
			$('#revealBordeauChesnel').foundation('open');
			// Fin de votre code personnalisé
		}
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(119).call(this.frame_149).wait(1));

	// Calque 1 copy 10
	this.systemeU = new lib.systemeU();
	this.systemeU.setTransform(535.3,551.8,0.8,0.8,0,0,0,120.4,24.7);
	this.systemeU._off = true;

	this.timeline.addTween(cjs.Tween.get(this.systemeU).wait(149).to({_off:false},0).wait(1));

	// Calque 1 copy 8
	this.leclerc = new lib.leclerc();
	this.leclerc.setTransform(414.8,551.8,0.8,0.8,0,0,0,120.4,24.7);
	this.leclerc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leclerc).wait(149).to({_off:false},0).wait(1));

	// Calque 1 copy 9
	this.lidl = new lib.lidl();
	this.lidl.setTransform(194.8,551.8,0.8,0.8,0,0,0,120.4,24.7);
	this.lidl._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lidl).wait(149).to({_off:false},0).wait(1));

	// picto cochon copy 6
	this.instance = new lib.cochonLidl();
	this.instance.setTransform(300,547,0.15,0.15,0,0,0,0,20);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).wait(1));

	// Calque 1 copy 6
	this.cora = new lib.cora();
	this.cora.setTransform(406.4,585.8,0.8,0.8,0,0,0,120.4,24.7);
	this.cora._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cora).wait(111).to({_off:false},0).wait(1).to({regX:109.1,regY:-24,x:397.3,y:542.2},0).wait(1).to({y:537.5},0).wait(1).to({y:532.9},0).wait(1).to({y:528.3},0).wait(1).to({y:523.6},0).wait(1).to({y:519},0).wait(1).to({y:514.4},0).wait(1).to({y:509.7},0).wait(1).to({y:505.1},0).wait(1).to({y:500.5},0).wait(1).to({y:495.8},0).wait(1).to({y:491.2},0).wait(1).to({y:486.6},0).wait(1).to({y:481.9},0).wait(1).to({y:477.3},0).wait(1).to({y:472.7},0).wait(1).to({y:468},0).wait(1).to({y:463.4},0).wait(1).to({y:458.8},0).wait(1).to({y:454.1},0).wait(1).to({y:449.5},0).wait(1).to({y:444.9},0).wait(1).to({y:440.2},0).wait(1).to({y:435.6},0).wait(1).to({y:431},0).wait(1).to({y:426.3},0).wait(1).to({y:421.7},0).wait(1).to({y:417.1},0).wait(1).to({y:412.4},0).wait(1).to({y:407.8},0).wait(9));

	// Calque 1 copy 7
	this.fleurymichon = new lib.fleurymichon();
	this.fleurymichon.setTransform(176.4,540.8,0.8,0.8,0,0,0,120.4,24.7);
	this.fleurymichon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fleurymichon).wait(111).to({_off:false},0).wait(1).to({regX:131.8,regY:32.2,x:185.5,y:542.1},0).wait(1).to({y:537.5},0).wait(1).to({y:532.8},0).wait(1).to({y:528.2},0).wait(1).to({y:523.6},0).wait(1).to({y:518.9},0).wait(1).to({y:514.3},0).wait(1).to({y:509.7},0).wait(1).to({y:505},0).wait(1).to({y:500.4},0).wait(1).to({y:495.8},0).wait(1).to({y:491.1},0).wait(1).to({y:486.5},0).wait(1).to({y:481.9},0).wait(1).to({y:477.2},0).wait(1).to({y:472.6},0).wait(1).to({y:468},0).wait(1).to({y:463.3},0).wait(1).to({y:458.7},0).wait(1).to({y:454.1},0).wait(1).to({y:449.4},0).wait(1).to({y:444.8},0).wait(1).to({y:440.2},0).wait(1).to({y:435.5},0).wait(1).to({y:430.9},0).wait(1).to({y:426.3},0).wait(1).to({y:421.6},0).wait(1).to({y:417},0).wait(1).to({y:412.4},0).wait(1).to({y:407.7},0).wait(9));

	// picto cochon copy 5
	this.instance_1 = new lib.cochonFleuy();
	this.instance_1.setTransform(300,547,0.15,0.15,0,0,0,0,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111).to({_off:false},0).wait(1).to({y:542.4},0).wait(1).to({y:537.9},0).wait(1).to({y:533.3},0).wait(1).to({y:528.7},0).wait(1).to({y:524.2},0).wait(1).to({y:519.6},0).wait(1).to({y:515},0).wait(1).to({y:510.5},0).wait(1).to({y:505.9},0).wait(1).to({y:501.3},0).wait(1).to({y:496.8},0).wait(1).to({y:492.2},0).wait(1).to({y:487.7},0).wait(1).to({y:483.1},0).wait(1).to({y:478.5},0).wait(1).to({y:474},0).wait(1).to({y:469.4},0).wait(1).to({y:464.8},0).wait(1).to({y:460.3},0).wait(1).to({y:455.7},0).wait(1).to({y:451.1},0).wait(1).to({y:446.6},0).wait(1).to({y:442},0).wait(1).to({y:437.4},0).wait(1).to({y:432.9},0).wait(1).to({y:428.3},0).wait(1).to({y:423.7},0).wait(1).to({y:419.2},0).wait(1).to({y:414.6},0).wait(1).to({y:410},0).wait(9));

	// Calque 1 copy 12
	this.casino = new lib.Casino();
	this.casino.setTransform(552.3,634.5,0.8,0.8,0,0,0,120.4,24.7);
	this.casino._off = true;

	this.timeline.addTween(cjs.Tween.get(this.casino).wait(80).to({_off:false},0).wait(1).to({regX:109.4,regY:-82.5,x:543.5,y:541.5},0).wait(1).to({y:534.3},0).wait(1).to({y:527.1},0).wait(1).to({y:519.9},0).wait(1).to({y:512.7},0).wait(1).to({y:505.5},0).wait(1).to({y:498.3},0).wait(1).to({y:491.1},0).wait(1).to({y:483.9},0).wait(1).to({y:476.7},0).wait(1).to({y:469.5},0).wait(1).to({y:462.3},0).wait(1).to({y:455.1},0).wait(1).to({y:447.9},0).wait(1).to({y:440.7},0).wait(1).to({y:433.5},0).wait(1).to({y:426.3},0).wait(1).to({y:419.1},0).wait(1).to({y:411.9},0).wait(1).to({y:404.6},0).wait(1).to({y:397.4},0).wait(1).to({y:390.2},0).wait(1).to({y:383},0).wait(1).to({y:375.8},0).wait(1).to({y:368.6},0).wait(1).to({y:361.4},0).wait(1).to({y:354.2},0).wait(1).to({y:347},0).wait(1).to({y:339.8},0).wait(1).to({y:332.6},0).wait(40));

	// Calque 1 copy 5
	this.intermarche = new lib.intermarché();
	this.intermarche.setTransform(426.4,587.5,0.8,0.8,0,0,0,120.4,24.7);
	this.intermarche._off = true;

	this.timeline.addTween(cjs.Tween.get(this.intermarche).wait(80).to({_off:false},0).wait(1).to({regX:109,regY:-23.7,x:417.2,y:541.6},0).wait(1).to({y:534.4},0).wait(1).to({y:527.2},0).wait(1).to({y:520},0).wait(1).to({y:512.8},0).wait(1).to({y:505.6},0).wait(1).to({y:498.4},0).wait(1).to({y:491.1},0).wait(1).to({y:483.9},0).wait(1).to({y:476.7},0).wait(1).to({y:469.5},0).wait(1).to({y:462.3},0).wait(1).to({y:455.1},0).wait(1).to({y:447.9},0).wait(1).to({y:440.7},0).wait(1).to({y:433.5},0).wait(1).to({y:426.3},0).wait(1).to({y:419.1},0).wait(1).to({y:411.9},0).wait(1).to({y:404.7},0).wait(1).to({y:397.5},0).wait(1).to({y:390.3},0).wait(1).to({y:383},0).wait(1).to({y:375.8},0).wait(1).to({y:368.6},0).wait(1).to({y:361.4},0).wait(1).to({y:354.2},0).wait(1).to({y:347},0).wait(1).to({y:339.8},0).wait(1).to({y:332.6},0).wait(40));

	// Calque 1 copy 13
	this.monoprix = new lib.auchan();
	this.monoprix.setTransform(176.4,541.5,0.8,0.8,0,0,0,120.4,24.7);
	this.monoprix._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monoprix).wait(80).to({_off:false},0).wait(1).to({regX:-29.2,regY:32.5,x:56.7,y:540.6},0).wait(1).to({y:533.4},0).wait(1).to({y:526.2},0).wait(1).to({y:519.1},0).wait(1).to({y:511.9},0).wait(1).to({y:504.7},0).wait(1).to({y:497.5},0).wait(1).to({y:490.4},0).wait(1).to({y:483.2},0).wait(1).to({y:476},0).wait(1).to({y:468.8},0).wait(1).to({y:461.7},0).wait(1).to({y:454.5},0).wait(1).to({y:447.3},0).wait(1).to({y:440.1},0).wait(1).to({y:433},0).wait(1).to({y:425.8},0).wait(1).to({y:418.6},0).wait(1).to({y:411.5},0).wait(1).to({y:404.3},0).wait(1).to({y:397.1},0).wait(1).to({y:389.9},0).wait(1).to({y:382.8},0).wait(1).to({y:375.6},0).wait(1).to({y:368.4},0).wait(1).to({y:361.2},0).wait(1).to({y:354.1},0).wait(1).to({y:346.9},0).wait(1).to({y:339.7},0).wait(1).to({y:332.5},0).wait(40));

	// Calque 1 copy 4
	this.monoprix_1 = new lib.monoprix();
	this.monoprix_1.setTransform(176.4,541.5,0.8,0.8,0,0,0,120.4,24.7);
	this.monoprix_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monoprix_1).wait(80).to({_off:false},0).wait(1).to({regX:131.3,regY:32.5,x:185.1,y:540.6},0).wait(1).to({y:533.4},0).wait(1).to({y:526.2},0).wait(1).to({y:519.1},0).wait(1).to({y:511.9},0).wait(1).to({y:504.7},0).wait(1).to({y:497.5},0).wait(1).to({y:490.4},0).wait(1).to({y:483.2},0).wait(1).to({y:476},0).wait(1).to({y:468.8},0).wait(1).to({y:461.7},0).wait(1).to({y:454.5},0).wait(1).to({y:447.3},0).wait(1).to({y:440.1},0).wait(1).to({y:433},0).wait(1).to({y:425.8},0).wait(1).to({y:418.6},0).wait(1).to({y:411.5},0).wait(1).to({y:404.3},0).wait(1).to({y:397.1},0).wait(1).to({y:389.9},0).wait(1).to({y:382.8},0).wait(1).to({y:375.6},0).wait(1).to({y:368.4},0).wait(1).to({y:361.2},0).wait(1).to({y:354.1},0).wait(1).to({y:346.9},0).wait(1).to({y:339.7},0).wait(1).to({y:332.5},0).wait(40));

	// picto cochon copy 4
	this.instance_2 = new lib.cochonMonoprix();
	this.instance_2.setTransform(300,547,0.15,0.15,0,0,0,0,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).wait(1).to({y:539.9},0).wait(1).to({y:532.7},0).wait(1).to({y:525.6},0).wait(1).to({y:518.4},0).wait(1).to({y:511.3},0).wait(1).to({y:504.1},0).wait(1).to({y:497},0).wait(1).to({y:489.8},0).wait(1).to({y:482.7},0).wait(1).to({y:475.5},0).wait(1).to({y:468.4},0).wait(1).to({y:461.2},0).wait(1).to({y:454.1},0).wait(1).to({y:446.9},0).wait(1).to({y:439.8},0).wait(1).to({y:432.7},0).wait(1).to({y:425.5},0).wait(1).to({y:418.4},0).wait(1).to({y:411.2},0).wait(1).to({y:404.1},0).wait(1).to({y:396.9},0).wait(1).to({y:389.8},0).wait(1).to({y:382.6},0).wait(1).to({y:375.5},0).wait(1).to({y:368.3},0).wait(1).to({y:361.2},0).wait(1).to({y:354},0).wait(1).to({y:346.9},0).wait(1).to({y:339.7},0).wait(1).to({y:332.6},0).wait(40));

	// Calque 1 copy 11
	this.bordeauChesnel = new lib.bordeauChesnel();
	this.bordeauChesnel.setTransform(440.3,401.1,0.8,0.8,0,0,0,120.4,24.7);
	this.bordeauChesnel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bordeauChesnel).wait(56).to({_off:false},0).wait(1).to({regX:115,regY:206.6,x:436,y:535.3},0).wait(1).to({y:523.9},0).wait(1).to({y:512.6},0).wait(1).to({y:501.2},0).wait(1).to({y:489.9},0).wait(1).to({y:478.6},0).wait(1).to({y:467.2},0).wait(1).to({y:455.9},0).wait(1).to({y:444.5},0).wait(1).to({y:433.2},0).wait(1).to({y:421.8},0).wait(1).to({y:410.5},0).wait(1).to({y:399.2},0).wait(1).to({y:387.8},0).wait(1).to({y:376.5},0).wait(1).to({y:365.1},0).wait(1).to({y:353.8},0).wait(1).to({y:342.5},0).wait(1).to({y:331.1},0).wait(1).to({y:319.8},0).wait(1).to({y:308.4},0).wait(1).to({y:297.1},0).wait(1).to({y:285.7},0).wait(71));

	// Calque 1 copy 3
	this.henaff = new lib.henaff();
	this.henaff.setTransform(191.4,444.1,0.8,0.8,0,0,0,120.4,24.7);
	this.henaff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.henaff).wait(56).to({_off:false},0).wait(1).to({regX:134.7,regY:152.9,x:202.8,y:535.3},0).wait(1).to({y:523.9},0).wait(1).to({y:512.5},0).wait(1).to({y:501.1},0).wait(1).to({y:489.7},0).wait(1).to({y:478.3},0).wait(1).to({y:466.9},0).wait(1).to({y:455.6},0).wait(1).to({y:444.2},0).wait(1).to({y:432.8},0).wait(1).to({y:421.4},0).wait(1).to({y:410},0).wait(1).to({y:398.6},0).wait(1).to({y:387.2},0).wait(1).to({y:375.8},0).wait(1).to({y:364.5},0).wait(1).to({y:353.1},0).wait(1).to({y:341.7},0).wait(1).to({y:330.3},0).wait(1).to({y:318.9},0).wait(1).to({y:307.5},0).wait(1).to({y:296.1},0).wait(1).to({y:284.7},0).wait(71));

	// picto cochon copy 3
	this.instance_3 = new lib.cochonHenaff();
	this.instance_3.setTransform(300,547,0.15,0.15,0,0,0,0,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).wait(1).to({y:535.6},0).wait(1).to({y:524.3},0).wait(1).to({y:512.9},0).wait(1).to({y:501.5},0).wait(1).to({y:490.1},0).wait(1).to({y:478.8},0).wait(1).to({y:467.4},0).wait(1).to({y:456},0).wait(1).to({y:444.6},0).wait(1).to({y:433.3},0).wait(1).to({y:421.9},0).wait(1).to({y:410.5},0).wait(1).to({y:399.1},0).wait(1).to({y:387.8},0).wait(1).to({y:376.4},0).wait(1).to({y:365},0).wait(1).to({y:353.6},0).wait(1).to({y:342.3},0).wait(1).to({y:330.9},0).wait(1).to({y:319.5},0).wait(1).to({y:308.1},0).wait(1).to({y:296.8},0).wait(1).to({x:300.1,y:285.4},0).wait(71));

	// Calque 1 copy 2
	this.herta = new lib.herta();
	this.herta.setTransform(406.4,542.8,0.8,0.8,0,0,0,120.4,24.7);
	this.herta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.herta).wait(31).to({_off:false},0).wait(1).to({regX:107.8,regY:32.6,x:396.3,y:535.9},0).wait(1).to({y:522.7},0).wait(1).to({y:509.4},0).wait(1).to({y:496.2},0).wait(1).to({y:483},0).wait(1).to({y:469.8},0).wait(1).to({y:456.5},0).wait(1).to({y:443.3},0).wait(1).to({y:430.1},0).wait(1).to({y:416.9},0).wait(1).to({y:403.7},0).wait(1).to({y:390.4},0).wait(1).to({y:377.2},0).wait(1).to({y:364},0).wait(1).to({y:350.8},0).wait(1).to({y:337.6},0).wait(1).to({y:324.3},0).wait(1).to({y:311.1},0).wait(1).to({y:297.9},0).wait(1).to({y:284.7},0).wait(1).to({y:271.4},0).wait(1).to({y:258.2},0).wait(1).to({y:245},0).wait(96));

	// picto cochon copy 2
	this.cochonHerta = new lib.cochonHerta();
	this.cochonHerta.setTransform(300,547,0.15,0.15,0,0,0,0,20);
	this.cochonHerta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cochonHerta).wait(31).to({_off:false},0).wait(1).to({y:533.9},0).wait(1).to({y:520.7},0).wait(1).to({y:507.6},0).wait(1).to({y:494.5},0).wait(1).to({y:481.3},0).wait(1).to({y:468.2},0).wait(1).to({y:455.1},0).wait(1).to({y:442},0).wait(1).to({y:428.8},0).wait(1).to({y:415.7},0).wait(1).to({y:402.6},0).wait(1).to({y:389.4},0).wait(1).to({y:376.3},0).wait(1).to({y:363.2},0).wait(1).to({y:350},0).wait(1).to({y:336.9},0).wait(1).to({y:323.8},0).wait(1).to({y:310.7},0).wait(1).to({y:297.5},0).wait(1).to({y:284.4},0).wait(1).to({y:271.3},0).wait(1).to({y:258.1},0).wait(1).to({y:245},0).wait(96));

	// Calque 1 copy
	this.carrefour = new lib.carrefour();
	this.carrefour.setTransform(176.4,541.2,0.8,0.8,0,0,0,120.4,24.7);

	this.timeline.addTween(cjs.Tween.get(this.carrefour).wait(1).to({regX:131.5,regY:32.5,x:185.2,y:534.5},0).wait(1).to({y:521.5},0).wait(1).to({y:508.6},0).wait(1).to({y:495.6},0).wait(1).to({y:482.7},0).wait(1).to({y:469.7},0).wait(1).to({y:456.8},0).wait(1).to({y:443.8},0).wait(1).to({y:430.9},0).wait(1).to({y:417.9},0).wait(1).to({y:405},0).wait(1).to({y:392},0).wait(1).to({y:379.1},0).wait(1).to({y:366.1},0).wait(1).to({y:353.2},0).wait(1).to({y:340.2},0).wait(1).to({y:327.3},0).wait(1).to({y:314.3},0).wait(1).to({y:301.4},0).wait(1).to({y:288.4},0).wait(1).to({y:275.5},0).wait(1).to({y:262.5},0).wait(1).to({y:249.6},0).wait(1).to({y:236.6},0).wait(1).to({y:223.7},0).wait(1).to({y:210.7},0).wait(1).to({y:197.8},0).wait(1).to({y:184.8},0).wait(1).to({y:171.9},0).wait(1).to({y:158.9},0).wait(120));

	// picto cochon copy
	this.instance_4 = new lib.cochonCarrefour();
	this.instance_4.setTransform(300,547,0.15,0.15,0,0,0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:534.1},0).wait(1).to({y:521.2},0).wait(1).to({y:508.3},0).wait(1).to({y:495.4},0).wait(1).to({y:482.5},0).wait(1).to({y:469.6},0).wait(1).to({y:456.7},0).wait(1).to({y:443.8},0).wait(1).to({y:430.9},0).wait(1).to({y:418},0).wait(1).to({y:405.1},0).wait(1).to({y:392.2},0).wait(1).to({y:379.3},0).wait(1).to({y:366.4},0).wait(1).to({y:353.5},0).wait(1).to({y:340.6},0).wait(1).to({y:327.7},0).wait(1).to({y:314.8},0).wait(1).to({y:301.9},0).wait(1).to({y:289},0).wait(1).to({y:276.1},0).wait(1).to({y:263.2},0).wait(1).to({y:250.3},0).wait(1).to({y:237.4},0).wait(1).to({y:224.5},0).wait(1).to({y:211.6},0).wait(1).to({y:198.7},0).wait(1).to({y:185.8},0).wait(1).to({y:172.9},0).wait(1).to({y:160},0).wait(120));

	// pictos
	this.instance_5 = new lib.picto2();
	this.instance_5.setTransform(300,52.8,1.31,1.31,0,0,0,27.9,15.2);

	this.instance_6 = new lib.picto1();
	this.instance_6.setTransform(300,547.6,1,1,0,0,0,27.9,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(150));

	// jauge
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)"],[0,0.055],0.2,432.4,0.2,-217.6).s().p("EgBZAh/MgAGhC3IBVhGIBkBGMAAFBC3g");
	this.shape.setTransform(299.9,408,1,1,0,0,0,0,107.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(380.1,288.3,256.6,557.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
