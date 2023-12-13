import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseService } from './base.service';
import { CustomHeaderComponent } from 'src/shared/custom-header/custom-header.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild('checkboxColumn', { static: true }) checkboxColumn: ElementRef | undefined;

  gridData: any;
  checkboxSelection: any = true;
  rowSelection: any = true;
  columns: any;
  rows: any;

  constructor(private service: BaseService) {}

  ngOnInit(): void {
    this.columns = [
      {
        headerName: "",
        field: 'thumbnails',
        flex: 1,
        headerComponentFramework: CustomHeaderComponent, // Use headerComponentFramework here
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        flex: 1,
      },
      {
        headerName: 'Video Title',
        field: 'title',
        flex: 1,
      },
      {
        headerName: 'Description',
        field: 'description',
        flex: 1,
      },
    ];

    this.getGridData();
  }

  getGridData() {
    this.service.getData().subscribe({
      next: (response: any) => {
        this.gridData = response;
        this.columns = this.gridData.columnDefs;
        this.rows = this.gridData.rowData;
      }
    });
  }

  onFirstDataRendered(params: any) {
    const firstHeaderCell = params.api.getHeaderRow().getElementsByClassName('ag-header-cell')[0];
    if (firstHeaderCell) {
      firstHeaderCell.addEventListener('click', () => {
        this.toggleCheckboxColumnVisibility();
      });
    }
  }

  toggleCheckboxColumnVisibility() {
    if (this.checkboxColumn) {
      const checkboxColumnElement = this.checkboxColumn.nativeElement;
      checkboxColumnElement.style.display = checkboxColumnElement.style.display === 'none' ? 'block' : 'none';
    }
  }
}
