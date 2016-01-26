<!DOCTYPE html>
<html ng-app="microfinanceApp">
<head>
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <title>Microfinance</title>
    <meta name="keywords" content="Small Business Microfinance App" />
    <meta name="description" content="Small Business Microfinance App">
    <meta name="author" content="Leonard Mpannde">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Font CSS  -->
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">

    <!-- Core CSS  -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/bootstrap-3.3.5/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/fonts/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="fonts/glyphicons_pro/glyphicons.min.css">

    <!-- Plugin CSS -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/js/plugins/calendar/fullcalendar.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/js/plugins/datatables/css/datatables.min.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/animate.css">

    <!-- Theme CSS -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/theme.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/pages.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/plugins.css">
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/responsive.css">

    <!-- Boxed-Layout CSS -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/boxed.css">

    <!-- Demonstration CSS -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/demo.css">

    <!-- Your Custom CSS -->
    <link rel="stylesheet" type="text/css" href="../../public/App/vendors/css/custom.css">

    <!-- Favicon -->
    <link rel="shortcut icon" href="../../public/App/vendors/img/favicon.ico">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="../../public/App/vendors/js/html5shiv.js"></script>
    <script src="../../public/App/vendors/js/respond.min.js"></script>
    <![endif]-->

    <script src="../../public/App/vendors/js/angular-1.4.7/angular.js"></script>
    <script src="../../public/App/vendors/js/angular-ui-router/angular-ui-router.js"></script>
    <script src="../../public/App/app.js"></script>
    <script src="../../public/App/controllers/mainController.js"></script>

</head>

<body class="dashboard" ng-controller="mainController as main">
<!-- Start: Theme Preview Pane -->
<div id="skin-toolbox">
    <div class="skin-toolbox-toggle"> <i class="fa fa-flask"></i> </div>
    <div class="skin-toolbox-panel">
        <h4 class="padding-left-sm">Theme Options</h4>
        <form id="skin-toolbox-form">
            <div class="form-group">
                <label class="checkbox-inline">
                    <input id="header-option" class="checkbox" type="checkbox" checked>
                    Fixed <b>Header</b> </label>
            </div>
            <div class="form-group">
                <label class="checkbox-inline">
                    <input id="sidebar-option" class="checkbox" type="checkbox">
                    Fixed <b>Sidebar</b> </label>
            </div>
            <div class="form-group">
                <label class="checkbox-inline option-disabled">
                    <input id="breadcrumb-option" class="checkbox" type="checkbox" disabled>
                    Fixed <b>Breadcrumbs</b> </label>
            </div>
            <hr class="short" style="margin: 7px 10px;" />
            <div class="form-group">
                <label class="checkbox-inline">
                    <input id="breadcrumb-hidden" class="checkbox" type="checkbox">
                    Hide <b>Breadcrumbs</b> </label>
            </div>
            <div class="form-group margin-bottom-lg">
                <label class="checkbox-inline">
                    <input id="searchbar-hidden" class="checkbox" type="checkbox">
                    Hide <b>Search Bar</b> </label>
            </div>
            <h4 class="padding-left-sm">Layout Options</h4>
            <div class="form-group">
                <label class="radio-inline">
                    <input class="radio" type="radio" name="optionsRadios" id="fullwidth-option" checked>
                    Fullwidth </label>
            </div>
            <div class="form-group">
                <label class="radio-inline">
                    <input class="radio" type="radio" name="optionsRadios" id="boxed-option">
                    Boxed Layout</label>
            </div>
            <hr class="short"/>
            <div class="form-group"> <a href="customizer.html" id="customizer-link" class="btn btn-warning btn-gradient btn-block padding-bottom padding-top">CUSTOMIZER</a> </div>
        </form>
    </div>
</div>
<!-- End: Theme Preview Pane -->

