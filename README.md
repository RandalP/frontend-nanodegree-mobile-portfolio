## Website Performance Optimization portfolio project

Udacity Front-End Web Developer Nanodegress [Project 4 Rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2735848561/m-2686388535)

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Demo Site
The fully optimized version of the portfolio built using Gulp is at [Optimized Portfolio](https://ranadlp.github.io/frontend-nanodegree-mobile-portfolio/site). This can be built from the source by executing 'gulp default' in order to optimize images, inline CSS, Javascript, and minify code into the site directory.

For reference, the minimally optimized version is at [Portfolio](https://ranadlp.github.io/frontend-nanodegree-mobile-portfolio).


### Pizza Optimisations
#### Moving Pizzas
* Created object to cache information about moving pizzas
* Added use of animation frames to debounce the scrolling performance
* Used CSS "invisible" class and used it to hide moving pizzas which were below screen and cached lastPizza value (updated by resize events)
* Modified for-loop in updatePositions() to only iterate over pizzas which could be onscreen
  * Added check if pizza was actually going to end up onscreen before setting style.left
  * Toggled "invisible" CSS class on pizzas depending on whether they should be on-screen
* Movable pizzas are added to a document fragment before being added to document in one step to improve loading performance.
  * Pizza.png was resized to match fixed height * width which was also moved from generated HTML into CSS

#### Resizing Pizzas
* Converted generated pizzas to use SVG instead of PNG format
* changePizzaSizes()
  * Resizing is achieved by replacing a new CSS rule added to views/css/style.css instead of setting style.width directly on each element.
  * Retrieves the children of randomPizzas once rather than calling querySelectorAll() on every line within a loop.
  * The width of the div and a single pizza container are calculated once and passed to determineDx(), rather than being recalculated for each container
* Resizable pizzas are added to a document fragment before being added to document in one step to improve loading performance.

### Extra Websites Consulted
[Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
[PNG & JPEG Optimization](https://tinypng.com)
[JPEG resizing](http://www.picresize.com/results)
[Converting PNG to SVG](http://quasimondo.com/ZorroSVG)
[Optimizing font requests](https://developers.google.com/fonts/docs/getting_started#Optimizing_Requests)
[Web Optimization Tips](http://www.hongkiat.com/blog/ultimate-guide-to-web-optimization-tips-best-practices)
[Optimizing Javascript](https://developers.google.com/speed/articles/optimizing-javascript)
[Inserting HTML elements with Javascript](http://stackoverflow.com/questions/814564/inserting-html-elements-with-javascript)
[Faster Animations](http://www.html5rocks.com/en/tutorials/speed/animations)
[Adding Rules to Stylesheets with Javascript](http://davidwalsh.name/add-rules-stylesheets)
[Gulp.js](http://gulpjs.com/)
[Building With Gulp](http://www.smashingmagazine.com/2014/06/11/building-with-gulp)