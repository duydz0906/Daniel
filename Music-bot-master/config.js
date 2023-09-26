module.exports = {
    app: {
        token: 'ODgxOTI4OTc0MTAyNTc3MjAy.GFNWiN.mhBfHny89n2h1Klb4a30PbdJiyKimI8g9uB_8g',
        playing: 'by Daniel❤️',
        global: true,
        guild: '579596733697490944',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