<!-- Start: Header -->
<header class="navbar navbar-fixed-top">
    <div class="pull-left"> <a class="navbar-brand" href="dashboard.html">
        <div class="navbar-logo"><span style="font-weight: bolder;font-size: 20px;">Microfinance</span></div>
    </a> </div>
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-1"></button>
    <div class="pull-right header-btns">
        <div class="messages-menu">
            <button type="button" class="btn btn-sm dropdown-animate" data-toggle="dropdown"> <span class="glyphicon glyphicon-comment"></span> <b>4</b> </button>
            <ul class="dropdown-menu checkbox-persist" role="menu">
                <li class="menu-arrow">
                    <div class="menu-arrow-up"></div>
                </li>
                <li class="dropdown-header">Recent Messages <span class="pull-right glyphicons glyphicons-comment"></span></li>
                <li>
                    <ul class="dropdown-items">
                        <li>
                            <div class="item-avatar"><img src="../../public/App/vendors/img/avatars/header/2.jpg" class="img-responsive" alt="avatar" /></div>
                            <div class="item-message"><b>Maggie</b> - <small class="text-muted">12 minutes ago</small><br />
                                Great work Yesterday!</div>
                        </li>
                        <li>
                            <div class="item-avatar"><img src="../../public/App/vendors/img/avatars/header/3.jpg" class="img-responsive" alt="avatar" /></div>
                            <div class="item-message"><b>Robert</b> - <small class="text-muted">3 hours ago</small><br />
                                Is the Titan Project still on?</div>
                        </li>
                        <li>
                            <div class="item-avatar"><img src="../../public/App/vendors/img/avatars/header/1.jpg" class="img-responsive" alt="avatar" /></div>
                            <div class="item-message"><b>Cynthia</b> - <small class="text-muted">14 hours ago</small><br />
                                Don't forget about the staff meeting tomorrow</div>
                        </li>
                        <li>
                            <div class="item-avatar"><img src="../../public/App/vendors/img/avatars/header/4.jpg" class="img-responsive" alt="avatar" /></div>
                            <div class="item-message"><b>Matt</b> - <small class="text-muted">2 days ago</small><br />
                                Thor Project cancelled, Sorry.</div>
                        </li>
                    </ul>
                </li>
                <li class="dropdown-footer"><a href="messages.html">View All Messages <i class="fa fa-caret-right"></i> </a></li>
            </ul>
        </div>
        <div class="alerts-menu">
            <button type="button" class="btn btn-sm dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-bell"></span> <b>3</b> </button>
            <ul class="dropdown-menu checkbox-persist" role="menu">
                <li class="menu-arrow">
                    <div class="menu-arrow-up"></div>
                </li>
                <li class="dropdown-header">Recent Alerts <span class="pull-right glyphicons glyphicons-bell"></span></li>
                <li>
                    <ul class="dropdown-items">
                        <li>
                            <div class="item-icon"><i style="color: #0066ad;" class="fa fa-facebook"></i> </div>
                            <div class="item-message"><a href="dashboard.html#">Facebook likes reached <b>8,200</b></a></div>
                        </li>
                        <li>
                            <div class="item-icon"><i style="color: #5cb85c;" class="fa fa-check"></i> </div>
                            <div class="item-message"><a href="dashboard.html#">Robert <b>completed task</b> - Client SEO Revamp</a></div>
                        </li>
                        <li>
                            <div class="item-icon"><i style="color: #f0ad4e" class="fa fa-user"></i> </div>
                            <div class="item-message"><a href="dashboard.html#"><b>Marko</b> logged 12 hours</a></div>
                        </li>
                    </ul>
                </li>
                <li class="dropdown-footer"><a href="dashboard.html#">View All Alerts <i class="fa fa-caret-right"></i> </a></li>
            </ul>
        </div>
        <div class="tasks-menu">
            <button type="button" class="btn btn-sm dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-tag"></span> <b>7</b> </button>
            <ul class="dropdown-menu dropdown-checklist checkbox-persist" role="menu">
                <li class="menu-arrow">
                    <div class="menu-arrow-up"></div>
                </li>
                <li class="dropdown-header">Recent Tasks <span class="pull-right glyphicons glyphicons-tag"></span></li>
                <li>
                    <ul class="dropdown-items">
                        <li>
                            <div class="item-icon"><i class="fa fa-pencil"></i> </div>
                            <div class="item-message text-slash"><a>Try Clicking me!</a></div>
                            <div class="item-label"><span class="label label-danger">Urgent</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-phone"></i> </div>
                            <div class="item-message text-slash"><a>Contact Client and request Approval</a></div>
                            <div class="item-label"><span class="label label-info">Normal</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-flask"></i> </div>
                            <div class="item-message text-slash"><a>Find new Python Developer </a></div>
                            <div class="item-label"><span class="label label-success">Completed</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-facebook"></i> </div>
                            <div class="item-message text-slash"><a>Update Facebook Page with Halloween Pictures</a></div>
                            <div class="item-label"><span class="label label-primary">In Progress</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-group"></i> </div>
                            <div class="item-message text-slash"><a>Organize next Staff Meeting</a></div>
                            <div class="item-label"><span class="label label-success">Completed</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-plane"></i> </div>
                            <div class="item-message text-slash"><a>Interview new applicant</a></div>
                            <div class="item-label"><span class="label label-warning">Moderate</span></div>
                            <div class="item-checkbox">
                                <input class="checkbox row-checkbox" type="checkbox">
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="dropdown-footer"><a href="dashboard.html#">View All Tasks <i class="fa fa-caret-right"></i> </a></li>
            </ul>
        </div>
        <div class="btn-group user-menu">
            <button type="button" class="btn btn-sm dropdown-toggle" data-toggle="dropdown"> <span class="glyphicons glyphicons-user"></span> <b>Cynthia</b> </button>
            <button type="button" class="btn btn-sm dropdown-toggle padding-none" data-toggle="dropdown"> <img src="../../public/App/vendors/img/avatars/header/header-login.png" alt="user avatar" width="28" height="28" /> </button>
            <ul class="dropdown-menu checkbox-persist" role="menu">
                <li class="menu-arrow">
                    <div class="menu-arrow-up"></div>
                </li>
                <li class="dropdown-header">Your Account <span class="pull-right glyphicons glyphicons-user"></span></li>
                <li>
                    <ul class="dropdown-items">
                        <li>
                            <div class="item-icon"><i class="fa fa-envelope-o"></i> </div>
                            <a class="item-message" href="messages.html">Messages</a> </li>
                        <li>
                            <div class="item-icon"><i class="fa fa-calendar"></i> </div>
                            <a class="item-message" href="calendar.html">Calendar</a> </li>
                        <li class="border-bottom-none">
                            <div class="item-icon"><i class="fa fa-cog"></i> </div>
                            <a class="item-message" href="customizer.html">Settings</a> </li>
                        <li class="padding-none">
                            <div class="dropdown-lockout"><i class="fa fa-lock"></i> <a href="screen-lock.html">Screen Lock</a></div>
                            <div class="dropdown-signout"><i class="fa fa-sign-out"></i> <a href="login.html">Sign Out</a></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</header>
