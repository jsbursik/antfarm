## 5/24/22

I finally got 1 ant to move. It's inefficient, I feel like there has to be a better way to turn any 45 degree (n * PI / 4) angle into movement. Also, yeah, javascript uses radians.

I need to figure out how to make movement more fluid. I need multiple entities moving at different rates (velocity), you should be able to track each individual. The first step is probably speeding up animation and moving less than 10px at a time.

Ants need to exist in an array at some point. They need to dynamically grow (push) and die (pop).

I added NodeJS/ExpressJS because CORS doesn't like me importing javascript and I wanted the Ant class to be separate. I seem to have forgotten how to just send files straight up using `req.path`, not sure what I was missing. Anyways, it's very much hacked together now.

## 5/26/22

I reworked the drawing process. Instead of using `setInterval()` to call the draw command, I'm using `windows.requestAnimationFrame(callback)` to move forward. 

The app now uses an `init()` and `Draw()` lifecyle. Init should be used to set anything up before drawing, then Draw will call itself forever.

Ants seem to really love the right side of the screen, so I think my cos/sin "hack" is not working. Ant movement is going to be a pain in the ass, I can feel it. Right now they don't move in an interesting way, but I'm having trouble thinking of a way to make it interesting. 

It seems at any given point an ant can only move in 8 given directions: The 4 cardinal directions and the 45 degrees between each of those (just because of how pixel grids work). **It would be nice**<sup>1</sup> to have the illusion of more than just those directions, for smooth turning at least.

[1] This is probably going to get said too often.