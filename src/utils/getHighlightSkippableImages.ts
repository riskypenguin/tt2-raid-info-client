import { BASE_TITAN_PART_IDS, type EnhancedTitan } from '../types';

import HeadHighlight from '$lib/assets/lemmy/HEAD_HIGHLIGHT.png';
import TorsoHighlight from '$lib/assets/lemmy/TORSO_HIGHLIGHT.png';
import ShoulderRightHighlight from '$lib/assets/lemmy/SHOULDER_RIGHT_HIGHLIGHT.png';
import ShoulderLeftHighlight from '$lib/assets/lemmy/SHOULDER_LEFT_HIGHLIGHT.png';
import HandRightHighlight from '$lib/assets/lemmy/HAND_RIGHT_HIGHLIGHT.png';
import HandLeftHighlight from '$lib/assets/lemmy/HAND_LEFT_HIGHLIGHT.png';
import LegRightHighlight from '$lib/assets/lemmy/LEG_RIGHT_HIGHLIGHT.png';
import LegLeftHighlight from '$lib/assets/lemmy/LEG_LEFT_HIGHLIGHT.png';
import { getEnumKeyByEnumValue } from '.';

const IMAGES_BY_PART_IDS: { [key: string]: string } = {
    HEAD: HeadHighlight,
    TORSO: TorsoHighlight,
    SHOULDER_RIGHT: ShoulderRightHighlight,
    SHOULDER_LEFT: ShoulderLeftHighlight,
    HAND_RIGHT: HandRightHighlight,
    HAND_LEFT: HandLeftHighlight,
    LEG_RIGHT: LegRightHighlight,
    LEG_LEFT: LegLeftHighlight,
};

export function getHighlightSkippableImages(titan: EnhancedTitan) {
    return titan.consolidated_parts
        .filter((part) => part.body_hp <= titan.skippable_hp)
        .map((part) => IMAGES_BY_PART_IDS[getEnumKeyByEnumValue(BASE_TITAN_PART_IDS, part.part_id)])
        .filter((img) => img !== undefined);
}
