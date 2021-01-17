import { Component, OnInit } from "@angular/core";

import {
  NgxMasonryOptions,
  NgxMasonryComponent,
} from "projects/ngx-masonry/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  private masonry: NgxMasonryComponent;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  masonryImages = [];
  limit = 15;
  lazyNonImageDemo = true;

  // width & height properties for each item is only using for lazyload or non-image tag method
  dummyPictures = [
    [
      false,
      "https://source.unsplash.com/433x649/",
      { width: 433, height: 649 },
    ],
    [false, "https://source.unsplash.com/530x572", { width: 530, height: 572 }],
    [false, "https://source.unsplash.com/531x430", { width: 531, height: 430 }],
    [
      false,
      "https://source.unsplash.com/586x1073",
      { width: 586, height: 1073 },
    ],
    [false, "https://source.unsplash.com/500x571", { width: 500, height: 571 }],
    [false, "https://source.unsplash.com/579x518", { width: 579, height: 518 }],
    [false, "https://source.unsplash.com/503x548", { width: 503, height: 548 }],
    [false, "https://source.unsplash.com/511x630", { width: 511, height: 630 }],
    [false, "https://source.unsplash.com/414x767", { width: 414, height: 767 }],
    [false, "https://source.unsplash.com/443x704", { width: 443, height: 704 }],
    [
      false,
      "https://source.unsplash.com/441x1145",
      { width: 441, height: 1145 },
    ],
    [
      false,
      "https://source.unsplash.com/491x1097",
      { width: 491, height: 1097 },
    ],
    [false, "https://source.unsplash.com/570x851", { width: 570, height: 851 }],
    [
      false,
      "https://source.unsplash.com/560x1072",
      { width: 560, height: 1072 },
    ],
    [false, "https://source.unsplash.com/551x598", { width: 551, height: 598 }],
    [false, "https://source.unsplash.com/518x813", { width: 518, height: 813 }],
    [false, "https://source.unsplash.com/497x524", { width: 497, height: 524 }],
    [false, "https://source.unsplash.com/549x826", { width: 549, height: 826 }],
    [false, "https://source.unsplash.com/559x627", { width: 559, height: 627 }],
    [false, "https://source.unsplash.com/594x513", { width: 594, height: 513 }],
    [
      false,
      "https://source.unsplash.com/480x1181",
      { width: 480, height: 1181 },
    ],
    [false, "https://source.unsplash.com/526x552", { width: 526, height: 552 }],
    [false, "https://source.unsplash.com/427x504", { width: 427, height: 504 }],
    [false, "https://source.unsplash.com/468x971", { width: 468, height: 971 }],
    [false, "https://source.unsplash.com/419x790", { width: 419, height: 790 }],
    [
      false,
      "https://source.unsplash.com/417x1125",
      { width: 417, height: 1125 },
    ],
    [false, "https://source.unsplash.com/480x632", { width: 480, height: 632 }],
    [false, "https://source.unsplash.com/416x900", { width: 416, height: 900 }],
    [false, "https://source.unsplash.com/408x837", { width: 408, height: 837 }],
    [
      false,
      "https://source.unsplash.com/541x1021",
      { width: 541, height: 1021 },
    ],
    [
      false,
      "https://source.unsplash.com/597x1107",
      { width: 597, height: 1107 },
    ],
    [false, "https://source.unsplash.com/487x842", { width: 487, height: 842 }],
    [false, "https://source.unsplash.com/526x552", { width: 526, height: 552 }],
    [
      false,
      "https://source.unsplash.com/541x1021",
      { width: 541, height: 1021 },
    ],
    [
      false,
      "https://source.unsplash.com/597x1107",
      { width: 597, height: 1107 },
    ],
    [false, "https://source.unsplash.com/427x504", { width: 427, height: 504 }],
    [false, "https://source.unsplash.com/468x971", { width: 468, height: 971 }],
    [false, "https://source.unsplash.com/419x790", { width: 419, height: 790 }],
    [
      false,
      "https://source.unsplash.com/441x1145",
      { width: 441, height: 1145 },
    ],
    [
      false,
      "https://source.unsplash.com/491x1097",
      { width: 491, height: 1097 },
    ],
    [false, "https://source.unsplash.com/570x851", { width: 570, height: 851 }],
    [
      false,
      "https://source.unsplash.com/560x1072",
      { width: 560, height: 1072 },
    ],
    [false, "https://source.unsplash.com/551x598", { width: 551, height: 598 }],
    [false, "https://source.unsplash.com/518x813", { width: 518, height: 813 }],
    [false, "https://source.unsplash.com/497x524", { width: 497, height: 524 }],
    [false, "https://source.unsplash.com/549x826", { width: 549, height: 826 }],
    [false, "https://source.unsplash.com/559x627", { width: 559, height: 627 }],
    [false, "https://source.unsplash.com/594x513", { width: 594, height: 513 }],
    [
      false,
      "https://source.unsplash.com/480x1181",
      { width: 480, height: 1181 },
    ],
    [false, "https://source.unsplash.com/526x552", { width: 526, height: 552 }],
    [false, "https://source.unsplash.com/427x504", { width: 427, height: 504 }],
    [false, "https://source.unsplash.com/468x971", { width: 468, height: 971 }],
    [false, "https://source.unsplash.com/419x790", { width: 419, height: 790 }],
    [
      false,
      "https://source.unsplash.com/417x1125",
      { width: 417, height: 1125 },
    ],
    [false, "https://source.unsplash.com/480x632", { width: 480, height: 632 }],
    [false, "https://source.unsplash.com/416x900", { width: 416, height: 900 }],
    [false, "https://source.unsplash.com/408x837", { width: 408, height: 837 }],
    [
      false,
      "https://source.unsplash.com/541x1021",
      { width: 541, height: 1021 },
    ],
    [
      false,
      "https://source.unsplash.com/597x1107",
      { width: 597, height: 1107 },
    ],
    [false, "https://source.unsplash.com/487x842", { width: 487, height: 842 }],
    [false, "https://source.unsplash.com/526x552", { width: 526, height: 552 }],
    [
      false,
      "https://source.unsplash.com/541x1021",
      { width: 541, height: 1021 },
    ],
    [
      false,
      "https://source.unsplash.com/597x1107",
      { width: 597, height: 1107 },
    ],
    [false, "https://source.unsplash.com/427x504", { width: 427, height: 504 }],
    [false, "https://source.unsplash.com/468x971", { width: 468, height: 971 }],
    [false, "https://source.unsplash.com/419x790", { width: 419, height: 790 }],
    [false, "https://source.unsplash.com/570x851", { width: 570, height: 851 }],
    [
      false,
      "https://source.unsplash.com/560x1072",
      { width: 560, height: 1072 },
    ],
    [false, "https://source.unsplash.com/551x598", { width: 551, height: 598 }],
    [false, "https://source.unsplash.com/518x813", { width: 518, height: 813 }],
    [false, "https://source.unsplash.com/497x524", { width: 497, height: 524 }],
    [false, "https://source.unsplash.com/549x826", { width: 549, height: 826 }],
    [false, "https://source.unsplash.com/559x627", { width: 559, height: 627 }],
    [false, "https://source.unsplash.com/594x513", { width: 594, height: 513 }],
    [
      false,
      "https://source.unsplash.com/480x1181",
      { width: 480, height: 1181 },
    ],
    [false, "https://source.unsplash.com/526x552", { width: 526, height: 552 }],
    [false, "https://source.unsplash.com/427x504", { width: 427, height: 504 }],
    [false, "https://source.unsplash.com/468x971", { width: 468, height: 971 }],
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);

    if (this.lazyNonImageDemo) {
      this.masonryOptions.detectImageLoad = false;
    }
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true;
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded(masonry: NgxMasonryComponent) {
    console.log("itemsloaded");
    this.masonry = masonry;
    this.masonry.layout();
  }
}
