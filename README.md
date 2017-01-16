
# Recursion

Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.

Consider the following function:

```javascript
var eat = function(meal){
  console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');
  }
}
```

Which produces this output:

```javascript
eat(['soup', 'potatoes', 'fish']);
// => meal before bite: ["soup", "potatoes", "fish"]
// => now eating fish
// => meal before bite: ["soup", "potatoes"]
// => now eating potatoes
// => meal before bite: ["soup"]
// => now eating soup
// => done with the meal!
```
You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.

In this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)

* Note: The tests in this repo are written using [Jasmine](http://ronfenolio.com/blog/2016/01/parsing-json/), a JavaScript testing framework.

(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them. When we reimplement new browser functionality in older browsers, it's called a "polyfill".)

### Bare minimum Requirements
 
* - [ ] Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass.
* - [ ] Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass.
 * You should use document.body, element.childNodes, and element.classList

### Advanced Content
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

* - [ ] Replace parseJSON with your own function in src/parseJSON.js, and make the specs pass.
 * - [ ] Use a recursive descent parser.
 * - [ ] Resources:
 * One of Hack Reactor's amazing graduates, Ron Fenolio, wrote a [fabulous blog] (http://ronfenolio.com/blog/2016/01/parsing-json/) post after wrestling with this very prompt
 * Note: This is a lot of work, and you should expect (and look forward) to bumping up against several conceptual hurdles
