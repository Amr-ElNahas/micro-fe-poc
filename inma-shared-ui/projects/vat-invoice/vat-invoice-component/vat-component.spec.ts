import { By } from '@angular/platform-browser';
import { VatComponent } from './vat.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('VatComponent', () => {
  let component: VatComponent;
  let fixture: ComponentFixture<VatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('VatComponent', () => {
  it('goBackButton is visible', () => {
  expect(fixture.debugElement.query(By.css('#goBackButton'))).toBeDefined();
});
});

describe('VatComponent', () => {
  it('invoiceTableHeaders1 table displays all the headers', () => {
    const invoiceTableHeader1Div = fixture.debugElement.queryAll(By.css("#invoiceTableHeader1"));
    const invoiceTableHeader1DivLength = invoiceTableHeader1Div.length;
    expect(invoiceTableHeader1DivLength).toEqual(component.invoiceTableHeader1.length);
});
});
describe('VatComponent', () => {
  it('invoiceTableHeader2 table displays all the headers', () => {
    const invoiceTableHeader2Div = fixture.debugElement.queryAll(By.css("#invoiceTableHeader2"));
    const invoiceTableHeader2DivLength = invoiceTableHeader2Div.length;
    expect(invoiceTableHeader2DivLength).toEqual(component.invoiceTableHeader2.length);
});
});
describe('VatComponent', () => {
  it('invoiceTableData1 table displays all the data', () => {
    const invoiceTableData1Div = fixture.debugElement.queryAll(By.css("#invoiceTableData1"));
    const invoiceTableData1DivLength = invoiceTableData1Div.length;
    expect(invoiceTableData1DivLength).toEqual(component.invoiceTableHeader1.length);
});
});
describe('VatComponent', () => {
  it('invoiceTableData2 table displays all the data', () => {
    const invoiceTableData2Div = fixture.debugElement.queryAll(By.css("#invoiceTableData2"));
    const invoiceTableHeader2DivLength = invoiceTableData2Div.length;
    expect(invoiceTableHeader2DivLength).toEqual(component.invoiceTableData2.length);
});
});
});
