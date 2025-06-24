var langData = null;
var current_lang = 'hr';
var current_timeline = null;
var current_section = null;

window.addEventListener("DOMContentLoaded", () => {
    setLanguage('hr');
    // startApp();
    setSection('timeline');
})

function startApp() {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();

    document.getElementById("startContainer").classList.add('hiding');

    setTimeout(() => {
        document.getElementById("startContainer").classList.remove('hiding');
        document.getElementById("startContainer").classList.add('hidden');
    }, 1500)
}


function setLanguage(selected_lang) {

    langData = JSON.parse(document.getElementById(`lang-${selected_lang}`).textContent);

    document.getElementById('help-text').innerHTML = langData.timelineHelp;

    document.getElementById('gg-text-title').innerHTML = langData.ggTextTitle;
    document.getElementById('gg-text-1').innerHTML = langData.ggText1;
    document.getElementById('gg-text-2').innerHTML = langData.ggText2;

    document.getElementById('map-text-title').innerHTML = langData.mapTextTitle;
    document.getElementById('map-text-1').innerHTML = langData.mapText1;

    document.getElementById('scholars-text-1').innerHTML = langData.scholarsIntro1;
    document.getElementById('scholars-text-2').innerHTML = langData.scholarsHeading1;
    document.getElementById('scholars-text-3').innerHTML = langData.scholarsText1;
    document.getElementById('scholars-text-4').innerHTML = langData.scholarsSubheading1;
    document.getElementById('scholars-text-5').innerHTML = langData.scholarsText2;
    document.getElementById('scholars-text-6').innerHTML = langData.scholarsPicture;
    document.getElementById('scholars-text-7').innerHTML = langData.scholarsSubheading2;
    document.getElementById('scholars-text-8').innerHTML = langData.scholarsText3;
    document.getElementById('scholars-text-9').innerHTML = langData.scholarsText4;
    document.getElementById('scholars-text-10').innerHTML = langData.scholarsText5;
    document.getElementById('scholars-text-11').innerHTML = langData.scholarsText6;
    document.getElementById('scholars-text-12').innerHTML = langData.scholarsSubheading3;
    document.getElementById('scholars-text-13').innerHTML = langData.scholarsText7;
    document.getElementById('scholars-text-14').innerHTML = langData.scholarsSubheading4;
    document.getElementById('scholars-text-15').innerHTML = langData.scholarsText8;
    document.getElementById('scholars-text-16').innerHTML = langData.scholarsText9;


    document.getElementById('timeline-preview-globalheading-1').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-1').textContent = langData.timeline1DateTime;
    document.getElementById('datetime-timeline-1').textContent = langData.timeline1DateTime;
    document.getElementById('datetime-description-timeline-1').textContent = langData.timeline1DateTimeDescription;
    document.getElementById('timeline-1-text-1').textContent = langData.timeline1text1;
    document.getElementById('timeline-1-text-2').textContent = langData.timeline1text2;
    document.getElementById('timeline-1-text-3').textContent = langData.timeline1text3;
    document.getElementById('timeline-1-text-4').textContent = langData.timeline1text4;
    document.getElementById('timeline-1-text-5').textContent = langData.timeline1text5;
    document.getElementById('timeline-1-text-6').textContent = langData.timeline1text6;
    document.getElementById('timeline-1-text-7').textContent = langData.timeline1text7;
    document.getElementById('timeline-1-text-8').textContent = langData.timeline1text8;

    document.getElementById('timeline-preview-globalheading-2').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-2').textContent = langData.timeline2DateTime;
    document.getElementById('datetime-timeline-2').textContent = langData.timeline2DateTime;
    document.getElementById('datetime-description-timeline-2').textContent = langData.timeline2DateTimeDescription;
    document.getElementById('timeline-2-text-1').textContent = langData.timeline2text1;
    document.getElementById('timeline-2-text-2').textContent = langData.timeline2text2;
    document.getElementById('timeline-2-text-3').textContent = langData.timeline2text3;
    document.getElementById('timeline-2-text-4').textContent = langData.timeline2text4;
    document.getElementById('timeline-2-text-5').textContent = langData.timeline2text5;
    document.getElementById('timeline-2-text-6').textContent = langData.timeline2text6;
    document.getElementById('timeline-2-text-7').textContent = langData.timeline2text7;
    document.getElementById('timeline-2-text-8').textContent = langData.timeline2text8;
    document.getElementById('timeline-2-text-9').textContent = langData.timeline2text9;
    document.getElementById('timeline-2-text-10').innerHTML = langData.timeline2text10;

    document.getElementById('timeline-preview-globalheading-3').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-3').textContent = langData.timeline3DateTime;
    document.getElementById('datetime-timeline-3').textContent = langData.timeline3DateTime;
    document.getElementById('datetime-description-timeline-3').textContent = langData.timeline3DateTimeDescription;
    document.getElementById('timeline-3-text-1').textContent = langData.timeline3text1;
    document.getElementById('timeline-3-text-2').textContent = langData.timeline3text2;

    document.getElementById('timeline-preview-globalheading-4').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-4').textContent = langData.timeline4DateTime;
    document.getElementById('datetime-timeline-4').textContent = langData.timeline4DateTime;
    document.getElementById('datetime-description-timeline-4').textContent = langData.timeline4DateTimeDescription;
    document.getElementById('timeline-4-text-1').textContent = langData.timeline4text1;
    document.getElementById('timeline-4-text-2').textContent = langData.timeline4text2;
    document.getElementById('timeline-4-text-3').textContent = langData.timeline4text3;
    document.getElementById('timeline-4-text-4').textContent = langData.timeline4text4;
    document.getElementById('timeline-4-text-5').textContent = langData.timeline4text5;
    document.getElementById('timeline-4-text-6').textContent = langData.timeline4text6;
    document.getElementById('timeline-4-text-7').textContent = langData.timeline4text7;
    document.getElementById('timeline-4-text-8').textContent = langData.timeline4text8;
    document.getElementById('timeline-4-text-9').textContent = langData.timeline4text9;
    document.getElementById('timeline-4-text-10').textContent = langData.timeline4text10;
    document.getElementById('timeline-4-text-11').textContent = langData.timeline4text11;

    document.getElementById('timeline-preview-globalheading-5').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-5').textContent = langData.timeline5DateTime;
    document.getElementById('datetime-timeline-5').textContent = langData.timeline5DateTime;
    document.getElementById('datetime-description-timeline-5').textContent = langData.timeline5DateTimeDescription;
    document.getElementById('timeline-5-text-1').textContent = langData.timeline5text1;
    document.getElementById('timeline-5-text-2').textContent = langData.timeline5text2;
    document.getElementById('timeline-5-text-3').textContent = langData.timeline5text3;
    document.getElementById('timeline-5-text-4').textContent = langData.timeline5text4;
    document.getElementById('timeline-5-text-5').textContent = langData.timeline5text5;
    document.getElementById('timeline-5-text-6').textContent = langData.timeline5text6;
    document.getElementById('timeline-5-text-7').textContent = langData.timeline5text7;
    document.getElementById('timeline-5-text-8').textContent = langData.timeline5text8;
    document.getElementById('timeline-5-text-9').textContent = langData.timeline5text9;

    document.getElementById('timeline-preview-globalheading-6').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-6').textContent = langData.timeline6DateTime;
    document.getElementById('datetime-timeline-6').textContent = langData.timeline6DateTime;
    document.getElementById('datetime-description-timeline-6').textContent = langData.timeline6DateTimeDescription;
    document.getElementById('timeline-6-text-1').textContent = langData.timeline6text1;
    document.getElementById('timeline-6-text-2').textContent = langData.timeline6text2;
    document.getElementById('timeline-6-text-3').textContent = langData.timeline6text3;
    document.getElementById('timeline-6-text-4').textContent = langData.timeline6text4;
    document.getElementById('timeline-6-text-5').textContent = langData.timeline6text5;
    document.getElementById('timeline-6-text-6').textContent = langData.timeline6text6;
    document.getElementById('timeline-6-text-7').textContent = langData.timeline6text7;
    document.getElementById('timeline-6-text-8').textContent = langData.timeline6text8;
    document.getElementById('timeline-6-text-9').textContent = langData.timeline6text9;
    document.getElementById('timeline-6-text-10').textContent = langData.timeline6text10;
    document.getElementById('timeline-6-text-11').textContent = langData.timeline6text11;

    document.getElementById('timeline-preview-globalheading-7').textContent = langData.timelineGlobalTitle;
    document.getElementById('timeline-event-7').textContent = langData.timeline7DateTime;
    document.getElementById('datetime-timeline-7').textContent = langData.timeline7DateTime;
    document.getElementById('datetime-description-timeline-7').textContent = langData.timeline7DateTimeDescription;
    document.getElementById('timeline-7-text-1').textContent = langData.timeline7text1;
    document.getElementById('timeline-7-text-2').textContent = langData.timeline7text2;
    document.getElementById('timeline-7-text-3').textContent = langData.timeline7text3;
    document.getElementById('timeline-7-text-4').textContent = langData.timeline7text4;
    document.getElementById('timeline-7-text-5').textContent = langData.timeline7text5;
    document.getElementById('timeline-7-text-6').textContent = langData.timeline7text6;
    document.getElementById('timeline-7-text-7').textContent = langData.timeline7text7;
    document.getElementById('timeline-7-text-8').textContent = langData.timeline7text8;
    document.getElementById('timeline-7-text-9').textContent = langData.timeline7text9;
    document.getElementById('timeline-7-text-10').textContent = langData.timeline7text10;
    document.getElementById('timeline-7-text-11').textContent = langData.timeline7text11;
    document.getElementById('timeline-7-text-12').textContent = langData.timeline7text12;
    document.getElementById('timeline-7-text-13').textContent = langData.timeline7text13;
    document.getElementById('timeline-7-text-14').textContent = langData.timeline7text14;
    document.getElementById('timeline-7-text-15').textContent = langData.timeline7text15;
    document.getElementById('timeline-7-text-16').textContent = langData.timeline7text16;
    document.getElementById('timeline-7-text-17').textContent = langData.timeline7text17;
    document.getElementById('timeline-7-text-18').textContent = langData.timeline7text18;
    document.getElementById('timeline-7-text-19').textContent = langData.timeline7text19;
    document.getElementById('timeline-7-text-20').textContent = langData.timeline7text20;
    document.getElementById('timeline-7-text-21').textContent = langData.timeline7text21;


    document.getElementById('persons-text-1').textContent = langData.personsText1;
    document.getElementById('persons-text-2').textContent = langData.personsText2;
    document.getElementById('persons-text-3').textContent = langData.personsText3;

    document.getElementById('person-1-text-1').textContent = langData.person1Text1;
    document.getElementById('person-1-text-2').textContent = langData.person1Text2;
    document.getElementById('person-1-text-3').textContent = langData.person1Text3;
    document.getElementById('person-1-text-4').textContent = langData.person1Text4;
    document.getElementById('person-1-text-5').textContent = langData.person1Text5;
    document.getElementById('person-1-text-6').textContent = langData.person1Text6;
    document.getElementById('person-1-text-7').textContent = langData.person1Text7;

    document.getElementById('person-2-text-1').textContent = langData.person2Text1;
    document.getElementById('person-2-text-2').textContent = langData.person2Text2;
    document.getElementById('person-2-text-3').textContent = langData.person2Text3;
    document.getElementById('person-2-text-4').textContent = langData.person2Text4;
    document.getElementById('person-2-text-5').textContent = langData.person2Text5;
    document.getElementById('person-2-text-6').textContent = langData.person2Text6;
    document.getElementById('person-2-text-7').textContent = langData.person2Text7;
    document.getElementById('person-2-text-8').textContent = langData.person2Text8;
    document.getElementById('person-2-text-9').textContent = langData.person2Text9;

    document.getElementById('person-3-text-1').textContent = langData.person3Text1;
    document.getElementById('person-3-text-2').textContent = langData.person3Text2;
    document.getElementById('person-3-text-3').textContent = langData.person3Text3;
    document.getElementById('person-3-text-4').textContent = langData.person3Text4;
    document.getElementById('person-3-text-5').textContent = langData.person3Text5;
    document.getElementById('person-3-text-6').textContent = langData.person3Text6;
    document.getElementById('person-3-text-7').textContent = langData.person3Text7;
    document.getElementById('person-3-text-8').textContent = langData.person3Text8;
    document.getElementById('person-3-text-9').textContent = langData.person3Text9;

    document.getElementById('person-4-text-1').textContent = langData.person4Text1;
    document.getElementById('person-4-text-2').textContent = langData.person4Text2;
    document.getElementById('person-4-text-3').textContent = langData.person4Text3;
    document.getElementById('person-4-text-4').textContent = langData.person4Text4;
    document.getElementById('person-4-text-5').textContent = langData.person4Text5;
    document.getElementById('person-4-text-6').textContent = langData.person4Text6;
    document.getElementById('person-4-text-7').textContent = langData.person4Text7;

    document.getElementById('person-5-text-1').textContent = langData.person5Text1;
    document.getElementById('person-5-text-2').textContent = langData.person5Text2;
    document.getElementById('person-5-text-3').textContent = langData.person5Text3;
    document.getElementById('person-5-text-4').textContent = langData.person5Text4;
    document.getElementById('person-5-text-5').textContent = langData.person5Text5;
    document.getElementById('person-5-text-6').textContent = langData.person5Text6;
    document.getElementById('person-5-text-7').textContent = langData.person5Text7;
    document.getElementById('person-5-text-8').textContent = langData.person5Text8;
    document.getElementById('person-5-text-9').textContent = langData.person5Text9;

    document.getElementById('person-6-text-1').textContent = langData.person6Text1;
    document.getElementById('person-6-text-2').textContent = langData.person6Text2;
    document.getElementById('person-6-text-3').textContent = langData.person6Text3;
    document.getElementById('person-6-text-4').textContent = langData.person6Text4;
    document.getElementById('person-6-text-5').textContent = langData.person6Text5;
    document.getElementById('person-6-text-6').textContent = langData.person6Text6;
    document.getElementById('person-6-text-7').textContent = langData.person6Text7;

    document.getElementById('person-7-text-1').textContent = langData.person7Text1;
    document.getElementById('person-7-text-2').textContent = langData.person7Text2;
    document.getElementById('person-7-text-3').textContent = langData.person7Text3;
    document.getElementById('person-7-text-4').textContent = langData.person7Text4;
    document.getElementById('person-7-text-5').textContent = langData.person7Text5;
    document.getElementById('person-7-text-6').textContent = langData.person7Text6;
    document.getElementById('person-7-text-7').textContent = langData.person7Text7;
    document.getElementById('person-7-text-8').textContent = langData.person7Text8;
    document.getElementById('person-7-text-9').textContent = langData.person7Text9;
    document.getElementById('person-7-text-10').textContent = langData.person7Text10;
    document.getElementById('person-7-text-11').textContent = langData.person7Text11;

    document.getElementById('person-7-text-10-en').textContent = langData.person7Text10;
    document.getElementById('person-7-text-11-en').textContent = langData.person7Text11;

    document.getElementById('person-7-text-12').textContent = langData.person7Text12;
    document.getElementById('person-7-text-13').textContent = langData.person7Text13;

    document.getElementById('impressum-1').textContent = langData.impressumHeading1;
    document.getElementById('impressum-2').textContent = langData.impressumHeading2;
    document.getElementById('impressum-3').textContent = langData.impressumHeading3;
    document.getElementById('impressum-4').textContent = langData.impressumHeading4;
    document.getElementById('impressum-5').textContent = langData.impressumHeading5;
    document.getElementById('impressum-6').textContent = langData.impressumHeading6;

    if (selected_lang === 'en') {
        document.getElementById('scholars5row2').classList.add('large');

        document.getElementById('english-only').classList.remove('hidden');
        document.getElementById('person-7-text-10').style.display = 'none';
        document.getElementById('person-7-text-11').style.display = 'none';
    } else {
        document.getElementById('scholars5row2').classList.remove('large');

        document.getElementById('english-only').classList.add('hidden');
        document.getElementById('person-7-text-10').style.display = 'block';
        document.getElementById('person-7-text-11').style.display = 'block';
    }

    const langButtons = document.getElementsByClassName('language');
    for (let i = 0; i < langButtons.length; i++) {
        const langBtn = langButtons[i];
        if (langBtn.id === `lang-${selected_lang}`) {
            langBtn.classList.add('active');
        } else {
            if (langBtn.classList.contains('active')) {
                langBtn.classList.remove('active');
            }
        }
    }

    current_lang = selected_lang;

    setSectionTitle(current_section);
    setSectionStyles(current_section);
}

