## 5/24/22

I finally got 1 ant to move. It's inefficient, I feel like there has to be a better way to turn any 45 degree (n * PI / 4) angle into movement. Also, yeah, javascript uses radians.

I need to figure out how to make movement more fluid. I need multiple entities moving at different rates (velocity), you should be able to track each individual. The first step is probably speeding up animation and moving less than 10px at a time.

Ants need to exist in an array at some point. They need to dynamically grow (push) and die (pop).

I added NodeJS/ExpressJS because CORS doesn't like me importing javascript and I wanted the Ant class to be separate. I seem to have forgotten how to just send files straight up using `req.path`, not sure what I was missing. Anyways, it's very much hacked together now.

## 5/26/22

I reworked the drawing process. Instead of using `setInterval()` to call the draw command, I'm using `windows.requestAnimationFrame(callback)` to move forward. 

The app now uses an `init()` and `Draw()` lifecycle. Init should be used to set anything up before drawing, then Draw will call itself forever.

Ants seem to really love the right side of the screen, so I think my cos/sin "hack" is not working. Ant movement is going to be a pain in the ass, I can feel it. Right now they don't move in an interesting way, but I'm having trouble thinking of a way to make it interesting. 

It seems at any given point an ant can only move in 8 given directions: The 4 cardinal directions and the 45 degrees between each of those (just because of how pixel grids work). **It would be nice**<sup>1</sup> to have the illusion of more than just those directions, for smooth turning at least.

[1] This is probably going to get said too often.

## Literally minutes later

REQUIRE TURNING! Right now, ants are just selecting random angles every time they move. If I just set them with an angle on creation, then part of their `move()` functionality is just choosing the direction to turn. I'm thinking ±45° (in radians of course) from the direction they are currently facing WITH the option of just staying straight on course.

## Slighty later

This has now been implemented, it makes it a bit less jittery. For now random movement is fine, but I would like it to seem like the ants are walking somewhere for a reason.

At first, an ant should probably wander around but once it finds things maybe it should remember where they were? That way it could start path-forming. I'm choosing to use kinesis to drive the ant's behavior because I don't want them to just *know* where something is. I want them to first find it, realize it's good or bad, then *maybe* remember it for later? The memories of an ant would probably need to be very basic and short for performance reasons. Storing memories of 50-100 ants doesn't sound cheap, maybe it is?

The movement system still feels like it can be massively simplified, but I think it's probably not worth working on it at this stage, especially if I need to do path-finding later or something to that effect, this will probably end up just getting gutted.

I think the next focus is probably collision detection. I don't want ants to bump into each other, and I want ants to stop walking off the canvas (that code seems to be broken for some reason).

## 9:00PM Sesh

I think the collision detection should just live in separate functions. The hard part is iterating through all of the ants. It might be advantageous to create an Ant collection class for this reason. It keeps ants separate from the main application and allows for all sorts of dynamic ant creation/destroying. I thought collection classes were stupid in college...

## One collection class later...

The main app has less clutter, the collection class can create and kill ants now. Also, ants have randomly generated ID's now. The `Ants.js` file was a little cluttered so I went ahead and inserted comment blocks to break up the different sections. *Technically* I could just throw the Ant class in another file like it was, then import it into the `Ants.js` file, but at least for now I like being able to edit both in the same file.

All this, and I still don't know how to handle collisions. More-so I don't know how I should handle it **here**. My first thought is have all the ants move, then iterate through ant positions to check if 2 positions could overlap. Now that I'm thinking about how to do the check, I'll have to give that some thought too.

I'm calling it here. I can't wrap my head around how I'm going to do collision stuff yet.