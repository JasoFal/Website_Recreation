window.addEventListener("load", function() {

  const removeH1 = document.querySelector("h1");
  removeH1.remove();

  const firstH1 = this.document.createElement("h1");
  firstH1.append("Webpage Recreation Practice");
  this.document.querySelector("body").append(firstH1);
  
  const p1 = document.createElement("p");
  p1.append("The HTML of this webpage was created with JavaScript.");
  firstH1.after(p1);
  console.log(Object.prototype.toString.call(p1));
  console.log(p1.innerText);

  const birdImage = this.document.createElement("img");
  birdImage.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  birdImage.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  birdImage.style.width = "50%";
  p1.after(birdImage);

  const secondH1 = this.document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");
  birdImage.after(secondH1);

  const ul = this.document.createElement("ul");
  ul.setAttribute("id", "birdFacts");
  secondH1.after(ul);
  const liOne = this.document.createElement("li");
  const liTwo = this.document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  this.document.getElementById("birdFacts").append(liOne, liTwo);

  const h2 = this.document.createElement("h2");
  h2.append("Source");
  ul.after(h2);

  const aSource = this.document.createElement("a");
  aSource.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  aSource.append("Wikipedia");
  h2.after(aSource);  
});