<!-- End: Header -->
<!-- Start: Main -->
<div id="main">
<!-- Start: Sidebar -->
<aside id="sidebar">
    <div id="sidebar-search">
        <div class="sidebar-toggle"> <i class="fa fa-bars"></i> </div>
    </div>
    <div id="sidebar-menu">
        <ul class="nav sidebar-nav">
            <li class="active"> <a ui-sref="dashboard"><span class="glyphicons glyphicons-star">&nbsp;&nbsp;<i class="fa fa-dashboard "></i></span><span class="sidebar-title">Dashboard</span></a> </li>
            <li> <a class="accordion-toggle menu-open" href="#"><span class="glyphicons glyphicons-settings">&nbsp;&nbsp;<i class="fa fa-rss "></i></span><span class="sidebar-title">Applicants</span><span class="caret"></span></a>
                <ul id="resources" class="nav sub-nav">
                    <li><a href="#"><i class="fa fa-plus"></i>&nbsp;&nbsp;Add Applicants</a></li>
                    <li><a href="#"><i class="fa fa-cog"></i>&nbsp;&nbsp;Manage</a></li>
                </ul>
            </li>
            <li> <a class="accordion-toggle" href="dashboard.html#sideOne"><span class="glyphicons glyphicons-adjust_alt">&nbsp;&nbsp;<i class="fa fa-bar-chart-o "></i></span><span class="sidebar-title">Report</span><span class="caret"></span></a>
                <ul id="sideOne" class="nav sub-nav">
                    <li><a href="#"><span class="glyphicons glyphicons-font"></span> Loans</a></li>
                    <li> <a class="accordion-toggle" href="dashboard.html#sideTwo"><span class="glyphicons glyphicons-vcard"></span><span class="sidebar-title">User Management</span><span class="caret"></span></a>
                        <ul id="sideTwo" class="nav sub-nav">
                            <li><a href="#"><span class="glyphicons glyphicons-link"></span> Form Elements</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-ok"></span> Form Validation</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-magic"></span> Form Wizard</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-pencil"></span> Editors</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-edit"></span> Inline Editing</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-check"></span> X-editable</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><span class="glyphicons glyphicons-paperclip"></span> Balance Sheet</a></li>
                </ul>
            </li>
            <li> <a class="accordion-toggle" href="dashboard.html#sideOne"><span class="glyphicons glyphicons-adjust_alt">&nbsp;&nbsp;<i class="fa fa-cogs "></i></span><span class="sidebar-title">Settings</span><span class="caret"></span></a>
                <ul id="sidethree" class="nav sub-nav">
                    <li><a href="#"><span class="glyphicons glyphicons-font"></span> Loans</a></li>
                    <li> <a class="accordion-toggle" href="dashboard.html#sideTwo"><span class="glyphicons glyphicons-vcard"></span><span class="sidebar-title">User Management</span><span class="caret"></span></a>
                        <ul id="sideFour" class="nav sub-nav">
                            <li><a href="#"><span class="glyphicons glyphicons-link"></span> Form Elements</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-ok"></span> Form Validation</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-magic"></span> Form Wizard</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-pencil"></span> Editors</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-edit"></span> Inline Editing</a></li>
                            <li><a href="#"><span class="glyphicons glyphicons-check"></span> X-editable</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><span class="glyphicons glyphicons-paperclip"></span> Balance Sheet</a></li>
                </ul>
            </li>

        </ul>
    </div>
