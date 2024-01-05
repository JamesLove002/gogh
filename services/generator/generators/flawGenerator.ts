import { CategorisedOption, selectValuesFromWeightedCategorisedOptions } from "../generatorUtils";

export function generateFlaw() {
  return selectValuesFromWeightedCategorisedOptions(flawOptions);
}

export const flawOptions: CategorisedOption[] = [
  { category: "Moral", subCategory: "Greed (Avarice)", instance: "I have an insatiable desire for wealth and possessions, often at the expense of others' needs.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Envy (Jealousy)", instance: "I often feel resentful when others have what I perceive as better possessions, success, or qualities.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Wrath (Anger)", instance: "I frequently experience intense anger and hostility, sometimes losing control.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Pride (Hubris)", instance: "I tend to overestimate my abilities or importance and often dismiss others.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Lust (Licentiousness)", instance: "I struggle with overwhelming and often inappropriate sexual desires.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Sloth (Idleness)", instance: "I avoid exerting effort and often neglect my duties and responsibilities.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Gluttony (Excess)", instance: "I habitually overindulge in pleasures or consumption, beyond what is necessary or healthy.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Deceit (Dishonesty)", instance: "I often find myself lying or misleading others to get what I want.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Vengeance (Retribution)", instance: "I hold grudges and seek to retaliate, often disproportionately, to right perceived wrongs.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Cruelty (Brutality)", instance: "I can be deliberately harmful and enjoy causing pain or suffering to others.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Impiety (Blasphemy)", instance: "I show a lack of respect towards sacred beliefs or practices, often irreverently.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Insensitivity (Callousness)", instance: "I tend to be uncaring about others' feelings or hardships.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Malice (Malevolence)", instance: "I have a desire to harm others or see them suffer.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Hypocrisy (Insincerity)", instance: "I pretend to hold values or beliefs that I don't actually live by.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Selfishness (Egocentrism)", instance: "I prioritize my own needs and desires above those of everyone else.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Betrayal (Treachery)", instance: "I am not above breaking trust or being disloyal to gain personal benefit.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Manipulation (Exploitation)", instance: "I often use others for my own advantage, manipulating situations to my benefit.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Irresponsibility (Carelessness)", instance: "I tend to neglect my responsibilities and duties, often leading to negative consequences.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Ignorance (Unawareness)", instance: "I lack knowledge or awareness in areas I probably should understand.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Cowardice (Fearfulness)", instance: "I often avoid challenges or threats, even when action is necessary.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Pettiness (Triviality)", instance: "I get caught up in minor issues, often making a big deal out of trivialities.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Dishonor (Disgrace)", instance: "I've acted in ways that have lost me respect and honor among my peers.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Bitterness (Resentment)", instance: "I hold onto anger and resentment from past slights and injuries for a long time.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Distrust (Cynicism/Suspicion)", instance: "I tend to doubt others' intentions, believing people are mostly self-serving.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Ingratitude (Unthankfulness)", instance: "I often fail to appreciate what others have done for me.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Ruthlessness (Mercilessness)", instance: "I am willing to achieve my goals by any means, without pity or compassion.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Contempt (Derision)", instance: "I often view others with disdain, feeling they are inferior or unworthy.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Stubbornness (Inflexibility)", instance: "Once I make up my mind, I rarely change it, even in the face of new information.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Rashness (Impulsiveness/Recklessness)", instance: "I act without thinking things through, often leading to unnecessary risks or problems.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Power Hunger (Ambition)", instance: "I have a strong desire for power and control, and I'm driven to attain it.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Scheming (Machination)", instance: "I often plot or scheme to get what I want, even if it means deceiving others.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Abusiveness (Violence)", instance: "I can be physically or emotionally abusive, using force or cruelty.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Intolerance (Bigotry)", instance: "I'm often unwilling to accept views or people different from myself.", instanceWeight: 1 },
  { category: "Moral", subCategory: "Disloyalty (Unfaithfulness)", instance: "I struggle with staying faithful or loyal, especially when my interests are at stake.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Paranoia (Distrust)", instance: "I often can't shake the feeling that people are watching me or plotting against me.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Arrogance (Superiority)", instance: "I tend to believe I am superior to others, and I dismiss those who challenge me.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Impulsiveness (Hastiness)", instance: "I act on my immediate desires without considering the consequences.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Melancholy (Sadness)", instance: "I am frequently enveloped by deep sadness and find little joy in life.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Obsession (Compulsion)", instance: "I fixate on things intensely, sometimes to the detriment of my well-being.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Anxiety (Worry)", instance: "I am constantly plagued by worries and fears that interfere with my daily life.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Delusion (Misbelief)", instance: "I hold onto certain beliefs despite clear evidence that contradicts them.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Narcissism (Self-Admiration)", instance: "I am preoccupied with myself and lack empathy for others.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Inferiority Complex (Self-Doubt)", instance: "I feel chronically inadequate and often see myself as less than others.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Phobia (Irrational Fear)", instance: "I have irrational fears that control and limit my life in significant ways.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Megalomania (Delusions of Grandeur)", instance: "I have an inflated sense of my own importance and a deep need for admiration.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Masochism (Pain Gratification)", instance: "I derive a sense of pleasure when I endure pain or humiliation.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Sadism (Cruelty)", instance: "I feel a surge of empowerment when I inflict pain or dominate others.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Mistrust (Wariness)", instance: "I find it hard to trust, always suspecting people of having hidden agendas.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Dependence (Reliance)", instance: "I rely too much on others to meet my emotional or physical needs.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Indecision (Hesitation)", instance: "I am paralyzed when faced with decisions and often defer to others' choices.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Resentment (Bitterness)", instance: "I harbor long-term feelings of bitterness towards those who I think have wronged me.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Pessimism (Negativity)", instance: "I expect the worst in most situations and doubt positive outcomes.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Apathy (Indifference)", instance: "I lack motivation and interest, and I'm indifferent to things that excite others.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Overconfidence (Self-Assurance)", instance: "I often overestimate my own abilities and take on more than I can handle.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Mood Swings (Emotional Instability)", instance: "My emotional states can change dramatically and unpredictably.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Stubbornness (Obstinacy)", instance: "I am resistant to changing my viewpoint, even when presented with new evidence.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Insecurity (Uncertainty)", instance: "I frequently doubt my value and question my worth.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Escapism (Avoidance)", instance: "I retreat into my own world to avoid the unpleasant realities of life.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Volatility (Explosiveness)", instance: "My emotional reactions are intense and can be quite sudden.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Denial (Refusal of Reality)", instance: "I refuse to acknowledge unpleasant truths about myself or my life.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Jealousy (Envy)", instance: "I feel threatened and uneasy when someone has something I desire.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Egocentrism (Self-Centeredness)", instance: "I struggle to understand or appreciate the perspectives of others.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Fatalism (Defeatism)", instance: "I believe that the course of my life is predetermined and beyond my control.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Rigidity (Inflexibility)", instance: "I stick to my routines and ideas, even when they're no longer effective.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Cynicism (Distrustfulness)", instance: "I doubt the goodness of others and expect people to act in self-interest.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Suspicion (Doubt)", instance: "I am often skeptical of others' motives and question their intentions.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Intolerance (Unacceptance)", instance: "I am dismissive of opinions and lifestyles that differ from my own.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Despair (Hopelessness)", instance: "I feel a profound sense of hopelessness and see no possibility for change.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Overthinking (Analysis Paralysis)", instance: "I analyze things excessively, which often prevents me from taking action.", instanceWeight: 1 },
  { category: "Psychological", subCategory: "Defeatism (Resignation)", instance: "I feel resigned to failure, as if my efforts are futile.", instanceWeight: 1 },
  { category: "Social", subCategory: "Disrespect (Rudeness)", instance: "I often disregard others' feelings and express myself in a manner that is rude and offensive.", instanceWeight: 1 },
  { category: "Social", subCategory: "Arrogance (Haughtiness)", instance: "I have an inflated sense of my own importance and abilities, often belittling others.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Conformity (Peer Pressure)",
    instance: "I am easily swayed by others' opinions and tend to conform to what others do or believe, even if it's against my principles.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Antagonism (Hostility)", instance: "I frequently exhibit unfriendly and aggressive behavior towards others.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Aloofness (Detachment)",
    instance: "I remain emotionally distant and indifferent in social situations, making it hard for others to connect with me.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Gossip (Slander)", instance: "I habitually spread rumors or talk about the private affairs of others.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Unreliability (Flakiness)",
    instance: "I often fail to keep my promises or commitments, leaving others disappointed or in difficult situations.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Cynicism (Skepticism)",
    instance: "I generally see the worst in people and situations, often expressing my skepticism and negative opinions.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Ingratitude (Unthankfulness)", instance: "I rarely acknowledge or appreciate the help and kindness others offer me.", instanceWeight: 1 },
  { category: "Social", subCategory: "Dismissiveness (Indifference)", instance: "I tend to ignore or trivialize other people's opinions, feelings, or needs.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Invasiveness (Intrusiveness)",
    instance: "I disregard others' boundaries and privacy, often involving myself in matters where I'm not welcome.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Impatience (Restlessness)", instance: "I get easily irritated and can't tolerate waiting or slow progress in others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Overbearingness (Domineering)", instance: "I tend to control or dictate how others should act or think.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Insularity (Narrow-mindedness)",
    instance: "I am not open to new ideas or people different from myself, often rejecting anything unfamiliar.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Pessimism (Negativity)",
    instance: "I have a tendency to see the negative side of every situation and express my pessimistic outlook, bringing down those around me.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Sarcasm (Cutting Humor)", instance: "I frequently use sarcasm in a way that can be hurtful or offensive, even if it's not my intention.", instanceWeight: 1 },
  { category: "Social", subCategory: "Nonchalance (Apathy)", instance: "I show little interest or concern for things that others find important or worrying.", instanceWeight: 1 },
  { category: "Social", subCategory: "Competitiveness (Rivalry)", instance: "I always need to win or be the best, often at the expense of others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Vanity (Self-Absorption)", instance: "I am excessively focused on my appearance and achievements, often seeking admiration from others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Defensiveness (Sensitivity)", instance: "I quickly take offense and get defensive, even over minor criticisms or jokes.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Exhibitionism (Attention-Seeking)",
    instance: "I constantly seek attention and often behave dramatically or inappropriately to ensure I am noticed.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Indiscretion (Tactlessness)",
    instance: "I often speak or act without considering the feelings or circumstances of others, leading to awkward or hurtful situations.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Pride (Hubris)",
    instance: "I have an excessive sense of self-esteem and superiority, making it difficult to acknowledge my faults or learn from others.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Suspicion (Distrust)", instance: "I find it hard to trust others, often suspecting their motives or fearing betrayal.", instanceWeight: 1 },
  { category: "Social", subCategory: "Withdrawal (Isolation)", instance: "I tend to isolate myself, avoiding social interactions and not participating in group activities.", instanceWeight: 1 },
  { category: "Social", subCategory: "Envy (Jealousy)", instance: "I often feel resentful when others have what I perceive as better possessions, success, or qualities.", instanceWeight: 1 },
  { category: "Social", subCategory: "Dependence (Clinginess)", instance: "I excessively rely on others for emotional support, approval, or companionship.", instanceWeight: 1 },
  { category: "Social", subCategory: "Intolerance (Bigotry)", instance: "I am often intolerant of people who are different from me, whether in beliefs, culture, or lifestyle.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Passive-Aggression (Indirect Hostility)",
    instance: "I express my anger and frustration in indirect and underhanded ways rather than confronting issues openly.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Moodiness (Temperamental)", instance: "My mood changes unpredictably, affecting my social interactions and how I treat others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Bluntness (Abruptness)", instance: "I often speak in a very direct, sometimes harsh manner, without considering the impact of my words.", instanceWeight: 1 },
  { category: "Social", subCategory: "Egocentrism (Selfishness)", instance: "I focus primarily on my own needs and concerns, often overlooking or dismissing the needs of others.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Mischievousness (Prankishness)",
    instance: "I enjoy playing pranks or making jokes at others' expense, sometimes causing unintended harm or offense.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Fanaticism (Zealotry)",
    instance: "I am overly passionate about my beliefs or interests, often pushing them onto others in an aggressive manner.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Superficiality (Shallowness)",
    instance: "I am often concerned with surface-level aspects of social interactions, neglecting deeper or more meaningful connections.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Inflexibility (Stubbornness)",
    instance: "I am unwilling to change my opinions or ways, even in the face of new information or in social negotiations.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Mistrust (Suspicion)", instance: "I find it difficult to trust others, often doubting their intentions or honesty.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Provocation (Agitation)",
    instance: "I tend to provoke or stir up trouble in social situations, often enjoying the chaos or conflict that ensues.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Neglect (Inattentiveness)", instance: "I often neglect my relationships, failing to give time or attention to those who care about me.", instanceWeight: 1 },
  { category: "Social", subCategory: "Insecurity (Self-Doubt)", instance: "I frequently feel insecure, leading me to act in needy or defensive ways in social interactions.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Over-sharing (Indiscretion)",
    instance: "I have a tendency to share too much personal information, making others uncomfortable or breaching social norms.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Disorganization (Scatterbrained)",
    instance: "I often come across as disorganized or absent-minded, affecting my reliability in social commitments.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Sarcasm (Snarkiness)",
    instance: "I use sarcasm frequently, which can be perceived as hurtful or insensitive, even if it's intended in jest.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Pride (Vanity)", instance: "I am overly proud and often boast about my achievements or qualities, sometimes alienating others.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Indifference (Aloofness)",
    instance: "I display a lack of interest or concern for the feelings or problems of others, often appearing cold or detached.",
    instanceWeight: 1
  },
  {
    category: "Social",
    subCategory: "Impulsiveness (Rashness)",
    instance: "I act on impulse without considering the social consequences, often leading to regrettable situations.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Exaggeration (Overstatement)", instance: "I have a tendency to exaggerate or embellish stories, which can mislead or alienate others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Pessimism (Cynicism)", instance: "I often have a negative or cynical view of people and situations, which can be off-putting to others.", instanceWeight: 1 },
  { category: "Social", subCategory: "Overcritical (Judgmental)", instance: "I tend to be overly critical of others, focusing on their faults rather than their strengths.", instanceWeight: 1 },
  {
    category: "Social",
    subCategory: "Unpredictability (Capriciousness)",
    instance: "My behavior in social settings is often unpredictable or erratic, making it hard for others to understand or relate to me.",
    instanceWeight: 1
  },
  { category: "Social", subCategory: "Manipulativeness (Exploitation)", instance: "I tend to manipulate others for my own benefit, often at their expense.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Poor Eyesight (Myopia)",
    instance: "I struggle with nearsightedness, making it difficult to see objects at a distance without corrective lenses.",
    instanceWeight: 1
  },
  {
    category: "Physical",
    subCategory: "Hearing Impairment (Deafness)",
    instance: "I have limited or no hearing ability, which challenges my communication and awareness in many environments.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Chronic Pain (Fibromyalgia)", instance: "I experience constant pain that limits my physical activities and affects my daily life.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Limited Mobility (Paralysis)",
    instance: "Due to paralysis, my mobility is significantly restricted, affecting my independence and physical capabilities.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Respiratory Issues (Asthma)", instance: "I suffer from asthma, which can suddenly restrict my breathing and physical exertion.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Muscular Weakness (Myopathy)", instance: "My muscles are weak, making it hard to perform tasks that require strength.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Speech Impediment (Stuttering)", instance: "I have a stutter, which affects my speech and makes communication challenging.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Poor Balance (Vertigo)", instance: "I frequently experience dizziness and a lack of balance, making it hard to move confidently.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Amputation (Limb Loss)", instance: "I have lost a limb, which significantly alters how I interact with the physical world.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Skin Condition (Eczema)", instance: "I have eczema, causing skin irritation and self-consciousness about my appearance.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Allergies (Severe Allergic Reactions)",
    instance: "I have severe allergies that can be triggered by various environmental factors, posing a constant health risk.",
    instanceWeight: 1
  },
  {
    category: "Physical",
    subCategory: "Digestive Issues (Irritable Bowel Syndrome)",
    instance: "My life is regularly disrupted by digestive problems, affecting my diet and comfort.",
    instanceWeight: 1
  },
  {
    category: "Physical",
    subCategory: "Cardiac Weakness (Heart Disease)",
    instance: "I have a heart condition that limits my physical exertion and requires constant monitoring.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Endocrine Disorders (Diabetes)", instance: "I manage diabetes, which affects my diet, energy levels, and overall health.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Skeletal Deformities (Scoliosis)", instance: "My spine is curved, causing me pain and affecting my posture and movement.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Neurological Disorder (Epilepsy)",
    instance: "I have epilepsy, which means I'm susceptible to seizures, affecting my daily life and safety.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Joint Problems (Arthritis)", instance: "Arthritis affects my joints, limiting my mobility and causing persistent pain.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Dental Issues (Chronic Toothache)", instance: "I suffer from ongoing dental problems, affecting my eating and self-esteem.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Visual Distortions (Color Blindness)",
    instance: "I cannot differentiate certain colors, which affects my perception and certain activities.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Lack of Stamina (Chronic Fatigue Syndrome)", instance: "I deal with chronic fatigue, drastically limiting my energy for daily tasks.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Frailty (Osteoporosis)", instance: "My bones are fragile, making me prone to fractures and limiting physical activities.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Migraines (Chronic Headaches)", instance: "I regularly suffer from debilitating migraines, impacting my ability to function.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Sleep Disorders (Insomnia)", instance: "My inability to sleep properly affects my energy levels and mental focus.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Hypersensitivity (Sensory Processing Disorder)",
    instance: "I am overly sensitive to sensory input, which can be overwhelming and disorienting.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Impaired Coordination (Ataxia)", instance: "I struggle with coordination, affecting my precision and ability to perform physical tasks.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Involuntary Movements (Tremors)", instance: "I have tremors that make it difficult to maintain steadiness in my hands and body.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Breathing Difficulty (COPD)", instance: "Chronic obstructive pulmonary disease limits my lung function and endurance.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Growth Disorders (Dwarfism)",
    instance: "My growth is significantly less than average, affecting my physical capabilities and social interactions.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Obesity (Weight Issues)", instance: "I struggle with obesity, which impacts my mobility, health, and self-esteem.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Underweight (Malnutrition)", instance: "Being significantly underweight, I face health issues and physical weakness.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Burns (Scarring)", instance: "I have severe burns that have left scars, affecting my appearance and physical sensations.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Limb Deformity (Clubfoot)", instance: "A deformity in my foot affects my walk and balance, limiting my mobility.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Poor Hand-Eye Coordination (Dyspraxia)", instance: "I struggle with hand-eye coordination, affecting activities that require precision.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Metabolic Issues (Hypothyroidism)", instance: "My thyroid condition affects my metabolism, energy levels, and weight.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Blood Disorders (Hemophilia)", instance: "I have a blood disorder that affects my clotting, posing risks with injuries.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Hormonal Imbalance (PCOS)", instance: "Hormonal issues due to PCOS affect various aspects of my health and appearance.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Cleft Lip/Palate (Facial Deformity)", instance: "A cleft lip affects my speech and facial appearance.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Lactose Intolerance (Dietary Restriction)", instance: "I cannot digest lactose, which limits my diet and can cause discomfort.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Infertility (Reproductive Issues)", instance: "I face challenges with infertility, affecting my personal and social life.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Cancer Survivor (Post-Treatment Weakness)", instance: "Post-cancer treatment, I face ongoing health challenges and physical weakness.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Sensory Impairment (Tinnitus)", instance: "I have persistent ringing in my ears, affecting my hearing and concentration.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Chronic Infections (Recurrent Illness)", instance: "I am prone to frequent infections, affecting my health and daily activities.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Autoimmune Disorder (Lupus)", instance: "My immune system attacks my body, causing various health issues and fatigue.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Cognitive Impairment (Brain Injury)",
    instance: "A brain injury has left me with cognitive challenges, affecting my memory and thinking.",
    instanceWeight: 1
  },
  { category: "Physical", subCategory: "Bone Frailty (Brittle Bone Disease)", instance: "I have unusually fragile bones, making me vulnerable to fractures.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Gait Abnormality (Limp)", instance: "An irregularity in my walk affects my mobility and endurance.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Kidney Disease (Renal Failure)", instance: "Kidney disease affects my overall health and requires constant management.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Liver Disease (Hepatitis)", instance: "Liver problems impact my overall health and can limit my lifestyle.", instanceWeight: 1 },
  { category: "Physical", subCategory: "Hormone Deficiency (Growth Hormone Deficiency)", instance: "A lack of growth hormone affects my physical development and health.", instanceWeight: 1 },
  {
    category: "Physical",
    subCategory: "Adrenal Insufficiency (Addison's Disease)",
    instance: "I have a condition affecting my adrenal glands, influencing my energy, mood, and health.",
    instanceWeight: 1
  },
  {
    category: "Emotional",
    subCategory: "Impulsivity (Rashness)",
    instance: "I often act on my immediate emotions without thinking about the consequences, leading to regrettable decisions.",
    instanceWeight: 1
  },
  {
    category: "Emotional",
    subCategory: "Over-Sensitivity (Fragility)",
    instance: "I am extremely sensitive to criticism or perceived slights, often feeling hurt or upset easily.",
    instanceWeight: 1
  },
  { category: "Emotional", subCategory: "Anger Issues (Temper)", instance: "I struggle to control my anger, frequently losing my temper in inappropriate ways.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Emotional Detachment (Aloofness)", instance: "I find it hard to connect emotionally with others, often appearing distant or uncaring.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Mood Swings (Instability)", instance: "My emotions fluctuate wildly, affecting my behavior and making me unpredictable.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Jealousy (Envy)", instance: "I often feel intense jealousy, resenting others for their successes or relationships.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Anxiety (Worry)", instance: "I am constantly anxious and worried, often about things that are beyond my control.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Indifference (Apathy)", instance: "I lack interest or enthusiasm in things that others find important, often seeming disinterested.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Depression (Despondency)", instance: "I frequently feel overwhelmed by sadness or hopelessness, impacting my daily functioning.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Lack of Empathy (Insensitivity)", instance: "I struggle to understand or share the feelings of others, often appearing callous.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Pessimism (Cynicism)", instance: "I tend to see the worst in situations and people, expecting negative outcomes.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Insecurity (Self-Doubt)", instance: "I often feel inadequate or unworthy, affecting my interactions and decisions.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Guilt (Remorsefulness)", instance: "I am frequently consumed by guilt, even for things outside my control.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Fearfulness (Timidity)", instance: "I am often excessively fearful or timid, avoiding risks or challenges.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Defensiveness (Guardedness)", instance: "I quickly become defensive in response to criticism or questioning.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Vulnerability (Fragileness)", instance: "I am easily hurt or affected by external influences, often feeling vulnerable.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Obsessiveness (Fixation)", instance: "I tend to fixate on certain thoughts or ideas, unable to let them go.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Paranoia (Distrust)", instance: "I often feel paranoid, suspecting others of deceit or harm without evidence.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Narcissism (Egotism)", instance: "I am overly focused on myself and my own importance, disregarding others.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Histrionics (Dramatic)", instance: "I tend to be overly dramatic and emotional, often seeking attention.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Overwhelm (Stress)", instance: "I easily get overwhelmed by emotions, making it hard to cope with stress.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Stubbornness (Inflexibility)", instance: "I am often unreasonably stubborn, refusing to change my emotional stance.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Resentment (Bitterness)", instance: "I harbor deep resentment towards certain people or experiences.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Impatience (Restlessness)", instance: "I am often impatient, finding it hard to wait or cope with delays.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Indecisiveness (Hesitancy)", instance: "I struggle to make decisions, often fluctuating between emotions and choices.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Disappointment (Dissatisfaction)", instance: "I am frequently disappointed with people and situations, leading to dissatisfaction.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Passivity (Submissiveness)", instance: "I tend to be overly passive, suppressing my emotions to avoid conflict.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Euphoria (Overexcitement)", instance: "I sometimes experience intense, unrealistic euphoria that skews my judgment.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Regret (Remorse)", instance: "I am often plagued by regret over past actions or decisions.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Misery (Unhappiness)", instance: "I frequently feel a deep sense of misery or unhappiness.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Contempt (Scorn)", instance: "I often feel contemptuous, looking down on others or situations.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Over-Attachment (Clinginess)", instance: "I become overly attached emotionally, which can be smothering to others.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Despair (Hopelessness)", instance: "I often feel a sense of despair, seeing little hope or possibility in situations.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Over-Criticism (Judgmental)", instance: "I am overly critical of myself and others, focusing on faults and mistakes.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Yearning (Longing)", instance: "I have intense, often unfulfilled yearnings, which leave me feeling dissatisfied.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Shame (Humiliation)", instance: "I frequently feel shame, often internalizing failures or embarrassments.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Melancholy (Sorrow)", instance: "I often feel a deep, pervasive melancholy that affects my perspective.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Exhaustion (Burnout)", instance: "I experience emotional exhaustion, feeling drained from coping with my feelings.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Hostility (Aggression)", instance: "I often exhibit hostility, reacting aggressively in emotional situations.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Nostalgia (Yearning for the Past)", instance: "I am excessively nostalgic, often lost in longing for the past.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Disdain (Contempt)", instance: "I feel disdain towards others or situations, often dismissing them outright.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Ingratitude (Unthankfulness)", instance: "I often fail to feel or express gratitude, taking things for granted.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Revengefulness (Vindictiveness)", instance: "I harbor a desire for revenge, holding onto grudges and seeking payback.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Over-Excitability (Impulsiveness)", instance: "I get overly excited easily, leading to impulsive reactions.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Grief (Mourning)", instance: "I am deeply grieving, which profoundly affects my emotional state and interactions.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Distrust (Suspicion)", instance: "I am often distrustful, suspecting others' motives and intentions.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Over-Optimism (Naivety)", instance: "I am sometimes naively over-optimistic, overlooking potential risks or downsides.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Self-Pity (Moroseness)", instance: "I frequently indulge in self-pity, focusing on my own misfortunes.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Discontent (Restlessness)", instance: "I am often discontented, feeling restless and unsatisfied with my situation.", instanceWeight: 1 },
  { category: "Emotional", subCategory: "Fanaticism (Zealotry)", instance: "I display emotional fanaticism, often going to extremes for my beliefs or passions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Naivety (Gullibility)", instance: "I tend to believe things too easily, often being misled or deceived.", instanceWeight: 1 },
  {
    category: "Intelligence",
    subCategory: "Shortsightedness (Lack of Foresight)",
    instance: "I struggle to see the long-term consequences of my actions, focusing only on immediate outcomes.",
    instanceWeight: 1
  },
  { category: "Intelligence", subCategory: "Ignorance (Uninformed)", instance: "I lack essential knowledge or awareness in areas I probably should understand.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Inattentiveness (Distractibility)", instance: "I find it hard to focus, easily getting distracted from the task at hand.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Impulsiveness (Haste)", instance: "I often make decisions too quickly, without fully thinking them through.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Forgetfulness (Absent-mindedness)", instance: "I frequently forget important information or commitments.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Closed-mindedness (Stubbornness)", instance: "I am resistant to new ideas or perspectives, stubbornly sticking to my own beliefs.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Poor Judgment (Indiscretion)", instance: "I often make poor decisions, failing to consider all the factors or potential outcomes.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Curiosity (Disinterest)", instance: "I have little interest in learning or exploring new things.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Illogical Thinking (Irrationality)", instance: "My reasoning often lacks logic, leading me to draw flawed conclusions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Overconfidence (Hubris)", instance: "I overestimate my own knowledge or abilities, often leading to mistakes.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Misinterpretation (Misunderstanding)", instance: "I frequently misunderstand information or the intentions of others.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Poor Problem-Solving (Inefficiency)", instance: "I struggle to find effective solutions to problems, often making situations worse.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Intuition (Insensitivity)", instance: "I fail to read between the lines or pick up on non-verbal cues.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Poor Memory (Forgetfulness)", instance: "I have trouble recalling information, which affects my learning and understanding.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Rigidity (Inflexibility)", instance: "I am inflexible in my thinking, struggling to adapt to new information or changes.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Superficial Understanding (Shallowness)", instance: "My understanding of complex subjects is often superficial and lacking depth.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Creativity (Unimaginativeness)", instance: "I find it difficult to think creatively or come up with original ideas.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Slow Learning (Difficulty Grasping Concepts)", instance: "I take longer than usual to understand new concepts or skills.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Analysis (Superficiality)", instance: "I tend not to analyze things deeply, missing important details or implications.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Indecisiveness (Hesitation)", instance: "I struggle to make decisions, often wavering and uncertain.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Dogmatism (Rigidity)", instance: "I rigidly adhere to my own beliefs, unwilling to consider alternative viewpoints.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Narrow-mindedness (Intolerance)", instance: "I have a narrow view of things, unwilling to accept different ideas or opinions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Strategic Thinking (Poor Planning)", instance: "I am not good at planning ahead or strategizing, often caught unprepared.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Insight (Obliviousness)", instance: "I often lack insight into situations or people, missing underlying issues.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Misjudgment (Poor Assessment)", instance: "I frequently misjudge situations or people, leading to incorrect conclusions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Conformity (Lack of Originality)", instance: "I tend to follow others' thoughts or ideas, lacking originality in my thinking.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Distorted Perception (Misconception)", instance: "My perception of reality is often distorted, leading to incorrect beliefs.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Detail Orientation (Oversight)", instance: "I often overlook details, focusing only on the bigger picture.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Incoherence (Scatterbrained)", instance: "My thoughts are often disorganized, making it hard to articulate them clearly.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Fantasy-Prone (Daydreaming)", instance: "I get lost in fantasies and daydreams, losing touch with reality.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Credulity (Blind Belief)", instance: "I am too quick to believe things without questioning their validity.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Simplistic Thinking (Naiveness)", instance: "My thinking is often too simplistic, not appreciating the complexity of situations.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Irresponsibility (Carelessness)", instance: "I am careless in my thought processes, often neglecting to consider the repercussions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Prejudice (Bias)", instance: "My thinking is clouded by prejudices, affecting my ability to be objective.", instanceWeight: 1 },
  {
    category: "Intelligence",
    subCategory: "Inability to Synthesize (Fragmented Thinking)",
    instance: "I struggle to connect different ideas or information, leading to fragmented thinking.",
    instanceWeight: 1
  },
  { category: "Intelligence", subCategory: "Unreflective (Thoughtlessness)", instance: "I seldom reflect on my experiences or beliefs, lacking self-awareness.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Miscalculation (Error in Judgment)", instance: "I often miscalculate or misjudge situations, leading to errors in my decisions.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Unwillingness to Learn (Stubbornness)", instance: "I am often unwilling to learn new things or adapt my understanding.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Selective Memory (Bias)", instance: "I remember things selectively, often in a way that confirms my existing beliefs.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Literal-mindedness (Inability to Grasp Nuances)", instance: "I tend to take things literally, missing nuances or implied meanings.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Overgeneralization (Sweeping Statements)", instance: "I make broad generalizations without sufficient evidence.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Disorganization (Muddled Thinking)", instance: "My thoughts are often disorganized, leading to confusion and inefficiency.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Compulsive Fixation (Obsession)", instance: "I become compulsively fixated on certain ideas, unable to let them go.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Lack of Reflection (Unthoughtfulness)", instance: "I don't spend time reflecting on my experiences or ideas.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Jumping to Conclusions (Hasty Generalization)", instance: "I often jump to conclusions without adequate information or reasoning.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Reductive Reasoning (Oversimplification)", instance: "I oversimplify complex issues, reducing them to basic, often flawed, terms.", instanceWeight: 1 },
  { category: "Intelligence", subCategory: "Projection (Blaming Others)", instance: "I project my own thoughts or feelings onto others, misinterpreting their actions.", instanceWeight: 1 },
  {
    category: "Intelligence",
    subCategory: "Inability to Prioritize (Poor Focus)",
    instance: "I struggle to prioritize information or tasks, leading to ineffective decision-making.",
    instanceWeight: 1
  },
  { category: "Intelligence", subCategory: "Denial (Refusal to Accept Reality)", instance: "I often deny reality, refusing to accept facts that contradict my beliefs.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Dogmatism (Rigidity)", instance: "I rigidly adhere to my beliefs, refusing to consider alternative viewpoints or evidence.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Superstition (Irrational Beliefs)", instance: "I hold onto irrational beliefs and superstitions, even when they're proven baseless.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Cynicism (Distrust)", instance: "I generally view people and situations with distrust and skepticism, expecting the worst.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Prejudice (Bias)", instance: "I harbor unfair prejudices against certain groups or beliefs, affecting my judgment and actions.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Fatalism (Resignation)", instance: "I believe that fate controls everything and that my actions have little impact.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Paranoia (Suspicion)", instance: "I am overly suspicious and often believe in elaborate conspiracies without proof.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Nihilism (Pessimism)", instance: "I believe that life is meaningless and reject all religious and moral principles.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Idealism (Naivety)", instance: "My beliefs are overly idealistic and not grounded in reality, leading to disappointment.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Fanaticism (Zealotry)", instance: "I am excessively zealous about my beliefs, often to the point of extremism.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Moral Relativism (Ethical Ambiguity)", instance: "I believe that morality is subjective, often using it to justify questionable actions.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Narcissism (Self-Centeredness)", instance: "I hold an inflated view of my own importance and believe I am above others.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Hedonism (Pleasure-seeking)", instance: "I believe in pursuing pleasure as the highest good, often at the expense of others.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Pessimism (Hopelessness)", instance: "I have a pessimistic view of the world, often feeling that things will inevitably go wrong.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Materialism (Greed)", instance: "I place excessive value on material possessions and wealth.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Chauvinism (Superiority)", instance: "I believe in the superiority of my own group, whether national, political, or social.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Apathy (Indifference)", instance: "I am indifferent to social, political, or ethical issues, showing little concern or interest.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Skepticism (Doubt)", instance: "I am excessively skeptical, often questioning the validity of widely accepted truths or beliefs.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Blind Faith (Gullibility)", instance: "I accept beliefs blindly, without questioning or seeking evidence.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Xenophobia (Fear of Outsiders)", instance: "I irrationally fear and distrust people from other countries or cultures.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Entitlement (Self-importance)", instance: "I believe that I am inherently deserving of privileges or special treatment.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Obsession (Compulsion)", instance: "I am obsessed with certain ideas or beliefs, often to an unhealthy degree.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Dependence (Reliance)", instance: "I overly rely on certain beliefs or systems, unable to think or act independently.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Defeatism (Pessimism)", instance: "I hold a defeatist attitude, believing that failure is inevitable and unavoidable.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Escapism (Avoidance)", instance: "I use beliefs or fantasies to escape from reality or responsibilities.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Moral Superiority (Judgmental)", instance: "I believe in my moral superiority, often judging others harshly.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Misogyny (Sexism)", instance: "I hold prejudiced beliefs against women, viewing them as inferior or lesser.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Racism (Bigotry)", instance: "I harbor racist beliefs, considering certain races or ethnicities to be superior or inferior.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Homophobia (Intolerance)", instance: "I have an irrational fear or dislike of homosexual individuals.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Religious Extremism (Fundamentalism)", instance: "I hold extreme religious views, often rejecting any differing beliefs.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Conformity (Compliance)", instance: "I tend to conform blindly to societal or group beliefs without question.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Egotism (Self-obsession)", instance: "I am overly focused on myself, often disregarding the perspectives or needs of others.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Black-and-White Thinking (Simplistic)", instance: "I see things in absolute terms, with no room for complexity or nuance.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Over-Generalization (Stereotyping)", instance: "I often make broad generalizations about groups or situations.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Antisocial Beliefs (Rebellion)", instance: "I hold beliefs that go against societal norms, sometimes leading to harmful actions.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Misanthropy (Hatred of Humankind)", instance: "I have a general hatred or distrust of humankind.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Irresponsibility (Carelessness)", instance: "I believe that I am not responsible for my actions or their consequences.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Disillusionment (Cynicism)", instance: "I am deeply disillusioned with certain ideals or beliefs I once held.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Vulnerability (Susceptibility)", instance: "I am easily influenced or hurt by the beliefs or opinions of others.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Traditionalism (Conventionalism)", instance: "I strictly adhere to traditional beliefs, often resisting change or new ideas.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Machismo (Hypermasculinity)", instance: "I believe in and exhibit exaggerated masculine traits or behaviors.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Inflexibility (Rigidity)", instance: "I am inflexible in my beliefs, unwilling to adapt or reconsider them.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Elitism (Snobbery)", instance: "I believe that I belong to an elite group, deserving special status or privileges.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Cultural Ignorance (Insensitivity)", instance: "I am ignorant of or insensitive to other cultures and their beliefs.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Resentment (Bitterness)", instance: "I hold deep-seated resentment towards certain beliefs or groups.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Isolationism (Detachment)", instance: "I believe in isolating myself or my group from the wider world or different ideas.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Passivity (Submissiveness)", instance: "I am overly passive in my beliefs, often accepting what I am told without question.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Radicalism (Extremism)", instance: "I hold radical beliefs, advocating for drastic political or social changes.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Disregard for Authority (Rebellion)", instance: "I have a blatant disregard for authority or established beliefs.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Ageism (Generational Bias)", instance: "I hold prejudiced beliefs against individuals of certain age groups.", instanceWeight: 1 },
  { category: "Belief", subCategory: "Classism (Elitism)", instance: "I believe in the superiority of certain social or economic classes over others.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Incompetence (Lack of Skill)",
    instance: "I lack the necessary skills or knowledge for my job, often failing to meet standards.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Unreliability (Irresponsibility)",
    instance: "I am known to be unreliable, frequently missing deadlines or failing to complete tasks.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Procrastination (Delaying)", instance: "I habitually procrastinate, often leaving tasks until the last minute.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Indifference (Apathy)", instance: "I show little interest or enthusiasm in my work, doing the bare minimum required.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Unethical Behavior (Dishonesty)", instance: "I often engage in unethical practices at work, such as lying or cutting corners.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Poor Leadership (Ineffectiveness)", instance: "As a leader, I struggle to motivate or effectively manage my team.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Mismanagement (Inefficiency)", instance: "I am not good at managing resources or people, often leading to chaos or waste.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Lack of Initiative (Passivity)", instance: "I rarely take initiative, usually waiting to be told what to do.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Overbearing (Domineering)", instance: "I tend to be overbearing, micromanaging or controlling every aspect of work.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Negligence (Carelessness)", instance: "I am often negligent, overlooking important details that affect my work quality.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Communication (Withholding)",
    instance: "I fail to communicate effectively, often leading to misunderstandings or confusion.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Resistant to Change (Stubbornness)", instance: "I resist new ideas or ways of working, preferring to stick to the old ways.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Conflict Avoidance (Passiveness)", instance: "I avoid addressing conflicts, often letting issues fester unresolved.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Poor Teamwork (Non-Collaborative)", instance: "I struggle to work well in a team, often causing friction or disunity.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Adaptability (Inflexibility)",
    instance: "I am not adaptable, struggling with changes or new demands in my profession.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Lack of Ambition (Complacency)", instance: "I lack ambition, content with mediocrity rather than striving for excellence.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Manipulativeness (Exploitation)", instance: "I tend to manipulate others for my own benefit, often at their expense.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Credit Stealing (Dishonesty)", instance: "I often take credit for others' work or ideas, ignoring their contributions.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Unprofessionalism (Inappropriateness)",
    instance: "I frequently behave inappropriately, disregarding professional norms or etiquette.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Impulsiveness (Rashness)", instance: "I make hasty decisions without fully considering the consequences.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Defensiveness (Non-Receptive)", instance: "I am overly defensive to feedback or criticism, rarely taking it constructively.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Insubordination (Disobedience)", instance: "I often defy orders or guidelines, preferring to do things my own way.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Burnout (Exhaustion)", instance: "I am experiencing burnout, affecting my performance and motivation.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Cynicism (Skepticism)", instance: "I am overly cynical about my job and colleagues, which affects my attitude and work.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Over-Competitiveness (Rivalry)", instance: "I am excessively competitive, often at the expense of teamwork or ethics.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Lack of Confidence (Self-Doubt)", instance: "I lack confidence in my abilities, often second-guessing myself.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Absenteeism (Frequent Absences)",
    instance: "I am frequently absent from work, causing disruptions and extra burdens for others.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Micromanagement (Over-Control)", instance: "I micromanage everything, not trusting my team to work independently.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Professional Growth (Stagnation)",
    instance: "I show little interest in professional development or learning new skills.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Arrogance (Egotism)", instance: "I am arrogant about my abilities, often overestimating my competence.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Tardiness (Lateness)", instance: "I am regularly late, showing disrespect for others' time and commitments.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Blame Shifting (Deflecting)", instance: "I tend to shift blame to others, avoiding taking responsibility for my mistakes.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Lack of Enthusiasm (Disinterest)", instance: "I show little enthusiasm for my work, doing only what is necessary.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Isolationism (Non-Participation)",
    instance: "I isolate myself, not engaging with colleagues or participating in team activities.",
    instanceWeight: 1
  },
  { category: "Professional Conduct", subCategory: "Disharmony (Conflict Creation)", instance: "I often create or escalate conflicts, disrupting workplace harmony.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Pessimism (Negativity)", instance: "I am overly pessimistic, often demoralizing others with my negative outlook.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Gossiping (Rumor Spreading)", instance: "I indulge in gossip, spreading rumors or confidential information.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Bullying (Intimidation)", instance: "I engage in workplace bullying, intimidating or belittling my colleagues.", instanceWeight: 1 },
  { category: "Professional Conduct", subCategory: "Close-mindedness (Rigidity)", instance: "I am close-minded, unwilling to consider new ideas or perspectives.", instanceWeight: 1 },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Empathy (Insensitive)",
    instance: "I show little empathy towards colleagues, often disregarding their feelings or challenges.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Disorganization (Messiness)",
    instance: "I am disorganized, often mismanaging my time and resources.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Avoidance (Evasion)",
    instance: "I tend to avoid difficult tasks or decisions, leaving them to others.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Undermining (Sabotage)",
    instance: "I sometimes undermine colleagues, intentionally or unintentionally sabotaging their work.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Distractibility (Inattentiveness)",
    instance: "I am easily distracted, finding it hard to concentrate on my work.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Creativity (Unimaginativeness)",
    instance: "I lack creativity, often sticking to outdated methods or ideas.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Exaggeration (Overstatement)",
    instance: "I tend to exaggerate my achievements or capabilities, often misleading others.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Over-dependence (Reliance)",
    instance: "I rely too heavily on others, not taking enough responsibility for my work.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Disrespect (Rudeness)",
    instance: "I am often disrespectful to colleagues or clients, showing a lack of professionalism.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Lack of Transparency (Secretiveness)",
    instance: "I am not transparent in my dealings, often keeping information or intentions hidden.",
    instanceWeight: 1
  },
  {
    category: "Professional Conduct",
    subCategory: "Overworking (Workaholism)",
    instance: "I tend to overwork, neglecting personal life and potentially burning out.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Greed (Avarice)",
    instance: "I have an insatiable desire for wealth and possessions, often at the expense of others' needs.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Envy (Jealousy)",
    instance: "I often feel resentful when others have what I perceive as better possessions, success, or qualities.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Wrath (Anger)",
    instance: "I frequently experience intense anger and hostility, sometimes losing control.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Pride (Hubris)",
    instance: "I tend to overestimate my abilities or importance and often dismiss others.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Lust (Licentiousness)",
    instance: "I struggle with overwhelming and often inappropriate sexual desires.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Sloth (Idleness)",
    instance: "I avoid exerting effort and often neglect my duties and responsibilities.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Gluttony (Excess)",
    instance: "I habitually overindulge in pleasures or consumption, beyond what is necessary or healthy.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Deceit (Dishonesty)",
    instance: "I often find myself lying or misleading others to get what I want.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Vengeance (Retribution)",
    instance: "I hold grudges and seek to retaliate, often disproportionately, to right perceived wrongs.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Cruelty (Brutality)",
    instance: "I can be deliberately harmful and enjoy causing pain or suffering to others.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Impiety (Blasphemy)",
    instance: "I show a lack of respect towards sacred beliefs or practices, often irreverently.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Insensitivity (Callousness)",
    instance: "I tend to be uncaring about others' feelings or hardships.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Malice (Malevolence)",
    instance: "I have a desire to harm others or see them suffer.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Hypocrisy (Insincerity)",
    instance: "I pretend to hold values or beliefs that I don't actually live by.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Selfishness (Egocentrism)",
    instance: "I prioritize my own needs and desires above those of everyone else.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Betrayal (Treachery)",
    instance: "I am not above breaking trust or being disloyal to gain personal benefit.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Manipulation (Exploitation)",
    instance: "I often use others for my own advantage, manipulating situations to my benefit.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Irresponsibility (Carelessness)",
    instance: "I tend to neglect my responsibilities and duties, often leading to negative consequences.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Ignorance (Unawareness)",
    instance: "I lack knowledge or awareness in areas I probably should understand.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Obsession (Fixation)",
    instance: "I have an unhealthy obsession, often neglecting other aspects of my life.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Addiction (Dependency)",
    instance: "I am addicted to substances or activities, which dominate my life and decisions.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Narcissism (Self-Obsession)",
    instance: "I am excessively focused on myself, often neglecting or using others.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Spite (Vindictiveness)",
    instance: "I act out of spite, seeking to hurt or upset others for perceived slights.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Paranoia (Distrust)",
    instance: "I am overly suspicious or paranoid, often seeing malice where there is none.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Fanaticism (Obsessive Zeal)",
    instance: "I am fanatical about my beliefs or passions, often to an unhealthy degree.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Indulgence (Excess)",
    instance: "I indulge excessively in comforts or luxuries, often at the expense of my well-being.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Impulsiveness (Recklessness)",
    instance: "I act on impulses without considering the consequences, often resulting in harm.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Cowardice (Fearfulness)",
    instance: "I often let fear dictate my actions, avoiding risks or challenges.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Arrogance (Haughtiness)",
    instance: "I am overly arrogant, belittling others and overestimating my own importance.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Procrastination (Laziness)",
    instance: "I habitually procrastinate, avoiding tasks or responsibilities.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Cynicism (Distrustfulness)",
    instance: "I am cynically distrustful of people's motives and intentions.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Despair (Hopelessness)",
    instance: "I often succumb to feelings of despair and hopelessness.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Judgmentalism (Criticism)",
    instance: "I am overly critical of others, often judging them harshly and unfairly.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Defensiveness (Guardedness)",
    instance: "I react defensively to feedback or criticism, often refusing to change.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Ingratitude (Unthankfulness)",
    instance: "I fail to show gratitude, often taking others and their efforts for granted.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Intolerance (Bigotry)",
    instance: "I am intolerant of differences, often rejecting or disparaging those unlike me.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Dishonesty (Deception)",
    instance: "I habitually lie or deceive others for my own gain or convenience.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Stubbornness (Inflexibility)",
    instance: "I am unreasonably stubborn, refusing to change my opinion or course of action.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Overbearingness (Domineering)",
    instance: "I am domineering in my interactions, often trying to control others.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Impatience (Restlessness)",
    instance: "I am frequently impatient, easily irritated by delays or waiting.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Moodiness (Temperamental)",
    instance: "My mood swings affect my interactions, often leading to conflicts or hurt.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Pettiness (Triviality)",
    instance: "I often focus on petty issues, making mountains out of molehills.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Evasiveness (Elusiveness)",
    instance: "I am evasive, often avoiding direct answers or responsibilities.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Vulgarity (Coarseness)",
    instance: "I often display vulgar or coarse behavior, disregarding social norms.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Unforgiving (Resentfulness)",
    instance: "I struggle to forgive, often holding onto grudges and resentments.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Disrespect (Rudeness)",
    instance: "I frequently act disrespectfully towards others, disregarding their feelings or dignity.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Rashness (Haste)",
    instance: "I make hasty decisions without fully considering the implications.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Pessimism (Negativity)",
    instance: "I have a pessimistic outlook, often expecting the worst in situations.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Sarcasm (Biting Wit)",
    instance: "I use sarcasm frequently, which can be hurtful or inappropriate.",
    instanceWeight: 1
  },
  {
    category: "Vice",
    subCategory: "Gossip (Rumor-Mongering)",
    instance: "I engage in spreading gossip, often discussing others' private affairs.",
    instanceWeight: 1
  }
];

// 1. Moral Flaws: These are ethical failings indicating a lack of or skewed moral compass. These flaws often involve actions that violate accepted ethical norms and values, leading to harm or injustice.
// 2. Psychological Flaws: These are mental or emotional issues that negatively affect a character's behavior, judgement, or ability to function.
// 3. Social Flaws: This category covers deficiencies in social interactions or relationships.
// 4. Emotional Flaws: Tied to a character's ability to manage and express their emotions in a healthy way
// 5. Physical Flaws: These are physical constraints that limit a character's abilities.
// 6. Intelligence Flaws: These involve shortcomings in a character's intellect, reasoning, or knowledge.
// 7. Belief Flaws: This class of flaws relates to problematic views or principles the character holds.
// 8. Professional Conduct Flaws: These are flaws rooted in a character's performance or behavior within their occupation.
// 9. Vices: These are compulsive or habitual negative behaviors often tied to personal desires or impulses.
