export const PLAYER_INFORMATION = "PLAYER_INFORMATION";

export const savePlayer = (player) => {
    return {
        type: PLAYER_INFORMATION,
        player,
    };
};
