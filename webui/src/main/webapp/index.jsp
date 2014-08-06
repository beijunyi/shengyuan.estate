<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<meta charset="UTF-8">
<html ng-app="shengyuan">
<head>
  <title>{{'SHENGYUAN_ESTATE' | translate}}</title>
  <jwr:style src="/all.css" />

  <jwr:script src="/lib.js"/>
  <jwr:script src="/scripts.js"/>
  <link rel="icon" type="image/png" href="favicon.png">
</head>

<body>

<div ng-include="'views/GlobalHeaderView.html'"></div>
<div ng-view></div>
<div ng-include="'views/GlobalFooterView.html'"></div>


</body>
</html>