function setSection(section_id) {

    const icons = document.getElementsByClassName('icon');
    const sections = document.getElementsByClassName('app-section');

    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        if (icon.id === `icon-${section_id}`) {
            icon.classList.add('active');
        } else {
            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
            }
        }
    }

    for (let j = 0; j < sections.length; j++) {
        const section = sections[j];
        if (section.id === `section-${section_id}`) {
            section.classList.add('visible');
        } else {
            if (section.classList.contains('visible')) {
                section.classList.remove('visible');
            }
        }
    }

    current_section = section_id;


    setSectionStyles(section_id);

    setSectionTitle(section_id)
}

function setSectionTitle(section) {
    switch (section) {
        case 'gg':
            document.getElementById('heading-right').innerHTML = langData.ggHeading;
            break;

        case 'map':
            document.getElementById('heading-right').innerHTML = langData.mapHeading;
            break;

        case 'scholars':
            document.getElementById('heading-right').innerHTML = langData.scholarsHeading;
            break;

        case 'timeline':
            document.getElementById('heading-right').innerHTML = langData.timelineHeading;
            break;

        case 'persons':
            document.getElementById('heading-right').innerHTML = langData.personsHeading;
            break;

        case 'list':
            document.getElementById('heading-right').innerHTML = langData.listHeading;
            break;

        case 'impressum':
            document.getElementById('heading-right').innerHTML = langData.impressumHeading;

        default:
            break;
    }
}

