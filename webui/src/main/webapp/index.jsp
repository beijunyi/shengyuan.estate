<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html ng-app="shengyuan">
<head>
  <base href="/">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta charset="utf-8"/>
  <title>圣源地产 Shengyuan Estate</title>
  <jwr:style src="/all.css" />

  <jwr:script src="/lib.js"/>
  <jwr:script src="/scripts.js"/>
  <link rel="icon" type="image/png" href="favicon.png">
</head>

<body>

<div id="s-global-header-container" ng-controller="HeaderNavigationController">
  <a id="s-header-brand-container" href="/"><img id="s-header-brand" src="resources/images/brand.png"/></a>
  <div id="s-header-nav-bar">
    <ul id="s-header-tab-container" class="s-row-container">
      <li class="s-tab" ng-repeat="t in tabs" ng-class="{'s-tab-active': isActive(t.href)}">
        <a ng-href="{{t.href}}">{{t.title | translate}}</a>
      </li>
    </ul>
  </div>
  <div id="s-carousel-container" ng-controller="CarouselController">
    <div class="s-carousel-slide" ng-repeat="s in slides" ng-show="s.visible">
      <img ng-src="resources/images/{{s.src}}">
    </div>
  </div>
</div>
<div id="s-view-container" ng-view></div>
<div id="s-global-footer-container">
  <hr id="s-footer-top-line">

  <ul id="s-tip-links-container" class="s-row-container">
    <li class="s-tip-link">
      <a href="page/tips/property-types">
        <img class="s-link-image" src="resources/images/property_types_image.jpg">
        <span class="s-link-text">{{'PROPERTY_TYPES' | translate}}</span>
      </a>
    </li>
    <li class="s-tip-link">
      <a href="#">
        <img class="s-link-image" src="resources/images/property_rights_image.jpg">
        <span class="s-link-text">{{'PROPERTY_RIGHTS' | translate}}</span>
      </a>
    </li>
    <li class="s-tip-link">
      <a href="#">
        <img class="s-link-image" src="resources/images/purchase_process_image.jpg">
        <span class="s-link-text">{{'PURCHASE_PROCESS' | translate}}</span>
      </a>
    </li>
    <li class="s-tip-link">
      <a href="#">
        <img class="s-link-image" src="resources/images/investment_timing_image.jpg">
        <span class="s-link-text">{{'INVESTMENT_TIMING' | translate}}</span>
      </a>
    </li>
  </ul>

  <img id="s-footer-separator" src="resources/images/footer_separator.png">

  <p id="s-footer-contacts">
    SHENGYUAN GROUP ESTATE DEVELOPMENT LTD.<br/>
    35 Millharbour, Canary Wharf, London, E14 9TX<br>
    Tel +44 (0)2035880988 Fax +44 (0)2030698355
  </p>
</div>

</body>
</html>