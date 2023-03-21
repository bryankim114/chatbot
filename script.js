var _0x47c0f3 = _0x554a; (function (_0x5b1f03, _0x497281) { var _0xbfc2ab = _0x554a, _0x140f1d = _0x5b1f03(); while (!![]) { try { var _0x44ada2 = -parseInt(_0xbfc2ab(0x146)) / 0x1 * (-parseInt(_0xbfc2ab(0x148)) / 0x2) + -parseInt(_0xbfc2ab(0x14a)) / 0x3 + -parseInt(_0xbfc2ab(0x14c)) / 0x4 + -parseInt(_0xbfc2ab(0x14d)) / 0x5 * (parseInt(_0xbfc2ab(0x14f)) / 0x6) + parseInt(_0xbfc2ab(0x14b)) / 0x7 + parseInt(_0xbfc2ab(0x14e)) / 0x8 * (-parseInt(_0xbfc2ab(0x150)) / 0x9) + parseInt(_0xbfc2ab(0x147)) / 0xa; if (_0x44ada2 === _0x497281) break; else _0x140f1d['push'](_0x140f1d['shift']()); } catch (_0x337b49) { _0x140f1d['push'](_0x140f1d['shift']()); } } }(_0x56cc, 0x1d013)); var key = _0x47c0f3(0x149); function _0x554a(_0x558217, _0x4e4d69) { var _0x56cc41 = _0x56cc(); return _0x554a = function (_0x554abd, _0x54141c) { _0x554abd = _0x554abd - 0x146; var _0x171570 = _0x56cc41[_0x554abd]; return _0x171570; }, _0x554a(_0x558217, _0x4e4d69); } function _0x56cc() { var _0x13c31a = ['209720ikMDGo', '458080HyrGiU', '85mTvtYd', '93008OetVvD', '26958llXlMu', '135ZInDKz', '19wkabdJ', '5184710vAjLaY', '2298SRYFzx', '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', '258504bhhFqi']; _0x56cc = function () { return _0x13c31a; }; return _0x56cc(); }
var xhr = new XMLHttpRequest();
xhr.open("GET", "key.txt", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    key = xhr.responseText;
  }
};
xhr.send();



// sss

function init() {
  let res_elm = document.createElement("div");
  res_elm.innerHTML = "Hello Myself Bryan, How can I help you?";
  res_elm.setAttribute("class", "left");

  document.getElementById('msg').appendChild(res_elm);
}

var input = document.getElementById("msg_send");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    document.getElementById("reply").click();
  }
});

