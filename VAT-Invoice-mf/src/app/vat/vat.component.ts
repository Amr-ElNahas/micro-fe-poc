import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'VAT-Invoice-mf';
  longText = 'this page allows you review the information below.';
  invoiceTableHeader1: string[] = [
    'Reference #',
    'Transaction Date',
    'Channel',
    'Type',
    'Debit',
    'Credit',
  ];
  invoiceTableData1: string[] = [
    'FT36339KF7V9',
    new Date().toDateString(),
    'Internet Banking',
    'Local Transfer',
    '1,624.40 SAR',
    '-',
  ];
  invoiceTableHeader2: string[] = [
    'VAT Invoice Number',
    'Issue Date',
    'Charge Description',
    'Charge Amount',
    'VAT Amount',
    'VAT Percentage',
  ];
  invoiceTableData2: string[] = [
    'ALIN-',
    new Date().toDateString(),
    'Remittance chg',
    '50.00 SAR',
    '2.50 SAR',
    '5.00 %',
  ];
  todayDate: Date = new Date();
  goBack() {
    alert('Account Details button');
  }

}
