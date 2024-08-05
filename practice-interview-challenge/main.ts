interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  const rangeReport: RangeReport = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };
  for (let i = start; i <= end; i++) {
    rangeReport.range.push(i);
    if (i % 2 === 0) {
      rangeReport.evens.push(i);
    } else {
      rangeReport.odds.push(i);
    }
  }
  rangeReport.total = rangeReport.range.reduce(
    (prev, curr) => (prev += curr),
    0
  );
  rangeReport.average = rangeReport.total / rangeReport.range.length;
  console.log(rangeReport);
  return rangeReport;
}

getRangeReport(2, 7); // test for simple set of nums, and decimal avg
getRangeReport(7, 7); // test for single number
getRangeReport(-5, 7); // test for a negative
getRangeReport(-25, -21); // test for two negatives
