import React, { StrictMode, useCallback, useMemo, useState } from 'react';
import './App.css';

const data = [{
  title:"happy",
  symbol: "😀",
  keyword: 'happy face smiling small eyes wide grin',
},
{
  title: "100",
  symbol: "💯",
  keyword: "hundred points symbol symbol wow wow win win perfect perfect parties parties"
},
{
  title: "1234",
  symbol: "🔢",
  keyword: "input symbol for numbers symbol"
},
{
  title: "Grinning",
  symbol: "😀",
  keyword: "grinning face happy smiley emotion emotion"
},
{
  title: "Grimacing",
  symbol: "😬",
  keyword: "grimacing face silly smiley emotion emotion selfie selfie"
},
{
  title: "Grin",
  symbol: "😁",
  keyword:
    "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
},
{
  title: "Joy",
  symbol: "😂",
  keyword:
    "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
},
{
  title: "Smiley",
  symbol: "😃",
  keyword:
    "smiling face with open mouth happy smiley emotion emotion good good"
},
{
  title: "Smile",
  symbol: "😄",
  keyword:
    "smiling face with open mouth and smiling eyes happy smiley emotion emotion"
},
{
  title: "Sweat Smile",
  symbol: "😅",
  keyword:
    "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion"
},
{
  title: "Laughing",
  symbol: "😆",
  keyword:
    "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion"
},
{
  title: "Innocent",
  symbol: "😇",
  keyword: "smiling face with halo smiley emotion emotion"
},
{
  title: "Wink",
  symbol: "😉",
  keyword: "winking face silly smiley emotion emotion"
},
{
  title: "Blush",
  symbol: "😊",
  keyword:
    "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful"
},
{
  title: "Slight Smile",
  symbol: "🙂",
  keyword: "slightly smiling face happy smiley"
},
{
  title: "Upside Down",
  symbol: "🙃",
  keyword: "upside-down face silly smiley sarcastic sarcastic"
},
{
  title: "Relaxed",
  symbol: "☺",
  keyword: "white smiling face happy smiley"
},
{
  title: "Yum",
  symbol: "😋",
  keyword:
    "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good"
},
{
  title: "Relieved",
  symbol: "😌",
  keyword: "relieved face smiley emotion emotion"
},
{
  title: "Heart Eyes",
  symbol: "😍",
  keyword:
    "smiling face with heart-shaped eyes happy smiley love sex heart eyes emotion emotion beautiful beautiful"
},
{
  title: "Kissing Heart",
  symbol: "😘",
  keyword: "face throwing a kiss smiley love sexy"
},
{
  title: "Kissing",
  symbol: "😗",
  keyword: "kissing face smiley sexy"
},
{
  title: "Kissing Smiling Eyes",
  symbol: "😙",
  keyword: "kissing face with smiling eyes smiley sexy"
},
{
  title: "Kissing Closed Eyes",
  symbol: "😚",
  keyword: "kissing face with closed eyes smiley sexy"
},
{
  title: "Stuck Out Tongue Winking Eye",
  symbol: "😜",
  keyword:
    "face with stuck-out tongue and winking eye happy smiley emotion emotion parties parties"
},
{
  title: "Stuck Out Tongue Closed Eyes",
  symbol: "😝",
  keyword:
    "face with stuck-out tongue and tightly-closed eyes happy smiley emotion emotion"
},
{
  title: "Stuck Out Tongue",
  symbol: "😛",
  keyword: "face with stuck-out tongue smiley sex emotion emotion"
},
{
  title: "Money Mouth",
  symbol: "🤑",
  keyword:
    "money-mouth face smiley win win money money emotion emotion boys night boys night"
},
{
  title: "Nerd",
  symbol: "🤓",
  keyword: "nerd face smiley glasses"
},
{
  title: "Sunglasses",
  symbol: "😎",
  keyword:
    "smiling face with sunglasses silly smiley emojione glasses boys night boys night"
},
{
  title: "Hugging",
  symbol: "🤗",
  keyword: "hugging face smiley hug thank you"
},
{
  title: "Smirk",
  symbol: "😏",
  keyword: "smirking face silly smiley sexy sarcastic sarcastic"
},
{
  title: "No Mouth",
  symbol: "😶",
  keyword: "face without mouth mad smiley neutral emotion emotion"
},
{
  title: "Neutral Face",
  symbol: "😐",
  keyword: "neutral face mad smiley shrug neutral emotion emotion"
},
{
  title: "Expressionless",
  symbol: "😑",
  keyword: "expressionless face mad smiley neutral emotion emotion"
},
{
  title: "Unamused",
  symbol: "😒",
  keyword: "unamused face sad mad smiley tired emotion emotion"
},
{
  title: "Rolling Eyes",
  symbol: "🙄",
  keyword:
    "face with rolling eyes mad smiley rolling eyes emotion emotion sarcastic sarcastic"
},
{
  title: "Thinking",
  symbol: "🤔",
  keyword: "thinking face smiley thinking boys night boys night"
},
{
  title: "Flushed",
  symbol: "😳",
  keyword: "flushed face smiley emotion emotion omg omg"
},
{
  title: "Disappointed",
  symbol: "😞",
  keyword: "disappointed face sad smiley tired emotion emotion"
},
{
  title: "Worried",
  symbol: "😟",
  keyword: "worried face sad smiley emotion emotion"
},
{
  title: "Angry",
  symbol: "😠",
  keyword: "angry face mad smiley emotion emotion"
},
{
  title: "Rage",
  symbol: "😡",
  keyword: "pouting face mad smiley angry emotion emotion"
},
{
  title: "Pensive",
  symbol: "😔",
  keyword: "pensive face sad smiley emotion emotion rip rip"
},
{
  title: "Confused",
  symbol: "😕",
  keyword: "confused face smiley surprised emotion emotion"
},
{
  title: "Slight Frown",
  symbol: "🙁",
  keyword: "slightly frowning face sad smiley emotion emotion"
},
{
  title: "Frowning2",
  symbol: "☹",
  keyword: "white frowning face sad smiley emotion emotion"
},
{
  title: "Persevere",
  symbol: "😣",
  keyword: "persevering face sad smiley angry emotion emotion"
},
{
  title: "Confounded",
  symbol: "😖",
  keyword: "confounded face sad smiley angry emotion emotion"
},
{
  title: "Tired Face",
  symbol: "😫",
  keyword: "tired face sad smiley tired emotion emotion"
},
{
  title: "Weary",
  symbol: "😩",
  keyword: "weary face sad smiley tired stressed emotion emotion"
},
{
  title: "Triumph",
  symbol: "😤",
  keyword:
    "face with look of triumph mad smiley angry emotion emotion steam steam"
},
{
  title: "Open Mouth",
  symbol: "😮",
  keyword: "face with open mouth smiley surprised wow wow emotion emotion"
},
{
  title: "Scream",
  symbol: "😱",
  keyword:
    "face screaming in fear smiley surprised wow wow emotion emotion omg omg"
},
{
  title: "Fearful",
  symbol: "😨",
  keyword: "fearful face smiley surprised emotion emotion"
},
{
  title: "Cold Sweat",
  symbol: "😰",
  keyword:
    "face with open mouth and cold sweat smiley sweat emotion emotion"
},
{
  title: "Hushed",
  symbol: "😯",
  keyword: "hushed face smiley surprised wow wow"
},
{
  title: "Frowning",
  symbol: "😦",
  keyword:
    "frowning face with open mouth sad smiley surprised emotion emotion"
},
{
  title: "Anguished",
  symbol: "😧",
  keyword: "anguished face sad smiley surprised emotion emotion"
},
{
  title: "Cry",
  symbol: "😢",
  keyword:
    "crying face sad smiley cry emotion emotion rip rip heartbreak heartbreak"
},
{
  title: "Disappointed Relieved",
  symbol: "😥",
  keyword:
    "disappointed but relieved face sad smiley stressed sweat cry emotion emotion"
},
{
  title: "Sleepy",
  symbol: "😪",
  keyword: "sleepy face smiley sick emotion emotion"
},
{
  title: "Sweat",
  symbol: "😓",
  keyword: "face with cold sweat sad smiley stressed sweat emotion emotion"
},
{
  title: "Sob",
  symbol: "😭",
  keyword:
    "loudly crying face sad smiley cry emotion emotion heartbreak heartbreak"
},
{
  title: "Dizzy Face",
  symbol: "😵",
  keyword:
    "dizzy face smiley surprised dead wow wow emotion emotion omg omg"
},
{
  title: "Astonished",
  symbol: "😲",
  keyword:
    "astonished face smiley surprised wow wow emotion emotion omg omg"
},
{
  title: "Zipper Mouth",
  symbol: "🤐",
  keyword: "zipper-mouth face mad smiley"
},
{
  title: "Mask",
  symbol: "😷",
  keyword: "face with medical mask smiley dead health sick"
},
{
  title: "Thermometer Face",
  symbol: "🤒",
  keyword: "face with thermometer smiley health sick emotion emotion"
},
{
  title: "Head Bandage",
  symbol: "🤕",
  keyword: "face with head-bandage smiley health sick emotion emotion"
},
{
  title: "Sleeping",
  symbol: "😴",
  keyword: "sleeping face smiley tired emotion emotion goodnight goodnight"
},
{
  title: "Zzz",
  symbol: "💤",
  keyword: "sleeping symbol tired goodnight goodnight"
},
{
  title: "Poop",
  symbol: "💩",
  keyword: "pile of poo bathroom shit sol sol diarrhea diarrhea"
},
{
  title: "Smiling Imp",
  symbol: "😈",
  keyword:
    "smiling face with horns silly smiley angry monster devil devil boys night boys night"
},
{
  title: "Imp",
  symbol: "👿",
  keyword: "imp smiley monster devil devil wth wth"
},
{
  title: "Japanese Ogre",
  symbol: "👹",
  keyword: "japanese ogre monster"
},
{
  title: "Japanese Goblin",
  symbol: "👺",
  keyword: "japanese goblin angry monster"
},
{
  title: "Skull",
  symbol: "💀",
  keyword: "skull dead halloween skull"
},
{
  title: "Ghost",
  symbol: "👻",
  keyword: "ghost holidays halloween monster"
},
{
  title: "Alien",
  symbol: "👽",
  keyword:
    "extraterrestrial alien space monster alien scientology scientology"
},
{
  title: "Robot",
  symbol: "🤖",
  keyword: "robot face monster robot"
},
{
  title: "Smiley Cat",
  symbol: "😺",
  keyword: "smiling cat face with open mouth happy cat cat animal animal"
},
{
  title: "Smile Cat",
  symbol: "😸",
  keyword:
    "grinning cat face with smiling eyes happy cat cat animal animal"
},
{
  title: "Joy Cat",
  symbol: "😹",
  keyword:
    "cat face with tears of joy happy silly cry laugh laugh cat cat animal animal sarcastic sarcastic"
},
{
  title: "Heart Eyes Cat",
  symbol: "😻",
  keyword:
    "smiling cat face with heart-shaped eyes heart eyes cat cat animal animal beautiful beautiful"
},
{
  title: "Smirk Cat",
  symbol: "😼",
  keyword: "cat face with wry smile cat cat animal animal"
},
{
  title: "Kissing Cat",
  symbol: "😽",
  keyword: "kissing cat face with closed eyes cat cat animal animal"
},
{
  title: "Scream Cat",
  symbol: "🙀",
  keyword: "weary cat face cat cat animal animal"
},
{
  title: "Crying Cat Face",
  symbol: "😿",
  keyword: "crying cat face cry cat cat animal animal"
},
{
  title: "Pouting Cat",
  symbol: "😾",
  keyword: "pouting cat face cat cat animal animal"
},
{
  title: "Raised Hands",
  symbol: "🙌",
  keyword:
    "person raising both hands in celebration body hands diversity diversity perfect perfect good good parties parties"
},
{
  title: "Clap",
  symbol: "👏",
  keyword:
    "clapping hands sign body hands win win diversity diversity good good beautiful beautiful"
},
{
  title: "Wave",
  symbol: "👋",
  keyword: "waving hand sign body hands hi diversity diversity"
},
{
  title: "Thumbsup",
  symbol: "👍",
  keyword:
    "thumbs up sign body hands hi luck thank you diversity diversity perfect perfect good good beautiful beautiful"
},
{
  title: "Thumbsdown",
  symbol: "👎",
  keyword: "thumbs down sign body hands diversity diversity"
},
{
  title: "Punch",
  symbol: "👊",
  keyword:
    "fisted hand sign body hands hi fist bump diversity diversity boys night boys night"
},
{
  title: "Fist",
  symbol: "✊",
  keyword:
    "raised fist body hands hi fist bump diversity diversity condolence condolence"
},
{
  title: "v",
  symbol: "✌",
  keyword:
    "victory hand body hands hi thank you peace peace diversity diversity girls night girls night"
},
{
  title: "Ok Hand",
  symbol: "👌",
  keyword:
    "ok hand sign body hands hi diversity diversity perfect perfect good good beautiful beautiful"
},
{
  title: "Raised Hand",
  symbol: "✋",
  keyword:
    "raised hand body hands hi diversity diversity girls night girls night"
},
{
  title: "Open Hands",
  symbol: "👐",
  keyword:
    "open hands sign body hands diversity diversity condolence condolence"
},
{
  title: "Muscle",
  symbol: "💪",
  keyword:
    "flexed biceps body hands workout flex win win diversity diversity feminist feminist boys night boys night"
},
{
  title: "Pray",
  symbol: "🙏",
  keyword:
    "person with folded hands body hands hi luck thank you pray pray diversity diversity scientology scientology"
},
{
  title: "Point Up",
  symbol: "☝",
  keyword:
    "white up pointing index body hands emojione diversity diversity"
},
{
  title: "Point Up 2",
  symbol: "👆",
  keyword:
    "white up pointing backhand index body hands diversity diversity"
},
{
  title: "Point Down",
  symbol: "👇",
  keyword:
    "white down pointing backhand index body hands diversity diversity"
},
{
  title: "Point Left",
  symbol: "👈",
  keyword:
    "white left pointing backhand index body hands hi diversity diversity"
},
{
  title: "Point Right",
  symbol: "👉",
  keyword:
    "white right pointing backhand index body hands hi diversity diversity"
},
{
  title: "Middle Finger",
  symbol: "🖕",
  keyword:
    "reversed hand with middle finger extended body hands middle finger diversity diversity"
},
{
  title: "Hand Splayed",
  symbol: "🖐",
  keyword:
    "raised hand with fingers splayed body hands hi diversity diversity"
},
{
  title: "Metal",
  symbol: "🤘",
  keyword:
    "sign of the horns body hands hi diversity diversity boys night boys night parties parties"
},
{
  title: "Vulcan",
  symbol: "🖖",
  keyword:
    "raised hand with part between middle and ring fingers body hands hi diversity diversity"
},
{
  title: "Writing Hand",
  symbol: "✍",
  keyword: "writing hand body hands write diversity diversity"
},
{
  title: "Nail Care",
  symbol: "💅",
  keyword:
    "nail polish women body hands nailpolish diversity diversity girls night girls night"
},
{
  title: "Lips",
  symbol: "👄",
  keyword: "mouth women body sexy lip"
},
{
  title: "Tongue",
  symbol: "👅",
  keyword: "tongue body sexy lip"
},
{
  title: "Ear",
  symbol: "👂",
  keyword: "ear body diversity diversity"
},
{
  title: "Nose",
  symbol: "👃",
  keyword: "nose body diversity diversity"
},
{
  title: "Eye",
  symbol: "👁",
  keyword: "eye body eyes"
},
{
  title: "Eyes",
  symbol: "👀",
  keyword: "eyes body eyes"
},
{
  title: "Bust In Silhouette",
  symbol: "👤",
  keyword: "bust in silhouette people"
},
{
  title: "Busts In Silhouette",
  symbol: "👥",
  keyword: "busts in silhouette people"
},
{
  title: "Speaking Head",
  symbol: "🗣",
  keyword: "speaking head in silhouette people talk"
},
{
  title: "Baby",
  symbol: "👶",
  keyword: "baby people baby diversity diversity"
},
{
  title: "Boy",
  symbol: "👦",
  keyword: "boy people baby diversity diversity"
},
{
  title: "Girl",
  symbol: "👧",
  keyword: "girl people women baby diversity diversity"
},
{
  title: "Man",
  symbol: "👨",
  keyword:
    "man people men sex diversity diversity selfie selfie boys night boys night"
},
{
  title: "Woman",
  symbol: "👩",
  keyword:
    "woman people women sex diversity diversity feminist feminist selfie selfie girls night girls night"
},
{
  title: "Person With Blond Hair",
  symbol: "👱",
  keyword: "person with blond hair people men diversity diversity"
},
{
  title: "Older Man",
  symbol: "👴",
  keyword: "older man people men old people diversity diversity"
},
{
  title: "Older Woman",
  symbol: "👵",
  keyword: "older woman people old people diversity diversity"
},
{
  title: "Man With Gua Pi Mao",
  symbol: "👲",
  keyword: "man with gua pi mao people hat men diversity diversity"
},
{
  title: "Man With Turban",
  symbol: "👳",
  keyword: "man with turban people hat diversity diversity"
},
{
  title: "Cop",
  symbol: "👮",
  keyword:
    "police officer people hat men diversity diversity job job police police 911 911"
},
{
  title: "Construction Worker",
  symbol: "👷",
  keyword: "construction worker people hat men diversity diversity job job"
},
{
  title: "Guardsman",
  symbol: "💂",
  keyword: "guardsman people hat men diversity diversity job job"
},
{
  title: "Spy",
  symbol: "🕵",
  keyword:
    "sleuth or spy people hat men glasses diversity diversity job job"
},
{
  title: "Santa",
  symbol: "🎅",
  keyword:
    "father christmas people hat winter holidays christmas diversity diversity santa santa"
},
{
  title: "Angel",
  symbol: "👼",
  keyword: "baby angel people diversity diversity omg omg"
},
{
  title: "Princess",
  symbol: "👸",
  keyword:
    "princess people women diversity diversity beautiful beautiful girls night girls night"
},
{
  title: "Bride With Veil",
  symbol: "👰",
  keyword: "bride with veil people wedding women diversity diversity"
},
{
  title: "Walking",
  symbol: "🚶",
  keyword: "pedestrian people men diversity diversity"
},
{
  title: "Runner",
  symbol: "🏃",
  keyword:
    "runner people men diversity diversity boys night boys night run run"
},
{
  title: "Dancer",
  symbol: "💃",
  keyword:
    "dancer people women sexy diversity diversity girls night girls night dance dance"
},
{
  title: "Dancers",
  symbol: "👯",
  keyword:
    "woman with bunny ears people women sexy girls night girls night boys night boys night parties parties dance dance"
},
{
  title: "Couple",
  symbol: "👫",
  keyword: "man and woman holding hands people sex creationism creationism"
},
{
  title: "Two Men Holding Hands",
  symbol: "👬",
  keyword: "two men holding hands people gay men sex lgbt lgbt"
},
{
  title: "Two Women Holding Hands",
  symbol: "👭",
  keyword:
    "two women holding hands people women sex lgbt lgbt lesbian lesbian girls night girls night"
},
{
  title: "Bow",
  symbol: "🙇",
  keyword: "person bowing deeply people pray pray diversity diversity"
},
{
  title: "Information Desk Person",
  symbol: "💁",
  keyword: "information desk person people women diversity diversity"
},
{
  title: "No Good",
  symbol: "🙅",
  keyword:
    "face with no good gesture people women diversity diversity girls night girls night"
},
{
  title: "Ok Woman",
  symbol: "🙆",
  keyword: "face with ok gesture people women diversity diversity"
},
{
  title: "Raising Hand",
  symbol: "🙋",
  keyword: "happy person raising one hand people women diversity diversity"
},
{
  title: "Person With Pouting Face",
  symbol: "🙎",
  keyword: "person with pouting face people women diversity diversity"
},
{
  title: "Person Frowning",
  symbol: "🙍",
  keyword: "person frowning people women diversity diversity"
},
{
  title: "Haircut",
  symbol: "💇",
  keyword: "haircut people women diversity diversity"
},
{
  title: "Massage",
  symbol: "💆",
  keyword: "face massage people women diversity diversity"
},
{
  title: "Couple With Heart",
  symbol: "💑",
  keyword: "couple with heart people love sex"
},
{
  title: "Couple Ww",
  symbol: "👩",
  keyword: "couple (woman,woman) people women love sex lgbt lgbt"
},
{
  title: "Couple Mm",
  symbol: "👨",
  keyword: "couple (man,man) people gay men love sex lgbt lgbt"
},
{
  title: "Couplekiss",
  symbol: "💏",
  keyword: "kiss people love sex"
},
{
  title: "Kiss Ww",
  symbol: "👩",
  keyword:
    "kiss (woman,woman) people women love sex lgbt lgbt lesbian lesbian"
},
{
  title: "Kiss Mm",
  symbol: "👨",
  keyword: "kiss (man,man) people gay men love sex lgbt lgbt"
},
{
  title: "Family",
  symbol: "👪",
  keyword: "family people family baby"
},
{
  title: "Family Mwg",
  symbol: "👨",
  keyword: "family (man,woman,girl) people family baby"
},
{
  title: "Family Mwgb",
  symbol: "👨",
  keyword: "family (man,woman,girl,boy) people family baby"
},
{
  title: "Family Mwbb",
  symbol: "👨",
  keyword: "family (man,woman,boy,boy) people family baby"
},
{
  title: "Family Mwgg",
  symbol: "👨",
  keyword: "family (man,woman,girl,girl) people family baby"
},
{
  title: "Family Wwb",
  symbol: "👩",
  keyword:
    "family (woman,woman,boy) people family women baby lgbt lgbt lesbian lesbian"
},
{
  title: "Family Wwg",
  symbol: "👩",
  keyword:
    "family (woman,woman,girl) people family women baby lgbt lgbt lesbian lesbian"
},
{
  title: "Family Wwgb",
  symbol: "👩",
  keyword:
    "family (woman,woman,girl,boy) people family women baby lgbt lgbt lesbian lesbian"
},
{
  title: "Family Wwbb",
  symbol: "👩",
  keyword:
    "family (woman,woman,boy,boy) people family women baby lgbt lgbt lesbian lesbian"
},
{
  title: "Family Wwgg",
  symbol: "👩",
  keyword:
    "family (woman,woman,girl,girl) people family women baby lgbt lgbt lesbian lesbian"
},
{
  title: "Family Mmb",
  symbol: "👨",
  keyword: "family (man,man,boy) people gay family men baby lgbt lgbt"
},
{
  title: "Family Mmg",
  symbol: "👨",
  keyword: "family (man,man,girl) people gay family men baby lgbt lgbt"
},
{
  title: "Family Mmgb",
  symbol: "👨",
  keyword: "family (man,man,girl,boy) people gay family men baby lgbt lgbt"
},
{
  title: "Family Mmbb",
  symbol: "👨",
  keyword: "family (man,man,boy,boy) people gay family men baby lgbt lgbt"
},
{
  title: "Family Mmgg",
  symbol: "👨",
  keyword:
    "family (man,man,girl,girl) people gay family men baby lgbt lgbt"
},
{
  title: "Womans Clothes",
  symbol: "👚",
  keyword: "womans clothes women fashion"
},
{
  title: "Shirt",
  symbol: "👕",
  keyword: "t-shirt fashion"
},
{
  title: "Jeans",
  symbol: "👖",
  keyword: "jeans fashion"
},
{
  title: "Necktie",
  symbol: "👔",
  keyword: "necktie fashion"
},
{
  title: "Dress",
  symbol: "👗",
  keyword: "dress women fashion sexy girls night girls night"
},
{
  title: "Bikini",
  symbol: "👙",
  keyword: "bikini women fashion sexy vacation tropical swim"
},
{
  title: "Kimono",
  symbol: "👘",
  keyword: "kimono fashion"
},
{
  title: "Lipstick",
  symbol: "💄",
  keyword: "lipstick object women fashion sexy lip"
},
{
  title: "Kiss",
  symbol: "💋",
  keyword:
    "kiss mark women love sexy lip beautiful beautiful girls night girls night"
},
{
  title: "Footprints",
  symbol: "👣",
  keyword: "footprints"
},
{
  title: "High Heel",
  symbol: "👠",
  keyword:
    "high-heeled shoe women fashion shoe sexy accessories girls night girls night"
},
{
  title: "Sandal",
  symbol: "👡",
  keyword: "womans sandal fashion shoe accessories"
},
{
  title: "Boot",
  symbol: "👢",
  keyword: "womans boots women fashion shoe sexy accessories"
},
{
  title: "Mans Shoe",
  symbol: "👞",
  keyword: "mans shoe fashion shoe accessories"
},
{
  title: "Athletic Shoe",
  symbol: "👟",
  keyword: "athletic shoe fashion shoe accessories boys night boys night"
},
{
  title: "Womans Hat",
  symbol: "👒",
  keyword: "womans hat women fashion accessories"
},
{
  title: "Tophat",
  symbol: "🎩",
  keyword: "top hat hat fashion accessories"
},
{
  title: "Helmet With Cross",
  symbol: "⛑",
  keyword: "helmet with white cross object hat accessories job job"
},
{
  title: "Mortar Board",
  symbol: "🎓",
  keyword: "graduation cap hat office accessories"
},
{
  title: "Crown",
  symbol: "👑",
  keyword: "crown object gem accessories"
},
{
  title: "School Satchel",
  symbol: "🎒",
  keyword: "school satchel bag fashion office vacation accessories"
},
{
  title: "Pouch",
  symbol: "👝",
  keyword: "pouch bag women fashion accessories"
},
{
  title: "Purse",
  symbol: "👛",
  keyword: "purse bag women fashion accessories money money"
},
{
  title: "Handbag",
  symbol: "👜",
  keyword: "handbag bag women fashion vacation accessories"
},
{
  title: "Briefcase",
  symbol: "💼",
  keyword: "briefcase bag work accessories nutcase nutcase job job"
},
{
  title: "Eyeglasses",
  symbol: "👓",
  keyword: "eyeglasses fashion glasses accessories"
},
{
  title: "Dark Sunglasses",
  symbol: "🕶",
  keyword: "dark sunglasses fashion glasses accessories"
},
{
  title: "Ring",
  symbol: "💍",
  keyword: "ring wedding object fashion gem accessories"
},
{
  title: "Closed Umbrella",
  symbol: "🌂",
  keyword: "closed umbrella object sky rain accessories"
},
{
  title: "Dog",
  symbol: "🐶",
  keyword: "dog face dog dog pug pug animal animal"
},
{
  title: "Cat",
  symbol: "🐱",
  keyword: "cat face halloween vagina cat cat animal animal"
},
{
  title: "Mouse",
  symbol: "🐭",
  keyword: "mouse face animal animal"
},
{
  title: "Hamster",
  symbol: "🐹",
  keyword: "hamster face animal animal"
},
{
  title: "Rabbit",
  symbol: "🐰",
  keyword: "rabbit face wildlife animal animal"
},
{
  title: "Bear",
  symbol: "🐻",
  keyword: "bear face wildlife roar animal animal"
},
{
  title: "Panda Face",
  symbol: "🐼",
  keyword: "panda face wildlife roar animal animal"
},
{
  title: "Koala",
  symbol: "🐨",
  keyword: "koala wildlife animal animal"
},
{
  title: "Tiger",
  symbol: "🐯",
  keyword: "tiger face wildlife roar cat cat animal animal"
},
{
  title: "Lion Face",
  symbol: "🦁",
  keyword: "lion face wildlife roar cat cat animal animal"
},
{
  title: "Cow",
  symbol: "🐮",
  keyword: "cow face animal animal"
},
{
  title: "Pig",
  symbol: "🐷",
  keyword: "pig face animal animal"
},
{
  title: "Pig Nose",
  symbol: "🐽",
  keyword: "pig nose animal animal"
},
{
  title: "Frog",
  symbol: "🐸",
  keyword: "frog face wildlife animal animal"
},
{
  title: "Octopus",
  symbol: "🐙",
  keyword: "octopus wildlife animal animal"
},
{
  title: "Monkey Face",
  symbol: "🐵",
  keyword: "monkey face animal animal"
},
{
  title: "See No Evil",
  symbol: "🙈",
  keyword: "see-no-evil monkey animal animal"
},
{
  title: "Hear No Evil",
  symbol: "🙉",
  keyword: "hear-no-evil monkey animal animal"
},
{
  title: "Speak No Evil",
  symbol: "🙊",
  keyword: "speak-no-evil monkey animal animal"
},
{
  title: "Monkey",
  symbol: "🐒",
  keyword: "monkey wildlife animal animal"
},
{
  title: "Chicken",
  symbol: "🐔",
  keyword: "chicken animal animal chicken chicken"
},
{
  title: "Penguin",
  symbol: "🐧",
  keyword: "penguin wildlife animal animal"
},
{
  title: "Bird",
  symbol: "🐦",
  keyword: "bird wildlife animal animal"
},
{
  title: "Baby Chick",
  symbol: "🐤",
  keyword: "baby chick animal animal chicken chicken"
},
{
  title: "Hatching Chick",
  symbol: "🐣",
  keyword: "hatching chick animal animal chicken chicken"
},
{
  title: "Hatched Chick",
  symbol: "🐥",
  keyword: "front-facing baby chick animal animal chicken chicken"
},
{
  title: "Wolf",
  symbol: "🐺",
  keyword: "wolf face wildlife roar animal animal"
},
{
  title: "Boar",
  symbol: "🐗",
  keyword: "boar wildlife animal animal"
},
{
  title: "Horse",
  symbol: "🐴",
  keyword: "horse face wildlife animal animal"
},
{
  title: "Unicorn",
  symbol: "🦄",
  keyword: "unicorn face animal animal"
},
{
  title: "Bee",
  symbol: "🐝",
  keyword: "honeybee insects animal animal"
},
{
  title: "Bug",
  symbol: "🐛",
  keyword: "bug insects animal animal"
},
{
  title: "Snail",
  symbol: "🐌",
  keyword: "snail insects animal animal"
},
{
  title: "Beetle",
  symbol: "🐞",
  keyword: "lady beetle insects animal animal"
},
{
  title: "Ant",
  symbol: "🐜",
  keyword: "ant insects animal animal"
},
{
  title: "Spider",
  symbol: "🕷",
  keyword: "spider insects halloween animal animal"
},
{
  title: "Scorpion",
  symbol: "🦂",
  keyword: "scorpion insects reptile reptile animal animal"
},
{
  title: "Crab",
  symbol: "🦀",
  keyword: "crab tropical animal animal"
},
{
  title: "Snake",
  symbol: "🐍",
  keyword:
    "snake wildlife reptile reptile animal animal creationism creationism"
},
{
  title: "Turtle",
  symbol: "🐢",
  keyword: "turtle wildlife reptile reptile animal animal"
},
{
  title: "Tropical Fish",
  symbol: "🐠",
  keyword: "tropical fish wildlife animal animal"
},
{
  title: "Fish",
  symbol: "🐟",
  keyword: "fish wildlife animal animal"
},
{
  title: "Blowfish",
  symbol: "🐡",
  keyword: "blowfish wildlife animal animal"
},
{
  title: "Dolphin",
  symbol: "🐬",
  keyword: "dolphin wildlife tropical animal animal"
},
{
  title: "Whale",
  symbol: "🐳",
  keyword: "spouting whale wildlife tropical whales whales animal animal"
},
{
  title: "Whale2",
  symbol: "🐋",
  keyword: "whale wildlife tropical whales whales animal animal"
},
{
  title: "Crocodile",
  symbol: "🐊",
  keyword: "crocodile wildlife reptile reptile animal animal"
},
{
  title: "Leopard",
  symbol: "🐆",
  keyword: "leopard wildlife roar animal animal"
},
{
  title: "Tiger2",
  symbol: "🐅",
  keyword: "tiger wildlife roar animal animal"
},
{
  title: "Water Buffalo",
  symbol: "🐃",
  keyword: "water buffalo wildlife animal animal"
},
{
  title: "Ox",
  symbol: "🐂",
  keyword: "ox animal animal"
},
{
  title: "Cow2",
  symbol: "🐄",
  keyword: "cow animal animal"
},
{
  title: "Dromedary Camel",
  symbol: "🐪",
  keyword: "dromedary camel wildlife animal animal"
},
{
  title: "Camel",
  symbol: "🐫",
  keyword: "bactrian camel wildlife animal animal hump day hump day"
},
{
  title: "Elephant",
  symbol: "🐘",
  keyword: "elephant wildlife animal animal"
},
{
  title: "Goat",
  symbol: "🐐",
  keyword: "goat animal animal"
},
{
  title: "Ram",
  symbol: "🐏",
  keyword: "ram wildlife animal animal"
},
{
  title: "Sheep",
  symbol: "🐑",
  keyword: "sheep animal animal"
},
{
  title: "Racehorse",
  symbol: "🐎",
  keyword: "horse wildlife animal animal"
},
{
  title: "Pig2",
  symbol: "🐖",
  keyword: "pig animal animal"
},
{
  title: "Rat",
  symbol: "🐀",
  keyword: "rat animal animal"
},
{
  title: "Mouse2",
  symbol: "🐁",
  keyword: "mouse animal animal"
},
{
  title: "Rooster",
  symbol: "🐓",
  keyword: "rooster animal animal"
},
{
  title: "Turkey",
  symbol: "🦃",
  keyword: "turkey wildlife animal animal"
},
{
  title: "Dove",
  symbol: "🕊",
  keyword: "dove of peace animal animal"
},
{
  title: "Dog2",
  symbol: "🐕",
  keyword: "dog dog dog pug pug animal animal"
},
{
  title: "Poodle",
  symbol: "🐩",
  keyword: "poodle dog dog animal animal"
},
{
  title: "Cat2",
  symbol: "🐈",
  keyword: "cat halloween cat cat animal animal"
},
{
  title: "Rabbit2",
  symbol: "🐇",
  keyword: "rabbit wildlife animal animal"
},
{
  title: "Chipmunk",
  symbol: "🐿",
  keyword: "chipmunk wildlife animal animal"
},
{
  title: "Feet",
  symbol: "🐾",
  keyword: "paw prints animal animal"
},
{
  title: "Dragon",
  symbol: "🐉",
  keyword: "dragon roar reptile reptile animal animal"
},
{
  title: "Dragon Face",
  symbol: "🐲",
  keyword: "dragon face roar monster reptile reptile animal animal"
},
{
  title: "Cactus",
  symbol: "🌵",
  keyword: "cactus nature plant trees trees"
},
{
  title: "Christmas Tree",
  symbol: "🎄",
  keyword: "christmas tree plant holidays christmas trees trees"
},
{
  title: "Evergreen Tree",
  symbol: "🌲",
  keyword:
    "evergreen tree nature plant holidays christmas camp trees trees"
},
{
  title: "Deciduous Tree",
  symbol: "🌳",
  keyword: "deciduous tree nature plant camp trees trees"
},
{
  title: "Palm Tree",
  symbol: "🌴",
  keyword: "palm tree nature plant tropical trees trees"
},
{
  title: "Seedling",
  symbol: "🌱",
  keyword: "seedling nature plant leaf leaf"
},
{
  title: "Herb",
  symbol: "🌿",
  keyword: "herb nature plant leaf leaf"
},
{
  title: "Shamrock",
  symbol: "☘",
  keyword: "shamrock nature plant luck leaf leaf"
},
{
  title: "Four Leaf Clover",
  symbol: "🍀",
  keyword: "four leaf clover nature plant luck leaf leaf sol sol"
},
{
  title: "Bamboo",
  symbol: "🎍",
  keyword: "pine decoration nature plant"
},
{
  title: "Tanabata Tree",
  symbol: "🎋",
  keyword: "tanabata tree nature plant trees trees"
},
{
  title: "Leaves",
  symbol: "🍃",
  keyword: "leaf fluttering in wind nature plant leaf leaf"
},
{
  title: "Fallen Leaf",
  symbol: "🍂",
  keyword: "fallen leaf nature plant leaf leaf"
},
{
  title: "Maple Leaf",
  symbol: "🍁",
  keyword: "maple leaf nature plant leaf leaf"
},
{
  title: "Ear Of Rice",
  symbol: "🌾",
  keyword: "ear of rice nature plant leaf leaf"
},
{
  title: "Hibiscus",
  symbol: "🌺",
  keyword: "hibiscus nature flower plant tropical"
},
{
  title: "Sunflower",
  symbol: "🌻",
  keyword: "sunflower nature flower plant"
},
{
  title: "Rose",
  symbol: "🌹",
  keyword:
    "rose nature flower plant rip rip condolence condolence beautiful beautiful"
},
{
  title: "Tulip",
  symbol: "🌷",
  keyword: "tulip nature flower plant vagina girls night girls night"
},
{
  title: "Blossom",
  symbol: "🌼",
  keyword: "blossom nature flower plant"
},
{
  title: "Cherry Blossom",
  symbol: "🌸",
  keyword: "cherry blossom nature flower plant tropical"
},
{
  title: "Bouquet",
  symbol: "💐",
  keyword: "bouquet nature flower plant rip rip condolence condolence"
},
{
  title: "Mushroom",
  symbol: "🍄",
  keyword: "mushroom nature plant drugs drugs"
},
{
  title: "Chestnut",
  symbol: "🌰",
  keyword: "chestnut nature plant"
},
{
  title: "Jack o Lantern",
  symbol: "🎃",
  keyword: "jack-o-lantern holidays halloween"
},
{
  title: "Shell",
  symbol: "🐚",
  keyword: "spiral shell"
},
{
  title: "Spider Web",
  symbol: "🕸",
  keyword: "spider web halloween"
},
{
  title: "Earth Americas",
  symbol: "🌎",
  keyword: "earth globe americas map vacation globe globe"
},
{
  title: "Earth Africa",
  symbol: "🌍",
  keyword: "earth globe europe-africa map vacation globe globe"
},
{
  title: "Earth Asia",
  symbol: "🌏",
  keyword: "earth globe asia-australia map vacation globe globe"
},
{
  title: "Full Moon",
  symbol: "🌕",
  keyword: "full moon symbol space sky moon moon"
},
{
  title: "Waning Gibbous Moon",
  symbol: "🌖",
  keyword: "waning gibbous moon symbol space sky moon moon"
},
{
  title: "Last Quarter Moon",
  symbol: "🌗",
  keyword: "last quarter moon symbol space sky moon moon"
},
{
  title: "Waning Crescent Moon",
  symbol: "🌘",
  keyword: "waning crescent moon symbol space sky moon moon"
},
{
  title: "New Moon",
  symbol: "🌑",
  keyword: "new moon symbol space sky moon moon"
},
{
  title: "Waxing Crescent Moon",
  symbol: "🌒",
  keyword: "waxing crescent moon symbol space sky moon moon"
},
{
  title: "First Quarter Moon",
  symbol: "🌓",
  keyword: "first quarter moon symbol space sky moon moon"
},
{
  title: "Waxing Gibbous Moon",
  symbol: "🌔",
  keyword: "waxing gibbous moon symbol space sky moon moon"
},
{
  title: "New Moon With Face",
  symbol: "🌚",
  keyword: "new moon with face space sky goodnight goodnight moon moon"
},
{
  title: "Full Moon With Face",
  symbol: "🌝",
  keyword: "full moon with face space sky goodnight goodnight moon moon"
},
{
  title: "First Quarter Moon With Face",
  symbol: "🌛",
  keyword: "first quarter moon with face space sky moon moon"
},
{
  title: "Last Quarter Moon With Face",
  symbol: "🌜",
  keyword: "last quarter moon with face space sky moon moon"
},
{
  title: "Sun With Face",
  symbol: "🌞",
  keyword: "sun with face sky day sun hump day hump day morning morning"
},
{
  title: "Crescent Moon",
  symbol: "🌙",
  keyword: "crescent moon space sky goodnight goodnight moon moon"
},
{
  title: "Star",
  symbol: "⭐",
  keyword: "white medium star space sky star"
},
{
  title: "Star2",
  symbol: "🌟",
  keyword: "glowing star space sky star"
},
{
  title: "Dizzy",
  symbol: "💫",
  keyword: "dizzy symbol star symbol"
},
{
  title: "Sparkles",
  symbol: "✨",
  keyword: "sparkles star girls night girls night"
},
{
  title: "Comet",
  symbol: "☄",
  keyword: "comet space sky"
},
{
  title: "Sunny",
  symbol: "☀",
  keyword:
    "black sun with rays weather sky day sun hot hot morning morning"
},
{
  title: "White Sun Small Cloud",
  symbol: "🌤",
  keyword: "white sun with small cloud weather sky cloud sun"
},
{
  title: "Partly Sunny",
  symbol: "⛅",
  keyword: "sun behind cloud weather sky cloud sun"
},
{
  title: "White Sun Cloud",
  symbol: "🌥",
  keyword: "white sun behind cloud weather sky cloud cold sun"
},
{
  title: "White Sun Rain Cloud",
  symbol: "🌦",
  keyword:
    "white sun behind cloud with rain weather sky cloud cold rain sun"
},
{
  title: "Cloud",
  symbol: "☁",
  keyword: "cloud weather sky cloud cold rain"
},
{
  title: "Cloud Rain",
  symbol: "🌧",
  keyword: "cloud with rain weather winter sky cloud cold rain"
},
{
  title: "Thunder Cloud Rain",
  symbol: "⛈",
  keyword: "thunder cloud and rain weather sky cloud cold rain"
},
{
  title: "Cloud Lightning",
  symbol: "🌩",
  keyword: "cloud with lightning weather sky cloud cold rain"
},
{
  title: "Zap",
  symbol: "⚡",
  keyword: "high voltage sign weather sky diarrhea diarrhea"
},
{
  title: "Fire",
  symbol: "🔥",
  keyword: "fire wth wth hot hot"
},
{
  title: "Boom",
  symbol: "💥",
  keyword: "collision symbol symbol blast blast"
},
{
  title: "Snowflake",
  symbol: "❄",
  keyword: "snowflake weather winter sky holidays cold snow snow"
},
{
  title: "Cloud Snow",
  symbol: "🌨",
  keyword: "cloud with snow weather winter sky cloud cold snow snow"
},
{
  title: "Snowman2",
  symbol: "☃",
  keyword: "snowman weather winter holidays christmas cold snow snow"
},
{
  title: "Snowman",
  symbol: "⛄",
  keyword: "snowman without snow weather winter holidays cold snow snow"
},
{
  title: "Wind Blowing Face",
  symbol: "🌬",
  keyword: "wind blowing face weather cold"
},
{
  title: "Dash",
  symbol: "💨",
  keyword: "dash symbol cloud cold smoking smoking"
},
{
  title: "Cloud Tornado",
  symbol: "🌪",
  keyword: "cloud with tornado weather sky cold"
},
{
  title: "Fog",
  symbol: "🌫",
  keyword: "fog weather sky cold"
},
{
  title: "Umbrella2",
  symbol: "☂",
  keyword: "umbrella weather object sky cold"
},
{
  title: "Umbrella",
  symbol: "☔",
  keyword: "umbrella with rain drops weather sky cold rain"
},
{
  title: "Droplet",
  symbol: "💧",
  keyword: "droplet weather sky rain"
},
{
  title: "Sweat Drops",
  symbol: "💦",
  keyword: "splashing sweat symbol rain stressed sweat"
},
{
  title: "Ocean",
  symbol: "🌊",
  keyword: "water wave weather boat tropical swim"
},
{
  title: "Green Apple",
  symbol: "🍏",
  keyword: "green apple fruit food"
},
{
  title: "Apple",
  symbol: "🍎",
  keyword: "red apple fruit food creationism creationism"
},
{
  title: "Pear",
  symbol: "🍐",
  keyword: "pear fruit food"
},
{
  title: "Tangerine",
  symbol: "🍊",
  keyword: "tangerine fruit food"
},
{
  title: "Lemon",
  symbol: "🍋",
  keyword: "lemon fruit food"
},
{
  title: "Banana",
  symbol: "🍌",
  keyword: "banana fruit penis food"
},
{
  title: "Watermelon",
  symbol: "🍉",
  keyword: "watermelon fruit food"
},
{
  title: "Grapes",
  symbol: "🍇",
  keyword: "grapes fruit food"
},
{
  title: "Strawberry",
  symbol: "🍓",
  keyword: "strawberry fruit food"
},
{
  title: "Melon",
  symbol: "🍈",
  keyword: "melon fruit boobs food"
},
{
  title: "Cherries",
  symbol: "🍒",
  keyword: "cherries fruit food"
},
{
  title: "Peach",
  symbol: "🍑",
  keyword: "peach fruit butt food"
},
{
  title: "Pineapple",
  symbol: "🍍",
  keyword: "pineapple fruit food tropical"
},
{
  title: "Tomato",
  symbol: "🍅",
  keyword: "tomato fruit vegetables food"
},
{
  title: "Eggplant",
  symbol: "🍆",
  keyword: "aubergine vegetables penis food"
},
{
  title: "Hot Pepper",
  symbol: "🌶",
  keyword: "hot pepper vegetables food"
},
{
  title: "Corn",
  symbol: "🌽",
  keyword: "ear of maize vegetables food"
},
{
  title: "Sweet Potato",
  symbol: "🍠",
  keyword: "roasted sweet potato vegetables food"
},
{
  title: "Honey Pot",
  symbol: "🍯",
  keyword: "honey pot food vagina"
},
{
  title: "Bread",
  symbol: "🍞",
  keyword: "bread food"
},
{
  title: "Cheese",
  symbol: "🧀",
  keyword: "cheese wedge food"
},
{
  title: "Poultry Leg",
  symbol: "🍗",
  keyword: "poultry leg food holidays"
},
{
  title: "Meat On Bone",
  symbol: "🍖",
  keyword: "meat on bone food"
},
{
  title: "Fried Shrimp",
  symbol: "🍤",
  keyword: "fried shrimp food"
},
{
  title: "Cooking",
  symbol: "🍳",
  keyword: "cooking food"
},
{
  title: "Hamburger",
  symbol: "🍔",
  keyword: "hamburger america food"
},
{
  title: "Fries",
  symbol: "🍟",
  keyword: "french fries america food"
},
{
  title: "Hotdog",
  symbol: "🌭",
  keyword: "hot dog america food"
},
{
  title: "Pizza",
  symbol: "🍕",
  keyword: "slice of pizza italian food boys night boys night"
},
{
  title: "Spaghetti",
  symbol: "🍝",
  keyword: "spaghetti noodles pasta italian food"
},
{
  title: "Taco",
  symbol: "🌮",
  keyword: "taco food mexican vagina"
},
{
  title: "Burrito",
  symbol: "🌯",
  keyword: "burrito food mexican"
},
{
  title: "Ramen",
  symbol: "🍜",
  keyword: "steaming bowl noodles ramen japan food"
},
{
  title: "Stew",
  symbol: "🍲",
  keyword: "pot of food food steam steam"
},
{
  title: "Fish Cake",
  symbol: "🍥",
  keyword: "fish cake with swirl design sushi food"
},
{
  title: "Sushi",
  symbol: "🍣",
  keyword: "sushi sushi japan food"
},
{
  title: "Bento",
  symbol: "🍱",
  keyword: "bento box object sushi japan food"
},
{
  title: "Curry",
  symbol: "🍛",
  keyword: "curry and rice food"
},
{
  title: "Rice Ball",
  symbol: "🍙",
  keyword: "rice ball sushi japan food"
},
{
  title: "Rice",
  symbol: "🍚",
  keyword: "cooked rice sushi japan food"
},
{
  title: "Rice Cracker",
  symbol: "🍘",
  keyword: "rice cracker sushi food"
},
{
  title: "Oden",
  symbol: "🍢",
  keyword: "oden food"
},
{
  title: "Dango",
  symbol: "🍡",
  keyword: "dango food"
},
{
  title: "Shaved Ice",
  symbol: "🍧",
  keyword: "shaved ice food"
},
{
  title: "Ice Cream",
  symbol: "🍨",
  keyword: "ice cream food"
},
{
  title: "Icecream",
  symbol: "🍦",
  keyword: "soft ice cream food"
},
{
  title: "Cake",
  symbol: "🍰",
  keyword: "shortcake food"
},
{
  title: "Birthday",
  symbol: "🎂",
  keyword: "birthday cake birthday food parties parties"
},
{
  title: "Custard",
  symbol: "🍮",
  keyword: "custard food"
},
{
  title: "Candy",
  symbol: "🍬",
  keyword: "candy food halloween"
},
{
  title: "Lollipop",
  symbol: "🍭",
  keyword: "lollipop food halloween"
},
{
  title: "Chocolate Bar",
  symbol: "🍫",
  keyword: "chocolate bar food halloween"
},
{
  title: "Popcorn",
  symbol: "🍿",
  keyword: "popcorn food parties parties"
},
{
  title: "Doughnut",
  symbol: "🍩",
  keyword: "doughnut food"
},
{
  title: "Cookie",
  symbol: "🍪",
  keyword: "cookie food vagina"
},
{
  title: "Beer",
  symbol: "🍺",
  keyword: "beer mug drink beer alcohol parties parties"
},
{
  title: "Beers",
  symbol: "🍻",
  keyword:
    "clinking beer mugs drink cheers beer alcohol thank you boys night boys night parties parties"
},
{
  title: "Wine Glass",
  symbol: "🍷",
  keyword:
    "wine glass drink italian alcohol girls night girls night parties parties"
},
{
  title: "Cocktail",
  symbol: "🍸",
  keyword:
    "cocktail glass drink cocktail alcohol girls night girls night parties parties"
},
{
  title: "Tropical Drink",
  symbol: "🍹",
  keyword: "tropical drink drink cocktail tropical alcohol"
},
{
  title: "Champagne",
  symbol: "🍾",
  keyword: "bottle with popping cork drink cheers alcohol parties parties"
},
{
  title: "Sake",
  symbol: "🍶",
  keyword:
    "sake bottle and cup drink japan sake alcohol girls night girls night"
},
{
  title: "Tea",
  symbol: "🍵",
  keyword:
    "teacup without handle drink japan caffeine steam steam morning morning"
},
{
  title: "Coffee",
  symbol: "☕",
  keyword: "hot beverage drink caffeine steam steam morning morning"
},
{
  title: "Baby Bottle",
  symbol: "🍼",
  keyword: "baby bottle drink object food baby"
},
{
  title: "Fork And Knife",
  symbol: "🍴",
  keyword: "fork and knife object weapon food"
},
{
  title: "Fork Knife Plate",
  symbol: "🍽",
  keyword: "fork and knife with plate object food"
},
{
  title: "Soccer",
  symbol: "⚽",
  keyword: "soccer ball game ball sport soccer football"
},
{
  title: "Basketball",
  symbol: "🏀",
  keyword: "basketball and hoop game ball sport basketball"
},
{
  title: "Football",
  symbol: "🏈",
  keyword: "american football america game ball sport football"
},
{
  title: "Baseball",
  symbol: "⚾",
  keyword: "baseball game ball sport baseball"
},
{
  title: "Tennis",
  symbol: "🎾",
  keyword: "tennis racquet and ball game ball sport tennis"
},
{
  title: "Volleyball",
  symbol: "🏐",
  keyword: "volleyball game ball sport volleyball"
},
{
  title: "Rugby Football",
  symbol: "🏉",
  keyword: "rugby football game sport football"
},
{
  title: "8ball",
  symbol: "🎱",
  keyword: "billiards game ball sport billiards luck boys night boys night"
},
{
  title: "Golf",
  symbol: "⛳",
  keyword: "flag in hole game ball vacation sport golf golf"
},
{
  title: "Golfer",
  symbol: "🏌",
  keyword: "golfer men game ball vacation sport golf golf"
},
{
  title: "Ping Pong",
  symbol: "🏓",
  keyword: "table tennis paddle and ball game ball sport ping pong"
},
{
  title: "Badminton",
  symbol: "🏸",
  keyword: "badminton racquet game sport badminton"
},
{
  title: "Hockey",
  symbol: "🏒",
  keyword: "ice hockey stick and puck game sport hockey"
},
{
  title: "Field Hockey",
  symbol: "🏑",
  keyword: "field hockey stick and ball ball sport hockey"
},
{
  title: "Cricket",
  symbol: "🏏",
  keyword: "cricket bat and ball ball sport cricket"
},
{
  title: "Ski",
  symbol: "🎿",
  keyword: "ski and ski boot cold sport skiing"
},
{
  title: "Skier",
  symbol: "⛷",
  keyword: "skier hat vacation cold sport skiing"
},
{
  title: "Snowboarder",
  symbol: "🏂",
  keyword: "snowboarder hat vacation cold sport snowboarding"
},
{
  title: "Ice Skate",
  symbol: "⛸",
  keyword: "ice skate cold sport ice skating"
},
{
  title: "Bow And Arrow",
  symbol: "🏹",
  keyword: "bow and arrow weapon sport"
},
{
  title: "Fishing Pole And Fish",
  symbol: "🎣",
  keyword: "fishing pole and fish vacation sport fishing"
},
{
  title: "Rowboat",
  symbol: "🚣",
  keyword: "rowboat men workout sport rowing diversity diversity"
},
{
  title: "Swimmer",
  symbol: "🏊",
  keyword: "swimmer workout sport swim diversity diversity"
},
{
  title: "Surfer",
  symbol: "🏄",
  keyword: "surfer men vacation tropical sport diversity diversity"
},
{
  title: "Bath",
  symbol: "🛀",
  keyword: "bath bathroom tired diversity diversity steam steam"
},
{
  title: "Basketball Player",
  symbol: "⛹",
  keyword:
    "person with ball men game ball sport basketball diversity diversity"
},
{
  title: "Lifter",
  symbol: "🏋",
  keyword:
    "weight lifter men workout flex sport weight lifting win win diversity diversity"
},
{
  title: "Bicyclist",
  symbol: "🚴",
  keyword: "bicyclist men workout sport bike diversity diversity"
},
{
  title: "Mountain Bicyclist",
  symbol: "🚵",
  keyword: "mountain bicyclist men sport bike diversity diversity"
},
{
  title: "Horse Racing",
  symbol: "🏇",
  keyword: "horse racing men sport horse racing"
},
{
  title: "Levitate",
  symbol: "🕴",
  keyword: "man in business suit levitating men job job"
},
{
  title: "Trophy",
  symbol: "🏆",
  keyword:
    "trophy object game award win win perfect perfect parties parties"
},
{
  title: "Running Shirt With Sash",
  symbol: "🎽",
  keyword: "running shirt with sash award"
},
{
  title: "Medal",
  symbol: "🏅",
  keyword: "sports medal object award sport win win perfect perfect"
},
{
  title: "Military Medal",
  symbol: "🎖",
  keyword: "military medal object award win win"
},
{
  title: "Reminder Ribbon",
  symbol: "🎗",
  keyword: "reminder ribbon award"
},
{
  title: "Rosette",
  symbol: "🏵",
  keyword: "rosette tropical"
},
{
  title: "Ticket",
  symbol: "🎫",
  keyword: "ticket theatre movie parties parties"
},
{
  title: "Tickets",
  symbol: "🎟",
  keyword: "admission tickets theatre movie parties parties"
},
{
  title: "Performing Arts",
  symbol: "🎭",
  keyword: "performing arts theatre movie"
},
{
  title: "Art",
  symbol: "🎨",
  keyword: "artist palette"
},
{
  title: "Circus Tent",
  symbol: "🎪",
  keyword: "circus tent circus tent"
},
{
  title: "Microphone",
  symbol: "🎤",
  keyword: "microphone instruments"
},
{
  title: "Headphones",
  symbol: "🎧",
  keyword: "headphone instruments"
},
{
  title: "Musical Score",
  symbol: "🎼",
  keyword: "musical score instruments"
},
{
  title: "Musical Keyboard",
  symbol: "🎹",
  keyword: "musical keyboard instruments"
},
{
  title: "Saxophone",
  symbol: "🎷",
  keyword: "saxophone instruments"
},
{
  title: "Trumpet",
  symbol: "🎺",
  keyword: "trumpet instruments"
},
{
  title: "Guitar",
  symbol: "🎸",
  keyword: "guitar instruments"
},
{
  title: "Violin",
  symbol: "🎻",
  keyword: "violin instruments sarcastic sarcastic"
},
{
  title: "Clapper",
  symbol: "🎬",
  keyword: "clapper board movie"
},
{
  title: "Video Game",
  symbol: "🎮",
  keyword: "video game electronics game boys night boys night"
},
{
  title: "Space Invader",
  symbol: "👾",
  keyword: "alien monster monster alien"
},
{
  title: "Dart",
  symbol: "🎯",
  keyword: "direct hit game sport boys night boys night"
},
{
  title: "Game Die",
  symbol: "🎲",
  keyword: "game die object game boys night boys night"
},
{
  title: "Slot Machine",
  symbol: "🎰",
  keyword: "slot machine game boys night boys night"
},
{
  title: "Bowling",
  symbol: "🎳",
  keyword: "bowling game ball sport boys night boys night"
},
{
  title: "Red Car",
  symbol: "🚗",
  keyword: "automobile transportation car travel"
},
{
  title: "Taxi",
  symbol: "🚕",
  keyword: "taxi transportation car travel"
},
{
  title: "Blue Car",
  symbol: "🚙",
  keyword: "recreational vehicle transportation car travel"
},
{
  title: "Bus",
  symbol: "🚌",
  keyword: "bus transportation bus office"
},
{
  title: "Trolleybus",
  symbol: "🚎",
  keyword: "trolleybus transportation bus travel"
},
{
  title: "Race Car",
  symbol: "🏎",
  keyword: "racing car transportation car"
},
{
  title: "Police Car",
  symbol: "🚓",
  keyword: "police car transportation car police police 911 911"
},
{
  title: "Ambulance",
  symbol: "🚑",
  keyword: "ambulance transportation 911 911"
},
{
  title: "Fire Engine",
  symbol: "🚒",
  keyword: "fire engine transportation truck 911 911"
},
{
  title: "Minibus",
  symbol: "🚐",
  keyword: "minibus transportation bus"
},
{
  title: "Truck",
  symbol: "🚚",
  keyword: "delivery truck transportation truck"
},
{
  title: "Articulated Lorry",
  symbol: "🚛",
  keyword: "articulated lorry transportation truck"
},
{
  title: "Tractor",
  symbol: "🚜",
  keyword: "tractor transportation"
},
{
  title: "Motorcycle",
  symbol: "🏍",
  keyword: "racing motorcycle transportation travel bike"
},
{
  title: "Bike",
  symbol: "🚲",
  keyword: "bicycle transportation travel bike"
},
{
  title: "Rotating Light",
  symbol: "🚨",
  keyword:
    "police cars revolving light transportation object police police 911 911"
},
{
  title: "Oncoming Police Car",
  symbol: "🚔",
  keyword: "oncoming police car transportation car police police 911 911"
},
{
  title: "Oncoming Bus",
  symbol: "🚍",
  keyword: "oncoming bus transportation bus travel"
},
{
  title: "Oncoming Automobile",
  symbol: "🚘",
  keyword: "oncoming automobile transportation car travel"
},
{
  title: "Oncoming Taxi",
  symbol: "🚖",
  keyword: "oncoming taxi transportation car travel"
},
{
  title: "Aerial Tramway",
  symbol: "🚡",
  keyword: "aerial tramway transportation travel train"
},
{
  title: "Mountain Cableway",
  symbol: "🚠",
  keyword: "mountain cableway transportation travel train"
},
{
  title: "Suspension Railway",
  symbol: "🚟",
  keyword: "suspension railway transportation travel train"
},
{
  title: "Railway Car",
  symbol: "🚃",
  keyword: "railway car transportation travel train"
},
{
  title: "Train",
  symbol: "🚋",
  keyword: "tram car transportation travel train"
},
{
  title: "Monorail",
  symbol: "🚝",
  keyword: "monorail transportation travel train vacation"
},
{
  title: "Bullettrain Side",
  symbol: "🚄",
  keyword: "high-speed train transportation travel train"
},
{
  title: "Bullettrain Front",
  symbol: "🚅",
  keyword: "high-speed train with bullet nose transportation travel train"
},
{
  title: "Light Rail",
  symbol: "🚈",
  keyword: "light rail transportation travel train"
},
{
  title: "Mountain Railway",
  symbol: "🚞",
  keyword: "mountain railway transportation travel train"
},
{
  title: "Steam Locomotive",
  symbol: "🚂",
  keyword: "steam locomotive transportation travel train steam steam"
},
{
  title: "Train2",
  symbol: "🚆",
  keyword: "train transportation travel train"
},
{
  title: "Metro",
  symbol: "🚇",
  keyword: "metro transportation travel train"
},
{
  title: "Tram",
  symbol: "🚊",
  keyword: "tram transportation travel train"
},
{
  title: "Station",
  symbol: "🚉",
  keyword: "station transportation travel train"
},
{
  title: "Helicopter",
  symbol: "🚁",
  keyword: "helicopter transportation plane travel fly fly"
},
{
  title: "Airplane Small",
  symbol: "🛩",
  keyword: "small airplane transportation plane travel vacation fly fly"
},
{
  title: "Airplane",
  symbol: "✈",
  keyword: "airplane transportation plane travel vacation fly fly"
},
{
  title: "Airplane Departure",
  symbol: "🛫",
  keyword:
    "airplane departure transportation plane travel vacation fly fly"
},
{
  title: "Airplane Arriving",
  symbol: "🛬",
  keyword: "airplane arriving transportation plane travel vacation fly fly"
},
{
  title: "Sailboat",
  symbol: "⛵",
  keyword: "sailboat transportation travel boat vacation"
},
{
  title: "Motorboat",
  symbol: "🛥",
  keyword: "motorboat transportation travel boat"
},
{
  title: "Speedboat",
  symbol: "🚤",
  keyword: "speedboat transportation travel boat vacation tropical"
},
{
  title: "Ferry",
  symbol: "⛴",
  keyword: "ferry transportation travel boat vacation"
},
{
  title: "Cruise Ship",
  symbol: "🛳",
  keyword: "passenger ship transportation travel boat vacation"
},
{
  title: "Rocket",
  symbol: "🚀",
  keyword: "rocket transportation object space fly fly blast blast"
},
{
  title: "Satellite Orbital",
  symbol: "🛰",
  keyword: "satellite object"
},
{
  title: "Seat",
  symbol: "💺",
  keyword: "seat transportation object travel vacation"
},
{
  title: "Anchor",
  symbol: "⚓",
  keyword: "anchor object travel boat vacation"
},
{
  title: "Construction",
  symbol: "🚧",
  keyword: "construction sign object"
},
{
  title: "Fuelpump",
  symbol: "⛽",
  keyword: "fuel pump object gas pump"
},
{
  title: "Busstop",
  symbol: "🚏",
  keyword: "bus stop object"
},
{
  title: "Vertical Traffic Light",
  symbol: "🚦",
  keyword: "vertical traffic light object stop light"
},
{
  title: "Traffic Light",
  symbol: "🚥",
  keyword: "horizontal traffic light object stop light"
},
{
  title: "Checkered Flag",
  symbol: "🏁",
  keyword: "chequered flag object"
},
{
  title: "Ship",
  symbol: "🚢",
  keyword: "ship transportation travel boat vacation"
},
{
  title: "Ferris Wheel",
  symbol: "🎡",
  keyword: "ferris wheel places vacation ferris wheel"
},
{
  title: "Roller Coaster",
  symbol: "🎢",
  keyword: "roller coaster places vacation roller coaster"
},
{
  title: "Carousel Horse",
  symbol: "🎠",
  keyword: "carousel horse places object vacation roller coaster carousel"
},
{
  title: "Construction Site",
  symbol: "🏗",
  keyword: "building construction building crane"
},
{
  title: "Foggy",
  symbol: "🌁",
  keyword: "foggy places building sky travel vacation"
},
{
  title: "Tokyo Tower",
  symbol: "🗼",
  keyword: "tokyo tower places travel vacation eiffel tower"
},
{
  title: "Factory",
  symbol: "🏭",
  keyword: "factory places building travel steam steam"
},
{
  title: "Fountain",
  symbol: "⛲",
  keyword: "fountain travel vacation"
},
{
  title: "Rice Scene",
  symbol: "🎑",
  keyword: "moon viewing ceremony places space sky travel"
},
{
  title: "Mountain",
  symbol: "⛰",
  keyword: "mountain places travel vacation camp"
},
{
  title: "Mountain Snow",
  symbol: "🏔",
  keyword: "snow capped mountain places travel vacation cold camp"
},
{
  title: "Mount Fuji",
  symbol: "🗻",
  keyword: "mount fuji places travel vacation cold camp"
},
{
  title: "Volcano",
  symbol: "🌋",
  keyword: "volcano places tropical"
},
{
  title: "Japan",
  symbol: "🗾",
  keyword: "silhouette of japan places travel map vacation tropical"
},
{
  title: "Camping",
  symbol: "🏕",
  keyword: "camping places travel vacation camp"
},
{
  title: "Tent",
  symbol: "⛺",
  keyword: "tent places travel vacation camp"
},
{
  title: "Park",
  symbol: "🏞",
  keyword: "national park travel vacation park camp"
},
{
  title: "Motorway",
  symbol: "🛣",
  keyword: "motorway travel vacation camp"
},
{
  title: "Railway Track",
  symbol: "🛤",
  keyword: "railway track travel train vacation"
},
{
  title: "Sunrise",
  symbol: "🌅",
  keyword:
    "sunrise places sky travel vacation tropical day sun hump day hump day morning morning"
},
{
  title: "Sunrise Over Mountains",
  symbol: "🌄",
  keyword:
    "sunrise over mountains places sky travel vacation day sun camp morning morning"
},
{
  title: "Desert",
  symbol: "🏜",
  keyword: "desert places travel vacation hot hot"
},
{
  title: "Beach",
  symbol: "🏖",
  keyword: "beach with umbrella places travel vacation tropical beach swim"
},
{
  title: "Island",
  symbol: "🏝",
  keyword: "desert island places travel vacation tropical beach swim"
},
{
  title: "City Sunset",
  symbol: "🌇",
  keyword: "sunset over buildings places building sky vacation"
},
{
  title: "City Dusk",
  symbol: "🌆",
  keyword: "cityscape at dusk places building"
},
{
  title: "Cityscape",
  symbol: "🏙",
  keyword: "cityscape places building vacation"
},
{
  title: "Night With Stars",
  symbol: "🌃",
  keyword:
    "night with stars places building sky vacation goodnight goodnight"
},
{
  title: "Bridge At Night",
  symbol: "🌉",
  keyword: "bridge at night places travel vacation goodnight goodnight"
},
{
  title: "Milky Way",
  symbol: "🌌",
  keyword: "milky way places space sky travel vacation"
},
{
  title: "Stars",
  symbol: "🌠",
  keyword: "shooting star space"
},
{
  title: "Sparkler",
  symbol: "🎇",
  keyword: "firework sparkler parties parties"
},
{
  title: "Fireworks",
  symbol: "🎆",
  keyword: "fireworks parties parties"
},
{
  title: "Rainbow",
  symbol: "🌈",
  keyword: "rainbow weather gay sky rain"
},
{
  title: "Homes",
  symbol: "🏘",
  keyword: "house buildings places building house"
},
{
  title: "European Castle",
  symbol: "🏰",
  keyword: "european castle places building travel vacation"
},
{
  title: "Japanese Castle",
  symbol: "🏯",
  keyword: "japanese castle places building travel vacation"
},
{
  title: "Stadium",
  symbol: "🏟",
  keyword: "stadium places building travel vacation boys night boys night"
},
{
  title: "Statue Of Liberty",
  symbol: "🗽",
  keyword:
    "statue of liberty places america travel vacation statue of liberty free speech free speech"
},
{
  title: "House",
  symbol: "🏠",
  keyword: "house building places building house"
},
{
  title: "House With Garden",
  symbol: "🏡",
  keyword: "house with garden places building house"
},
{
  title: "House Abandoned",
  symbol: "🏚",
  keyword: "derelict house building places building house"
},
{
  title: "Office",
  symbol: "🏢",
  keyword: "office building places building work"
},
{
  title: "Department Store",
  symbol: "🏬",
  keyword: "department store places building"
},
{
  title: "Post Office",
  symbol: "🏣",
  keyword: "japanese post office places building post office"
},
{
  title: "European Post Office",
  symbol: "🏤",
  keyword: "european post office places building post office"
},
{
  title: "Hospital",
  symbol: "🏥",
  keyword: "hospital places building health 911 911"
},
{
  title: "Bank",
  symbol: "🏦",
  keyword: "bank places building"
},
{
  title: "Hotel",
  symbol: "🏨",
  keyword: "hotel places building vacation"
},
{
  title: "Convenience Store",
  symbol: "🏪",
  keyword: "convenience store places building"
},
{
  title: "School",
  symbol: "🏫",
  keyword: "school places building"
},
{
  title: "Love Hotel",
  symbol: "🏩",
  keyword: "love hotel places building love"
},
{
  title: "Wedding",
  symbol: "💒",
  keyword: "wedding places wedding building love parties parties"
},
{
  title: "Classical Building",
  symbol: "🏛",
  keyword: "classical building places building travel vacation"
},
{
  title: "Church",
  symbol: "⛪",
  keyword: "church places wedding religion building condolence condolence"
},
{
  title: "Mosque",
  symbol: "🕌",
  keyword: "mosque places religion building vacation condolence condolence"
},
{
  title: "Synagogue",
  symbol: "🕍",
  keyword:
    "synagogue places religion building travel vacation condolence condolence"
},
{
  title: "Kaaba",
  symbol: "🕋",
  keyword: "kaaba places religion building condolence condolence"
},
{
  title: "Shinto Shrine",
  symbol: "⛩",
  keyword: "shinto shrine places building travel vacation"
},
{
  title: "Watch",
  symbol: "⌚",
  keyword: "watch electronics time"
},
{
  title: "Iphone",
  symbol: "📱",
  keyword: "mobile phone electronics phone selfie selfie"
},
{
  title: "Calling",
  symbol: "📲",
  keyword:
    "mobile phone with rightwards arrow at left electronics phone selfie selfie"
},
{
  title: "Computer",
  symbol: "💻",
  keyword: "personal computer electronics work office"
},
{
  title: "Keyboard",
  symbol: "⌨",
  keyword: "keyboard electronics work office"
},
{
  title: "Desktop",
  symbol: "🖥",
  keyword: "desktop computer electronics work"
},
{
  title: "Printer",
  symbol: "🖨",
  keyword: "printer electronics work office"
},
{
  title: "Mouse Three Button",
  symbol: "🖱",
  keyword: "three button mouse electronics work game office"
},
{
  title: "Trackball",
  symbol: "🖲",
  keyword: "trackball electronics work game office"
},
{
  title: "Joystick",
  symbol: "🕹",
  keyword: "joystick electronics game boys night boys night"
},
{
  title: "Compression",
  symbol: "🗜",
  keyword: "compression"
},
{
  title: "Minidisc",
  symbol: "💽",
  keyword: "minidisc electronics"
},
{
  title: "Floppy Disk",
  symbol: "💾",
  keyword: "floppy disk electronics office"
},
{
  title: "Cd",
  symbol: "💿",
  keyword: "optical disc electronics"
},
{
  title: "Dvd",
  symbol: "📀",
  keyword: "dvd electronics"
},
{
  title: "Vhs",
  symbol: "📼",
  keyword: "videocassette electronics"
},
{
  title: "Camera",
  symbol: "📷",
  keyword: "camera electronics camera selfie selfie"
},
{
  title: "Camera With Flash",
  symbol: "📸",
  keyword: "camera with flash electronics camera"
},
{
  title: "Video Camera",
  symbol: "📹",
  keyword: "video camera electronics camera movie"
},
{
  title: "Movie Camera",
  symbol: "🎥",
  keyword: "movie camera object camera movie"
},
{
  title: "Projector",
  symbol: "📽",
  keyword: "film projector object camera movie"
},
{
  title: "Film Frames",
  symbol: "🎞",
  keyword: "film frames object camera movie"
},
{
  title: "Telephone Receiver",
  symbol: "📞",
  keyword: "telephone receiver electronics phone"
},
{
  title: "Telephone",
  symbol: "☎",
  keyword: "black telephone electronics phone"
},
{
  title: "Pager",
  symbol: "📟",
  keyword: "pager electronics work"
},
{
  title: "Fax",
  symbol: "📠",
  keyword: "fax machine electronics work office"
},
{
  title: "Tv",
  symbol: "📺",
  keyword: "television electronics"
},
{
  title: "Radio",
  symbol: "📻",
  keyword: "radio electronics"
},
{
  title: "Microphone2",
  symbol: "🎙",
  keyword: "studio microphone electronics object"
},
{
  title: "Level Slider",
  symbol: "🎚",
  keyword: "level slider"
},
{
  title: "Control Knobs",
  symbol: "🎛",
  keyword: "control knobs time"
},
{
  title: "Stopwatch",
  symbol: "⏱",
  keyword: "stopwatch electronics time"
},
{
  title: "Timer",
  symbol: "⏲",
  keyword: "timer clock object time"
},
{
  title: "Alarm Clock",
  symbol: "⏰",
  keyword: "alarm clock object time"
},
{
  title: "Clock",
  symbol: "🕰",
  keyword: "mantlepiece clock object time"
},
{
  title: "Hourglass Flowing Sand",
  symbol: "⏳",
  keyword: "hourglass with flowing sand object time"
},
{
  title: "Hourglass",
  symbol: "⌛",
  keyword: "hourglass object time"
},
{
  title: "Satellite",
  symbol: "📡",
  keyword: "satellite antenna object"
},
{
  title: "Battery",
  symbol: "🔋",
  keyword: "battery object"
},
{
  title: "Electric Plug",
  symbol: "🔌",
  keyword: "electric plug electronics"
},
{
  title: "Bulb",
  symbol: "💡",
  keyword: "electric light bulb object science"
},
{
  title: "Flashlight",
  symbol: "🔦",
  keyword: "electric torch electronics object"
},
{
  title: "Candle",
  symbol: "🕯",
  keyword: "candle object"
},
{
  title: "Wastebasket",
  symbol: "🗑",
  keyword: "wastebasket object work"
},
{
  title: "Oil",
  symbol: "🛢",
  keyword: "oil drum object"
},
{
  title: "Money With Wings",
  symbol: "💸",
  keyword: "money with wings money money boys night boys night"
},
{
  title: "Dollar",
  symbol: "💵",
  keyword: "banknote with dollar sign money money"
},
{
  title: "Yen",
  symbol: "💴",
  keyword: "banknote with yen sign money money"
},
{
  title: "Euro",
  symbol: "💶",
  keyword: "banknote with euro sign money money"
},
{
  title: "Pound",
  symbol: "💷",
  keyword: "banknote with pound sign money money"
},
{
  title: "Moneybag",
  symbol: "💰",
  keyword: "money bag bag award money money"
},
{
  title: "Credit Card",
  symbol: "💳",
  keyword: "credit card object money money boys night boys night"
},
{
  title: "Gem",
  symbol: "💎",
  keyword: "gem stone object gem"
},
{
  title: "Scales",
  symbol: "⚖",
  keyword: "scales object"
},
{
  title: "Wrench",
  symbol: "🔧",
  keyword: "wrench object tool"
},
{
  title: "Hammer",
  symbol: "🔨",
  keyword: "hammer object tool weapon"
},
{
  title: "Hammer Pick",
  symbol: "⚒",
  keyword: "hammer and pick object tool weapon"
},
{
  title: "Tools",
  symbol: "🛠",
  keyword: "hammer and wrench object tool"
},
{
  title: "Pick",
  symbol: "⛏",
  keyword: "pick object tool weapon"
},
{
  title: "Nut And Bolt",
  symbol: "🔩",
  keyword: "nut and bolt object tool nutcase nutcase"
},
{
  title: "Gear",
  symbol: "⚙",
  keyword: "gear object tool"
},
{
  title: "Chains",
  symbol: "⛓",
  keyword: "chains object tool"
},
{
  title: "Gun",
  symbol: "🔫",
  keyword: "pistol object weapon dead gun sarcastic sarcastic"
},
{
  title: "Bomb",
  symbol: "💣",
  keyword: "bomb object weapon dead blast blast"
},
{
  title: "Knife",
  symbol: "🔪",
  keyword: "hocho object weapon"
},
{
  title: "Dagger",
  symbol: "🗡",
  keyword: "dagger knife object weapon"
},
{
  title: "Crossed Swords",
  symbol: "⚔",
  keyword: "crossed swords object weapon"
},
{
  title: "Shield",
  symbol: "🛡",
  keyword: "shield object"
},
{
  title: "Smoking",
  symbol: "🚬",
  keyword: "smoking symbol symbol drugs drugs smoking smoking"
},
{
  title: "Skull Crossbones",
  symbol: "☠",
  keyword: "skull and crossbones symbol dead skull"
},
{
  title: "Coffin",
  symbol: "⚰",
  keyword: "coffin object dead rip rip"
},
{
  title: "Urn",
  symbol: "⚱",
  keyword: "funeral urn object dead rip rip"
},
{
  title: "Amphora",
  symbol: "🏺",
  keyword: "amphora object"
},
{
  title: "Crystal Ball",
  symbol: "🔮",
  keyword: "crystal ball object ball"
},
{
  title: "Prayer Beads",
  symbol: "📿",
  keyword: "prayer beads object rosary"
},
{
  title: "Barber",
  symbol: "💈",
  keyword: "barber pole object"
},
{
  title: "Alembic",
  symbol: "⚗",
  keyword: "alembic object science"
},
{
  title: "Telescope",
  symbol: "🔭",
  keyword: "telescope object space science"
},
{
  title: "Microscope",
  symbol: "🔬",
  keyword: "microscope object science"
},
{
  title: "Hole",
  symbol: "🕳",
  keyword: "hole object"
},
{
  title: "Pill",
  symbol: "💊",
  keyword: "pill object health drugs drugs"
},
{
  title: "Syringe",
  symbol: "💉",
  keyword: "syringe object weapon health drugs drugs"
},
{
  title: "Thermometer",
  symbol: "🌡",
  keyword: "thermometer object science health hot hot"
},
{
  title: "Label",
  symbol: "🏷",
  keyword: "label object"
},
{
  title: "Bookmark",
  symbol: "🔖",
  keyword: "bookmark object book"
},
{
  title: "Toilet",
  symbol: "🚽",
  keyword: "toilet object bathroom"
},
{
  title: "Shower",
  symbol: "🚿",
  keyword: "shower object bathroom"
},
{
  title: "Bathtub",
  symbol: "🛁",
  keyword: "bathtub object bathroom tired steam steam"
},
{
  title: "Key",
  symbol: "🔑",
  keyword: "key object lock"
},
{
  title: "Key2",
  symbol: "🗝",
  keyword: "old key object lock"
},
{
  title: "Couch",
  symbol: "🛋",
  keyword: "couch and lamp object"
},
{
  title: "Sleeping Accommodation",
  symbol: "🛌",
  keyword: "sleeping accommodation tired"
},
{
  title: "Bed",
  symbol: "🛏",
  keyword: "bed object tired"
},
{
  title: "Door",
  symbol: "🚪",
  keyword: "door object"
},
{
  title: "Bellhop",
  symbol: "🛎",
  keyword: "bellhop bell object"
},
{
  title: "Frame Photo",
  symbol: "🖼",
  keyword: "frame with picture travel vacation"
},
{
  title: "Map",
  symbol: "🗺",
  keyword: "world map travel map vacation"
},
{
  title: "Beach Umbrella",
  symbol: "⛱",
  keyword: "umbrella on ground travel vacation tropical"
},
{
  title: "Moyai",
  symbol: "🗿",
  keyword: "moyai travel vacation"
},
{
  title: "Shopping Bags",
  symbol: "🛍",
  keyword: "shopping bags object birthday parties parties"
},
{
  title: "Balloon",
  symbol: "🎈",
  keyword: "balloon object birthday good good parties parties"
},
{
  title: "Flags",
  symbol: "🎏",
  keyword: "carp streamer object japan"
},
{
  title: "Ribbon",
  symbol: "🎀",
  keyword: "ribbon object gift birthday"
},
{
  title: "Gift",
  symbol: "🎁",
  keyword:
    "wrapped present object gift birthday holidays christmas parties parties"
},
{
  title: "Confetti Ball",
  symbol: "🎊",
  keyword:
    "confetti ball object birthday holidays cheers girls night girls night boys night boys night parties parties"
},
{
  title: "Tada",
  symbol: "🎉",
  keyword:
    "party popper object birthday holidays cheers good good girls night girls night boys night boys night parties parties"
},
{
  title: "Dolls",
  symbol: "🎎",
  keyword: "japanese dolls people japan"
},
{
  title: "Wind Chime",
  symbol: "🎐",
  keyword: "wind chime object japan"
},
{
  title: "Crossed Flags",
  symbol: "🎌",
  keyword: "crossed flags object japan"
},
{
  title: "Izakaya Lantern",
  symbol: "🏮",
  keyword: "izakaya lantern object japan"
},
{
  title: "Envelope",
  symbol: "✉",
  keyword: "envelope object office write"
},
{
  title: "Envelope With Arrow",
  symbol: "📩",
  keyword: "envelope with downwards arrow above object office"
},
{
  title: "Incoming Envelope",
  symbol: "📨",
  keyword: "incoming envelope object"
},
{
  title: "E-mail",
  symbol: "📧",
  keyword: "e-mail symbol office"
},
{
  title: "Love Letter",
  symbol: "💌",
  keyword: "love letter object"
},
{
  title: "Postbox",
  symbol: "📮",
  keyword: "postbox object"
},
{
  title: "Mailbox Closed",
  symbol: "📪",
  keyword: "closed mailbox with lowered flag object office"
},
{
  title: "Mailbox",
  symbol: "📫",
  keyword: "closed mailbox with raised flag object"
},
{
  title: "Mailbox With Mail",
  symbol: "📬",
  keyword: "open mailbox with raised flag object"
},
{
  title: "Mailbox With No Mail",
  symbol: "📭",
  keyword: "open mailbox with lowered flag object"
},
{
  title: "Package",
  symbol: "📦",
  keyword: "package object gift office"
},
{
  title: "Postal Horn",
  symbol: "📯",
  keyword: "postal horn object"
},
{
  title: "Inbox Tray",
  symbol: "📥",
  keyword: "inbox tray work office"
},
{
  title: "Outbox Tray",
  symbol: "📤",
  keyword: "outbox tray work office"
},
{
  title: "Scroll",
  symbol: "📜",
  keyword: "scroll object office"
},
{
  title: "Page With Curl",
  symbol: "📃",
  keyword: "page with curl office write"
},
{
  title: "Bookmark Tabs",
  symbol: "📑",
  keyword: "bookmark tabs office write"
},
{
  title: "Bar Chart",
  symbol: "📊",
  keyword: "bar chart work office"
},
{
  title: "Chart With Upwards Trend",
  symbol: "📈",
  keyword: "chart with upwards trend work office"
},
{
  title: "Chart With Downwards Trend",
  symbol: "📉",
  keyword: "chart with downwards trend work office"
},
{
  title: "Page Facing Up",
  symbol: "📄",
  keyword: "page facing up work office write"
},
{
  title: "Date",
  symbol: "📅",
  keyword: "calendar object office"
},
{
  title: "Calendar",
  symbol: "📆",
  keyword: "tear-off calendar object office"
},
{
  title: "Calendar Spiral",
  symbol: "🗓",
  keyword: "spiral calendar pad object office"
},
{
  title: "Card Index",
  symbol: "📇",
  keyword: "card index object work office"
},
{
  title: "Card Box",
  symbol: "🗃",
  keyword: "card file box object work office"
},
{
  title: "Ballot Box",
  symbol: "🗳",
  keyword: "ballot box with ballot object office"
},
{
  title: "File Cabinet",
  symbol: "🗄",
  keyword: "file cabinet object work office"
},
{
  title: "Clipboard",
  symbol: "📋",
  keyword: "clipboard object work office write"
},
{
  title: "Notepad Spiral",
  symbol: "🗒",
  keyword: "spiral note pad work office write"
},
{
  title: "File Folder",
  symbol: "📁",
  keyword: "file folder work office"
},
{
  title: "Open File Folder",
  symbol: "📂",
  keyword: "open file folder work office"
},
{
  title: "Dividers",
  symbol: "🗂",
  keyword: "card index dividers work office"
},
{
  title: "Newspaper2",
  symbol: "🗞",
  keyword: "rolled-up newspaper office write"
},
{
  title: "Newspaper",
  symbol: "📰",
  keyword: "newspaper office write"
},
{
  title: "Notebook",
  symbol: "📓",
  keyword: "notebook object office write"
},
{
  title: "Closed Book",
  symbol: "📕",
  keyword: "closed book object office write book"
},
{
  title: "Green Book",
  symbol: "📗",
  keyword: "green book object office book"
},
{
  title: "Blue Book",
  symbol: "📘",
  keyword: "blue book object office write book"
},
{
  title: "Orange Book",
  symbol: "📙",
  keyword: "orange book object office write book"
},
{
  title: "Notebook With Decorative Cover",
  symbol: "📔",
  keyword: "notebook with decorative cover object office write"
},
{
  title: "Ledger",
  symbol: "📒",
  keyword: "ledger object office write"
},
{
  title: "Books",
  symbol: "📚",
  keyword: "books object office write book"
},
{
  title: "Book",
  symbol: "📖",
  keyword: "open book object office write book"
},
{
  title: "Link",
  symbol: "🔗",
  keyword: "link symbol symbol office"
},
{
  title: "Paperclip",
  symbol: "📎",
  keyword: "paperclip object work office"
},
{
  title: "Paperclips",
  symbol: "🖇",
  keyword: "linked paperclips object work office"
},
{
  title: "Scissors",
  symbol: "✂",
  keyword: "black scissors object tool weapon office"
},
{
  title: "Triangular Ruler",
  symbol: "📐",
  keyword: "triangular ruler object tool office"
},
{
  title: "Straight Ruler",
  symbol: "📏",
  keyword: "straight ruler object tool office"
},
{
  title: "Pushpin",
  symbol: "📌",
  keyword: "pushpin object office"
},
{
  title: "Round Pushpin",
  symbol: "📍",
  keyword: "round pushpin object office"
},
{
  title: "Triangular Flag On Post",
  symbol: "🚩",
  keyword: "triangular flag on post object"
},
{
  title: "Flag White",
  symbol: "🏳",
  keyword: "waving white flag object"
},
{
  title: "Flag Black",
  symbol: "🏴",
  keyword: "waving black flag object"
},
{
  title: "Closed Lock With Key",
  symbol: "🔐",
  keyword: "closed lock with key object lock"
},
{
  title: "Lock",
  symbol: "🔒",
  keyword: "lock object lock"
},
{
  title: "Unlock",
  symbol: "🔓",
  keyword: "open lock object lock"
},
{
  title: "Lock With Ink Pen",
  symbol: "🔏",
  keyword: "lock with ink pen object lock"
},
{
  title: "Pen Ballpoint",
  symbol: "🖊",
  keyword: "lower left ballpoint pen object office write"
},
{
  title: "Pen Fountain",
  symbol: "🖋",
  keyword: "lower left fountain pen object office write"
},
{
  title: "Black Nib",
  symbol: "✒",
  keyword: "black nib object office write"
},
{
  title: "Pencil",
  symbol: "📝",
  keyword: "memo work office write"
},
{
  title: "Pencil2",
  symbol: "✏",
  keyword: "pencil object office write"
},
{
  title: "Crayon",
  symbol: "🖍",
  keyword: "lower left crayon object office write"
},
{
  title: "Paintbrush",
  symbol: "🖌",
  keyword: "lower left paintbrush object office write"
},
{
  title: "Mag",
  symbol: "🔍",
  keyword: "left-pointing magnifying glass object"
},
{
  title: "Mag Right",
  symbol: "🔎",
  keyword: "right-pointing magnifying glass object"
},
{
  title: "Heart",
  symbol: "❤",
  keyword: "heavy black heart love symbol parties parties"
},
{
  title: "Yellow Heart",
  symbol: "💛",
  keyword: "yellow heart love symbol"
},
{
  title: "Green Heart",
  symbol: "💚",
  keyword: "green heart love symbol"
},
{
  title: "Blue Heart",
  symbol: "💙",
  keyword: "blue heart love symbol"
},
{
  title: "Purple Heart",
  symbol: "💜",
  keyword: "purple heart love symbol"
},
{
  title: "Broken Heart",
  symbol: "💔",
  keyword: "broken heart love symbol heartbreak heartbreak"
},
{
  title: "Heart Exclamation",
  symbol: "❣",
  keyword: "heavy heart exclamation mark ornament love symbol"
},
{
  title: "Two Hearts",
  symbol: "💕",
  keyword: "two hearts love symbol"
},
{
  title: "Revolving Hearts",
  symbol: "💞",
  keyword: "revolving hearts love symbol"
},
{
  title: "Heartbeat",
  symbol: "💓",
  keyword: "beating heart love symbol"
},
{
  title: "Heartpulse",
  symbol: "💗",
  keyword: "growing heart love symbol"
},
{
  title: "Sparkling Heart",
  symbol: "💖",
  keyword: "sparkling heart love symbol girls night girls night"
},
{
  title: "Cupid",
  symbol: "💘",
  keyword: "heart with arrow love symbol"
},
{
  title: "Gift Heart",
  symbol: "💝",
  keyword: "heart with ribbon love symbol condolence condolence"
},
{
  title: "Heart Decoration",
  symbol: "💟",
  keyword: "heart decoration love symbol"
},
{
  title: "Peace",
  symbol: "☮",
  keyword: "peace symbol symbol peace peace drugs drugs"
},
{
  title: "Cross",
  symbol: "✝",
  keyword: "latin cross religion symbol"
},
{
  title: "Star And Crescent",
  symbol: "☪",
  keyword: "star and crescent religion symbol"
},
{
  title: "Om Symbol",
  symbol: "🕉",
  keyword: "om symbol religion symbol"
},
{
  title: "Wheel Of Dharma",
  symbol: "☸",
  keyword: "wheel of dharma religion symbol"
},
{
  title: "Star Of David",
  symbol: "✡",
  keyword: "star of david religion jew star symbol"
},
{
  title: "Six Pointed Star",
  symbol: "🔯",
  keyword: "six pointed star with middle dot religion jew star symbol"
},
{
  title: "Menorah",
  symbol: "🕎",
  keyword: "menorah with nine branches religion object jew symbol holidays"
},
{
  title: "Yin Yang",
  symbol: "☯",
  keyword: "yin yang symbol"
},
{
  title: "Orthodox Cross",
  symbol: "☦",
  keyword: "orthodox cross religion symbol"
},
{
  title: "Place Of Worship",
  symbol: "🛐",
  keyword: "place of worship religion symbol pray pray"
},
{
  title: "Ophiuchus",
  symbol: "⛎",
  keyword: "ophiuchus symbol"
},
{
  title: "Aries",
  symbol: "♈",
  keyword: "aries zodiac symbol"
},
{
  title: "Taurus",
  symbol: "♉",
  keyword: "taurus zodiac symbol"
},
{
  title: "Gemini",
  symbol: "♊",
  keyword: "gemini zodiac symbol"
},
{
  title: "Cancer",
  symbol: "♋",
  keyword: "cancer zodiac symbol"
},
{
  title: "Leo",
  symbol: "♌",
  keyword: "leo zodiac symbol"
},
{
  title: "Virgo",
  symbol: "♍",
  keyword: "virgo zodiac symbol"
},
{
  title: "Libra",
  symbol: "♎",
  keyword: "libra zodiac symbol"
},
{
  title: "Scorpius",
  symbol: "♏",
  keyword: "scorpius zodiac symbol"
},
{
  title: "Sagittarius",
  symbol: "♐",
  keyword: "sagittarius zodiac symbol"
},
{
  title: "Capricorn",
  symbol: "♑",
  keyword: "capricorn zodiac symbol"
},
{
  title: "Aquarius",
  symbol: "♒",
  keyword: "aquarius zodiac symbol"
},
{
  title: "Pisces",
  symbol: "♓",
  keyword: "pisces zodiac symbol"
},
{
  title: "Id",
  symbol: "🆔",
  keyword: "squared id symbol"
},
{
  title: "Atom",
  symbol: "⚛",
  keyword: "atom symbol symbol science"
},
{
  title: "U7a7a",
  symbol: "🈳",
  keyword: "squared cjk unified ideograph-7a7a symbol"
},
{
  title: "U5272",
  symbol: "🈹",
  keyword: "squared cjk unified ideograph-5272 symbol"
},
{
  title: "Radioactive",
  symbol: "☢",
  keyword: "radioactive sign symbol science"
},
{
  title: "Biohazard",
  symbol: "☣",
  keyword: "biohazard sign symbol science"
},
{
  title: "Mobile Phone Off",
  symbol: "📴",
  keyword: "mobile phone off symbol"
},
{
  title: "Vibration Mode",
  symbol: "📳",
  keyword: "vibration mode symbol"
},
{
  title: "U6709",
  symbol: "🈶",
  keyword: "squared cjk unified ideograph-6709 symbol"
},
{
  title: "U7121",
  symbol: "🈚",
  keyword: "squared cjk unified ideograph-7121 symbol"
},
{
  title: "U7533",
  symbol: "🈸",
  keyword: "squared cjk unified ideograph-7533 symbol"
},
{
  title: "U55b6",
  symbol: "🈺",
  keyword: "squared cjk unified ideograph-55b6 symbol"
},
{
  title: "U6708",
  symbol: "🈷",
  keyword: "squared cjk unified ideograph-6708 symbol"
},
{
  title: "Eight Pointed Black Star",
  symbol: "✴",
  keyword: "eight pointed black star symbol"
},
{
  title: "Vs",
  symbol: "🆚",
  keyword: "squared vs symbol"
},
{
  title: "Accept",
  symbol: "🉑",
  keyword: "circled ideograph accept symbol"
},
{
  title: "White Flower",
  symbol: "💮",
  keyword: "white flower flower symbol"
},
{
  title: "Ideograph Advantage",
  symbol: "🉐",
  keyword: "circled ideograph advantage japan symbol"
},
{
  title: "Secret",
  symbol: "㊙",
  keyword: "circled ideograph secret japan symbol"
},
{
  title: "Congratulations",
  symbol: "㊗",
  keyword: "circled ideograph congratulation japan symbol"
},
{
  title: "U5408",
  symbol: "🈴",
  keyword: "squared cjk unified ideograph-5408 japan symbol"
},
{
  title: "U6e80",
  symbol: "🈵",
  keyword: "squared cjk unified ideograph-6e80 japan symbol"
},
{
  title: "U7981",
  symbol: "🈲",
  keyword: "squared cjk unified ideograph-7981 japan symbol"
},
{
  title: "a",
  symbol: "🅰",
  keyword: "negative squared latin capital letter a symbol"
},
{
  title: "b",
  symbol: "🅱",
  keyword: "negative squared latin capital letter b symbol"
},
{
  title: "Ab",
  symbol: "🆎",
  keyword: "negative squared ab symbol"
},
{
  title: "Cl",
  symbol: "🆑",
  keyword: "squared cl symbol"
},
{
  title: "O2",
  symbol: "🅾",
  keyword: "negative squared latin capital letter o symbol"
},
{
  title: "Sos",
  symbol: "🆘",
  keyword: "squared sos symbol"
},
{
  title: "No Entry",
  symbol: "⛔",
  keyword: "no entry symbol circle circle"
},
{
  title: "Name Badge",
  symbol: "📛",
  keyword: "name badge work"
},
{
  title: "No Entry Sign",
  symbol: "🚫",
  keyword: "no entry sign symbol circle circle"
},
{
  title: "x",
  symbol: "❌",
  keyword: "cross mark symbol sol sol"
},
{
  title: "o",
  symbol: "⭕",
  keyword: "heavy large circle symbol circle circle"
},
{
  title: "Anger",
  symbol: "💢",
  keyword: "anger symbol symbol"
},
{
  title: "Hotsprings",
  symbol: "♨",
  keyword: "hot springs symbol"
},
{
  title: "No Pedestrians",
  symbol: "🚷",
  keyword: "no pedestrians symbol"
},
{
  title: "Do Not Litter",
  symbol: "🚯",
  keyword: "do not litter symbol symbol"
},
{
  title: "No Bicycles",
  symbol: "🚳",
  keyword: "no bicycles symbol"
},
{
  title: "Non-potable Water",
  symbol: "🚱",
  keyword: "non-potable water symbol symbol"
},
{
  title: "Underage",
  symbol: "🔞",
  keyword: "no one under eighteen symbol symbol"
},
{
  title: "No Mobile Phones",
  symbol: "📵",
  keyword: "no mobile phones symbol phone"
},
{
  title: "Exclamation",
  symbol: "❗",
  keyword: "heavy exclamation mark symbol symbol punctuation"
},
{
  title: "Grey Exclamation",
  symbol: "❕",
  keyword: "white exclamation mark ornament symbol punctuation"
},
{
  title: "Question",
  symbol: "❓",
  keyword: "black question mark ornament symbol punctuation wth wth"
},
{
  title: "Grey Question",
  symbol: "❔",
  keyword: "white question mark ornament symbol punctuation"
},
{
  title: "Bangbang",
  symbol: "‼",
  keyword: "double exclamation mark symbol punctuation"
},
{
  title: "Interrobang",
  symbol: "⁉",
  keyword: "exclamation question mark symbol punctuation"
},
{
  title: "Low Brightness",
  symbol: "🔅",
  keyword: "low brightness symbol symbol sun"
},
{
  title: "High Brightness",
  symbol: "🔆",
  keyword: "high brightness symbol symbol sun"
},
{
  title: "Trident",
  symbol: "🔱",
  keyword: "trident emblem object symbol"
},
{
  title: "Fleur-de-lis",
  symbol: "⚜",
  keyword: "fleur-de-lis object symbol"
},
{
  title: "Part Alternation Mark",
  symbol: "〽",
  keyword: "part alternation mark symbol"
},
{
  title: "Warning",
  symbol: "⚠",
  keyword: "warning sign symbol punctuation"
},
{
  title: "Children Crossing",
  symbol: "🚸",
  keyword: "children crossing symbol"
},
{
  title: "Beginner",
  symbol: "🔰",
  keyword: "japanese symbol for beginner symbol"
},
{
  title: "Recycle",
  symbol: "♻",
  keyword: "black universal recycling symbol symbol"
},
{
  title: "U6307",
  symbol: "🈯",
  keyword: "squared cjk unified ideograph-6307 symbol"
},
{
  title: "Chart",
  symbol: "💹",
  keyword: "chart with upwards trend and yen sign symbol money money"
},
{
  title: "Sparkle",
  symbol: "❇",
  keyword: "sparkle symbol"
},
{
  title: "Eight Spoked Asterisk",
  symbol: "✳",
  keyword: "eight spoked asterisk symbol"
},
{
  title: "Negative Squared Cross Mark",
  symbol: "❎",
  keyword: "negative squared cross mark symbol"
},
{
  title: "White Check Mark",
  symbol: "✅",
  keyword: "white heavy check mark symbol"
},
{
  title: "Diamond Shape With a Dot Inside",
  symbol: "💠",
  keyword: "diamond shape with a dot inside symbol"
},
{
  title: "Cyclone",
  symbol: "🌀",
  keyword: "cyclone symbol drugs drugs"
},
{
  title: "Loop",
  symbol: "➿",
  keyword: "double curly loop symbol"
},
{
  title: "Globe With Meridians",
  symbol: "🌐",
  keyword: "globe with meridians symbol globe globe"
},
{
  title: "m",
  symbol: "Ⓜ",
  keyword: "circled latin capital letter m symbol"
},
{
  title: "Atm",
  symbol: "🏧",
  keyword: "automated teller machine electronics symbol money money"
},
{
  title: "Sa",
  symbol: "🈂",
  keyword: "squared katakana sa symbol"
},
{
  title: "Passport Control",
  symbol: "🛂",
  keyword: "passport control symbol"
},
{
  title: "Customs",
  symbol: "🛃",
  keyword: "customs symbol"
},
{
  title: "Baggage Claim",
  symbol: "🛄",
  keyword: "baggage claim symbol"
},
{
  title: "Left Luggage",
  symbol: "🛅",
  keyword: "left luggage symbol"
},
{
  title: "Wheelchair",
  symbol: "♿",
  keyword: "wheelchair symbol symbol"
},
{
  title: "No Smoking",
  symbol: "🚭",
  keyword: "no smoking symbol symbol smoking smoking"
},
{
  title: "Wc",
  symbol: "🚾",
  keyword: "water closet symbol"
},
{
  title: "Parking",
  symbol: "🅿",
  keyword: "negative squared latin capital letter p symbol"
},
{
  title: "Potable Water",
  symbol: "🚰",
  keyword: "potable water symbol symbol"
},
{
  title: "Mens",
  symbol: "🚹",
  keyword: "mens symbol symbol"
},
{
  title: "Womens",
  symbol: "🚺",
  keyword: "womens symbol symbol"
},
{
  title: "Baby Symbol",
  symbol: "🚼",
  keyword: "baby symbol symbol"
},
{
  title: "Restroom",
  symbol: "🚻",
  keyword: "restroom symbol"
},
{
  title: "Put Litter In Its Place",
  symbol: "🚮",
  keyword: "put litter in its place symbol symbol"
},
{
  title: "Cinema",
  symbol: "🎦",
  keyword: "cinema symbol camera movie"
},
{
  title: "Signal Strength",
  symbol: "📶",
  keyword: "antenna with bars symbol"
},
{
  title: "Koko",
  symbol: "🈁",
  keyword: "squared katakana koko symbol"
},
{
  title: "Ng",
  symbol: "🆖",
  keyword: "squared ng symbol"
},
{
  title: "Ok",
  symbol: "🆗",
  keyword: "squared ok symbol"
},
{
  title: "Up",
  symbol: "🆙",
  keyword: "squared up with exclamation mark symbol"
},
{
  title: "Cool",
  symbol: "🆒",
  keyword: "squared cool symbol"
},
{
  title: "New",
  symbol: "🆕",
  keyword: "squared new symbol"
},
{
  title: "Free",
  symbol: "🆓",
  keyword: "squared free symbol"
},
{
  title: "Zero",
  symbol: "0",
  keyword: "keycap digit zero number math symbol"
},
{
  title: "One",
  symbol: "1",
  keyword: "keycap digit one number math symbol"
},
{
  title: "Two",
  symbol: "2",
  keyword: "keycap digit two number math symbol"
},
{
  title: "Three",
  symbol: "3",
  keyword: "keycap digit three number math symbol"
},
{
  title: "Four",
  symbol: "4",
  keyword: "keycap digit four number math symbol"
},
{
  title: "Five",
  symbol: "5",
  keyword: "keycap digit five number math symbol"
},
{
  title: "Six",
  symbol: "6",
  keyword: "keycap digit six number math symbol"
},
{
  title: "Seven",
  symbol: "7",
  keyword: "keycap digit seven number math symbol"
},
{
  title: "Eight",
  symbol: "8",
  keyword: "keycap digit eight number math symbol"
},
{
  title: "Nine",
  symbol: "9",
  keyword: "keycap digit nine number math symbol"
},
{
  title: "Keycap Ten",
  symbol: "🔟",
  keyword: "keycap ten number math symbol"
},
{
  title: "Arrow Forward",
  symbol: "▶",
  keyword: "black right-pointing triangle arrow symbol triangle triangle"
},
{
  title: "Pause Button",
  symbol: "⏸",
  keyword: "double vertical bar symbol"
},
{
  title: "Play Pause",
  symbol: "⏯",
  keyword:
    "black right-pointing double triangle with double vertical bar arrow symbol"
},
{
  title: "Stop Button",
  symbol: "⏹",
  keyword: "black square for stop symbol square square"
},
{
  title: "Record Button",
  symbol: "⏺",
  keyword: "black circle for record symbol circle circle"
},
{
  title: "Track Next",
  symbol: "⏭",
  keyword:
    "black right-pointing double triangle with vertical bar arrow symbol"
},
{
  title: "Track Previous",
  symbol: "⏮",
  keyword:
    "black left-pointing double triangle with vertical bar arrow symbol"
},
{
  title: "Fast Forward",
  symbol: "⏩",
  keyword: "black right-pointing double triangle arrow symbol"
},
{
  title: "Rewind",
  symbol: "⏪",
  keyword: "black left-pointing double triangle arrow symbol"
},
{
  title: "Twisted Rightwards Arrows",
  symbol: "🔀",
  keyword: "twisted rightwards arrows arrow symbol"
},
{
  title: "Repeat",
  symbol: "🔁",
  keyword:
    "clockwise rightwards and leftwards open circle arrows arrow symbol"
},
{
  title: "Repeat One",
  symbol: "🔂",
  keyword:
    "clockwise rightwards and leftwards open circle arrows with circled one overlay arrow symbol"
},
{
  title: "Arrow Backward",
  symbol: "◀",
  keyword: "black left-pointing triangle arrow symbol triangle triangle"
},
{
  title: "Arrow Up Small",
  symbol: "🔼",
  keyword: "up-pointing small red triangle arrow symbol triangle triangle"
},
{
  title: "Arrow Down Small",
  symbol: "🔽",
  keyword:
    "down-pointing small red triangle arrow symbol triangle triangle"
},
{
  title: "Arrow Double Up",
  symbol: "⏫",
  keyword: "black up-pointing double triangle arrow symbol"
},
{
  title: "Arrow Double Down",
  symbol: "⏬",
  keyword: "black down-pointing double triangle arrow symbol"
},
{
  title: "Arrow Right",
  symbol: "➡",
  keyword: "black rightwards arrow arrow symbol"
},
{
  title: "Arrow Left",
  symbol: "⬅",
  keyword: "leftwards black arrow arrow symbol"
},
{
  title: "Arrow Up",
  symbol: "⬆",
  keyword: "upwards black arrow arrow symbol"
},
{
  title: "Arrow Down",
  symbol: "⬇",
  keyword: "downwards black arrow arrow symbol"
},
{
  title: "Arrow Upper Right",
  symbol: "↗",
  keyword: "north east arrow arrow symbol"
},
{
  title: "Arrow Lower Right",
  symbol: "↘",
  keyword: "south east arrow arrow symbol"
},
{
  title: "Arrow Lower Left",
  symbol: "↙",
  keyword: "south west arrow arrow symbol"
},
{
  title: "Arrow Upper Left",
  symbol: "↖",
  keyword: "north west arrow arrow symbol"
},
{
  title: "Arrow Up Down",
  symbol: "↕",
  keyword: "up down arrow arrow symbol"
},
{
  title: "Left Right Arrow",
  symbol: "↔",
  keyword: "left right arrow arrow symbol"
},
{
  title: "Arrows Counterclockwise",
  symbol: "🔄",
  keyword:
    "anticlockwise downwards and upwards open circle arrows arrow symbol"
},
{
  title: "Arrow Right Hook",
  symbol: "↪",
  keyword: "rightwards arrow with hook arrow symbol"
},
{
  title: "Leftwards Arrow With Hook",
  symbol: "↩",
  keyword: "leftwards arrow with hook arrow symbol"
},
{
  title: "Arrow Heading Up",
  symbol: "⤴",
  keyword: "arrow pointing rightwards then curving upwards arrow symbol"
},
{
  title: "Arrow Heading Down",
  symbol: "⤵",
  keyword: "arrow pointing rightwards then curving downwards arrow symbol"
},
{
  title: "Hash",
  symbol: "#",
  keyword: "keycap number sign number symbol"
},
{
  title: "Asterisk",
  symbol: "*",
  keyword: "keycap asterisk symbol"
},
{
  title: "Information Source",
  symbol: "ℹ",
  keyword: "information source symbol"
},
{
  title: "Abc",
  symbol: "🔤",
  keyword: "input symbol for latin letters symbol"
},
{
  title: "Abcd",
  symbol: "🔡",
  keyword: "input symbol for latin small letters symbol"
},
{
  title: "Capital Abcd",
  symbol: "🔠",
  keyword: "input symbol for latin capital letters symbol"
},
{
  title: "Symbols",
  symbol: "🔣",
  keyword: "input symbol for symbols symbol"
},
{
  title: "Musical Note",
  symbol: "🎵",
  keyword: "musical note instruments symbol"
},
{
  title: "Notes",
  symbol: "🎶",
  keyword: "multiple musical notes instruments symbol"
},
{
  title: "Wavy Dash",
  symbol: "〰",
  keyword: "wavy dash symbol"
},
{
  title: "Curly Loop",
  symbol: "➰",
  keyword: "curly loop symbol"
},
{
  title: "Heavy Check Mark",
  symbol: "✔",
  keyword: "heavy check mark symbol"
},
{
  title: "Arrows Clockwise",
  symbol: "🔃",
  keyword:
    "clockwise downwards and upwards open circle arrows arrow symbol"
},
{
  title: "Heavy Plus Sign",
  symbol: "➕",
  keyword: "heavy plus sign math symbol"
},
{
  title: "Heavy Minus Sign",
  symbol: "➖",
  keyword: "heavy minus sign math symbol"
},
{
  title: "Heavy Division Sign",
  symbol: "➗",
  keyword: "heavy division sign math symbol"
}
];





const App = () => {

  const [searchString, setSearchString] = useState("");
  const [maxRes, setMaxRes] = useState(20);
  

  // const onChangehandler = event => {
  //   const { value } = event.target;
  //   setSearchString(value);
  // }

   const onChangehandler = useCallback(e => {
    const { value } = e.target;

    setSearchString(value);
  },[searchString]);

  const result = useMemo(() => {

    const filteredData = data.filter(({ keyword }) => {
      return keyword.includes(searchString);
    });

    console.log(filteredData, " in result");
    return filteredData;
   
  },[searchString]);

  return (
    <div className="App">
      <input className="Input-container" value={searchString} onChange={onChangehandler} />
      {result.map(({symbol})=>(
        <div className="result">
          <p>{symbol}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