function setSectionStyles(section) {
    switch (section) {
        case 'gg':
            changeColors(false);
            document.getElementById('app-logo').classList.remove('white-bg');
            document.getElementById('heading-right').classList.remove('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

            break;

        case 'timeline':
            changeColors(false);
            document.getElementById('app-logo').classList.remove('white-bg');
            document.getElementById('heading-right').classList.add('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

            break;

        case 'map':
            changeColors(true);
            document.getElementById('app-logo').classList.remove('white-bg');
            document.getElementById('heading-right').classList.remove('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

            break;

        case 'scholars':
            changeColors(false);
            document.getElementById('app-logo').classList.add('white-bg');
            document.getElementById('heading-right').classList.remove('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

            break;

        case 'persons':
            changeColors(false);
            if (current_lang === 'en') {
                document.getElementById('heading-right').classList.add('widest');
            } else {
                document.getElementById('heading-right').classList.add('wider');
            }
            break;

        case 'list':
            changeColors(false);
            document.getElementById('app-logo').classList.remove('white-bg');
            document.getElementById('heading-right').classList.add('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

        case 'impressum':
            changeColors(false);
            document.getElementById('app-logo').classList.remove('white-bg');
            document.getElementById('heading-right').classList.add('larger');
            document.getElementById('heading-right').classList.remove('wider');
            document.getElementById('heading-right').classList.remove('widest');

        default:
            break;
    }
}


function changeColors(isRedBackground) {
    if (isRedBackground) {
        document.getElementById('heading-right').classList.add('white');
    } else {
        if (document.getElementById('heading-right').classList.contains('heading-right')) document.getElementById('heading-right').classList.remove('white');
    }

    const langSwitchers = document.getElementsByClassName('language');

    for (let i = 0; i < langSwitchers.length; i++) {
        const langSwitch = langSwitchers[i];

        if (isRedBackground) {
            if (!langSwitch.classList.contains('white')) {
                langSwitch.classList.add('white');
            }
        } else {
            if (langSwitch.classList.contains('white')) langSwitch.classList.remove('white');
        }

    }
}


function openTimeline(id) {

    document.getElementById('navigation').classList.add('hidden');
    document.getElementById('langswitcher').classList.add('in-timeline');

    const timelineWrapper = document.getElementById(`timeline-${id}`);
    timelineWrapper.classList.remove('hidden');

    current_timeline = id;

}

function closeTimeline(id) {
    document.getElementById('navigation').classList.remove('hidden');
    document.getElementById('langswitcher').classList.remove('in-timeline');

    const timelineWrapper = document.getElementById(`timeline-${id}`);
    timelineWrapper.classList.add('hidden');

    current_timeline = null;
}

function previousTimeline() {
    if (current_timeline > 1) {
        const timeline = current_timeline;
        closeTimeline(current_timeline);
        openTimeline(timeline - 1);
    }
}

function nextTimeline() {
    if (current_timeline < 7) {
        const timeline = current_timeline;
        closeTimeline(current_timeline);
        openTimeline(timeline + 1);
    }
}