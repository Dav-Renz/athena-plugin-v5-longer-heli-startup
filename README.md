# athena-plugin-v5-longer-heli-startup

This plugin creates a more realistic helicopter takeoff by simply freezing a helicopter for the first 30 seconds after starting it's engine manually. This way you can't just hop in and take off, but have to wait for the engine to spool up like in reallife.
I might look into modifying the sound stages, to keep the upramping sound for longer, in the future. Currently there are no planned updates for this.

This time can easily be modified in the [index.ts](server/index.ts) file by changing the STARTUP_TIME constant.