</aside>
<!-- End: Sidebar -->
<!-- Start: Content -->
<section id="content">
<div id="topbar">
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i></a></li>
        <li><a href="#">Home</a></li>
        <li class="active">Dashboard</li>
    </ol>
</div>
<div class="container" ui-view>

</div>
</section>
<!-- End: Content -->
</div>
<!-- End: Main -->

<!-- Core Javascript - via CDN -->

<script src="../../public/App/vendors/js/jquery/jquery.min.js"></script>
<script src="../../public/App/vendors/js/jquery-ui/jquery-ui.min.js"></script>
<script src="../../public/App/vendors/css/bootstrap-3.3.5/js/bootstrap.min.js"></script>

<!-- Plugins - Via Local Storage-->
<script type="text/javascript" src="../../public/App/vendors/js/jquery.flot.min.js"></script>
<script type="text/javascript" src="../../public/App/vendors/js/jquery.sparkline.min.js"></script>
<script type="text/javascript" src="../../public/App/vendors/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../../public/App/vendors/js/fullcalendar.min.js"></script>

<!-- Plugins -->
<script type="text/javascript" src="../../public/App/vendors/js/plugins/calendar/gcal.js"></script><!-- Calendar Addon -->
<script type="text/javascript" src="../../public/App/vendors/js/plugins/jqueryflot/jquery.flot.resize.min.js"></script><!-- Flot Charts Addon -->
<script type="text/javascript" src="../../public/App/vendors/js/plugins/datatables/js/datatables.js"></script><!-- Datatable Bootstrap Addon -->

