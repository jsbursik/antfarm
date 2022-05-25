## 5/24/22

I finally got 1 ant to move. It's inefficient, I feel like there has to be a better way to turn any 45 degree (n * PI / 4) angle into movement. Also, yeah, javascript uses radians.

I need to figure out how to make movement more fluid. I need multiple entities moving at different rates (velocity), you should be able to track each individual. The first step is probably speeding up animation and moving less than 10px at a time.

Ants need to exist in an array at some point. They need to dynamically grow (push) and die (pop).

I added NodeJS/ExpressJS because CORS doesn't like me importing javascript and I wanted the Ant class to be separate. I seem to have forgotten how to just send files straight up using `req.path`, not sure what I was missing. Anyways, it's very much hacked together now.