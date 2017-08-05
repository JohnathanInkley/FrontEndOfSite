import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {SiteService} from "./site.service";
import { Location } from '@angular/common';
import {SensorListGetterService} from "./sensor-list/sensor-list-getter.service";
import {SensorLabelGetterService} from "./sensor-list/sensor-label-getter.service";
import {SensorDataGetterService} from "./sensor-list/sensor-data-getter.service";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: string;

  dataReady: boolean;
  chartData: Array<any>;
  chartData1: Array<any>;
  chart1name: string = 'chart1';

  sensorDropdownTitle: string = "Select sensor";
  sensorNames: string[];
  chosenSensor: string;

  labelDropdownTitle: string = "Select label";
  labelNames: string[];
  chosenLabel: string;

  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private sensorListService: SensorListGetterService,
    private sensorLabelService: SensorLabelGetterService,
    private sensorDataService: SensorDataGetterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.site = params['siteName']).subscribe();
    this.generateData();
    this.getSensorList();
  }

  private generateData() {

  }

  goBack() {
    this.location.back();
  }

  private getSensorList() {
    this.sensorListService.getSensorsForSite(this.site)
      .then(sensors => this.sensorNames = sensors);
  }

  setChosenSensor(event) {
    this.chosenSensor = event;
    this.getLabelList();
  }

  private getLabelList() {
    this.sensorLabelService.getLabelsForSensor(this.site, this.chosenSensor)
      .then(labels => this.labelNames = labels);
  }

  setChosenLabel(event) {
    this.chosenLabel = event;
  }

  submitTimes() {
    this.sensorDataService.getDataForLabelAndSensor(this.site,
      this.chosenSensor,
      this.chosenLabel,
      this.startDate,
      this.startTime,
      this.endDate,
      this.endTime)
      .then(data => {
        console.log(data);
        this.chartData = [];
        for (let i = 1; i < data.length; i++) {
          this.chartData.push([i, +(data[i - 1])["value"]]);
        }
      });
    this.dataReady = true;
  }
}
