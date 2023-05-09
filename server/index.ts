import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { VEHICLE_TYPE } from '@AthenaShared/enums/vehicleTypeFlags';

const PLUGIN_NAME = 'Delayed-Heli-Takeoff';
const STARTUP_TIME = 30; // Time to freeze the heli in seconds

function init() {
    Athena.vehicle.events.on('engine-started', engineStartCallback);
}

function engineStartCallback(vehicle: alt.Vehicle, player: alt.Player) {
    const data = Athena.utility.hashLookup.vehicle.hash(vehicle.model);
    if (!data) {
        return;
    }
    if (data.type !== VEHICLE_TYPE.HELI) {
        return;
    }
    vehicle.frozen = true;
    alt.setTimeout(() => {
        vehicle.frozen = false;
    }, STARTUP_TIME * 1000);
}

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, init);