document.getElementById('reply').addEventListener("click", async (e) => {
  e.preventDefault();

  let data_req = document.createElement('div');
  let data_res = document.createElement('div');

  let container1 = document.createElement('div');
  let container2 = document.createElement('div');

  container1.setAttribute("class", "msgCon1");
  container2.setAttribute("class", "msgCon2");

  data_req.setAttribute("class", "right");
  data_res.setAttribute("class", "left pre");



  var req = document.getElementById('msg_send').value;
  data_req.innerHTML = req;
  console.log(req)




  if (req == undefined || req == "") {
    alert("Please type something")
  }
  else {
    data_res.innerHTML = "Typing..";
    var url = "https://api.openai.com/v1/chat/completions";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      `Bearer ${key}`
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let response = xhr.responseText;
        response = JSON.parse(response);
        var res =
          response.choices[0].message.content;
        data_res.innerHTML = res;
      }

    }

    // console.log(res)
    // var question = document.getElementById("question").value;




    prompt = req;

    var data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system", content:
            `You are ChatGPT, a large language model trained by OpenAI. If user asks question other than civil building tasks topic please respond him with message I can only answer structures and building topic related questions.

            Train yourself on following information provided and answer questions.
            Analysis of cracks in structures and buildings
            Analysis of cracks in structures and buildings
P Velumani, K Mukilan, G Varun, S Divakar, R Muhil Doss and P Ganeshkumar
Kalasalingam Academy of Research and Education, Krishnankoil, Tamil Nadu, India
E-mail: velumani@klu.ac.in
Abstract. Analyzing and identifying cracks is the most vital step in the construction process. The
manual crack detection process will take longer and will be subjectively assessed by the inspectors.
This research provides a conceptual base for the image processing methodology for the automated
identification and examination of cracks. This model uses the Gray Intensity Correction Method (
i.e.) Min Max Gray Level Differentiation (M2GLD) for Image Improvement and the Otsu Image
Binarization Process. The experimental result shows that the combination of the M2GLD method
and the Otsu test will effectively detect crack defects in digital images. This model can therefore be
a useful tool for building construction agencies and structural maintenance engineers.
Keywords: Cracks, Image processing, structural cracks, building cracks, causes of cracks
1. Introduction
Even as engineers, cracking on the top of the frame was also a big problem for building owners. That is
because cracks may have a major effect on structural safety , reliability and serviceability [1-3]. The
hypothesis is that as cracks are created and propagated, a bent is supposed to induce a decrease in the
effective loading region resulting in increased stress and subsequent collapse of concrete or alternate
structures[3]. Because concrete structures also have drawbacks and buildings deteriorate with time,
cracking seems likely and all kinds of structures show as examples of concrete blocks, columns, slabs and
brick walls[12]. The purpose of the shape, number, width and length of cracks on the structural surface
indicates the earliest degree of degradation and the ability of the concrete frameworks to hold. Cracks are
generally divided into two types[10]. There are [1-3, 13] concrete cracks and non-structural cracks. These
non-structural cracks may occur due to internal pressure, poor workmanship, etc. Cracks can vary greatly
in size. Widespread cracks vary in width (a) less than 1 mm, (b) medium-from 1 mm to 2 mm, (c) widemore than 2 mm [1, 3, 4, 13]. Active fractures cause a great deal of discomfort and need careful treatment
because they are structurally dangerous. Small cracks that look insignificant can also develop and can
eventually lead to serious structural failure[9]. It is therefore important to consider the varieties of cracks,
crack patterns and hence their causes, as well as the preventive steps to be taken to manage cracks[2].
Manual visual inspection is inefficient, both in terms of price and consistency, as required by the
individual decision of the inspectors. Due to the inconsistent form and unusual scale of cracks and various
vibrations, there are a host of problems within the image-based square tracking, such as odd light patterns ,
colors, blemishes, and bits of concrete within the obtained images. Due to its ease of operation, several
ways of detecting the operation of the image have been developed. There are many types of imaging
techniques available. These include (a) IR based imaging techniques, (b) Ultrasound based imaging
techniques, (c) Laser based imaging techniques, (d) TOFD based imaging techniques, etc[10, 11]. Though
Crack detection using the Otsu process is a common technique, but it is unsatisfactory due to different
reasons such as poor contrast, irregular light, concrete spall in images, etc. [5-8]. Photo retrieval, which is
commonly used for text recognition and medical image analysis, is highly suitable for crack detection[14].
It's because the text and fractures have identical features, and they have unique forms and curves. Image
processing system that automatically identifies and analyzes the contents of the Otsu form. The Min-Max
Gray Level Discrimination (M2GLD) Image Improvement Algorithm is proposed as a pre-processing step
to improve the Otsu binarization procedure, followed by a shape analysis to increase crack detection
performance [7, 14]. The examples of cracks are mentioned in Figure 1 and Figure 2
2. Description of area
The study on the investigation of the causes and solutions to cracks in buildings was undertaken in various
buildings, located in Kalasalingam Academy of Research and Education, Krishnankoil, Tamil Nadu. We
chose some buildings inside the University campus according to their age of construction and collected the
crack samples from the buildings. The names of the buildings are listed below in Table 1.
Table 1.List of Buildings
S. No Name of the Building Year
1 Block – 1 1985
2 Block – 3,4 1992
3 Controller of Examinations 1996
4 PG Hostel 2000
5 G.D. Naidu Block 2005
6 Srinivasa Ramanujam Block 2010
7 Visveshwaraya Block 2015
3. Objectives
 To identify the type of crack occurred in the buildings and come up with a
solution to serve for the society.
 To identify the severity of cracks using Image Processing Technique.
4. Methodology
Identification of Cracks and their Causes:
In reconnaissance survey, the building inspection was performed to diagnose the cracks inside the
building, by looking at the entire building from a distance, walking around the building, and inspecting
each room to identify the cracks, and measuring each crack in detail, and their position in the building[1,
2]. The building was broken down into two pieces. (A) Internal building floor, (b) External building floor.
We produced a table to indicate in a particular location the crack occurred. In Table 2 we listed the table
generated here.
 Table 2.Classification of cracks in the buildings
S.
No
Location
of
Crack
Vertical
Crack
Horizontal
Crack
Inclined
Crack
Seepage
Attack
Patches
Crack
occurred
on
Structure
Crack
Occurred
on Wall
1
Cracking is an essential sign of structural breakdown. Crack detection is usually expected at the
maintenance point of the house. In fact, structural quality checks aided by crack analyzes have been
important for the service life assessment of structures[14].
Since this manual crack measuring process is extremely time-consuming for large-scale structures (e.g.
high-rise buildings and bridges), some researchers have developed models focused on image recognition
4.1 Otsu Method for Image Binarisation:
The Otsu approach is widely used for thresholding pictures [8, 14]. The fundamental idea of the Otsu
approach is to categorize the pixels of a visual image into two groups: the point of significance and the
background. The separate entity displays ω0 and μ0 which are the ratio of the pixel number and hence the
average gray color. Likewise, the background of the image also has the two parameters of ω1 and μ1.. The
overall mean of the gray level of the picture is thus defined as follows.
=()()+()() …. (1)
where t denotes a gray level of the image.
The image is optimally binarized if the following optimization function fs(t) is maximized.
	 

() = ()(() − ) + ()(() − ) …. (2)
The upper level gray value admires the maximum value of fs, as the threshold value for binarization of the
image[5] is selected. If there are two separable peaks in the gray-level histogram of the image, the Otsu
method can correctly determine the optimum value of the top position between these two peaks. The
maximum value of fs is admired by the top gray level, as the threshold value for image binarization[5] is
selected. If the gray-level histogram of the picture contains two separate peaks, the Otsu method can
accurately determine the optimum value of the top position between these two peaks. However, in cases
of unimodal and near-unimodal image histograms, this approach may encounter difficulties in
determining the reasonable value of the tip. The building is exposed to a variety of factors, including
lighting, bleaching, shade, etc. These requirements are not fulfilled by the current Otsu method. This
thesis must be accompanied by an updated Otsu method for the analysis of cracks in buildings and
structures.
4.2 Min-Max Gray Level Discrimination:
Owing to the unique crack features that involve distinguishable lines and curves, the gray-scale value of
the crack is usually the minimum region inside the image[15]. The brightness of the image in the
background is not constant. In comparison, the building surfaces often feature low visibility, intermittent
First International Conference on Advances in Physical Sciences and Materials
Journal of Physics: Conference Series 1706 (2020) 012116
IOP Publishing
doi:10.1088/1742-6596/1706/1/012116
5
lighting and extreme noise disruptions. In order to reverse this phenomenon, a protocol must be
implemented to boost crack detection performance[11]. To divide the image pixels into crack and noncrack classes, a simple technique called Min-Max Gray Level Discrimination (M2GLD) is used as an
image pre-processing step before the Otsu method is used for image binarization[15]. The layout
configuration of the image processing technique was clearly illustrated in Figure 4. 
5. Result and Discussion
The proposed crack detection and analysis program is being checked with a series of test images. The
program parameters are set empirically as follows.
The adjusting ratio: RA = 2
The margin parameter: τ = 0.5.
Results of crack detection are shown from figure 5 to figure 9The crack pixels detected by the proposed
method are smoother and well separated from the structure compared to the Otsu method in all the test
images. In addition, cracks detected by the proposed system mimic the actual crack structures within
digital images. We can therefore assume that the newly constructed software could be a great tool for the
sensible implementation of crack detection in the building structure. 
5.1 SURVEY FORMAT
Survey conducted in Srivilliputtur village has been photographed. The following questions have been
raised and the answers for the questions by the engineers and peoples of Srivilliputtur are enclosed
below.
Table 3. Summary of Survey questions and answers
QUESTIONS ANSWERS
Why cracks are formed? Cracks are formed due to the Subsidence,
Settlement, Heave, Sway, Vibration and so on.
What are the reasons behind the formation of
cracks?
Poor construction materials, foundation
movements
and settling of buildings, changes in
temperature and climate, etc…
What are the types of cracks occurred in buildings?
Plastic shrinkage concrete
cracks. Expansion concrete
cracks.
Heaving concrete cracks.
Settling concrete cracks.
Concrete cracks caused by premature drying.
What are the factors influencing the formation of
cracks in buildings and structures?
Permeability of concrete, corrosion of
reinforcement, moisture variation,
temperature variation, poor
construction practices,
poor structural design and specifications,
elastic deformation, creep, chemical reaction,
foundation movement & settlement of soil,
growth of
vegetation,
What are the preventive measures you’ve taken to
minimize cracking?
Reduce Water Content in Concrete:
Proper Concrete Mix Design and use of
Quality Materials.
Finishing of Concrete
Surface. Proper Curing of
Concrete.
Proper Placement and Vibration of Concrete.
Are you in need of a solution for cracking in
buildings and structures?
Yes
6. Conclusions
This theory establishes an image processing system to detect crack defects on the surface of the
building structure. The software uses the Min-Max Gray Level Discrimination (M2GLD) Image
Improvement Algorithm as a pre-processing step to improve image quality. For picture binarization,
the well-known Otsu technique is used to reveal fractures that occur on the surface of the structure.
The M2GLD strategies adopted by the Otsu methodology mentioned in the present work are also
clearly integrated into multiple crack detections and possible categorization models. The reason for
this is that the procedure is capable of delivering effective crack detection output as unquestionable in
laboratory experiments. As crack surfaces are removed from the sense of development, there is far
more reliable work into these detected cracks.
        `

        },
        { role: "user", content: prompt }
      ]
      // prompt: prompt,
      // max_tokens: iMaxTokens,
      // user: sUserId,
      // temperature: dTemperature
    };

    // var data = {
    //     model: "text-davinci-003",
    //     prompt: prompt,
    //     temperature: 0.7,
    //     max_tokens: 2048,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // };

    data = JSON.stringify(data);

    xhr.send(data);

    // document.querySelector(
    //     "#loader").style.visibility = "visible";

    // 

    // var res = "hi";
    // await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
    //     res = JSON.stringify(data.data.response)
    // })


    let message = document.getElementById('msg');


    message.appendChild(container1);
    message.appendChild(container2);

    container1.appendChild(data_req);
    container2.appendChild(data_res);

    document.getElementById('msg_send').value = "";




    function scroll() {
      var scrollMsg = document.getElementById('msg')
      scrollMsg.scrollTop = scrollMsg.scrollHeight;
    }
    scroll();




  }


});