<!-- Theme Javascript -->
<script type="text/javascript" src="../../public/App/vendors/js/uniform.min.js"></script>
<script type="text/javascript" src="../../public/App/vendors/js/main.js"></script>
<!--<script type="text/javascript" src="js/plugins.js"></script>-->
<script type="text/javascript" src="../../public/App/vendors/js/custom.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {

    // Init Theme Core
    Core.init();



    // Init Datatables
    $('#datatable, #datatable_2').dataTable( {
        "bSort": true,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bInfo": false,
        "bAutoWidth": false,
        "aoColumnDefs": [{ 'bSortable': false, 'aTargets': [ -1 ] }]
    });

    // Init Sparkline Plugin
    var runSparkline = function () {

        // Define Sparklines values
        var Values1 = [0,1,5,2,4,3,5,8,7];
        var Values2 = [3,2,3,1,0,2,5,6,4];
        var Values3 = [6,4,5,3,4,2,1,2,3];
        var Values4 = [2,1,2,3,2,4,2,1,0];

        // Pass values, define options, and create chart
        $('.sparkbar1').sparkline(Values1, {type: "bar",
                    barColor: "#428bca",
                    barWidth: "8",
                    height: "35"}
        );
        $('.sparkbar2').sparkline(Values2, {type: "bar",
                    barColor: "#5cb85c",
                    barWidth: "8",
                    height: "35"}
        );
        $('.sparkbar3').sparkline(Values3, {type: "bar",
                    barColor: "#5bc0de",
                    barWidth: "8",
                    height: "35"}
        );
        $('.sparkbar4').sparkline(Values4, {type: "bar",
                    barColor: "#777777",
                    barWidth: "8",
                    height: "35"}
        );

        // Quick function to animate the appearance of Sparklines
        // Only ran on Sparkline elements which have the
        // ".sparkline-delay" class and a set data-delay attr
        (function() {
            $('.sparkline-delay').each(function() {
                var This = $(this)
                var delayTime = $(this).data('delay');

                $(This).children('canvas').css({"height": "0", "vertical-align": "bottom"});
                var delayCharts = setTimeout(function () {
                    $(This).children('canvas').animate({height: 35}, 1800);
                }, delayTime);
            });
        })();
    }

    // Init Calendar Plugin
    var runFullCalendar = function () {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        // Define Calendar options and events
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 9),
                    color: '#008aaf '
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-3)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+10, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    color: '#0070ab'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    color: '#0070ab'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Mandatory!',
                    start: new Date(y, m, 22),
                    color: '#d10011'
                }
            ]
        });
    }

    // Init Flot Charts Plugin
    var runFlotCharts = function () {

        // Define chart clolors ( add more colors if you want or flot will do it automatically
        var chartColours = ['#5bc0de'];

        // Generate random number for charts
        randNum = function(){return (Math.floor( Math.random()* (1+40-20) ) ) + 20;}

        // Check if element exist and draw auto updating chart
        if($(".chart-updating").length) {
            $(function () {
                // We use an inline data source in the example, usually data would
                // be fetched from a server
                var data = [], totalPoints = 50;
                function getRandomData() {
                    if (data.length > 0)
                        data = data.slice(1);

                    while (data.length < totalPoints) {
                        var prev = data.length > 0 ? data[data.length - 1] : 50;
                        var y = prev + Math.random() * 10 - 5;
                        if (y < 0)
                            y = 0;
                        if (y > 100)
                            y = 100;
                        data.push(y);
                    }

                    var res = [];
                    for (var i = 0; i < data.length; ++i)
                        res.push([i, data[i]])
                    return res;
                }

                var updateInterval = 750;

                var options = {
                    series: {
                        shadowSize: 0, // drawing is faster without shadows
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: { colors: ['rgba(47, 137, 214, 0.4)', 'rgba(98, 174, 239, 0.3)'] },
                            lineWidth: 1,
                            steps: false
                        },
                        points: {
                            show: false,
                            radius: 2.5,
                            symbol: "circle",
                            lineWidth: 2.5
                        }
                    },
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor:null,
                        minBorderMargin: 5 ,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20
                    },
                    colors: chartColours,
                    yaxis: {
                        min: 0,
                        max: 100,
                        font: {size: 11,	color: "#888888"}
                    },
                    xaxis: {
                        show: true,
                        font: {size: 11,	color: "#888888"}
                    }
                };
                var plot = $.plot($(".chart-updating"), [ getRandomData() ], options);

                function update() {
                    plot.setData([ getRandomData() ]);
                    // since the axes don't change, we don't need to call plot.setupGrid()
                    plot.draw();

                    setTimeout(update, updateInterval);
                }
                update();
            });
        }
    }

    runSparkline();
    runFullCalendar();
    runFlotCharts();


});
</script>
</body>
</html>
