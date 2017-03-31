// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawAcwChart);
      google.charts.setOnLoadCallback(drawAuxChart);
      google.charts.setOnLoadCallback(drawHandleChart);
      google.charts.setOnLoadCallback(drawCallsChart);
      google.charts.setOnLoadCallback(drawQaChart);
      google.charts.setOnLoadCallback(drawOptChart);


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawAcwChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Minutes');
        data.addRows([
          ['12.2017', 3.515254],
          ['1.2017', 2.587423],
          ['2.2017', 1.9896589],
          ['3.2017', 3.58754],
          ['4.2017', 2.5426587]
        ]);

        var options = {'width':500,
                       'height':300,
                       'colors':['red'],

                        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_acw'));
        chart.draw(data, options);
      }

      function drawAuxChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Minutes');
        data.addRows([
          ['12.2017', 3.515254],
          ['1.2017', 2.587423],
          ['2.2017', 1.9896589],
          ['3.2017', 3.58754],
          ['4.2017', 2.5426587]
        ]);
        var options = {'width':500,
                       'height':300,
                       'colors':['orange']
                        };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_aux'));
        chart.draw(data, options);
      }

      function drawHandleChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Minutes');
        data.addRows([
          ['12.2017', 4.562],
          ['1.2017', 5.543264],
          ['2.2017', 6.1542156],
          ['3.2017', 4.587412],
          ['4.2017', 2.542547]
        ]);
        var options = {'width':500,
                       'height':300,
                       'colors':['gold']
                        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_handle'));
        chart.draw(data, options);
      }

      function drawCallsChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Calls Taken');
        data.addRows([
          ['12.2017', 125],
          ['1.2017', 156],
          ['2.2017', 123],
          ['3.2017', 154],
          ['4.2017', 186]
        ]);
        var options = {'width':500,
                       'height':300,
                       'colors':['green']
                        };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_calls'));
        chart.draw(data, options);
      }

      function drawQaChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'QA Score');
        data.addRows([
          ['12.2017', 100],
          ['1.2017', 95],
          ['2.2017', 100],
          ['3.2017', 89],
          ['4.2017', 100]
        ]);
        var options = {'width':500,
                       'height':300,
                       'colors':['blue']
                        };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_qa'));
        chart.draw(data, options);
      }

      function drawOptChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Optimization %');
        data.addRows([
          ['12.2017', 95],
          ['1.2017', 83],
          ['2.2017', 72],
          ['3.2017', 96],
          ['4.2017', 89]
        ]);
        var options = {'width':500,
                       'height':300,
                       'colors':['indigo']
                        };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_opt'));
        chart.draw(data, options);
      }
