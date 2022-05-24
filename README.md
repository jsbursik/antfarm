# Overview

The main purpose of this project is to create a digital ant farm. I had the idea after watching a video about generational AI learning to survive a selection process. The scope of this project **will not** include AI driven by complex neurons, but will be based on some simple Kinesis.

I would like for this project to eventually end up on some form of display in my office running constantly. I've thought of maybe displaying it on a magic mirror or maybe just a tiny framed touch screen ran by a Raspberry Pi to add some interactive features.

# Kinesis

This will drive the little "ants" to take different actions and is based on a stimulus provided. Say I told the ants they like to stay at a certain temperature, I could introduce hot and cool areas and you would expect most ants to respond to those areas by finding a spot that meets their temperature demands. You don't give the ants the ability to *see* the temperatures, just the ability to feel it where they are.

This is not to say that I won't give the ants the ability to see and pathfind to things that they want to move towards, I just want something short of a full-blown deep-learning AI.

# Behaviors and "Feelings"

Since these ants will be very dependent on stimulus it is important to define the sensors an Ant should have.

* ### Hunger / Thirst
    * An ant should be able to get **hungry/thirsty** or be **full/hyrdated**.

* ### Energy
    * This could play into the hunger and thirst system, the more "work" that is done could lead to needing more food/water.
    * Actions such as moving, especially at higher speeds could burn this quicker?

* ### Temperature
    * This *might* not end up being as interesting, as it would be kind of hard to visualie temperature for the viewer of the ant farm.
    * Could lead to neat behaviors, such as ants running in and out of a hot area because they needed to get to a food source.
    * In order to make this interesting to see overtime, maybe temperatures should change in areas based on some kind of "current." This would drive ants to different areas based on the climate across the area.

* ### Mating / Socializing
    * Ants should be able to mate with each other and mix their "**genes**" to create offspring. There should also be a *chance* for mutation to happen. This makes it possible for new types of ants to emerge.
    * I want ants to *maybe* have a trait dictating their **introvertedness** or **extrovertedness**. This could lead to ants gathering together, or spreading apart.

* ### Lifecycle
    * The ants should have roughly 3 stages of life - Birth, Adulthood, Death.
    * Maybe **speed** could be parabolic based on **age** (low speed at birth, high at adult, lower towards death)?

# Other Entities / Events

I have played around with the idea of having other entities other than the ants. For example, in the lifecycle I mention **Death**. Wouldn't it be cool for their to be a fungus or some other *thing* that could recycle the dead ant?

Speaking of fungus, what about **plants** that grow? They could be the food source for these "ants" and have **growth rates**. Maybe this leads to ants evolving to not eat too fast because they'll run out of food. If I were to implement something like this, then I need to seriously consider some sort of **physical fitness** stat that meant ants who are more fit, don't use as much energy to do the same task as others.

Natural disasters could be cool; random meteors falling down to destroy a hefty amount of the population could change the genetic makeup real quick. *Side note: Might need to protect against **all** the ants dying and there being nothing on the screen*

# Interaction

I think it would be pretty cool to allow some interaction between the viewer and the "ants."

Stuff like feeding, watering, maybe moving them around. Maybe even allowing the user to cause the disasters, like some sort of God complex simulator.

# Server-side?

The thought has occurred that it might be useful to make this a server-side app with a web based "viewing" port. I could still write all of this in Javascript, make it a NodeJS app, then have it all happen virtually on the server and a web broswer can render what's happening.

## Why?

Well, I don't know how well Javascript can handle all of this in-browser. If that's not a problem, then maybe it would be cool to have one instance running and being able to see it from anywhere.


