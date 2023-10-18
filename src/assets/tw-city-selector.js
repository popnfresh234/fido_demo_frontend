





<!DOCTYPE html>
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"  data-a11y-animated-images="system" data-a11y-link-underlines="false">

    <style>
  /* for each iteration, uncomment the CSS variable */

  /* light themes */
  [data-color-mode="light"][data-light-theme*="light"],
  [data-color-mode="auto"][data-light-theme*="light"] {
    /* iteration 1 */
    --border-color-iteration-1: #C8CCD0;
    /* iteration 2 */
    --border-color-iteration-2: #BABFC5;
    /* iteration 3 */
    --border-color-iteration-3: #A6ADB4;
    /* iteration final */
    --border-color-iteration-4: #868F99;

    /* the first value is the final step, which falls back to previous iterations */
    --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
  }

  /* dark themes */
  [data-color-mode="dark"][data-dark-theme*="dark"],
  [data-color-mode="auto"][data-light-theme*="dark"] {
    /* iteration 1 */
    --border-color-iteration-1: #363940;
    /* iteration 2 */
    --border-color-iteration-2: #3F434B;
    /* iteration 3 */
    --border-color-iteration-3: #4B5159;
    /* iteration final */
    --border-color-iteration-4: #666E79;

    /* the first value is the final step, which falls back to previous iterations */
    --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
  }

  [data-color-mode="dark"][data-dark-theme="dark_dimmed"],
  [data-color-mode="dark"][data-dark-theme="light_high_contrast"],
  [data-color-mode="dark"][data-dark-theme="dark_high_contrast"],
  [data-color-mode="light"][data-light-theme="dark_dimmed"],
  [data-color-mode="light"][data-light-theme="light_high_contrast"],
  [data-color-mode="light"][data-light-theme="dark_high_contrast"] {
    /* skip these themes, use the fallback */
    --control-borderColor-rest: initial !important;
  }

  @media (prefers-color-scheme: dark) {
    /* dark colors in dark mode */
    [data-color-mode="auto"][data-dark-theme*="dark"] {
      /* iteration 1 */
      --border-color-iteration-1: #363940;
      /* iteration 2 */
      --border-color-iteration-2: #3F434B;
      /* iteration 3 */
      --border-color-iteration-3: #4B5159;
      /* iteration final */
      --border-color-iteration-4: #666E79;

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    /* light colors in dark mode */
    [data-color-mode="auto"][data-dark-theme*="light"] {
      /* iteration 1 */
      --border-color-iteration-1: #C8CCD0;
      /* iteration 2 */
      --border-color-iteration-2: #BABFC5;
      /* iteration 3 */
      --border-color-iteration-3: #A6ADB4;
      /* iteration final */
      --border-color-iteration-4: #868F99;

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
      }

    [data-color-mode="auto"][data-dark-theme="dark_dimmed"],
    [data-color-mode="auto"][data-dark-theme="light_high_contrast"],
    [data-color-mode="auto"][data-dark-theme="dark_high_contrast"] {
      /* skip these themes, use the fallback */
      --control-borderColor-rest: initial !important;
    }
  }

  @media (prefers-color-scheme: light) {
    /* dark colors in light mode */
    [data-color-mode="auto"][data-light-theme*="dark"] {
      /* iteration 1 */
      --border-color-iteration-1: #363940;
      /* iteration 2 */
      --border-color-iteration-2: #3F434B;
      /* iteration 3 */
      --border-color-iteration-3: #4B5159;
      /* iteration final */
      --border-color-iteration-4: #666E79;

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    /* light colors in light mode */
    [data-color-mode="auto"][data-light-theme*="light"] {
      /* iteration 1 */
      --border-color-iteration-1: #C8CCD0;
      /* iteration 2 */
      --border-color-iteration-2: #BABFC5;
      /* iteration 3 */
      --border-color-iteration-3: #A6ADB4;
      /* iteration final */
      --border-color-iteration-4: #868F99;

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    [data-color-mode="auto"][data-light-theme="dark_dimmed"],
    [data-color-mode="auto"][data-light-theme="light_high_contrast"],
    [data-color-mode="auto"][data-light-theme="dark_high_contrast"] {
      /* skip these themes, use the fallback */
      --control-borderColor-rest: initial !important;
    }
  }
</style>


  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com" crossorigin>
  <link rel="preconnect" href="https://avatars.githubusercontent.com">

  


  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-b92e9647318f.css" /><link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-5d486a4ede8e.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-27c8d635e4e5.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-8438e75afd36.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-bf5665b96628.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-c414b5ba1dce.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-e5868b7374db.css" /><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-299ac9c64ec0.css" /><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-3a26e78ad0ff.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-primitives-363ec1831c26.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-20243c8e1da1.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/global-bae2b9fc7e8e.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/github-de916a7feed5.css" />
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/code-71ecd5638fbf.css" />

  

  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["copilot_conversational_ux_streaming","failbot_handle_non_errors","geojson_azure_maps","hovercard_show_on_focus","image_metric_tracking","repository_suggester_elastic_search","turbo_experiment_risky","sample_network_conn_type","star_button_focus"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/wp-runtime-05f3e3762818.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_dompurify_dist_purify_js-64d590970fa6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-18bf85b8e9f4.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_soft-nav_soft-nav_ts-bbaed7e6fb42.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/environment-fc6543d75794.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-2646a2c533e3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-d55308df5023.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-99e288659d4f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_combobox-nav_dist_index_js-node_modu-344bff-91b70bb50d68.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-29dc30-2a5b7c1aa525.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-59c459-39506636d610.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-2c6968-ea6a6076e9a3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/github-elements-3485f2997bc6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/element-registry-7d0e4ed52abc.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0-d5b921292620.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-4ccebb6ebf7d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2-504c8d53fb8e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_morphdom_dist_morphdom-esm_js-b1fdd7158cf0.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-9a3541181451.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-35b3ae68c408.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_hotkey_dist_-8755d2-f721427ba08d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_session-resume_dist_index_js-node_modules_primer_behaviors_dist_e-ac74c6-4e7cf4e77afd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-854ff4-b4a2793be3fe.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_details-dialog_ts-app_assets_modules_github_fetch_ts-add1ab03ecb3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts-0a5a30c9b976.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-079b43-971d727bc4a9.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_sticky-scroll-into-view_ts-00ce2dd9370d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-2e2258-37f5bacaf108.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-db335a626783.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-d036bfdc913d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-623425af41e1.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/notifications-global-6997e0de353e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/code-menu-6bd50a0647d6.js"></script>
  
  <script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/react-lib-210c4b5934c3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c-b8c027e1cfac.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Box_Box_js-96a44addc402.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_Button_js-node_modules_primer_react_lib-esm_-f6da63-1976b80d3486.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_js-03b6dd82d40a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_index_js-node_modules_primer_react_lib-esm_O-701f13-047a44a18d3a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-535c8ee1ebe8.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-85a14b-0f28951279b7.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-2f08ef908241.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_scroll-into-view_js-node_modules_primer_react_-04bb1b-a6096689d2d5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js-9b048a5a5ceb.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_react-router-dom_dist_index_js-4a785319b497.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js-7693f4e3427d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Dialog_js-node_modules_primer_react_lib-esm_Flash_F-ad64b6-f3217651e114.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_UnderlineNav2_index_js-b739f40cf454.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-9bd36c-c9a87fd5afd0.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_AvatarStack_AvatarStack_js-node_modules_primer_reac-6d3540-684005f5bdbe.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Breadcrumbs_Breadcrumbs_js-node_modules_primer_reac-31943d-f0539d68eb2b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92-54bd55ed144d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_react-core_register-app_ts-c960459705f5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_ref-selector_RefSelector_tsx-3d1f35ce14b6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869-26ce2427d133.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-cc11d2-ad0d23da5a25.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_react-code-view_pages_CodeView_tsx-93891a3cc324.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/react-code-view-5a5d284ec546.js"></script>


  <title>tw-city-selector/dist/tw-city-selector.js at master · dennykuo/tw-city-selector</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="8586:2EBB78:2860A8:2A90EB:652F479F" data-turbo-transient="true" /><meta name="html-safe-nonce" content="0bef0c26b5ba5cdd60fec3f7fed4b2f446df19362eafd92f04e67eb8b3545c03" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9kZW5ueWt1by90dy1jaXR5LXNlbGVjdG9yL3RyZWUvbWFzdGVyL2Rpc3QiLCJyZXF1ZXN0X2lkIjoiODU4NjoyRUJCNzg6Mjg2MEE4OjJBOTBFQjo2NTJGNDc5RiIsInZpc2l0b3JfaWQiOiI3Nzc3ODk4MDQ2MjgwMzgwNjIxIiwicmVnaW9uX2VkZ2UiOiJqYXBhbmVhc3QiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-turbo-transient="true" /><meta name="visitor-hmac" content="2547dcbf080992dcb13202904caecd7440557364686dae22ee9b1d8ca9b5b191" data-turbo-transient="true" />


    <meta name="hovercard-subject-tag" content="repository:23533185" data-turbo-transient>


  <meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree" data-turbo-transient="true" />
  

  <meta name="selected-link" value="repo_source" data-turbo-transient>
  <link rel="assets" href="https://github.githubassets.com/">

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
  <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">

<meta name="octolytics-url" content="https://collector.github.com/github/collect" /><meta name="octolytics-actor-id" content="8007637" /><meta name="octolytics-actor-login" content="popnfresh234" /><meta name="octolytics-actor-hash" content="a6c915fe2d0b6a4200da18b8c82aa6f6b8d0b8b1d64aaff5d886e2b3f288bfd8" />

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true" />

  




  

    <meta name="user-login" content="popnfresh234">

  <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="viewport" content="width=device-width">
    
      <meta name="description" content="台灣縣市二聯式選單 http://dennykuo.github.io/tw-city-selector - tw-city-selector/dist/tw-city-selector.js at master · dennykuo/tw-city-selector">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/746bc769aa8c9444e95ef6f4d4a7788405d0fd88d82db1f3610af501b050e876/dennykuo/tw-city-selector" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="tw-city-selector/dist/tw-city-selector.js at master · dennykuo/tw-city-selector" /><meta name="twitter:description" content="台灣縣市二聯式選單 http://dennykuo.github.io/tw-city-selector - dennykuo/tw-city-selector" />
      <meta property="og:image" content="https://opengraph.githubassets.com/746bc769aa8c9444e95ef6f4d4a7788405d0fd88d82db1f3610af501b050e876/dennykuo/tw-city-selector" /><meta property="og:image:alt" content="台灣縣市二聯式選單 http://dennykuo.github.io/tw-city-selector - dennykuo/tw-city-selector" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="tw-city-selector/dist/tw-city-selector.js at master · dennykuo/tw-city-selector" /><meta property="og:url" content="https://github.com/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js" /><meta property="og:description" content="台灣縣市二聯式選單 http://dennykuo.github.io/tw-city-selector - dennykuo/tw-city-selector" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/8007637/ws?session=eyJ2IjoiVjMiLCJ1Ijo4MDA3NjM3LCJzIjoxMjEzMzc2NDUyLCJjIjozODQxOTU3NDQwLCJ0IjoxNjk3NTk3MzQ2fQ==--37c0d75a68dd659a7bba4c41e4830f704c61775349f70767246a0e3651178d3d" data-refresh-url="/_alive" data-session-id="cc57cca7c7002da0b2ec2f076c8224192259453b21d1b548b5e3eb993be75e23">
      <link rel="shared-web-socket-src" href="/assets-cdn/worker/socket-worker-cee473359cfe.js">


        <meta name="hostname" content="github.com">


      <meta name="keyboard-shortcuts-preference" content="all">

        <meta name="expected-hostname" content="github.com">


  <meta http-equiv="x-pjax-version" content="c187d63162f1948d69962cb5d88243181194963b2deb42bdf5d5cc73ec21469a" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="ee14a7165914197d62e19f664bfb961fcfdfc1ec31939a5c7b137fbab1751c87" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="e41364c48b2191b683f7fb8e593353f7ea131bf0821961bc4fd9a7cb830d03a1" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="cc703c116825360881a5072c983b37c27d1b6c0bf7f4452403b9507bc22164d5" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">

      <meta name="turbo-cache-control" content="no-cache" data-turbo-transient>
    <meta data-hydrostats="publish">

  <meta name="go-import" content="github.com/dennykuo/tw-city-selector git https://github.com/dennykuo/tw-city-selector.git">

  <meta name="octolytics-dimension-user_id" content="2378195" /><meta name="octolytics-dimension-user_login" content="dennykuo" /><meta name="octolytics-dimension-repository_id" content="23533185" /><meta name="octolytics-dimension-repository_nwo" content="dennykuo/tw-city-selector" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="23533185" /><meta name="octolytics-dimension-repository_network_root_nwo" content="dennykuo/tw-city-selector" />



  <meta name="turbo-body-classes" content="logged-in env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark" />


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive" style="word-wrap: break-word;">
    <div data-turbo-body class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      


      

        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_allex_crc32_lib_crc32_esm_js-node_modules_github_mini-throttle_dist_deco-b38cad-fb30c470f64b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-b37f7d-4db36910a4bc.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-44cf245df946.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/command-palette-cc218ecb29b1.js"></script>

            <header class="AppHeader">
    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start">
          <deferred-side-panel data-url="/_side-panels/global">
  <include-fragment data-target="deferred-side-panel.fragment">
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-114637ac-1941-48e1-a80d-371b0cc27b82" id="dialog-show-dialog-114637ac-1941-48e1-a80d-371b0cc27b82" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-114637ac-1941-48e1-a80d-371b0cc27b82" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-114637ac-1941-48e1-a80d-371b0cc27b82-title" aria-describedby="dialog-114637ac-1941-48e1-a80d-371b0cc27b82-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-114637ac-1941-48e1-a80d-371b0cc27b82-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-114637ac-1941-48e1-a80d-371b0cc27b82" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">    <div data-view-component="true" class="d-flex flex-column height-full mb-3">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-e22afe85-71b6-425f-a1dd-183afe4eca73" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-436919fd-1b2e-4775-943b-314693bd1265" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-4d019d28-4c8a-42d2-a3d2-c3925f923d19" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-2ba5110c-6d92-48ba-91e9-e934ef5b62cf" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-ed300310-e109-4729-aeef-5a016243d850" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-91b1d55b-22e9-4adc-b894-42f4378a629d" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-8e8cab8d-c37d-49a9-bd77-bc67c4823109" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</div>
</div>

      <div data-view-component="true" class="px-2">      <p class="color-fg-subtle text-small text-light">&copy; 2023 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex text-small text-light">
          <a target="_blank" href="/about" data-view-component="true" class="Link mr-2">About</a>
          <a target="_blank" href="https://github.blog" data-view-component="true" class="Link mr-2">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
          <a target="_blank" href="/security" data-view-component="true" class="Link mr-2">Security</a>
        <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>
</div></div>
</div>
      
</modal-dialog></div>

  </include-fragment>
</deferred-side-panel>

        <a
          class="AppHeader-logo ml-2"
          href="https://github.com/"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}"
        >
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
        </a>

          <div class="AppHeader-context" >
  <div class="AppHeader-context-compact">
        <button aria-expanded="false" aria-haspopup="dialog" aria-label="Page context: dennykuo / tw-city-selector" id="dialog-show-context-region-dialog" data-show-dialog-id="context-region-dialog" type="button" data-view-component="true" class="AppHeader-context-compact-trigger Truncate Button--secondary Button--medium Button box-shadow-none">    <span class="Button-content">
      <span class="Button-label"><span class="AppHeader-context-compact-lead">
                <span class="AppHeader-context-compact-parentItem">dennykuo</span>
                <span class="AppHeader-context-compact-separator">&nbsp;/</span>

            </span>

            <strong class="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate" >
  <span class="Truncate-text ">tw-city-selector</span>

</strong></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog role="dialog" id="context-region-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="context-region-dialog-title" aria-describedby="context-region-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="context-region-dialog-title">
        Navigate back to
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="context-region-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">          <ul role="list" class="list-style-none" >
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;dennykuo&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="/dennykuo" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-person mr-1">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>

          dennykuo
        </span>

</a>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;tw-city-selector&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="/dennykuo/tw-city-selector" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-repo mr-1">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

          tw-city-selector
        </span>

</a>
    </li>
</ul>

</div>
      
</modal-dialog></div>
  </div>

  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="Page context">
      <ul role="list" class="list-style-none" >
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;dennykuo&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/dennykuo/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/dennykuo" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          dennykuo
        </span>

</a>
        <span class="AppHeader-context-item-separator">/</span>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;tw-city-selector&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="/dennykuo/tw-city-selector" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          tw-city-selector
        </span>

</a>
    </li>
</ul>

    </nav>
  </div>
</div>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search" >
              


<qbsearch-input class="search-input" data-scope="repo:dennykuo/tw-city-selector" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="fPABfMH424qphSh_5nH0Unuu4NH7LyaeAtlp0EnN-H7kiR_DjGrWzsf-P6jw0HLXNXLSCPnKWS9GR1xWLdBZCg" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="dennykuo/tw-city-selector" data-current-org="" data-current-owner="dennykuo" data-logged-in="true">
  <div
    class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0"
    data-action="click:qbsearch-input#searchInputContainerClicked"
  >
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control">
      <label
        for="AppHeader-searchInput"
        aria-label="Search or jump to…"
        class="AppHeader-search-visual--leading"
      >
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button
            type="button"
            data-target="qbsearch-input.inputButton"
            data-action="click:qbsearch-input#handleExpand"
            class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap"
            data-hotkey="s,/"
            data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SEARCH&quot;,&quot;label&quot;:null}"
          >
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


      <button type="button" id="AppHeader-commandPalette-button" class="AppHeader-search-action--trailing js-activate-command-palette" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;command_palette&quot;,&quot;label&quot;:&quot;open command palette&quot;}">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-command-palette">
    <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
</svg>
      </button>

      <tool-tip id="tooltip-237e5323-f539-4c83-b922-e90f844558fd" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay>
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container"
          style="border-radius: 12px;"
          data-target="qbsearch-input.queryBuilderContainer"
          hidden
        >
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="query-builder-test-form" action="" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div
        class="QueryBuilder-StyledInput width-fit "
        data-target="query-builder.styledInput"
      >
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div
            aria-hidden="true"
            class="QueryBuilder-StyledInputContent"
            data-target="query-builder.styledInputContent"
          ></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-c599907c-f2af-46f8-9326-a6337edbb716" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" />
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          
  <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="hidden" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>  

      </div>
      <template id="search-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
</template>

<template id="code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</template>

<template id="file-code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file-code">
    <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
</svg>
</template>

<template id="history-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-history">
    <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
</svg>
</template>

<template id="repo-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
</template>

<template id="bookmark-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bookmark">
    <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path>
</svg>
</template>

<template id="plus-circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus-circle">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</template>

<template id="circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
</template>

<template id="trash-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
    <path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path>
</svg>
</template>

<template id="team-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
</template>

<template id="project-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
</template>

<template id="pencil-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
    <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
</svg>
</template>

        <div class="position-relative">
                <ul
                  role="listbox"
                  class="ActionListWrap QueryBuilder-ListWrap"
                  aria-label="Suggestions"
                  data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  "
                  data-target="query-builder.resultsList"
                  data-persist-list=false
                  id="query-builder-test-results"
                ></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-c599907c-f2af-46f8-9326-a6337edbb716" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only"></div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">
              Search syntax tips
</a>            <div class="d-flex flex-1"></div>
                <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">    <span class="Button-content">
      <span class="Button-label">Give feedback</span>
    </span>
</button>  
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" role="dialog" id="feedback-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="ZiL5P9DNKLYPow6dX8-0FWjxn6-KbaOMDcnjXhtVE9hFLN2fgsOF0HVq0p29CzSDc9H8QTCodcYaZds_Vp2iLg" />
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</modal-dialog></div>

    <custom-scopes data-target="qbsearch-input.customScopesManager">
    
<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" role="dialog" id="custom-scopes-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="VL8MzMf5QbkvFg5tKvL_EAlmKom8ia8In-v8GBlL9UMZ-ap4pYtsREP5XMUE5L0FQF7MeoqVShbqNuRHYsG4KQ" />
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required>
              <input
                type="text"
                name="custom_scope_name"
                id="custom_scope_name"
                data-target="custom-scopes.customScopesNameField"
                class="form-control"
                autocomplete="off"
                placeholder="github-ruby"
                required
                maxlength="50">
              <input type="hidden" value="QQrrpHf4MPqAXNblLxaDmssI8LHmEzXCF8AfEbWn3YmLshCxIeRjIjNhy-nD07OW4X7zpTYB4VItzp0-rt58NA" data-csrf="true" />
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input
              type="text"
              name="custom_scope_query"
              id="custom_scope_query"
              data-target="custom-scopes.customScopesQueryField"
              class="form-control"
              autocomplete="off"
              placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
              required
              maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</modal-dialog></div>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" value="enI5UA03nUY7clz66AM4Bnc5pzim47edG_nT_OLdQtnMbCFZuZ7CgV6HQQ2TC-h0uQOBsdLvmUTIgAtEuXGMIQ" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

          </div>

        <div class="AppHeader-actions position-relative">
          <action-menu data-select-variant="none" data-view-component="true">
  <focus-group direction="vertical" mnemonics retain>
    <div data-view-component="true" class="Button-withTooltip">  <button id="global-create-menu-button" popovertarget="global-create-menu-overlay" aria-label="Create something new" aria-controls="global-create-menu-list" aria-haspopup="true" type="button" data-view-component="true" class="AppHeader-button Button--secondary Button--small Button width-auto color-fg-muted">    <span class="Button-content">
        <span class="Button-visual Button-leadingVisual">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
        </span>
      <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
    </span>
</button>  <tool-tip id="tooltip-19dd2494-c9c9-4fc4-8ff0-1ce159ffa815" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-7d09587c-d2d0-44e7-b604-9a2418983189" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
              New repository

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;import repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new/import" tabindex="-1" id="item-629f82b3-a708-483e-bc2f-afae0ddb7023" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-push">
    <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                Import repository

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new codespace&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/codespaces/new" tabindex="-1" id="item-d9b32c20-ed01-49bf-a97d-7bc234ca2aab" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New codespace

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new gist&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-2cb49c9e-9ddc-4e8c-acd4-5995b6b52892" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New gist

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/account/organizations/new" tabindex="-1" data-dont-follow-via-test="true" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new organization&quot;}" id="item-d3841c95-7770-4315-bd26-b3d66376bc65" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-organization">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New organization

</span></a>
  
  
</li>
</ul>  
</div>

</div></anchored-position>  </focus-group>
</action-menu>

          <div data-view-component="true" class="Button-withTooltip">
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-f25c3ab2-4bc2-4dc2-835c-ea10c65de0b8" aria-labelledby="tooltip-bd07a12e-4665-43dd-b844-055ce41508a2" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-bd07a12e-4665-43dd-b844-055ce41508a2" for="icon-button-f25c3ab2-4bc2-4dc2-835c-ea10c65de0b8" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-1a92a182-be7c-4be3-8ae9-7842582b6c03" aria-labelledby="tooltip-d678cace-05fa-4729-9787-1351b13b954b" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-d678cace-05fa-4729-9787-1351b13b954b" for="icon-button-1a92a182-be7c-4be3-8ae9-7842582b6c03" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>

        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6ODAwNzYzNyIsInQiOjE2OTc1OTczNDZ9--1c2cbf7fed458cdbb00094ee56774c42f093ac214edf2f6b77dbc16c5f815200" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
  <a id="AppHeader-notifications-button" href="/notifications"
    class="AppHeader-button Button--secondary"

    style="width:32px;height:32px;"

    data-hotkey="g n"
    data-target="notification-indicator.link"
    aria-label="Notifications"

      data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;notifications&quot;,&quot;label&quot;:null}"
  >

    <span
      data-target="notification-indicator.badge"
      class="mail-status unread d-none" hidden>
    </span>

      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox color-fg-muted mr-0">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
  </a>

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-e3b770a0-a94d-4e8e-b578-55c7a0f15fa3" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=tw-city-selector&amp;user=popnfresh234&amp;user_can_create_organizations=true&amp;user_id=8007637">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db" id="dialog-show-dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/8007637?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db-title" aria-describedby="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db-title">
        Account menu
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <img src="https://avatars.githubusercontent.com/u/8007637?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" />
</div>        <div data-view-component="true" class="overflow-hidden d-flex width-full">        <div data-view-component="true" class="lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto width-full">
          <span data-view-component="true" class="Truncate text-bold">
    <span data-view-component="true" class="Truncate-text">
            popnfresh234
</span>
</span>          <span data-view-component="true" class="Truncate color-fg-subtle">
    <span data-view-component="true" class="Truncate-text">
            Alexander Holliday
</span>
</span></div>
</div>
</div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-e7ca2982-3ada-4025-8ee7-19d092ebf1db" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">    <div data-view-component="true" class="d-flex flex-column height-full mb-3">
        <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-f3b705c0-18cb-4b1b-ad41-002f30000466" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-e8a142dc-4950-43a3-a325-07f7c79c0e74" href="https://github.com/popnfresh234" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-person">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your profile
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-3f2d9ed5-5083-4d96-b036-f9b659287008" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-bf49fd74-fdaf-4410-acc2-e4aa5e7e161a" href="/popnfresh234?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your repositories
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-ec714d65-e43e-4544-888e-3b6d38ee8dd9" href="/popnfresh234?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your projects
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-d70a4e12-404a-4976-84ba-193141974d5e" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-d370ffe2-b03c-4597-8f3f-7ec25f2bb281" href="/popnfresh234?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your stars
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-19682e6b-0929-4909-b5fb-8c94b52c5701" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your sponsors
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-68fee1c9-1f62-4753-b2dd-9f0738a1c7b1" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your gists
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-534e20cb-df3f-4864-a89e-0eb39f7c9225" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-351a8867-8adf-4da7-8bac-1c7ada9ac30b" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-f907450e-b3b5-4d27-9682-fd0707eb6c4d" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-eff46c5f-b234-4864-91ae-e7c6fd0f4b55" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear">
    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Settings
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-60a3b350-4f13-41f4-807e-8e5885946a2f" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Docs
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-e838b1e6-dd59-47b5-9231-8a64e56c6486" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Support
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-1b8ff6a7-6f0d-46c8-8611-cd3ac6963a9f" href="/logout" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Sign out
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>


</div>
</div>
      
</modal-dialog></div>
  </user-drawer-side-panel>

  </include-fragment>
</deferred-side-panel>
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu>

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


      <div class="AppHeader-localBar" >
        <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="/dennykuo/tw-city-selector" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /dennykuo/tw-city-selector" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="/dennykuo/tw-city-selector/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /dennykuo/tw-city-selector/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="1" data-view-component="true" class="Counter">1</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="/dennykuo/tw-city-selector/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /dennykuo/tw-city-selector/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="7" data-view-component="true" class="Counter">7</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="discussions-tab" href="/dennykuo/tw-city-selector/discussions" data-tab-item="i3discussions-tab" data-selected-links="repo_discussions /dennykuo/tw-city-selector/discussions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g g" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Discussions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        <span data-content="Discussions">Discussions</span>
          <span id="discussions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="/dennykuo/tw-city-selector/actions" data-tab-item="i4actions-tab" data-selected-links="repo_actions /dennykuo/tw-city-selector/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="wiki-tab" href="/dennykuo/tw-city-selector/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /dennykuo/tw-city-selector/wiki" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g w" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Wiki&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        <span data-content="Wiki">Wiki</span>
          <span id="wiki-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="/dennykuo/tw-city-selector/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /dennykuo/tw-city-selector/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          <include-fragment src="/dennykuo/tw-city-selector/security/overall-count" accept="text/fragment+html"></include-fragment>

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="/dennykuo/tw-city-selector/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /dennykuo/tw-city-selector/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">        <details data-view-component="true" class="details-overlay details-reset position-relative">
    <summary role="button" data-view-component="true">          <div class="UnderlineNav-item mr-0 border-0">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
            <span class="sr-only">More</span>
          </div>
</summary>
    <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
          <ul>
              <li data-menu-item="i0code-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /dennykuo/tw-city-selector" href="/dennykuo/tw-city-selector">
                  Code
</a>              </li>
              <li data-menu-item="i1issues-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_issues repo_labels repo_milestones /dennykuo/tw-city-selector/issues" href="/dennykuo/tw-city-selector/issues">
                  Issues
</a>              </li>
              <li data-menu-item="i2pull-requests-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_pulls checks /dennykuo/tw-city-selector/pulls" href="/dennykuo/tw-city-selector/pulls">
                  Pull requests
</a>              </li>
              <li data-menu-item="i3discussions-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_discussions /dennykuo/tw-city-selector/discussions" href="/dennykuo/tw-city-selector/discussions">
                  Discussions
</a>              </li>
              <li data-menu-item="i4actions-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_actions /dennykuo/tw-city-selector/actions" href="/dennykuo/tw-city-selector/actions">
                  Actions
</a>              </li>
              <li data-menu-item="i5wiki-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_wiki /dennykuo/tw-city-selector/wiki" href="/dennykuo/tw-city-selector/wiki">
                  Wiki
</a>              </li>
              <li data-menu-item="i6security-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="security overview alerts policy token_scanning code_scanning /dennykuo/tw-city-selector/security" href="/dennykuo/tw-city-selector/security">
                  Security
</a>              </li>
              <li data-menu-item="i7insights-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /dennykuo/tw-city-selector/pulse" href="/dennykuo/tw-city-selector/pulse">
                  Insights
</a>              </li>
          </ul>
</details-menu>
</details></div>
</nav>
      </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden>You switched accounts on another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>

    <div data-view-component="true" class="flash-close">
  <button id="icon-button-ba2bc018-3c05-4da1-a3f2-36444ee6485e" aria-labelledby="tooltip-7e9f57ce-986c-4006-8903-66645af49741" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-7e9f57ce-986c-4006-8903-66645af49741" for="icon-button-ba2bc018-3c05-4da1-a3f2-36444ee6485e" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
</div>

  
</div>
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" data-turbo-replace>





  <template class="js-flash-template">
    
<div class="flash flash-full   {{ className }}">
  <div class="px-2" >
    <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    <div aria-atomic="true" role="alert" class="js-flash-alert">
      
      <div>{{ message }}</div>

    </div>
  </div>
</div>
  </template>
</div>


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6ODAwNzYzNyIsInQiOjE2OTc1OTczNDd9--98a30b6b61b3484ae74e40541773501d7ab9cd8c587cd8bfc334a344291f429e" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
  <div hidden data-initial data-target="notification-shelf-watcher.placeholder"></div>






      <details
  class="details-reset details-overlay details-overlay-dark js-command-palette-dialog"
  id="command-palette-pjax-container"
  data-turbo-replace
>
  <summary aria-label="Command palette trigger" tabindex="-1"></summary>
  <details-dialog class="command-palette-details-dialog d-flex flex-column flex-justify-center height-fit" aria-label="Command palette">
    <command-palette
      class="command-palette color-bg-default rounded-3 border color-shadow-small"
      return-to=/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js
      user-id="8007637"
      activation-hotkey="Mod+k,Mod+Alt+k"
      command-mode-hotkey="Mod+Shift+k"
      data-action="
        command-palette-input-ready:command-palette#inputReady
        command-palette-page-stack-updated:command-palette#updateInputScope
        itemsUpdated:command-palette#itemsUpdated
        keydown:command-palette#onKeydown
        loadingStateChanged:command-palette#loadingStateChanged
        selectedItemChanged:command-palette#selectedItemChanged
        pageFetchError:command-palette#pageFetchError
      ">

        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search issues and pull requests"
        ></command-palette-mode>
        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search issues, pull requests, discussions, and projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="!"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search or jump to a user, organization, or repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to a repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="/"
            data-scope-types="[&quot;repository&quot;]"
            data-placeholder="Search files"
        ></command-palette-mode>
        <command-palette-mode
          data-char="?"
        ></command-palette-mode>
        <command-palette-mode
          data-char="&gt;"
            data-placeholder="Run a command"
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search or jump to..."
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to..."
        ></command-palette-mode>
      <command-palette-mode
        class="js-command-palette-default-mode"
        data-char=""
        data-placeholder="Search or jump to..."
      ></command-palette-mode>

      <command-palette-input placeholder="Search or jump to..."

        data-action="
          command-palette-input:command-palette#onInput
          command-palette-select:command-palette#onSelect
          command-palette-descope:command-palette#onDescope
          command-palette-cleared:command-palette#onInputClear
        "
      >
        <div class="js-search-icon d-flex flex-items-center mr-2" style="height: 26px">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search color-fg-muted">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <div class="js-spinner d-flex flex-items-center mr-2 color-fg-muted" hidden>
          <svg aria-label="Loading" class="anim-rotate" viewBox="0 0 16 16" fill="none" width="16" height="16">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              stroke-opacity="0.25"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            ></circle>
            <path
              d="M15 8a7.002 7.002 0 00-7-7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
        <command-palette-scope >
          <div data-target="command-palette-scope.placeholder" hidden class="color-fg-subtle">/&nbsp;&nbsp;<span class="text-semibold color-fg-default">...</span>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <command-palette-token
                data-text="dennykuo"
                data-id="MDQ6VXNlcjIzNzgxOTU="
                data-type="owner"
                data-value="dennykuo"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                style="white-space:nowrap;line-height:20px;"
                >dennykuo<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
              <command-palette-token
                data-text="tw-city-selector"
                data-id="MDEwOlJlcG9zaXRvcnkyMzUzMzE4NQ=="
                data-type="repository"
                data-value="tw-city-selector"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                style="white-space:nowrap;line-height:20px;"
                >tw-city-selector<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
        </command-palette-scope>
        <div class="command-palette-input-group flex-1 form-control border-0 box-shadow-none" style="z-index: 0">
          <div class="command-palette-typeahead position-absolute d-flex flex-items-center Truncate">
            <span class="typeahead-segment input-mirror" data-target="command-palette-input.mirror"></span>
            <span class="Truncate-text" data-target="command-palette-input.typeaheadText"></span>
            <span class="typeahead-segment" data-target="command-palette-input.typeaheadPlaceholder"></span>
          </div>
          <input
            class="js-overlay-input typeahead-input d-none"
            disabled
            tabindex="-1"
            aria-label="Hidden input for typeahead"
          >
          <input
            type="text"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="js-input typeahead-input form-control border-0 box-shadow-none input-block width-full no-focus-indicator"
            aria-label="Command palette input"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-controls="command-palette-page-stack"
            role="combobox"
            data-action="
              input:command-palette-input#onInput
              keydown:command-palette-input#onKeydown
            "
          >
        </div>
          <div data-view-component="true" class="position-relative d-inline-block">
    <button aria-keyshortcuts="Control+Backspace" data-action="click:command-palette-input#onClear keypress:command-palette-input#onClear" data-target="command-palette-input.clearButton" id="command-palette-clear-button" hidden="hidden" type="button" data-view-component="true" class="btn-octicon command-palette-input-clear-button">      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>    <tool-tip id="tooltip-7a134af5-cd10-4cb9-b6a1-e462511a4f8b" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
</div>
      </command-palette-input>

      <command-palette-page-stack
        data-default-scope-id="MDEwOlJlcG9zaXRvcnkyMzUzMzE4NQ=="
        data-default-scope-type="Repository"
        data-action="command-palette-page-octicons-cached:command-palette-page-stack#cacheOcticons"
      >
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search discussions
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">!</kbd> to search projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search teams
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search people and organizations
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">&gt;</kbd> to activate command mode
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Go to your accessibility settings to change your keyboard shortcuts
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type author:@me to search your content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:pr to filter to pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:issue to filter to issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:project to filter to projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:open to filter to open content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
        <command-palette-tip class="mx-3 my-2 flash flash-error d-flex flex-items-center" data-scope-types="*" data-on-error>
          <div>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
          </div>
          <div class="px-2">
            We’ve encountered an error and some results aren't available at this time. Type a new search or try again later.
          </div>
        </command-palette-tip>
        <command-palette-tip class="h4 color-fg-default pl-3 pb-2 pt-3" data-on-empty data-scope-types="*" data-match-mode="[^?]|^$">
          No results matched your search
        </command-palette-tip>

        <div hidden>

            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-muted">
              <svg height="16" class="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-default">
              <svg height="16" class="octicon octicon-arrow-right color-fg-default" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="codespaces-color-fg-muted">
              <svg height="16" class="octicon octicon-codespaces color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="copy-color-fg-muted">
              <svg height="16" class="octicon octicon-copy color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="dash-color-fg-muted">
              <svg height="16" class="octicon octicon-dash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="file-color-fg-muted">
              <svg height="16" class="octicon octicon-file color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="gear-color-fg-muted">
              <svg height="16" class="octicon octicon-gear color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="lock-color-fg-muted">
              <svg height="16" class="octicon octicon-lock color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="moon-color-fg-muted">
              <svg height="16" class="octicon octicon-moon color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="person-color-fg-muted">
              <svg height="16" class="octicon octicon-person color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="pencil-color-fg-muted">
              <svg height="16" class="octicon octicon-pencil color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="issue-opened-open">
              <svg height="16" class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="git-pull-request-draft-color-fg-muted">
              <svg height="16" class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="search-color-fg-muted">
              <svg height="16" class="octicon octicon-search color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sun-color-fg-muted">
              <svg height="16" class="octicon octicon-sun color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sync-color-fg-muted">
              <svg height="16" class="octicon octicon-sync color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="trash-color-fg-muted">
              <svg height="16" class="octicon octicon-trash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="key-color-fg-muted">
              <svg height="16" class="octicon octicon-key color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="comment-discussion-color-fg-muted">
              <svg height="16" class="octicon octicon-comment-discussion color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-color-fg-muted">
              <svg height="16" class="octicon octicon-bell color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-slash-color-fg-muted">
              <svg height="16" class="octicon octicon-bell-slash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="paintbrush-color-fg-muted">
              <svg height="16" class="octicon octicon-paintbrush color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z"></path></svg>
            </div>

            <command-palette-item-group
              data-group-id="top"
              data-group-title="Top result"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="0"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="commands"
              data-group-title="Commands"
              data-group-hint="Type &gt; to filter"
              data-group-limits="{&quot;static_items_page&quot;:50,&quot;issue&quot;:50,&quot;pull_request&quot;:50,&quot;discussion&quot;:50}"
              data-default-priority="1"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="global_commands"
              data-group-title="Global Commands"
              data-group-hint="Type &gt; to filter"
              data-group-limits="{&quot;issue&quot;:0,&quot;pull_request&quot;:0,&quot;discussion&quot;:0}"
              data-default-priority="2"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="this_page"
              data-group-title="This Page"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="3"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="files"
              data-group-title="Files"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="4"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="default"
              data-group-title="Default"
              data-group-hint=""
              data-group-limits="{&quot;static_items_page&quot;:50}"
              data-default-priority="5"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="pages"
              data-group-title="Pages"
              data-group-hint=""
              data-group-limits="{&quot;repository&quot;:10}"
              data-default-priority="6"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="access_policies"
              data-group-title="Access Policies"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="7"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="organizations"
              data-group-title="Organizations"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="8"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="repositories"
              data-group-title="Repositories"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="9"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="references"
              data-group-title="Issues, pull requests, and discussions"
              data-group-hint="Type # to filter"
              data-group-limits="{}"
              data-default-priority="10"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="teams"
              data-group-title="Teams"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="11"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="users"
              data-group-title="Users"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="12"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="memex_projects"
              data-group-title="Projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="13"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="projects"
              data-group-title="Projects (classic)"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="14"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="footer"
              data-group-title="Footer"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="15"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="modes_help"
              data-group-title="Modes"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="16"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="filters_help"
              data-group-title="Use filters in issues, pull requests, discussions, and projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="17"
            >
            </command-palette-item-group>

            <command-palette-page
              data-page-title="dennykuo"
              data-scope-id="MDQ6VXNlcjIzNzgxOTU="
              data-scope-type="owner"
              data-targets="command-palette-page-stack.defaultPages"
              hidden
            >
            </command-palette-page>
            <command-palette-page
              data-page-title="tw-city-selector"
              data-scope-id="MDEwOlJlcG9zaXRvcnkyMzUzMzE4NQ=="
              data-scope-type="repository"
              data-targets="command-palette-page-stack.defaultPages"
              hidden
            >
            </command-palette-page>
        </div>

        <command-palette-page data-is-root>
        </command-palette-page>
          <command-palette-page
            data-page-title="dennykuo"
            data-scope-id="MDQ6VXNlcjIzNzgxOTU="
            data-scope-type="owner"
          >
          </command-palette-page>
          <command-palette-page
            data-page-title="tw-city-selector"
            data-scope-id="MDEwOlJlcG9zaXRvcnkyMzUzMzE4NQ=="
            data-scope-type="repository"
          >
          </command-palette-page>
      </command-palette-page-stack>

      <server-defined-provider data-type="search-links" data-targets="command-palette.serverDefinedProviderElements"></server-defined-provider>
      <server-defined-provider data-type="help" data-targets="command-palette.serverDefinedProviderElements">
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues</strong> and <strong>pull requests</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues, pull requests, discussions,</strong> and <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="@"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>organizations, repositories,</strong> and <strong>users</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">@</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="!"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">!</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="/"
              data-scope-types="[&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>files</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">/</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="&gt;"
          >
            <span data-target="command-palette-help.titleElement">Activate <strong>command mode</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">&gt;</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:pr"
          >
            <span data-target="command-palette-help.titleElement">Filter to pull requests</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:pr</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:issue"
          >
            <span data-target="command-palette-help.titleElement">Filter to issues</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:issue</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:discussion"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:discussion</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:project"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to projects</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:project</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:open"
          >
            <span data-target="command-palette-help.titleElement">Filter to open issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:open</kbd>
              </span>
          </command-palette-help>
      </server-defined-provider>

        <server-defined-provider
          data-type="commands"
          data-fetch-debounce="0"
            data-src="/command_palette/commands"
          data-supported-modes="[]"
            data-supports-commands
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_page_navigation"
          data-supported-modes="[&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to_members_only"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_members_only_prefetched"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="files"
          data-fetch-debounce="0"
            data-src="/command_palette/files"
          data-supported-modes="[&quot;/&quot;]"
            data-supported-scope-types="[&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/discussions"
          data-supported-modes="[&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/projects"
          data-supported-modes="[&quot;#&quot;,&quot;!&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/recent_issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/teams"
          data-supported-modes="[&quot;@&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/name_with_owner_repository"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
    </command-palette>
  </details-dialog>
</details>

<div class="position-fixed bottom-0 left-0 ml-5 mb-5 js-command-palette-toasts" style="z-index: 1000">
  <div hidden class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <path
          fill="#959da5"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--error">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-stop">
    <path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--warning">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>


  <div hidden class="anim-fade-in fast Toast Toast--success">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>
</div>


  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" >
      
      
      






    
  <div id="repository-container-header" data-turbo-replace hidden></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content " >
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Alt+Meta+≥,Control+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Alt+Meta+≤,Control+Alt+," target="_blank" href="/codespaces/new/dennykuo/tw-city-selector/tree/master?resume=1">Open in codespace</a>



    
      
    





<react-app
  app-name="react-code-view"
  initial-path="/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="true"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"dist":{"items":[{"name":"tw-city-selector.js","path":"dist/tw-city-selector.js","contentType":"file"},{"name":"tw-city-selector.js.map","path":"dist/tw-city-selector.js.map","contentType":"file"},{"name":"tw-city-selector.min.js","path":"dist/tw-city-selector.min.js","contentType":"file"}],"totalCount":3},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"cypress","path":"cypress","contentType":"directory"},{"name":"dist","path":"dist","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"bower.json","path":"bower.json","contentType":"file"},{"name":"cypress.json","path":"cypress.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"webpack.config.js","path":"webpack.config.js","contentType":"file"},{"name":"webpack.docs.config.js","path":"webpack.docs.config.js","contentType":"file"},{"name":"webpack.umd-test.config.js","path":"webpack.umd-test.config.js","contentType":"file"},{"name":"yarn.lock","path":"yarn.lock","contentType":"file"}],"totalCount":14}},"fileTreeProcessingTime":12.507667,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":23533185,"defaultBranch":"master","name":"tw-city-selector","ownerLogin":"dennykuo","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2014-08-31T23:45:47.000-07:00","ownerAvatar":"https://avatars.githubusercontent.com/u/2378195?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"master","listCacheKey":"v0:1672785547.172014","canEdit":true,"refType":"branch","currentOid":"c17b2bbeb7b5cf218c038a9474fd674e1002b86e"},"path":"dist/tw-city-selector.js","currentUser":{"id":8007637,"login":"popnfresh234","userEmail":"pop_n_fresh234@hotmail.com"},"blob":{"rawLines":["!function(i,t){\"object\"==typeof exports\u0026\u0026\"object\"==typeof module?module.exports=t():\"function\"==typeof define\u0026\u0026define.amd?define(\"TwCitySelector\",[],t):\"object\"==typeof exports?exports.TwCitySelector=t():i.TwCitySelector=t()}(window,function(){return function(i){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return i[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=i,n.c=t,n.d=function(i,t,s){n.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:s})},n.r=function(i){\"undefined\"!=typeof Symbol\u0026\u0026Symbol.toStringTag\u0026\u0026Object.defineProperty(i,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(i,\"__esModule\",{value:!0})},n.t=function(i,t){if(1\u0026t\u0026\u0026(i=n(i)),8\u0026t)return i;if(4\u0026t\u0026\u0026\"object\"==typeof i\u0026\u0026i\u0026\u0026i.__esModule)return i;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,\"default\",{enumerable:!0,value:i}),2\u0026t\u0026\u0026\"string\"!=typeof i)for(var o in i)n.d(s,o,function(t){return i[t]}.bind(null,o));return s},n.n=function(i){var t=i\u0026\u0026i.__esModule?function(){return i.default}:function(){return i};return n.d(t,\"a\",t),t},n.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},n.p=\"\",n(n.s=0)}([function(i,t,n){\"use strict\";n.r(t);var s={counties:[\"台北市\",\"基隆市\",\"新北市\",\"宜蘭縣\",\"桃園市\",\"新竹市\",\"新竹縣\",\"苗栗縣\",\"台中市\",\"彰化縣\",\"南投縣\",\"嘉義市\",\"嘉義縣\",\"雲林縣\",\"台南市\",\"高雄市\",\"澎湖縣\",\"金門縣\",\"屏東縣\",\"台東縣\",\"花蓮縣\",\"連江縣\"],districts:[[[\"中正區\",\"大同區\",\"中山區\",\"松山區\",\"大安區\",\"萬華區\",\"信義區\",\"士林區\",\"北投區\",\"內湖區\",\"南港區\",\"文山區\"],[\"100\",\"103\",\"104\",\"105\",\"106\",\"108\",\"110\",\"111\",\"112\",\"114\",\"115\",\"116\"]],[[\"仁愛區\",\"信義區\",\"中正區\",\"中山區\",\"安樂區\",\"暖暖區\",\"七堵區\"],[\"200\",\"201\",\"202\",\"203\",\"204\",\"205\",\"206\"]],[[\"萬里區\",\"金山區\",\"板橋區\",\"汐止區\",\"深坑區\",\"石碇區\",\"瑞芳區\",\"平溪區\",\"雙溪區\",\"貢寮區\",\"新店區\",\"坪林區\",\"烏來區\",\"永和區\",\"中和區\",\"土城區\",\"三峽區\",\"樹林區\",\"鶯歌區\",\"三重區\",\"新莊區\",\"泰山區\",\"林口區\",\"蘆洲區\",\"五股區\",\"八里區\",\"淡水區\",\"三芝區\",\"石門區\"],[\"207\",\"208\",\"220\",\"221\",\"222\",\"223\",\"224\",\"226\",\"227\",\"228\",\"231\",\"232\",\"233\",\"234\",\"235\",\"236\",\"237\",\"238\",\"239\",\"241\",\"242\",\"243\",\"244\",\"247\",\"248\",\"249\",\"251\",\"252\",\"253\"]],[[\"宜蘭市\",\"頭城鎮\",\"礁溪鄉\",\"壯圍鄉\",\"員山鄉\",\"羅東鎮\",\"三星鄉\",\"大同鄉\",\"五結鄉\",\"冬山鄉\",\"蘇澳鎮\",\"南澳鄉\",\"釣魚台列嶼\"],[\"260\",\"261\",\"262\",\"263\",\"264\",\"265\",\"266\",\"267\",\"268\",\"269\",\"270\",\"272\",\"290\"]],[[\"中壢區\",\"平鎮區\",\"龍潭區\",\"楊梅區\",\"新屋區\",\"觀音區\",\"桃園區\",\"龜山區\",\"八德區\",\"大溪區\",\"復興區\",\"大園區\",\"蘆竹區\"],[\"320\",\"324\",\"325\",\"326\",\"327\",\"328\",\"330\",\"333\",\"334\",\"335\",\"336\",\"337\",\"338\"]],[[\"東區\",\"北區\",\"香山區\"],[\"300\",\"300\",\"300\"]],[[\"竹北市\",\"湖口鄉\",\"新豐鄉\",\"新埔鎮\",\"關西鎮\",\"芎林鄉\",\"寶山鄉\",\"竹東鎮\",\"五峰鄉\",\"橫山鄉\",\"尖石鄉\",\"北埔鄉\",\"峨眉鄉\"],[\"302\",\"303\",\"304\",\"305\",\"306\",\"307\",\"308\",\"310\",\"311\",\"312\",\"313\",\"314\",\"315\"]],[[\"竹南鎮\",\"頭份市\",\"三灣鄉\",\"南庄鄉\",\"獅潭鄉\",\"後龍鎮\",\"通霄鎮\",\"苑裡鎮\",\"苗栗市\",\"造橋鄉\",\"頭屋鄉\",\"公館鄉\",\"大湖鄉\",\"泰安鄉\",\"銅鑼鄉\",\"三義鄉\",\"西湖鄉\",\"卓蘭鎮\"],[\"350\",\"351\",\"352\",\"353\",\"354\",\"356\",\"357\",\"358\",\"360\",\"361\",\"362\",\"363\",\"364\",\"365\",\"366\",\"367\",\"368\",\"369\"]],[[\"中區\",\"東區\",\"南區\",\"西區\",\"北區\",\"北屯區\",\"西屯區\",\"南屯區\",\"太平區\",\"大里區\",\"霧峰區\",\"烏日區\",\"豐原區\",\"后里區\",\"石岡區\",\"東勢區\",\"和平區\",\"新社區\",\"潭子區\",\"大雅區\",\"神岡區\",\"大肚區\",\"沙鹿區\",\"龍井區\",\"梧棲區\",\"清水區\",\"大甲區\",\"外埔區\",\"大安區\"],[\"400\",\"401\",\"402\",\"403\",\"404\",\"406\",\"407\",\"408\",\"411\",\"412\",\"413\",\"414\",\"420\",\"421\",\"422\",\"423\",\"424\",\"426\",\"427\",\"428\",\"429\",\"432\",\"433\",\"434\",\"435\",\"436\",\"437\",\"438\",\"439\"]],[[\"彰化市\",\"芬園鄉\",\"花壇鄉\",\"秀水鄉\",\"鹿港鎮\",\"福興鄉\",\"線西鄉\",\"和美鎮\",\"伸港鄉\",\"員林市\",\"社頭鄉\",\"永靖鄉\",\"埔心鄉\",\"溪湖鎮\",\"大村鄉\",\"埔鹽鄉\",\"田中鎮\",\"北斗鎮\",\"田尾鄉\",\"埤頭鄉\",\"溪州鄉\",\"竹塘鄉\",\"二林鎮\",\"大城鄉\",\"芳苑鄉\",\"二水鄉\"],[\"500\",\"502\",\"503\",\"504\",\"505\",\"506\",\"507\",\"508\",\"509\",\"510\",\"511\",\"512\",\"513\",\"514\",\"515\",\"516\",\"520\",\"521\",\"522\",\"523\",\"524\",\"525\",\"526\",\"527\",\"528\",\"530\"]],[[\"南投市\",\"中寮鄉\",\"草屯鎮\",\"國姓鄉\",\"埔里鎮\",\"仁愛鄉\",\"名間鄉\",\"集集鎮\",\"水里鄉\",\"魚池鄉\",\"信義鄉\",\"竹山鎮\",\"鹿谷鄉\"],[\"540\",\"541\",\"542\",\"544\",\"545\",\"546\",\"551\",\"552\",\"553\",\"555\",\"556\",\"557\",\"558\"]],[[\"東區\",\"西區\"],[\"600\",\"600\"]],[[\"番路鄉\",\"梅山鄉\",\"竹崎鄉\",\"阿里山\",\"中埔鄉\",\"大埔鄉\",\"水上鄉\",\"鹿草鄉\",\"太保市\",\"朴子市\",\"東石鄉\",\"六腳鄉\",\"新港鄉\",\"民雄鄉\",\"大林鎮\",\"溪口鄉\",\"義竹鄉\",\"布袋鎮\"],[\"602\",\"603\",\"604\",\"605\",\"606\",\"607\",\"608\",\"611\",\"612\",\"613\",\"614\",\"615\",\"616\",\"621\",\"622\",\"623\",\"624\",\"625\"]],[[\"斗南鎮\",\"大埤鄉\",\"虎尾鎮\",\"土庫鎮\",\"褒忠鄉\",\"東勢鄉\",\"台西鄉\",\"崙背鄉\",\"麥寮鄉\",\"斗六市\",\"林內鄉\",\"古坑鄉\",\"莿桐鄉\",\"西螺鎮\",\"二崙鄉\",\"北港鎮\",\"水林鄉\",\"口湖鄉\",\"四湖鄉\",\"元長鄉\"],[\"630\",\"631\",\"632\",\"633\",\"634\",\"635\",\"636\",\"637\",\"638\",\"640\",\"643\",\"646\",\"647\",\"648\",\"649\",\"651\",\"652\",\"653\",\"654\",\"655\"]],[[\"中西區\",\"東區\",\"南區\",\"北區\",\"安平區\",\"安南區\",\"永康區\",\"歸仁區\",\"新化區\",\"左鎮區\",\"玉井區\",\"楠西區\",\"南化區\",\"仁德區\",\"關廟區\",\"龍崎區\",\"官田區\",\"麻豆區\",\"佳里區\",\"西港區\",\"七股區\",\"將軍區\",\"學甲區\",\"北門區\",\"新營區\",\"後壁區\",\"白河區\",\"東山區\",\"六甲區\",\"下營區\",\"柳營區\",\"鹽水區\",\"善化區\",\"大內區\",\"山上區\",\"新市區\",\"安定區\"],[\"700\",\"701\",\"702\",\"704\",\"708\",\"709\",\"710\",\"711\",\"712\",\"713\",\"714\",\"715\",\"716\",\"717\",\"718\",\"719\",\"720\",\"721\",\"722\",\"723\",\"724\",\"725\",\"726\",\"727\",\"730\",\"731\",\"732\",\"733\",\"734\",\"735\",\"736\",\"737\",\"741\",\"742\",\"743\",\"744\",\"745\"]],[[\"新興區\",\"前金區\",\"苓雅區\",\"鹽埕區\",\"鼓山區\",\"旗津區\",\"前鎮區\",\"三民區\",\"楠梓區\",\"小港區\",\"左營區\",\"仁武區\",\"大社區\",\"東沙群島\",\"南沙群島\",\"岡山區\",\"路竹區\",\"阿蓮區\",\"田寮區\",\"燕巢區\",\"橋頭區\",\"梓官區\",\"彌陀區\",\"永安區\",\"湖內區\",\"鳳山區\",\"大寮區\",\"林園區\",\"鳥松區\",\"大樹區\",\"旗山區\",\"美濃區\",\"六龜區\",\"內門區\",\"杉林區\",\"甲仙區\",\"桃源區\",\"那瑪夏區\",\"茂林區\",\"茄萣區\"],[\"800\",\"801\",\"802\",\"803\",\"804\",\"805\",\"806\",\"807\",\"811\",\"812\",\"813\",\"814\",\"815\",\"817\",\"819\",\"820\",\"821\",\"822\",\"823\",\"824\",\"825\",\"826\",\"827\",\"828\",\"829\",\"830\",\"831\",\"832\",\"833\",\"840\",\"842\",\"843\",\"844\",\"845\",\"846\",\"847\",\"848\",\"849\",\"851\",\"852\"]],[[\"馬公市\",\"西嶼鄉\",\"望安鄉\",\"七美鄉\",\"白沙鄉\",\"湖西鄉\"],[\"880\",\"881\",\"882\",\"883\",\"884\",\"885\"]],[[\"金沙鎮\",\"金湖鎮\",\"金寧鄉\",\"金城鎮\",\"烈嶼鄉\",\"烏坵鄉\"],[\"890\",\"891\",\"892\",\"893\",\"894\",\"896\"]],[[\"屏東市\",\"三地門鄉\",\"霧台鄉\",\"瑪家鄉\",\"九如鄉\",\"里港鄉\",\"高樹鄉\",\"鹽埔鄉\",\"長治鄉\",\"麟洛鄉\",\"竹田鄉\",\"內埔鄉\",\"萬丹鄉\",\"潮州鎮\",\"泰武鄉\",\"來義鄉\",\"萬巒鄉\",\"崁頂鄉\",\"新埤鄉\",\"南州鄉\",\"林邊鄉\",\"東港鎮\",\"琉球鄉\",\"佳冬鄉\",\"新園鄉\",\"枋寮鄉\",\"枋山鄉\",\"春日鄉\",\"獅子鄉\",\"車城鄉\",\"牡丹鄉\",\"恆春鎮\",\"滿州鄉\"],[\"900\",\"901\",\"902\",\"903\",\"904\",\"905\",\"906\",\"907\",\"908\",\"909\",\"911\",\"912\",\"913\",\"920\",\"921\",\"922\",\"923\",\"924\",\"925\",\"926\",\"927\",\"928\",\"929\",\"931\",\"932\",\"940\",\"941\",\"942\",\"943\",\"944\",\"945\",\"946\",\"947\"]],[[\"台東市\",\"綠島鄉\",\"蘭嶼鄉\",\"延平鄉\",\"卑南鄉\",\"鹿野鄉\",\"關山鎮\",\"海端鄉\",\"池上鄉\",\"東河鄉\",\"成功鎮\",\"長濱鄉\",\"太麻里\",\"金峰鄉\",\"大武鄉\",\"達仁鄉\"],[\"950\",\"951\",\"952\",\"953\",\"954\",\"955\",\"956\",\"957\",\"958\",\"959\",\"961\",\"962\",\"963\",\"964\",\"965\",\"966\"]],[[\"花蓮市\",\"新城鄉\",\"秀林鄉\",\"吉安鄉\",\"壽豐鄉\",\"鳳林鎮\",\"光復鄉\",\"豐濱鄉\",\"瑞穗鄉\",\"萬榮鄉\",\"玉里鎮\",\"卓溪鄉\",\"富里鄉\"],[\"970\",\"971\",\"972\",\"973\",\"974\",\"975\",\"976\",\"977\",\"978\",\"979\",\"981\",\"982\",\"983\"]],[[\"南竿鄉\",\"北竿鄉\",\"莒光鄉\",\"東引鄉\"],[\"209\",\"210\",\"211\",\"212\"]]]},o={counties:[\"Taipei City\",\"Keelung City\",\"New Taipei City\",\"Yilan County\",\"Taoyuan City\",\"Hsinchu City\",\"Hsinchu County\",\"Miaoli County\",\"Taichung City\",\"Changhua County\",\"Nantou County\",\"Chiayi City\",\"Chiayi County\",\"Yunlin County\",\"Tainan City\",\"Kaohsiung City\",\"Penghu County\",\"Kinmen County\",\"Pingtung County\",\"Taitung County\",\"Hualien County\",\"Lienchiang County\"],districts:[[[\"Zhongzheng District\",\"Datong District\",\"Zhongshan District\",\"Songshan District\",\"Da’an District\",\"Wanhua District\",\"Xinyi District\",\"Shilin District\",\"Beitou District\",\"Neihu District\",\"Nangang District\",\"Wenshan District\"],[\"100\",\"103\",\"104\",\"105\",\"106\",\"108\",\"110\",\"111\",\"112\",\"114\",\"115\",\"116\"]],[[\"Ren’ai District\",\"Xinyi District\",\"Zhongzheng District\",\"Zhongshan District\",\"Anle District\",\"Nuannuan District\",\"Qidu District\"],[\"200\",\"201\",\"202\",\"203\",\"204\",\"205\",\"206\"]],[[\"Wanli District\",\"Jinshan District\",\"Banqiao District\",\"Xizhi District\",\"Shenkeng District\",\"Shiding District\",\"Ruifang District\",\"Pingxi District\",\"Shuangxi District\",\"Gongliao District\",\"Xindian District\",\"Pinglin District\",\"Wulai District\",\"Yonghe District\",\"Zhonghe District\",\"Tucheng District\",\"Sanxia District\",\"Shulin District\",\"Yingge District\",\"Sanchong District\",\"Xinzhuang District\",\"Taishan District\",\"Linkou District\",\"LuzhouDistrict\",\"Wugu District\",\"Bali District\",\"Tamsui District\",\"Sanzhi District\",\"Shimen District\"],[\"207\",\"208\",\"220\",\"221\",\"222\",\"223\",\"224\",\"226\",\"227\",\"228\",\"231\",\"232\",\"233\",\"234\",\"235\",\"236\",\"237\",\"238\",\"239\",\"241\",\"242\",\"243\",\"244\",\"247\",\"248\",\"249\",\"251\",\"252\",\"253\"]],[[\"Yilan City\",\"Toucheng Township\",\"Jiaoxi Township\",\"Zhuangwei Township\",\"Yuanshan Township\",\"Luodong Township\",\"Sanxing Township\",\"Datong Township\",\"Wujie Township\",\"Dongshan Township\",\"Su’ao Township\",\"Nan’ao Township\",\"Diauyutai\"],[\"260\",\"261\",\"262\",\"263\",\"264\",\"265\",\"266\",\"267\",\"268\",\"269\",\"270\",\"272\",\"290\"]],[[\"Zhongli District\",\"Pingzhen District\",\"Longtan District\",\"Yangmei District\",\"Xinwu District\",\"Guanyin District\",\"Taoyuan District\",\"Guishan District\",\"Bade District\",\"Daxi District\",\"Fuxing District\",\"Dayuan District\",\"Luzhu District\"],[\"320\",\"324\",\"325\",\"326\",\"327\",\"328\",\"330\",\"333\",\"334\",\"335\",\"336\",\"337\",\"338\"]],[[\"East District\",\"North District\",\"Xiangshan District\"],[\"300\",\"300\",\"300\"]],[[\"Zhubei City\",\"Hukou Township\",\"Xinfeng Township\",\"Xinpu Township\",\"Guanxi Township\",\"Qionglin Township\",\"Baoshan Township\",\"Zhudong Township\",\"Wufeng Township\",\"Hengshan Township\",\"Jianshi Township\",\"Beipu Township\",\"Emei Township\"],[\"302\",\"303\",\"304\",\"305\",\"306\",\"307\",\"308\",\"310\",\"311\",\"312\",\"313\",\"314\",\"315\"]],[[\"Zhunan Township\",\"Toufen Township\",\"Sanwan Township\",\"Nanzhuang Township\",\"Shitan Township\",\"Houlong Township\",\"Tongxiao Township\",\"Yuanli Township\",\"Miaoli City\",\"Zaoqiao Township\",\"Touwu Township\",\"Gongguan Township\",\"Dahu Township\",\"Tai’an Township\",\"Tongluo Township\",\"Sanyi Township\",\"Xihu Township\",\"Zhuolan Township\"],[\"350\",\"351\",\"352\",\"353\",\"354\",\"356\",\"357\",\"358\",\"360\",\"361\",\"362\",\"363\",\"364\",\"365\",\"366\",\"367\",\"368\",\"369\"]],[[\"Central District\",\"East District\",\"South District\",\"West District\",\"North District\",\"Beitun District\",\"Xitun District\",\"Nantun District\",\"Taiping District\",\"Dali District\",\"Wufeng District\",\"Wuri District\",\"Fengyuan District\",\"Houli District\",\"Shigang District\",\"Dongshi District\",\"Heping District\",\"Xinshe District\",\"Tanzi District\",\"Daya District\",\"Shengang District\",\"Dadu District\",\"ShaluDistrict\",\"Longjing District\",\"Wuqi District\",\"Qingshui District\",\"Dajia District\",\"Waipu District\",\"Da’an District\"],[\"400\",\"401\",\"402\",\"403\",\"404\",\"406\",\"407\",\"408\",\"411\",\"412\",\"413\",\"414\",\"420\",\"421\",\"422\",\"423\",\"424\",\"426\",\"427\",\"428\",\"429\",\"432\",\"433\",\"434\",\"435\",\"436\",\"437\",\"438\",\"439\"]],[[\"Changhua City\",\"Fenyuan Township\",\"Huatan Township\",\"Xiushui Township\",\"Lukang Township\",\"Fuxing Township\",\"Xianxi Township\",\"Hemei Township\",\"Shengang Township\",\"Yuanlin Township\",\"Shetou Township\",\"Yongjing Township\",\"Puxin Township\",\"Xihu Township\",\"Dacun Township\",\"Puyan Township\",\"Tianzhong Township\",\"Beidou Township\",\"Tianwei Township\",\"Pitou Township\",\"Xizhou Township\",\"Zhutang Township\",\"Erlin Township\",\"Dacheng Township\",\"Fangyuan Township\",\"Ershui Township\"],[\"500\",\"502\",\"503\",\"504\",\"505\",\"506\",\"507\",\"508\",\"509\",\"510\",\"511\",\"512\",\"513\",\"514\",\"515\",\"516\",\"520\",\"521\",\"522\",\"523\",\"524\",\"525\",\"526\",\"527\",\"528\",\"530\"]],[[\"Nantou City\",\"Zhongliao Township\",\"Caotun Township\",\"Guoxing Township\",\"Puli Township\",\"Ren’ai Township\",\"Mingjian Township\",\"Jiji Township\",\"Shuili Township\",\"Yuchi Township\",\"Xinyi Township\",\"Zhushan Township\",\"Lugu Township\"],[\"540\",\"541\",\"542\",\"544\",\"545\",\"546\",\"551\",\"552\",\"553\",\"555\",\"556\",\"557\",\"558\"]],[[\"East District\",\"West District\"],[\"600\",\"600\"]],[[\"FanluTownship\",\"Meishan Township\",\"Zhuqi Township\",\"Alishan Township\",\"Zhongpu Township\",\"Dapu Township\",\"Shuishang Township\",\"Lucao Township\",\"Taibao City\",\"Puzi City\",\"Dongshi Township\",\"Liujiao Township\",\"Xingang Township\",\"Minxiong Township\",\"Dalin Township\",\"Xikou Township\",\"Yizhu Township\",\"Budai Township\"],[\"602\",\"603\",\"604\",\"605\",\"606\",\"607\",\"608\",\"611\",\"612\",\"613\",\"614\",\"615\",\"616\",\"621\",\"622\",\"623\",\"624\",\"625\"]],[[\"Dounan Township\",\"Dapi Township\",\"Huwei Township\",\"Tuku Township\",\"Baozhong Township\",\"Dongshi Township\",\"Taixi Township\",\"Lunbei Township\",\"Mailiao Township\",\"Douliu City\",\"Linnei Township\",\"Gukeng Township\",\"Citong Township\",\"Xiluo Township\",\"Erlun Township\",\"Beigang Township\",\"Shuilin Township\",\"Kouhu Township\",\"Sihu Township\",\"Yuanchang Township\"],[\"630\",\"631\",\"632\",\"633\",\"634\",\"635\",\"636\",\"637\",\"638\",\"640\",\"643\",\"646\",\"647\",\"648\",\"649\",\"651\",\"652\",\"653\",\"654\",\"655\"]],[[\"West Central District\",\"East District\",\"South District\",\"North District\",\"Anping District\",\"Annan District\",\"Yongkang District\",\"Guiren District\",\"Xinhua District\",\"Zuozhen District\",\"Yujing District\",\"Nanxi District\",\"Nanhua District\",\"Rende District\",\"Guanmiao District\",\"Longqi District\",\"Guantian District\",\"Madou District\",\"Jiali District\",\"Xigang District\",\"Qigu District\",\"Jiangjun District\",\"Xuejia District\",\"Beimen District\",\"Xinying District\",\"Houbi District\",\"Baihe District\",\"Dongshan District\",\"Liujia District\",\"Xiaying District\",\"Liuying District\",\"Yanshui District\",\"Shanhua District\",\"Danei District\",\"Shanshang District\",\"Xinshi District\",\"Anding District\"],[\"700\",\"701\",\"702\",\"704\",\"708\",\"709\",\"710\",\"711\",\"712\",\"713\",\"714\",\"715\",\"716\",\"717\",\"718\",\"719\",\"720\",\"721\",\"722\",\"723\",\"724\",\"725\",\"726\",\"727\",\"730\",\"731\",\"732\",\"733\",\"734\",\"735\",\"736\",\"737\",\"741\",\"742\",\"743\",\"744\",\"745\"]],[[\"Xinxing District\",\"Qianjin District\",\"Lingya District\",\"Yancheng District\",\"Gushan District\",\"Qijin District\",\"Qianzhen District\",\"Sanmin District\",\"Nanzi District\",\"Xiaogang District\",\"Zuoying District\",\"Renwu District\",\"Dashe District\",\"Dongsha Islands\",\"Nansha Islands\",\"Gangshan District\",\"Luzhu District\",\"Alian District\",\"Tianliao District\",\"Yanchao District\",\"Qiaotou District\",\"Ziguan District\",\"Mituo District\",\"Yong’an District\",\"Hunei District\",\"Fengshan District\",\"Daliao District\",\"Linyuan District\",\"Niaosong District\",\"Dashu District\",\"Qishan District\",\"Meinong District\",\"Liugui District\",\"Neimen District\",\"Shanlin District\",\"Jiaxian District\",\"Taoyuan District\",\"Namaxia District\",\"Maolin District\",\"Qieding District\"],[\"800\",\"801\",\"802\",\"803\",\"804\",\"805\",\"806\",\"807\",\"811\",\"812\",\"813\",\"814\",\"815\",\"817\",\"819\",\"820\",\"821\",\"822\",\"823\",\"824\",\"825\",\"826\",\"827\",\"828\",\"829\",\"830\",\"831\",\"832\",\"833\",\"840\",\"842\",\"843\",\"844\",\"845\",\"846\",\"847\",\"848\",\"849\",\"851\",\"852\"]],[[\"Magong City\",\"Xiyu Township\",\"Wang’an Township\",\"Qimei Township\",\"Baisha Township\",\"Huxi Township\"],[\"880\",\"881\",\"882\",\"883\",\"884\",\"885\"]],[[\"Jinsha Township\",\"Jinhu Township\",\"Jinning Township\",\"Jincheng Township\",\"Lieyu Township\",\"Wuqiu Township\"],[\"890\",\"891\",\"892\",\"893\",\"894\",\"896\"]],[[\"Pingtung City\",\"Sandimen Township\",\"Wutai Township\",\"Majia Township\",\"Jiuru Township\",\"Ligang Township\",\"Gaoshu Township\",\"Yanpu Township\",\"Changzhi Township\",\"Linluo Township\",\"Zhutian Township\",\"Neipu Township\",\"Wandan Township\",\"Chaozhou Township\",\"Taiwu Township\",\"Laiyi Township\",\"Wanluan Township\",\"Kanding Township\",\"Xinpi Township\",\"Nanzhou Township\",\"Linbian Township\",\"Donggang Township\",\"Liuqiu Township\",\"Jiadong Township\",\"Xinyuan Township\",\"Fangliao Township\",\"Fangshan Township\",\"Chunri Township\",\"Shizi Township\",\"Checheng Township\",\"Mudan Township\",\"Hengchun Township\",\"Manzhou Township\"],[\"900\",\"901\",\"902\",\"903\",\"904\",\"905\",\"906\",\"907\",\"908\",\"909\",\"911\",\"912\",\"913\",\"920\",\"921\",\"922\",\"923\",\"924\",\"925\",\"926\",\"927\",\"928\",\"929\",\"931\",\"932\",\"940\",\"941\",\"942\",\"943\",\"944\",\"945\",\"946\",\"947\"]],[[\"Taitung City\",\"Ludao Township\",\"Lanyu Township\",\"Yanping Township\",\"Beinan Township\",\"Luye Township\",\"Guanshan Township\",\"Haiduan Township\",\"Chishang Township\",\"Donghe Township\",\"Chenggong Township\",\"Changbin Township\",\"Taimali Township\",\"Jinfeng Township\",\"Dawu Township\",\"Daren Township\"],[\"950\",\"951\",\"952\",\"953\",\"954\",\"955\",\"956\",\"957\",\"958\",\"959\",\"961\",\"962\",\"963\",\"964\",\"965\",\"966\"]],[[\"Hualien City\",\"Xincheng Township\",\"Xiulin Township\",\"Ji’an Township\",\"Shoufeng Township\",\"Fenglin Township\",\"Guangfu Township\",\"Fengbin Township\",\"Ruisui Township\",\"Wanrong Township\",\"Yuli Township\",\"Zhuoxi Township\",\"Fuli Township\"],[\"970\",\"971\",\"972\",\"973\",\"974\",\"975\",\"976\",\"977\",\"978\",\"979\",\"981\",\"982\",\"983\"]],[[\"Nangan Township\",\"Beigan Township\",\"Juguang Township\",\"Dongyin Township\"],[\"209\",\"210\",\"211\",\"212\"]]]};function e(i,t){for(var n=0;n\u003ct.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,\"value\"in s\u0026\u0026(s.writable=!0),Object.defineProperty(i,s.key,s)}}var a=function(){function i(){var t=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]?arguments[0]:{},n=arguments.length\u003e1\u0026\u0026void 0!==arguments[1]?arguments[1]:[],s=arguments.length\u003e2\u0026\u0026void 0!==arguments[2]?arguments[2]:{};return function(i,t){if(!(i instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,i),n.length\u0026\u0026this.checkOptionsRequired(t,n),this.setOptionsExtend(t,s)}var t,n,s;return t=i,(n=[{key:\"checkOptionsRequired\",value:function(i,t){var n=\"\";if(i=i||{},Object.keys(t).forEach(function(t){i.hasOwnProperty(t)||(n+=t+\",\")}),n)throw\"缺少參數: \"+n}},{key:\"setOptionsExtend\",value:function(i,t){if(!i)return t;var n;for(n in i)t[n]=i[n];return t}}])\u0026\u0026e(t.prototype,n),s\u0026\u0026e(t,s),i}();t.default=h;function h(){var i=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]?arguments[0]:{};this.VERSION=\"2.0.0\",this.ROLE_ATTR_NAME=\"tw-city-selector\";var t=i.length?[\"el\"]:[];return this.options=new a(i,t,{el:null,elCounty:null,elDistrict:null,elZipcode:null,only:null,except:null,disabled:!1,hasZipcode:!1,hiddenZipcode:!1,countyValue:null,districtValue:null,countyClassName:\"county\",countyFieldName:\"county\",districtClassName:\"district\",districtFieldName:\"district\",zipcodeClassName:\"zipcode\",zipcodeFieldName:\"zipcode\",lang:\"zh-tw\",standardWords:!1,bootstrapStyle:!1}),setTimeout(function(){(function(){if(this.options.el)return this.el=u(this.options.el),this.elCounty=u(this.options.elCounty,this.el),this.elDistrict=u(this.options.elDistrict,this.el),this.elZipcode=u(this.options.elZipcode,this.el),this.elCounty\u0026\u0026this.elCounty.dataset.value\u0026\u0026(this.options.countyValue=this.elCounty.dataset.value,this.options.districtValue=this.elDistrict.dataset.value),r.call(this);var i=document.querySelectorAll(\"[role=\"+this.ROLE_ATTR_NAME+\"]\");return Array.prototype.forEach.call(i,function(i){var t=JSON.parse(JSON.stringify(this));return t.el=i,t.elCounty=null,t.elDistrict=null,t.elZipcode=null,t=function(){return this.options.only=this.el.getAttribute(\"data-only\")?this.el.getAttribute(\"data-only\").replace(/\\s/g,\"\").split(\",\"):null,this.options.except=this.el.getAttribute(\"data-except\")?this.el.getAttribute(\"data-except\").replace(/\\s/g,\"\").split(\",\"):null,this.options.countyValue=this.el.getAttribute(\"data-county-value\"),this.options.districtValue=this.el.getAttribute(\"data-district-value\"),this.options.hasZipcode=null!=this.el.getAttribute(\"data-has-zipcode\"),this.options.hiddenZipcode=null!=this.el.getAttribute(\"data-hidden-zipcode\"),this.options.disabled=null!=this.el.getAttribute(\"data-disabled\"),this.options.standardWords=null!=this.el.getAttribute(\"data-standard-words\"),this.options.bootstrapStyle=null!=this.el.getAttribute(\"data-bootstrap-style\"),this}.call(t),r.call(t)},this),i}).call(this)}.bind(this),0),this}function r(){return this.options.lang\u0026\u0026\"en-us\"===this.options.lang?this.data=o:this.data=s,function(){var i=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]\u0026\u0026arguments[0],t=i?\"台\":\"臺\",n=i?\"臺\":\"台\";this.data.counties=this.data.counties.map(function(i){return i.includes(t)?i.replace(t,n):i}),this.data.districts.forEach(function(i,s,o){o[s][0]=i[0].map(function(i){return i.includes(t)?i.replace(t,n):i})})}.call(this,this.options.standardWords),function(){var i=document.createDocumentFragment();if(!this.elCounty){var t=document.createElement(\"select\");this.elCounty=t,i.appendChild(this.elCounty)}this.elCounty.classList.add(this.options.countyClassName),this.elCounty.name=this.options.countyFieldName,this.options.disabled\u0026\u0026this.elCounty.setAttribute(\"disabled\",!0);if(function(){var i=this.elCounty;this.options.lang\u0026\u0026\"en-us\"===this.options.lang?i.options.add(new Option(\"Select County/City\",\"\")):i.options.add(new Option(\"選擇縣市\",\"\"));for(var t=function(){var i=this.options.only;return\"string\"==typeof i?i:Array.isArray(i)?i.map(function(i){var t=i.indexOf(\"@\");return-1===t?i:i.substring(0,t)}):null}.call(this),n=function(){var i=this.options.except;return\"string\"==typeof i?i:Array.isArray(i)?i.filter(function(i){return-1===i.indexOf(\"@\")}):null}.call(this),s=0,o=this.data.counties.length;s\u003co;s++)if(!(t\u0026\u0026-1===t.indexOf(this.data.counties[s])||n\u0026\u0026-1!==n.indexOf(this.data.counties[s]))){var e=new Option(this.data.counties[s],this.data.counties[s]);e.dataset.index=s,i.options.add(e)}return!0}.call(this),!this.elDistrict){var n=document.createElement(\"select\");this.elDistrict=n,i.appendChild(this.elDistrict)}this.elDistrict.classList.add(this.options.districtClassName),this.elDistrict.name=this.options.districtFieldName,this.options.disabled\u0026\u0026this.elDistrict.setAttribute(\"disabled\",!0);if(c.call(this),!this.elZipcode\u0026\u0026this.options.hasZipcode){var s=document.createElement(\"input\");this.elZipcode=s,i.appendChild(this.elZipcode),this.elZipcode.type=this.options.hiddenZipcode?\"hidden\":\"text\",this.elZipcode.name=this.options.zipcodeFieldName,this.elZipcode.classList.add(this.options.zipcodeClassName),this.elZipcode.readOnly=!0,this.options.lang\u0026\u0026\"en-us\"===this.options.lang?this.elZipcode.placeholder=\"ZIP code\":this.elZipcode.placeholder=\"郵遞區號\",this.elZipcode.size=3,this.elZipcode.autocomplete=\"off\",this.options.disabled\u0026\u0026this.elZipcode.setAttribute(\"disabled\",!0)}this.el.appendChild(i)}.call(this),this.options.bootstrapStyle\u0026\u0026function(){var i=document.createDocumentFragment();this.elCounty.setAttribute(\"class\",\"form-control\"),this.elDistrict.setAttribute(\"class\",\"form-control\"),this.options.hasZipcode\u0026\u0026this.elZipcode.setAttribute(\"class\",\"form-control\");var t=document.createElement(\"div\");t.setAttribute(\"class\",\"form-group\");var n=t.cloneNode();n.appendChild(this.elCounty),i.appendChild(n);var s=t.cloneNode();if(s.appendChild(this.elDistrict),i.appendChild(s),this.options.hasZipcode){var o=t.cloneNode();o.appendChild(this.elZipcode),i.appendChild(o)}this.el.appendChild(i)}.call(this),function(){var i=function(){var i=this.elCounty.querySelector(\"option:checked\"),t=i.getAttribute(\"data-index\");c.call(this,t),this.options.hasZipcode\u0026\u0026(this.elZipcode.value=\"\")}.bind(this);this.elCounty.onchange=i}.call(this),function(){var i=function(){var i=this.elDistrict.querySelector(\"option:checked\"),t=i.dataset.zipcode||\"\";(this.options.hasZipcode||this.elZipcode)\u0026\u0026(this.elZipcode.value=t)}.bind(this);this.elDistrict.onchange=i}.call(this),l.call(this,this.options.countyValue,this.options.districtValue),this}function u(i,t){return i?i\u0026\u0026t?t.querySelector(i):document.querySelector(i):null}function c(){for(var i=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]?arguments[0]:null,t=this.elDistrict;t.firstChild;)t.removeChild(t.firstChild);if(this.options.lang\u0026\u0026\"en-us\"===this.options.lang?t.options.add(new Option(\"Select District\",\"\")):t.options.add(new Option(\"選擇區域\",\"\")),!i)return!0;for(var n=function(i){var t=this.options.only,n=\"string\"==typeof t;if(!n\u0026\u0026!Array.isArray(t))return null;n\u0026\u0026(t=[t]);var s=null;return t.forEach(function(t){if(-1!==t.indexOf(i)){var n=t.lastIndexOf(\"@\");return-1!==n?s=t.substring(n+1).split(\"|\"):void 0}}),s}.call(this,this.elCounty.value),s=function(i){var t=this.options.except,n=\"string\"==typeof t;if(!n\u0026\u0026!Array.isArray(t))return null;n\u0026\u0026(t=[t]);var s=null;return t.forEach(function(t){if(-1!==t.indexOf(i)){var n=t.lastIndexOf(\"@\");return-1!==n?s=t.substring(n+1).split(\"|\"):void 0}}),s}.call(this,this.elCounty.value),o=0,e=this.data.districts[i][0].length-1;o\u003c=e;o++)if(!(n\u0026\u0026-1===n.indexOf(this.data.districts[i][0][o])||s\u0026\u0026-1!==s.indexOf(this.data.districts[i][0][o]))){var a=new Option(this.data.districts[i][0][o],this.data.districts[i][0][o]);a.dataset.zipcode=this.data.districts[i][1][o],t.options.add(a)}return!0}function l(){var i=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]?arguments[0]:null,t=arguments.length\u003e1\u0026\u0026void 0!==arguments[1]?arguments[1]:null,n=document.createEvent(\"Event\");n.initEvent(\"change\",!0,!0),i\u0026\u0026(this.elCounty.value=i,this.elCounty.dispatchEvent(n)),t\u0026\u0026(this.elDistrict.value=t,this.elDistrict.dispatchEvent(n))}h.prototype.getVersion=function(){return console.log(\"Your tw-city-selector.js is v\"+this.VERSION),this},h.prototype.setValue=function(){var i=arguments.length\u003e0\u0026\u0026void 0!==arguments[0]?arguments[0]:null,t=arguments.length\u003e1\u0026\u0026void 0!==arguments[1]?arguments[1]:null;return l.call(this,i,t),this},h.prototype.reset=function(){return function(){this.elCounty.selectedIndex=0,c.call(this),this.options.hasZipcode\u0026\u0026(this.elZipcode.value=\"\");return this}.call(this),this},String.prototype.includes||(String.prototype.includes=function(i,t){if(i instanceof RegExp)throw TypeError(\"first argument must not be a RegExp\");return void 0===t\u0026\u0026(t=0),-1!==this.indexOf(i,t)})}]).default});","//# sourceMappingURL=tw-city-selector.js.map"],"stylingDirectives":[[],[]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/dennykuo/tw-city-selector/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/dennykuo/tw-city-selector/security/dependabot","repoSecurityAndAnalysisPath":"/dennykuo/tw-city-selector/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"tw-city-selector.js","displayUrl":"https://github.com/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js?raw=true","headerInfo":{"blobSize":"25.9 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"f127faa","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fdennykuo%2Ftw-city-selector%2Fblob%2Fmaster%2Fdist%2Ftw-city-selector.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"2","truncatedSloc":"2"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/dennykuo/tw-city-selector/discussions/new","newIssuePath":"/dennykuo/tw-city-selector/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/dennykuo/tw-city-selector/blob/master/dist/tw-city-selector.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/dennykuo/tw-city-selector/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/dennykuo/tw-city-selector/raw/master/dist/tw-city-selector.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"dennykuo","repoName":"tw-city-selector","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[{"name":"n","kind":"function","ident_start":281,"ident_end":282,"extent_start":272,"extent_end":406,"fully_qualified_name":"n","ident_utf16":{"start":{"line_number":0,"utf16_col":281},"end":{"line_number":0,"utf16_col":282}},"extent_utf16":{"start":{"line_number":0,"utf16_col":272},"end":{"line_number":0,"utf16_col":406}}},{"name":"d","kind":"function","ident_start":427,"ident_end":428,"extent_start":425,"extent_end":504,"fully_qualified_name":"d","ident_utf16":{"start":{"line_number":0,"utf16_col":427},"end":{"line_number":0,"utf16_col":428}},"extent_utf16":{"start":{"line_number":0,"utf16_col":425},"end":{"line_number":0,"utf16_col":504}}},{"name":"r","kind":"function","ident_start":507,"ident_end":508,"extent_start":505,"extent_end":679,"fully_qualified_name":"r","ident_utf16":{"start":{"line_number":0,"utf16_col":507},"end":{"line_number":0,"utf16_col":508}},"extent_utf16":{"start":{"line_number":0,"utf16_col":505},"end":{"line_number":0,"utf16_col":679}}},{"name":"t","kind":"function","ident_start":682,"ident_end":683,"extent_start":680,"extent_end":971,"fully_qualified_name":"t","ident_utf16":{"start":{"line_number":0,"utf16_col":682},"end":{"line_number":0,"utf16_col":683}},"extent_utf16":{"start":{"line_number":0,"utf16_col":680},"end":{"line_number":0,"utf16_col":971}}},{"name":"n","kind":"function","ident_start":974,"ident_end":975,"extent_start":972,"extent_end":1082,"fully_qualified_name":"n","ident_utf16":{"start":{"line_number":0,"utf16_col":974},"end":{"line_number":0,"utf16_col":975}},"extent_utf16":{"start":{"line_number":0,"utf16_col":972},"end":{"line_number":0,"utf16_col":1082}}},{"name":"o","kind":"function","ident_start":1085,"ident_end":1086,"extent_start":1083,"extent_end":1150,"fully_qualified_name":"o","ident_utf16":{"start":{"line_number":0,"utf16_col":1085},"end":{"line_number":0,"utf16_col":1086}},"extent_utf16":{"start":{"line_number":0,"utf16_col":1083},"end":{"line_number":0,"utf16_col":1150}}},{"name":"e","kind":"function","ident_start":17770,"ident_end":17771,"extent_start":17761,"extent_end":17927,"fully_qualified_name":"e","ident_utf16":{"start":{"line_number":0,"utf16_col":15404},"end":{"line_number":0,"utf16_col":15405}},"extent_utf16":{"start":{"line_number":0,"utf16_col":15395},"end":{"line_number":0,"utf16_col":15561}}},{"name":"i","kind":"function","ident_start":17953,"ident_end":17954,"extent_start":17944,"extent_end":18317,"fully_qualified_name":"i","ident_utf16":{"start":{"line_number":0,"utf16_col":15587},"end":{"line_number":0,"utf16_col":15588}},"extent_utf16":{"start":{"line_number":0,"utf16_col":15578},"end":{"line_number":0,"utf16_col":15951}}},{"name":"value","kind":"function","ident_start":18370,"ident_end":18375,"extent_start":18370,"extent_end":18505,"fully_qualified_name":"value","ident_utf16":{"start":{"line_number":0,"utf16_col":16004},"end":{"line_number":0,"utf16_col":16009}},"extent_utf16":{"start":{"line_number":0,"utf16_col":16004},"end":{"line_number":0,"utf16_col":16131}}},{"name":"value","kind":"function","ident_start":18531,"ident_end":18536,"extent_start":18531,"extent_end":18602,"fully_qualified_name":"value","ident_utf16":{"start":{"line_number":0,"utf16_col":16157},"end":{"line_number":0,"utf16_col":16162}},"extent_utf16":{"start":{"line_number":0,"utf16_col":16157},"end":{"line_number":0,"utf16_col":16228}}},{"name":"h","kind":"function","ident_start":18660,"ident_end":18661,"extent_start":18651,"extent_end":20673,"fully_qualified_name":"h","ident_utf16":{"start":{"line_number":0,"utf16_col":16286},"end":{"line_number":0,"utf16_col":16287}},"extent_utf16":{"start":{"line_number":0,"utf16_col":16277},"end":{"line_number":0,"utf16_col":18299}}},{"name":"r","kind":"function","ident_start":20682,"ident_end":20683,"extent_start":20673,"extent_end":24228,"fully_qualified_name":"r","ident_utf16":{"start":{"line_number":0,"utf16_col":18308},"end":{"line_number":0,"utf16_col":18309}},"extent_utf16":{"start":{"line_number":0,"utf16_col":18299},"end":{"line_number":0,"utf16_col":21830}}},{"name":"u","kind":"function","ident_start":24237,"ident_end":24238,"extent_start":24228,"extent_end":24308,"fully_qualified_name":"u","ident_utf16":{"start":{"line_number":0,"utf16_col":21839},"end":{"line_number":0,"utf16_col":21840}},"extent_utf16":{"start":{"line_number":0,"utf16_col":21830},"end":{"line_number":0,"utf16_col":21910}}},{"name":"c","kind":"function","ident_start":24317,"ident_end":24318,"extent_start":24308,"extent_end":25481,"fully_qualified_name":"c","ident_utf16":{"start":{"line_number":0,"utf16_col":21919},"end":{"line_number":0,"utf16_col":21920}},"extent_utf16":{"start":{"line_number":0,"utf16_col":21910},"end":{"line_number":0,"utf16_col":23075}}},{"name":"l","kind":"function","ident_start":25490,"ident_end":25491,"extent_start":25481,"extent_end":25802,"fully_qualified_name":"l","ident_utf16":{"start":{"line_number":0,"utf16_col":23084},"end":{"line_number":0,"utf16_col":23085}},"extent_utf16":{"start":{"line_number":0,"utf16_col":23075},"end":{"line_number":0,"utf16_col":23396}}},{"name":"getVersion","kind":"function","ident_start":25814,"ident_end":25824,"extent_start":25802,"extent_end":25906,"fully_qualified_name":"getVersion","ident_utf16":{"start":{"line_number":0,"utf16_col":23408},"end":{"line_number":0,"utf16_col":23418}},"extent_utf16":{"start":{"line_number":0,"utf16_col":23396},"end":{"line_number":0,"utf16_col":23500}}},{"name":"setValue","kind":"function","ident_start":25919,"ident_end":25927,"extent_start":25907,"extent_end":26096,"fully_qualified_name":"setValue","ident_utf16":{"start":{"line_number":0,"utf16_col":23513},"end":{"line_number":0,"utf16_col":23521}},"extent_utf16":{"start":{"line_number":0,"utf16_col":23501},"end":{"line_number":0,"utf16_col":23690}}},{"name":"reset","kind":"function","ident_start":26109,"ident_end":26114,"extent_start":26097,"extent_end":26267,"fully_qualified_name":"reset","ident_utf16":{"start":{"line_number":0,"utf16_col":23703},"end":{"line_number":0,"utf16_col":23708}},"extent_utf16":{"start":{"line_number":0,"utf16_col":23691},"end":{"line_number":0,"utf16_col":23861}}},{"name":"includes","kind":"function","ident_start":26313,"ident_end":26321,"extent_start":26296,"extent_end":26462,"fully_qualified_name":"includes","ident_utf16":{"start":{"line_number":0,"utf16_col":23907},"end":{"line_number":0,"utf16_col":23915}},"extent_utf16":{"start":{"line_number":0,"utf16_col":23890},"end":{"line_number":0,"utf16_col":24056}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-business","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":true,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/dennykuo/tw-city-selector/branches":{"post":"_kgMYaq_OljmZP8vGsx2FYX5uX0lfWcNR6DFisle7B3l8PoEj7bDLEC1xrpvpZf7ywIXHXqgRPeYhZwfJn08GA"},"/repos/preferences":{"post":"dQQiK5EycBsGew9Mj5P_71YBTtUC5I90yT2CA41DDfWzAr0B5WQh4AEvY00Cd00_RLVeT60jJe3YMUqZVyrgbg"}}},"title":"tw-city-selector/dist/tw-city-selector.js at master · dennykuo/tw-city-selector","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-3722b59160bc.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-b812db9596b1.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_embedding_update":false,"copilot_conversational_ux_streaming":true,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false,"latest_commit_multi_author":true}}}</script>
  <div data-target="react-app.reactRoot"><style data-styled="true" data-styled-version="5.3.6">.fNPcqd{font-weight:600;font-size:32px;margin:0;font-size:14px;}/*!sc*/
.imcwCi{font-weight:600;font-size:32px;margin:0;font-size:16px;margin-left:8px;}/*!sc*/
.cgQnMS{font-weight:600;font-size:32px;margin:0;}/*!sc*/
.diwsLq{font-weight:600;font-size:32px;margin:0;font-weight:600;display:inline-block;max-width:100%;font-size:16px;}/*!sc*/
.jAEDJk{font-weight:600;font-size:32px;margin:0;font-weight:600;display:inline-block;max-width:100%;font-size:14px;}/*!sc*/
data-styled.g1[id="Heading__StyledHeading-sc-1c1dgg0-0"]{content:"fNPcqd,imcwCi,cgQnMS,diwsLq,jAEDJk,"}/*!sc*/
.fSWWem{padding:0;}/*!sc*/
.kPPmzM{max-width:100%;margin-left:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}/*!sc*/
.cIAPDV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%;}/*!sc*/
.gvCnwW{width:100%;}/*!sc*/
@media screen and (min-width:544px){.gvCnwW{width:100%;}}/*!sc*/
@media screen and (min-width:768px){.gvCnwW{width:auto;}}/*!sc*/
.ioxSsX{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-order:1;-ms-flex-order:1;order:1;width:100%;margin-left:0;margin-right:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:0;min-width:0;}/*!sc*/
@media screen and (min-width:544px){.ioxSsX{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}/*!sc*/
@media screen and (min-width:768px){.ioxSsX{width:auto;margin-top:0 !important;margin-bottom:0 !important;position:-webkit-sticky;position:sticky;top:0px;max-height:var(--sticky-pane-height);-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;margin-right:0;}}/*!sc*/
@media screen and (min-width:769px){.ioxSsX{height:100vh;max-height:100vh !important;}}/*!sc*/
@media print,screen and (max-width:1011px) and (min-width:768px){.ioxSsX{display:none;}}/*!sc*/
.eUyHuk{margin-left:0;margin-right:0;display:none;margin-top:0;}/*!sc*/
@media screen and (min-width:768px){.eUyHuk{margin-left:0 !important;margin-right:0 !important;}}/*!sc*/
.hAeDYA{height:100%;position:relative;display:none;margin-left:0;}/*!sc*/
.dZCkhR{position:absolute;inset:0 -2px;cursor:col-resize;background-color:transparent;-webkit-transition-delay:0.1s;transition-delay:0.1s;}/*!sc*/
.dZCkhR:hover{background-color:rgba(110,118,129,0.4);}/*!sc*/
.gNdDUH{--pane-min-width:256px;--pane-max-width-diff:511px;--pane-max-width:calc(100vw - var(--pane-max-width-diff));width:100%;padding:0;}/*!sc*/
@media screen and (min-width:544px){}/*!sc*/
@media screen and (min-width:768px){.gNdDUH{width:clamp(var(--pane-min-width),var(--pane-width),var(--pane-max-width));overflow:auto;}}/*!sc*/
@media screen and (min-width:1280px){.gNdDUH{--pane-max-width-diff:959px;}}/*!sc*/
.jywUSN{max-height:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
@media screen and (max-width:768px){.jywUSN{display:none;}}/*!sc*/
@media screen and (min-width:768px){.jywUSN{max-height:100vh;height:100vh;}}/*!sc*/
.hBSSUC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:16px;padding-right:16px;padding-bottom:8px;padding-top:16px;}/*!sc*/
.iPurHz{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-bottom:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.kkrdEu{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
.trpoQ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;pointer-events:none;}/*!sc*/
.hVHHYa{margin-left:24px;margin-right:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}/*!sc*/
.idZfsJ{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}/*!sc*/
.bKgizp{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}/*!sc*/
.bwTunw{margin-right:4px;color:#7d8590;}/*!sc*/
.caeYDk{font-size:14px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}/*!sc*/
.jahcnb{margin-left:8px;white-space:nowrap;}/*!sc*/
.jahcnb:hover button:not(:hover){border-left-color:var(--button-default-borderColor-hover,var(--color-btn-hover-border));}/*!sc*/
.ccToMy{margin-left:16px;margin-right:16px;margin-bottom:12px;}/*!sc*/
@media screen and (max-width:768px){.ccToMy{display:none;}}/*!sc*/
.cNvKlH{margin-right:-6px;}/*!sc*/
.cLfAnm{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-height:100% !important;overflow-y:auto;-webkit-scrollbar-gutter:stable;-moz-scrollbar-gutter:stable;-ms-scrollbar-gutter:stable;scrollbar-gutter:stable;}/*!sc*/
@media screen and (max-width:768px){.cLfAnm{display:none;}}/*!sc*/
.erWCJP{padding-left:16px;padding-right:16px;padding-bottom:8px;}/*!sc*/
@media (min-height:600px) and (min-width:768px){.hwhShM{display:none;}}/*!sc*/
.cYPxpP{margin-top:8px;margin-left:16px;margin-right:16px;margin-bottom:12px;font-size:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
@media (max-height:599px),(max-width:767px){.fBtiVT{display:none;}}/*!sc*/
.emFMJu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-order:2;-ms-flex-order:2;order:2;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;min-width:1px;margin-right:auto;}/*!sc*/
@media print{.emFMJu{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}}/*!sc*/
.hlUAHL{width:100%;max-width:100%;margin-left:auto;margin-right:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0;}/*!sc*/
.iStsmI{margin-left:auto;margin-right:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:40px;max-width:100%;margin-top:0;}/*!sc*/
.eIgvIk{display:inherit;}/*!sc*/
.eVFfWF{width:100%;}/*!sc*/
.kgXdnT{padding:16px;padding-bottom:0;}/*!sc*/
.kzTa-dF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:16px;width:100%;}/*!sc*/
.bbXCl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}/*!sc*/
.hGGMNu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;justify-self:flex-end;}/*!sc*/
.eHRrYV{margin-left:8px;margin-right:8px;}/*!sc*/
.dKmYfk{font-size:14px;min-width:0;max-width:125px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}/*!sc*/
.hSNzKh{justify-self:end;max-width:100%;}/*!sc*/
.eTvGbF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:16px;min-width:0;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.kzRgrI{max-width:100%;}/*!sc*/
.cmAPIB{max-width:100%;list-style:none;display:inline-block;}/*!sc*/
.jwXCBK{display:inline-block;max-width:100%;}/*!sc*/
.bDwCYs{padding:16px;padding-bottom:0;padding-left:16px;padding-right:16px;}/*!sc*/
.fywjmm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}/*!sc*/
.dyczTK{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:8px;}/*!sc*/
.kszRgZ{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:8px;min-width:0;}/*!sc*/
.gtBUEp{min-height:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}/*!sc*/
.MERGN{margin-left:16px;margin-right:16px;}/*!sc*/
@media screen and (min-width:1440px){.MERGN{margin-left:16px;}}/*!sc*/
.cMYnca{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
.brFBoI{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid;border-color:#30363d;border-radius:6px;margin-bottom:16px;}/*!sc*/
.eYedVD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;min-width:273px;padding-right:8px;padding-left:16px;padding-top:8px;padding-bottom:8px;}/*!sc*/
.jGfYmh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;}/*!sc*/
.lhFvfi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.bqgLjk{display:inherit;}/*!sc*/
@media screen and (min-width:544px){.bqgLjk{display:none;}}/*!sc*/
@media screen and (min-width:768px){.bqgLjk{display:none;}}/*!sc*/
.iJmJly{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}/*!sc*/
.jACbi{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-width:0;margin-right:0;}/*!sc*/
.bSdwWB{padding-left:4px;padding-bottom:16px;}/*!sc*/
.fleZSW{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.fOEJrA{font-size:12px;-webkit-flex:auto;-ms-flex:auto;flex:auto;padding-right:16px;color:#7d8590;min-width:0;}/*!sc*/
.gBKNLX{top:0px;z-index:1;background:var(--color-canvas-default);position:-webkit-sticky;position:sticky;}/*!sc*/
.ePiodO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;position:absolute;}/*!sc*/
.kQJlnf{display:none;min-width:0;padding-top:8px;padding-bottom:8px;}/*!sc*/
.gJICKO{margin-right:8px;margin-left:16px;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}/*!sc*/
.iZJewz{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;min-width:0;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.bESQXL{padding-left:8px;padding-top:8px;padding-bottom:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#161b22;border:1px solid var(--borderColor-default,var(--color-border-default));border-radius:6px 6px 0px 0px;}/*!sc*/
.bfkNRF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;min-width:0;}/*!sc*/
.fXBLEV{display:block;position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:-1px;margin-bottom:-1px;--separator-color:transparent;}/*!sc*/
.fXBLEV:not(:last-child){margin-right:1px;}/*!sc*/
.fXBLEV:not(:last-child):after{background-color:var(--separator-color);content:"";position:absolute;right:-2px;top:8px;bottom:8px;width:1px;}/*!sc*/
.fXBLEV:focus-within:has(:focus-visible){--separator-color:transparent;}/*!sc*/
.fXBLEV:first-child{margin-left:-1px;}/*!sc*/
.fXBLEV:last-child{margin-right:-1px;}/*!sc*/
.gbKtit{display:block;position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:-1px;margin-bottom:-1px;--separator-color:#30363d;}/*!sc*/
.gbKtit:not(:last-child){margin-right:1px;}/*!sc*/
.gbKtit:not(:last-child):after{background-color:var(--separator-color);content:"";position:absolute;right:-2px;top:8px;bottom:8px;width:1px;}/*!sc*/
.gbKtit:focus-within:has(:focus-visible){--separator-color:transparent;}/*!sc*/
.gbKtit:first-child{margin-left:-1px;}/*!sc*/
.gbKtit:last-child{margin-right:-1px;}/*!sc*/
.iBylDf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;margin-right:8px;}/*!sc*/
.kSGBPx{gap:8px;}/*!sc*/
.etfROT{border:1px solid;border-top:none;border-color:#30363d;border-radius:0px 0px 6px 6px;min-width:273px;}/*!sc*/
.jWnGGx{background-color:var(--bgColor-default,var(--color-canvas-default));border:0px;border-width:0;border-radius:0px 0px 6px 6px;padding:0;min-width:0;margin-top:46px;}/*!sc*/
.TCenl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding-top:8px;padding-bottom:8px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;min-width:0;position:relative;}/*!sc*/
.cluMzC{position:relative;}/*!sc*/
.eRkHwF{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;min-width:0;}/*!sc*/
.knCTAx{tab-size:8;isolation:isolate;position:relative;overflow:auto;max-width:unset;}/*!sc*/
.aZrVR{position:fixed;top:0;right:0;height:100%;width:15px;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;z-index:1;}/*!sc*/
.aZrVR:hover{-webkit-transform:scaleX(1.5);-ms-transform:scaleX(1.5);transform:scaleX(1.5);}/*!sc*/
data-styled.g2[id="Box-sc-g0xbh4-0"]{content:"fSWWem,kPPmzM,cIAPDV,gvCnwW,ioxSsX,eUyHuk,hAeDYA,dZCkhR,gNdDUH,jywUSN,hBSSUC,iPurHz,kkrdEu,trpoQ,hVHHYa,idZfsJ,bKgizp,bwTunw,caeYDk,jahcnb,ccToMy,cNvKlH,cLfAnm,erWCJP,hwhShM,cYPxpP,fBtiVT,emFMJu,hlUAHL,iStsmI,eIgvIk,eVFfWF,kgXdnT,kzTa-dF,bbXCl,hGGMNu,eHRrYV,dKmYfk,hSNzKh,eTvGbF,kzRgrI,cmAPIB,jwXCBK,bDwCYs,fywjmm,dyczTK,kszRgZ,gtBUEp,MERGN,cMYnca,brFBoI,eYedVD,jGfYmh,lhFvfi,bqgLjk,iJmJly,jACbi,bSdwWB,fleZSW,fOEJrA,gBKNLX,ePiodO,kQJlnf,gJICKO,iZJewz,bESQXL,bfkNRF,fXBLEV,gbKtit,iBylDf,kSGBPx,etfROT,jWnGGx,TCenl,cluMzC,eRkHwF,knCTAx,aZrVR,"}/*!sc*/
.rTZSs{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;-webkit-clip:rect(0,0,0,0);clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}/*!sc*/
data-styled.g3[id="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0"]{content:"rTZSs,"}/*!sc*/
.fUpWeN{display:inline-block;overflow:hidden;text-overflow:ellipsis;vertical-align:top;white-space:nowrap;max-width:125px;max-width:100%;}/*!sc*/
data-styled.g5[id="Truncate__StyledTruncate-sc-23o1d2-0"]{content:"fUpWeN,"}/*!sc*/
.bJBoUI{color:#2f81f7;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bJBoUI:hover{-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.bJBoUI:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;}/*!sc*/
.iJtJJh{color:#2f81f7;-webkit-text-decoration:none;text-decoration:none;font-weight:600;}/*!sc*/
.iJtJJh:hover{-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.iJtJJh:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;}/*!sc*/
.hUWqlv{color:#2f81f7;-webkit-text-decoration:none;text-decoration:none;font-weight:400;}/*!sc*/
.hUWqlv:hover{-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.hUWqlv:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;}/*!sc*/
data-styled.g7[id="Link__StyledLink-sc-14289xe-0"]{content:"bJBoUI,iJtJJh,hUWqlv,"}/*!sc*/
.hSXtjz{font-size:14px;line-height:20px;color:#e6edf3;vertical-align:middle;background-color:#0d1117;border:1px solid var(--control-borderColor-rest,#30363d);border-radius:6px;outline:none;box-shadow:0 0 transparent;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;min-height:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:200px;}/*!sc*/
.hSXtjz input,.hSXtjz textarea{cursor:text;}/*!sc*/
.hSXtjz select{cursor:pointer;}/*!sc*/
.hSXtjz::-webkit-input-placeholder{color:#6e7681;}/*!sc*/
.hSXtjz::-moz-placeholder{color:#6e7681;}/*!sc*/
.hSXtjz:-ms-input-placeholder{color:#6e7681;}/*!sc*/
.hSXtjz::placeholder{color:#6e7681;}/*!sc*/
.hSXtjz:focus-within{border-color:#2f81f7;outline:none;box-shadow:inset 0 0 0 1px #2f81f7;}/*!sc*/
.hSXtjz > textarea{padding:12px;}/*!sc*/
@media (min-width:768px){.hSXtjz{font-size:14px;}}/*!sc*/
data-styled.g25[id="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0"]{content:"hSXtjz,"}/*!sc*/
.hZMmEi{background-repeat:no-repeat;background-position:right 8px center;padding-left:12px;padding-right:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:200px;}/*!sc*/
.hZMmEi > :not(:last-child){margin-right:8px;}/*!sc*/
.hZMmEi .TextInput-icon,.hZMmEi .TextInput-action{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#7d8590;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}/*!sc*/
.hZMmEi > input,.hZMmEi > select{padding-left:0;padding-right:0;}/*!sc*/
data-styled.g26[id="TextInputWrapper-sc-1mqhpbi-1"]{content:"hZMmEi,"}/*!sc*/
.cmNjCr{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.cmNjCr:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.cmNjCr:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.cmNjCr:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.cmNjCr[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.cmNjCr[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.cmNjCr:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.cmNjCr:active{-webkit-transition:none;transition:none;}/*!sc*/
.cmNjCr:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.cmNjCr:disabled [data-component=ButtonCounter],.cmNjCr:disabled [data-component="leadingVisual"],.cmNjCr:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.cmNjCr:focus{outline:solid 1px transparent;}}/*!sc*/
.cmNjCr [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.cmNjCr[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.cmNjCr[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.cmNjCr[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.cmNjCr[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.cmNjCr[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.cmNjCr[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.cmNjCr[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.cmNjCr[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.cmNjCr[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.cmNjCr[data-block="block"]{width:100%;}/*!sc*/
.cmNjCr [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.cmNjCr [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.cmNjCr [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.cmNjCr [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.cmNjCr [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.cmNjCr [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.cmNjCr:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.cmNjCr:active:not([disabled]){background-color:#161b22;}/*!sc*/
.cmNjCr[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.cmNjCr[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.cmNjCr[data-no-visuals]{color:#2f81f7;}/*!sc*/
.cmNjCr:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.cmNjCr:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.cmNjCr:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.cmNjCr{color:#7d8590;padding-left:8px;padding-right:8px;display:none;}/*!sc*/
@media screen and (max-width:768px){.cmNjCr{display:block;}}/*!sc*/
.lhczWi{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.lhczWi:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.lhczWi:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.lhczWi:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.lhczWi[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.lhczWi[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.lhczWi:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.lhczWi:active{-webkit-transition:none;transition:none;}/*!sc*/
.lhczWi:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.lhczWi:disabled [data-component=ButtonCounter],.lhczWi:disabled [data-component="leadingVisual"],.lhczWi:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.lhczWi:focus{outline:solid 1px transparent;}}/*!sc*/
.lhczWi [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.lhczWi[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.lhczWi[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.lhczWi[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.lhczWi[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.lhczWi[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.lhczWi[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.lhczWi[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.lhczWi[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.lhczWi[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.lhczWi[data-block="block"]{width:100%;}/*!sc*/
.lhczWi [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.lhczWi [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.lhczWi [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.lhczWi [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.lhczWi [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.lhczWi [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.lhczWi:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.lhczWi:active:not([disabled]){background-color:#161b22;}/*!sc*/
.lhczWi[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.lhczWi[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.lhczWi[data-no-visuals]{color:#2f81f7;}/*!sc*/
.lhczWi:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.lhczWi:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.lhczWi:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.lhczWi[data-no-visuals="true"]{color:#7d8590;height:32px;position:relative;}/*!sc*/
@media screen and (max-width:768px){.lhczWi[data-no-visuals="true"]{display:none;}}/*!sc*/
.hPfySA{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.hPfySA:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hPfySA:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.hPfySA:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hPfySA[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.hPfySA[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.hPfySA:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.hPfySA:active{-webkit-transition:none;transition:none;}/*!sc*/
.hPfySA:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.hPfySA:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.hPfySA:focus{outline:solid 1px transparent;}}/*!sc*/
.hPfySA [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hPfySA[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.hPfySA[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.hPfySA[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.hPfySA[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hPfySA[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.hPfySA[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.hPfySA[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.hPfySA[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hPfySA[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.hPfySA[data-block="block"]{width:100%;}/*!sc*/
.hPfySA [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.hPfySA [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.hPfySA [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.hPfySA [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.hPfySA [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.hPfySA [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hPfySA:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.hPfySA:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hPfySA[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hPfySA [data-component="leadingVisual"],.hPfySA [data-component="trailingVisual"],.hPfySA [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.hPfySA{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:0;}/*!sc*/
.hPfySA svg{color:#7d8590;}/*!sc*/
.hPfySA > span{width:inherit;}/*!sc*/
.dRdQkF{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.dRdQkF:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dRdQkF:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.dRdQkF:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dRdQkF[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.dRdQkF[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dRdQkF:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.dRdQkF:active{-webkit-transition:none;transition:none;}/*!sc*/
.dRdQkF:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.dRdQkF:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.dRdQkF:focus{outline:solid 1px transparent;}}/*!sc*/
.dRdQkF [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dRdQkF[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.dRdQkF[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.dRdQkF[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.dRdQkF[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dRdQkF[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.dRdQkF[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.dRdQkF[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.dRdQkF[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dRdQkF[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.dRdQkF[data-block="block"]{width:100%;}/*!sc*/
.dRdQkF [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.dRdQkF [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.dRdQkF [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.dRdQkF [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.dRdQkF [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.dRdQkF [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dRdQkF:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.dRdQkF:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.dRdQkF[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.dRdQkF [data-component="leadingVisual"],.dRdQkF [data-component="trailingVisual"],.dRdQkF [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.dRdQkF[data-no-visuals="true"]{color:#6e7681;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0;}/*!sc*/
.dsmVIn{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.dsmVIn:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dsmVIn:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.dsmVIn:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dsmVIn[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.dsmVIn[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dsmVIn:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.dsmVIn:active{-webkit-transition:none;transition:none;}/*!sc*/
.dsmVIn:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.dsmVIn:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.dsmVIn:focus{outline:solid 1px transparent;}}/*!sc*/
.dsmVIn [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dsmVIn[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.dsmVIn[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.dsmVIn[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.dsmVIn[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dsmVIn[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.dsmVIn[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.dsmVIn[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.dsmVIn[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dsmVIn[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.dsmVIn[data-block="block"]{width:100%;}/*!sc*/
.dsmVIn [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.dsmVIn [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.dsmVIn [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.dsmVIn [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.dsmVIn [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.dsmVIn [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dsmVIn:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.dsmVIn:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.dsmVIn[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.dsmVIn [data-component="leadingVisual"],.dsmVIn [data-component="trailingVisual"],.dsmVIn [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.dsmVIn[data-no-visuals="true"]{color:#6e7681;font-size:14px;font-weight:400;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-top-left-radius:0;border-bottom-left-radius:0;}/*!sc*/
.ePclzw{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.ePclzw:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.ePclzw:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.ePclzw:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.ePclzw[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.ePclzw[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.ePclzw:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.ePclzw:active{-webkit-transition:none;transition:none;}/*!sc*/
.ePclzw:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.ePclzw:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.ePclzw:focus{outline:solid 1px transparent;}}/*!sc*/
.ePclzw [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.ePclzw[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.ePclzw[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.ePclzw[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.ePclzw[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.ePclzw[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.ePclzw[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.ePclzw[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.ePclzw[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.ePclzw[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.ePclzw[data-block="block"]{width:100%;}/*!sc*/
.ePclzw [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.ePclzw [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.ePclzw [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.ePclzw [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.ePclzw [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.ePclzw [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.ePclzw:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.ePclzw:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.ePclzw[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.ePclzw [data-component="leadingVisual"],.ePclzw [data-component="trailingVisual"],.ePclzw [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.ePclzw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
.ePclzw svg{color:#7d8590;}/*!sc*/
.ePclzw > span{width:inherit;}/*!sc*/
.hPOZTU{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.hPOZTU:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hPOZTU:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.hPOZTU:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hPOZTU[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.hPOZTU[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.hPOZTU:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.hPOZTU:active{-webkit-transition:none;transition:none;}/*!sc*/
.hPOZTU:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.hPOZTU:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.hPOZTU:focus{outline:solid 1px transparent;}}/*!sc*/
.hPOZTU [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hPOZTU[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.hPOZTU[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.hPOZTU[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.hPOZTU[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hPOZTU[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.hPOZTU[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.hPOZTU[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.hPOZTU[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hPOZTU[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.hPOZTU[data-block="block"]{width:100%;}/*!sc*/
.hPOZTU [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.hPOZTU [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.hPOZTU [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.hPOZTU [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.hPOZTU [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.hPOZTU [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hPOZTU:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.hPOZTU:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hPOZTU[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hPOZTU [data-component="leadingVisual"],.hPOZTU [data-component="trailingVisual"],.hPOZTU [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.hPOZTU[data-no-visuals="true"]{border-top-left-radius:0;border-bottom-left-radius:0;display:none;}/*!sc*/
.jcILRt{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.jcILRt:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jcILRt:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.jcILRt:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jcILRt[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.jcILRt[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.jcILRt:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.jcILRt:active{-webkit-transition:none;transition:none;}/*!sc*/
.jcILRt:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.jcILRt:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.jcILRt:focus{outline:solid 1px transparent;}}/*!sc*/
.jcILRt [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jcILRt[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.jcILRt[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.jcILRt[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.jcILRt[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jcILRt[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.jcILRt[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.jcILRt[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.jcILRt[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jcILRt[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.jcILRt[data-block="block"]{width:100%;}/*!sc*/
.jcILRt [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.jcILRt [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.jcILRt [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.jcILRt [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.jcILRt [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.jcILRt [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jcILRt:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.jcILRt:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.jcILRt[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.jcILRt [data-component="leadingVisual"],.jcILRt [data-component="trailingVisual"],.jcILRt [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.jcILRt[data-no-visuals="true"]{color:#7d8590;}/*!sc*/
.dzga-dt{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.dzga-dt:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dzga-dt:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.dzga-dt:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dzga-dt[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.dzga-dt[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dzga-dt:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.dzga-dt:active{-webkit-transition:none;transition:none;}/*!sc*/
.dzga-dt:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.dzga-dt:disabled [data-component=ButtonCounter],.dzga-dt:disabled [data-component="leadingVisual"],.dzga-dt:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.dzga-dt:focus{outline:solid 1px transparent;}}/*!sc*/
.dzga-dt [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dzga-dt[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.dzga-dt[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.dzga-dt[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.dzga-dt[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dzga-dt[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.dzga-dt[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.dzga-dt[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.dzga-dt[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dzga-dt[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.dzga-dt[data-block="block"]{width:100%;}/*!sc*/
.dzga-dt [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.dzga-dt [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.dzga-dt [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.dzga-dt [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.dzga-dt [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.dzga-dt [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dzga-dt:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.dzga-dt:active:not([disabled]){background-color:#161b22;}/*!sc*/
.dzga-dt[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.dzga-dt[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.dzga-dt[data-no-visuals]{color:#2f81f7;}/*!sc*/
.dzga-dt:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.dzga-dt:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.dzga-dt:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.dzga-dt[data-size="small"][data-no-visuals="true"]{margin-left:8px;}/*!sc*/
.dWukOn{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#e6edf3;background-color:transparent;box-shadow:none;}/*!sc*/
.dWukOn:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dWukOn:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.dWukOn:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.dWukOn[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.dWukOn[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dWukOn:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.dWukOn:active{-webkit-transition:none;transition:none;}/*!sc*/
.dWukOn:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.dWukOn:disabled [data-component=ButtonCounter],.dWukOn:disabled [data-component="leadingVisual"],.dWukOn:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.dWukOn:focus{outline:solid 1px transparent;}}/*!sc*/
.dWukOn [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dWukOn[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.dWukOn[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.dWukOn[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.dWukOn[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.dWukOn[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.dWukOn[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.dWukOn[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.dWukOn[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dWukOn[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.dWukOn[data-block="block"]{width:100%;}/*!sc*/
.dWukOn [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.dWukOn [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.dWukOn [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.dWukOn [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.dWukOn [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.dWukOn [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.dWukOn:hover:not([disabled]){background-color:#30363d;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dWukOn:active:not([disabled]){background-color:#161b22;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.dWukOn[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.dWukOn[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.dWukOn[data-no-visuals]{color:#2f81f7;}/*!sc*/
.dWukOn:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.dWukOn:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.dWukOn:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.dWukOn:focus:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.cuVVHm{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.cuVVHm:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.cuVVHm:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.cuVVHm:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.cuVVHm[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.cuVVHm[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.cuVVHm:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.cuVVHm:active{-webkit-transition:none;transition:none;}/*!sc*/
.cuVVHm:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.cuVVHm:disabled [data-component=ButtonCounter],.cuVVHm:disabled [data-component="leadingVisual"],.cuVVHm:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.cuVVHm:focus{outline:solid 1px transparent;}}/*!sc*/
.cuVVHm [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.cuVVHm[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.cuVVHm[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;color:#e6edf3;display:none;}/*!sc*/
.cuVVHm[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.cuVVHm[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.cuVVHm[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.cuVVHm[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
@media screen and (min-width:544px){.cuVVHm[data-size="small"]{display:none;}}/*!sc*/
@media screen and (min-width:768px){.cuVVHm[data-size="small"]{display:block;}}/*!sc*/
@media screen and (min-width:1012px){.cuVVHm[data-size="small"]{display:block;}}/*!sc*/
.cuVVHm[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.cuVVHm[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.cuVVHm[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.cuVVHm[data-block="block"]{width:100%;}/*!sc*/
.cuVVHm [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.cuVVHm [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.cuVVHm [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.cuVVHm [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.cuVVHm [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.cuVVHm [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.cuVVHm:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.cuVVHm:active:not([disabled]){background-color:#161b22;}/*!sc*/
.cuVVHm[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.cuVVHm[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.cuVVHm[data-no-visuals]{color:#2f81f7;}/*!sc*/
.cuVVHm:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.cuVVHm:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.cuVVHm:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.kGDoCG{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.kGDoCG:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.kGDoCG:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.kGDoCG:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.kGDoCG[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.kGDoCG[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.kGDoCG:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.kGDoCG:active{-webkit-transition:none;transition:none;}/*!sc*/
.kGDoCG:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.kGDoCG:disabled [data-component=ButtonCounter],.kGDoCG:disabled [data-component="leadingVisual"],.kGDoCG:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.kGDoCG:focus{outline:solid 1px transparent;}}/*!sc*/
.kGDoCG [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.kGDoCG[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.kGDoCG[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;color:#e6edf3;margin-left:8px;}/*!sc*/
.kGDoCG[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.kGDoCG[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.kGDoCG[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.kGDoCG[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.kGDoCG[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.kGDoCG[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.kGDoCG[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.kGDoCG[data-block="block"]{width:100%;}/*!sc*/
.kGDoCG [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.kGDoCG [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.kGDoCG [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.kGDoCG [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.kGDoCG [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.kGDoCG [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.kGDoCG:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.kGDoCG:active:not([disabled]){background-color:#161b22;}/*!sc*/
.kGDoCG[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.kGDoCG[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.kGDoCG[data-no-visuals]{color:#2f81f7;}/*!sc*/
.kGDoCG:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.kGDoCG:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.kGDoCG:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.hHvcfT{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;padding-left:8px;padding-right:8px;}/*!sc*/
.hHvcfT:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hHvcfT:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.hHvcfT:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.hHvcfT[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.hHvcfT[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.hHvcfT:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.hHvcfT:active{-webkit-transition:none;transition:none;}/*!sc*/
.hHvcfT:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.hHvcfT:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.hHvcfT:focus{outline:solid 1px transparent;}}/*!sc*/
.hHvcfT [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hHvcfT[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.hHvcfT[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.hHvcfT[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.hHvcfT[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.hHvcfT[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.hHvcfT[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.hHvcfT[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.hHvcfT[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hHvcfT[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.hHvcfT[data-block="block"]{width:100%;}/*!sc*/
.hHvcfT [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.hHvcfT [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.hHvcfT [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.hHvcfT [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.hHvcfT [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.hHvcfT [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.hHvcfT:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.hHvcfT:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hHvcfT[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.hHvcfT [data-component="leadingVisual"],.hHvcfT [data-component="trailingVisual"],.hHvcfT [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.hHvcfT linkButtonSx:hover:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.hHvcfT linkButtonSx:focus:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.hHvcfT linkButtonSx:active:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.kCdBku{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.kCdBku:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.kCdBku:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.kCdBku:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.kCdBku[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.kCdBku[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.kCdBku:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.kCdBku:active{-webkit-transition:none;transition:none;}/*!sc*/
.kCdBku:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.kCdBku:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.kCdBku:focus{outline:solid 1px transparent;}}/*!sc*/
.kCdBku [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.kCdBku[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.kCdBku[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.kCdBku[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.kCdBku[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.kCdBku[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.kCdBku[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.kCdBku[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.kCdBku[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.kCdBku[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.kCdBku[data-block="block"]{width:100%;}/*!sc*/
.kCdBku [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.kCdBku [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.kCdBku [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.kCdBku [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.kCdBku [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.kCdBku [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.kCdBku:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.kCdBku:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.kCdBku[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.kCdBku [data-component="leadingVisual"],.kCdBku [data-component="trailingVisual"],.kCdBku [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.jcdBXR{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.jcdBXR:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jcdBXR:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.jcdBXR:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jcdBXR[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.jcdBXR[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.jcdBXR:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.jcdBXR:active{-webkit-transition:none;transition:none;}/*!sc*/
.jcdBXR:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.jcdBXR:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.jcdBXR:focus{outline:solid 1px transparent;}}/*!sc*/
.jcdBXR [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jcdBXR[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.jcdBXR[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.jcdBXR[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.jcdBXR[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jcdBXR[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.jcdBXR[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.jcdBXR[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.jcdBXR[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jcdBXR[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.jcdBXR[data-block="block"]{width:100%;}/*!sc*/
.jcdBXR [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.jcdBXR [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.jcdBXR [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.jcdBXR [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.jcdBXR [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.jcdBXR [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jcdBXR:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.jcdBXR:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.jcdBXR[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.jcdBXR [data-component="leadingVisual"],.jcdBXR [data-component="trailingVisual"],.jcdBXR [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.jcdBXR[data-size="small"][data-no-visuals="true"]{border-top-left-radius:0;border-bottom-left-radius:0;}/*!sc*/
.bpoOwX{border-radius:6px;border:1px solid;border-color:rgba(240,246,252,0.1);font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#c9d1d9;background-color:#21262d;box-shadow:0 0 transparent,0 0 transparent;}/*!sc*/
.bpoOwX:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.bpoOwX:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.bpoOwX:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.bpoOwX[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.bpoOwX[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bpoOwX:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.bpoOwX:active{-webkit-transition:none;transition:none;}/*!sc*/
.bpoOwX:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.bpoOwX:disabled [data-component=ButtonCounter]{color:inherit;}/*!sc*/
@media (forced-colors:active){.bpoOwX:focus{outline:solid 1px transparent;}}/*!sc*/
.bpoOwX [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.bpoOwX[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.bpoOwX[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.bpoOwX[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.bpoOwX[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.bpoOwX[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.bpoOwX[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.bpoOwX[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.bpoOwX[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.bpoOwX[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.bpoOwX[data-block="block"]{width:100%;}/*!sc*/
.bpoOwX [data-component="leadingVisual"]{grid-area:leadingVisual;}/*!sc*/
.bpoOwX [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.bpoOwX [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.bpoOwX [data-component="trailingAction"]{margin-right:-4px;}/*!sc*/
.bpoOwX [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.bpoOwX [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.bpoOwX:hover:not([disabled]){background-color:#30363d;border-color:#8b949e;}/*!sc*/
.bpoOwX:active:not([disabled]){background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.bpoOwX[aria-expanded=true]{background-color:hsla(212,12%,18%,1);border-color:#6e7681;}/*!sc*/
.bpoOwX [data-component="leadingVisual"],.bpoOwX [data-component="trailingVisual"],.bpoOwX [data-component="trailingAction"]{color:#7d8590;}/*!sc*/
.bpoOwX[data-size="small"][data-no-visuals="true"]{border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0;}/*!sc*/
.bpoOwX[data-size="small"][data-no-visuals="true"]:hover:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bpoOwX[data-size="small"][data-no-visuals="true"]:focus:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bpoOwX[data-size="small"][data-no-visuals="true"]:active:not([disabled]){-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bhUFcA{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.bhUFcA:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.bhUFcA:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.bhUFcA:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.bhUFcA[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.bhUFcA[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.bhUFcA:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.bhUFcA:active{-webkit-transition:none;transition:none;}/*!sc*/
.bhUFcA:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.bhUFcA:disabled [data-component=ButtonCounter],.bhUFcA:disabled [data-component="leadingVisual"],.bhUFcA:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.bhUFcA:focus{outline:solid 1px transparent;}}/*!sc*/
.bhUFcA [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.bhUFcA[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.bhUFcA[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.bhUFcA[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.bhUFcA[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.bhUFcA[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.bhUFcA[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.bhUFcA[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.bhUFcA[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.bhUFcA[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.bhUFcA[data-block="block"]{width:100%;}/*!sc*/
.bhUFcA [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.bhUFcA [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.bhUFcA [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.bhUFcA [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.bhUFcA [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.bhUFcA [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.bhUFcA:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.bhUFcA:active:not([disabled]){background-color:#161b22;}/*!sc*/
.bhUFcA[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.bhUFcA[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.bhUFcA[data-no-visuals]{color:#2f81f7;}/*!sc*/
.bhUFcA:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.bhUFcA:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.bhUFcA:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.bhUFcA[data-size="small"][data-no-visuals="true"]{color:#7d8590;position:relative;}/*!sc*/
.jYfgHQ{border-radius:6px;border:1px solid;border-color:transparent;font-family:inherit;font-weight:500;font-size:14px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:32px;padding:0 12px;gap:8px;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-transition:80ms cubic-bezier(0.65,0,0.35,1);transition:80ms cubic-bezier(0.65,0,0.35,1);-webkit-transition-property:color,fill,background-color,border-color;transition-property:color,fill,background-color,border-color;color:#2f81f7;background-color:transparent;box-shadow:none;}/*!sc*/
.jYfgHQ:focus:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jYfgHQ:focus:not(:disabled):not(:focus-visible){outline:solid 1px transparent;}/*!sc*/
.jYfgHQ:focus-visible:not(:disabled){box-shadow:none;outline:2px solid #2f81f7;outline-offset:-2px;}/*!sc*/
.jYfgHQ[href]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}/*!sc*/
.jYfgHQ[href]:hover{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.jYfgHQ:hover{-webkit-transition-duration:80ms;transition-duration:80ms;}/*!sc*/
.jYfgHQ:active{-webkit-transition:none;transition:none;}/*!sc*/
.jYfgHQ:disabled{cursor:not-allowed;box-shadow:none;color:#484f58;}/*!sc*/
.jYfgHQ:disabled [data-component=ButtonCounter],.jYfgHQ:disabled [data-component="leadingVisual"],.jYfgHQ:disabled [data-component="trailingAction"]{color:inherit;}/*!sc*/
@media (forced-colors:active){.jYfgHQ:focus{outline:solid 1px transparent;}}/*!sc*/
.jYfgHQ [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jYfgHQ[data-component=IconButton]{display:inline-grid;padding:unset;place-content:center;width:32px;min-width:unset;}/*!sc*/
.jYfgHQ[data-size="small"]{padding:0 8px;height:28px;gap:4px;font-size:12px;}/*!sc*/
.jYfgHQ[data-size="small"] [data-component="text"]{line-height:calc(20 / 12);}/*!sc*/
.jYfgHQ[data-size="small"] [data-component=ButtonCounter]{font-size:12px;}/*!sc*/
.jYfgHQ[data-size="small"] [data-component="buttonContent"] > :not(:last-child){margin-right:4px;}/*!sc*/
.jYfgHQ[data-size="small"][data-component=IconButton]{width:28px;padding:unset;}/*!sc*/
.jYfgHQ[data-size="large"]{padding:0 16px;height:40px;gap:8px;}/*!sc*/
.jYfgHQ[data-size="large"] [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jYfgHQ[data-size="large"][data-component=IconButton]{width:40px;padding:unset;}/*!sc*/
.jYfgHQ[data-block="block"]{width:100%;}/*!sc*/
.jYfgHQ [data-component="leadingVisual"]{grid-area:leadingVisual;color:#7d8590;}/*!sc*/
.jYfgHQ [data-component="text"]{grid-area:text;line-height:calc(20/14);white-space:nowrap;}/*!sc*/
.jYfgHQ [data-component="trailingVisual"]{grid-area:trailingVisual;}/*!sc*/
.jYfgHQ [data-component="trailingAction"]{margin-right:-4px;color:#7d8590;}/*!sc*/
.jYfgHQ [data-component="buttonContent"]{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:grid;grid-template-areas:"leadingVisual text trailingVisual";grid-template-columns:min-content minmax(0,auto) min-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}/*!sc*/
.jYfgHQ [data-component="buttonContent"] > :not(:last-child){margin-right:8px;}/*!sc*/
.jYfgHQ:hover:not([disabled]){background-color:#30363d;}/*!sc*/
.jYfgHQ:active:not([disabled]){background-color:#161b22;}/*!sc*/
.jYfgHQ[aria-expanded=true]{background-color:#161b22;}/*!sc*/
.jYfgHQ[data-component="IconButton"][data-no-visuals]{color:#7d8590;}/*!sc*/
.jYfgHQ[data-no-visuals]{color:#2f81f7;}/*!sc*/
.jYfgHQ:has([data-component="ButtonCounter"]){color:#2f81f7;}/*!sc*/
.jYfgHQ:disabled[data-no-visuals]{color:#484f58;}/*!sc*/
.jYfgHQ:disabled[data-no-visuals] [data-component=ButtonCounter]{color:inherit;}/*!sc*/
.jYfgHQ[data-size="small"][data-no-visuals="true"]{color:#7d8590;}/*!sc*/
data-styled.g27[id="types__StyledButton-sc-ws60qy-0"]{content:"cmNjCr,lhczWi,hPfySA,dRdQkF,dsmVIn,ePclzw,hPOZTU,jcILRt,dzga-dt,dWukOn,cuVVHm,kGDoCG,hHvcfT,kCdBku,jcdBXR,bpoOwX,bhUFcA,jYfgHQ,"}/*!sc*/
.fCnxTL{position:relative;display:inline-block;}/*!sc*/
.fCnxTL::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:#6e7681;pointer-events:none;content:'';border:6px solid transparent;opacity:0;}/*!sc*/
.fCnxTL::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";-webkit-font-smoothing:subpixel-antialiased;color:#ffffff;text-align:center;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:#6e7681;border-radius:3px;opacity:0;}/*!sc*/
@-webkit-keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}/*!sc*/
@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}/*!sc*/
.fCnxTL:hover::before,.fCnxTL:active::before,.fCnxTL:focus::before,.fCnxTL:focus-within::before,.fCnxTL:hover::after,.fCnxTL:active::after,.fCnxTL:focus::after,.fCnxTL:focus-within::after{display:inline-block;-webkit-text-decoration:none;text-decoration:none;-webkit-animation-name:tooltip-appear;animation-name:tooltip-appear;-webkit-animation-duration:0.1s;animation-duration:0.1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-delay:0.4s;animation-delay:0.4s;}/*!sc*/
.fCnxTL.tooltipped-no-delay:hover::before,.fCnxTL.tooltipped-no-delay:active::before,.fCnxTL.tooltipped-no-delay:focus::before,.fCnxTL.tooltipped-no-delay:focus-within::before,.fCnxTL.tooltipped-no-delay:hover::after,.fCnxTL.tooltipped-no-delay:active::after,.fCnxTL.tooltipped-no-delay:focus::after,.fCnxTL.tooltipped-no-delay:focus-within::after{-webkit-animation-delay:0s;animation-delay:0s;}/*!sc*/
.fCnxTL.tooltipped-multiline:hover::after,.fCnxTL.tooltipped-multiline:active::after,.fCnxTL.tooltipped-multiline:focus::after,.fCnxTL.tooltipped-multiline:focus-within::after{display:table-cell;}/*!sc*/
.fCnxTL.tooltipped-s::after,.fCnxTL.tooltipped-se::after,.fCnxTL.tooltipped-sw::after{top:100%;right:50%;margin-top:6px;}/*!sc*/
.fCnxTL.tooltipped-s::before,.fCnxTL.tooltipped-se::before,.fCnxTL.tooltipped-sw::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:#6e7681;}/*!sc*/
.fCnxTL.tooltipped-se::after{right:auto;left:50%;margin-left:-16px;}/*!sc*/
.fCnxTL.tooltipped-sw::after{margin-right:-16px;}/*!sc*/
.fCnxTL.tooltipped-n::after,.fCnxTL.tooltipped-ne::after,.fCnxTL.tooltipped-nw::after{right:50%;bottom:100%;margin-bottom:6px;}/*!sc*/
.fCnxTL.tooltipped-n::before,.fCnxTL.tooltipped-ne::before,.fCnxTL.tooltipped-nw::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:#6e7681;}/*!sc*/
.fCnxTL.tooltipped-ne::after{right:auto;left:50%;margin-left:-16px;}/*!sc*/
.fCnxTL.tooltipped-nw::after{margin-right:-16px;}/*!sc*/
.fCnxTL.tooltipped-s::after,.fCnxTL.tooltipped-n::after{-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);}/*!sc*/
.fCnxTL.tooltipped-w::after{right:100%;bottom:50%;margin-right:6px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);}/*!sc*/
.fCnxTL.tooltipped-w::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:#6e7681;}/*!sc*/
.fCnxTL.tooltipped-e::after{bottom:50%;left:100%;margin-left:6px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);}/*!sc*/
.fCnxTL.tooltipped-e::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:#6e7681;}/*!sc*/
.fCnxTL.tooltipped-multiline::after{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}/*!sc*/
.fCnxTL.tooltipped-multiline.tooltipped-s::after,.fCnxTL.tooltipped-multiline.tooltipped-n::after{right:auto;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}/*!sc*/
.fCnxTL.tooltipped-multiline.tooltipped-w::after,.fCnxTL.tooltipped-multiline.tooltipped-e::after{right:100%;}/*!sc*/
.fCnxTL.tooltipped-align-right-2::after{right:0;margin-right:0;}/*!sc*/
.fCnxTL.tooltipped-align-right-2::before{right:15px;}/*!sc*/
.fCnxTL.tooltipped-align-left-2::after{left:0;margin-left:0;}/*!sc*/
.fCnxTL.tooltipped-align-left-2::before{left:10px;}/*!sc*/
data-styled.g28[id="Tooltip__TooltipBase-sc-uha8qm-0"]{content:"fCnxTL,"}/*!sc*/
.cDLBls{border:0;font-size:inherit;font-family:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;}/*!sc*/
.cDLBls:focus{outline:0;}/*!sc*/
data-styled.g29[id="UnstyledTextInput-sc-14ypya-0"]{content:"cDLBls,"}/*!sc*/
.bOMzPg{min-width:0;}/*!sc*/
.fWVgeN{padding-left:4px;padding-right:4px;font-weight:400;color:#7d8590;font-size:16px;}/*!sc*/
.hfRvxg{color:#e6edf3;}/*!sc*/
.iqTHmv{padding-left:4px;padding-right:4px;font-weight:400;color:#7d8590;font-size:14px;}/*!sc*/
data-styled.g35[id="Text-sc-17v1xeu-0"]{content:"bOMzPg,fWVgeN,hfRvxg,gPDEWA,iqTHmv,"}/*!sc*/
.cjbBGq{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;isolation:isolate;}/*!sc*/
.cjbBGq.cjbBGq > *{margin-inline-end:-1px;position:relative;border-radius:0;}/*!sc*/
.cjbBGq.cjbBGq > *:first-child{border-top-left-radius:6px;border-bottom-left-radius:6px;}/*!sc*/
.cjbBGq.cjbBGq > *:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px;}/*!sc*/
.cjbBGq.cjbBGq > *:focus,.cjbBGq.cjbBGq > *:active,.cjbBGq.cjbBGq > *:hover{z-index:1;}/*!sc*/
data-styled.g84[id="ButtonGroup-sc-1gxhls1-0"]{content:"cjbBGq,"}/*!sc*/
.bFrOJy{--segmented-control-button-inner-padding:12px;--segmented-control-button-bg-inset:4px;--segmented-control-outer-radius:6px;background-color:transparent;border-color:transparent;border-radius:var(--segmented-control-outer-radius);border-width:0;color:currentColor;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:600;padding:0;height:100%;width:100%;}/*!sc*/
.bFrOJy .segmentedControl-content{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#0d1117;border-color:#6e7681;border-style:solid;border-width:1px;border-radius:var(--segmented-control-outer-radius);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:var(--segmented-control-button-inner-padding);padding-right:var(--segmented-control-button-inner-padding);}/*!sc*/
.bFrOJy svg{fill:#7d8590;}/*!sc*/
.bFrOJy:focus:focus-visible:not(:last-child):after{width:0;}/*!sc*/
.bFrOJy .segmentedControl-text:after{content:"Code";display:block;font-weight:600;height:0;overflow:hidden;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;}/*!sc*/
@media (pointer:coarse){.bFrOJy:before{content:"";position:absolute;left:0;right:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;min-height:44px;}}/*!sc*/
.dAXkSP{--segmented-control-button-inner-padding:12px;--segmented-control-button-bg-inset:4px;--segmented-control-outer-radius:6px;background-color:transparent;border-color:transparent;border-radius:var(--segmented-control-outer-radius);border-width:0;color:currentColor;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:400;padding:var(--segmented-control-button-bg-inset);height:100%;width:100%;}/*!sc*/
.dAXkSP .segmentedControl-content{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;border-radius:calc(var(--segmented-control-outer-radius) - var(--segmented-control-button-bg-inset) / 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:calc(var(--segmented-control-button-inner-padding) - var(--segmented-control-button-bg-inset));padding-right:calc(var(--segmented-control-button-inner-padding) - var(--segmented-control-button-bg-inset));}/*!sc*/
.dAXkSP svg{fill:#7d8590;}/*!sc*/
.dAXkSP:hover .segmentedControl-content{background-color:#30363d;}/*!sc*/
.dAXkSP:active .segmentedControl-content{background-color:#21262d;}/*!sc*/
.dAXkSP:focus:focus-visible:not(:last-child):after{width:0;}/*!sc*/
.dAXkSP .segmentedControl-text:after{content:"Blame";display:block;font-weight:600;height:0;overflow:hidden;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;}/*!sc*/
@media (pointer:coarse){.dAXkSP:before{content:"";position:absolute;left:0;right:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;min-height:44px;}}/*!sc*/
data-styled.g91[id="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0"]{content:"bFrOJy,dAXkSP,"}/*!sc*/
.ivYJSK{background-color:rgba(110,118,129,0.1);border-radius:6px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:14px;height:28px;margin:0;padding:0;}/*!sc*/
data-styled.g93[id="SegmentedControl__SegmentedControlList-sc-1rzig82-0"]{content:"ivYJSK,"}/*!sc*/
body[data-page-layout-dragging="true"]{cursor:col-resize;}/*!sc*/
body[data-page-layout-dragging="true"] *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}/*!sc*/
data-styled.g97[id="sc-global-gbKrvU1"]{content:"sc-global-gbKrvU1,"}/*!sc*/
.hLwWNO{list-style:none;padding:0;margin:0;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item{outline:none;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item:focus-visible > div,.hLwWNO .PRIVATE_TreeView-item.focus-visible > div{box-shadow:inset 0 0 0 2px #2f81f7;}/*!sc*/
@media (forced-colors:active){.hLwWNO .PRIVATE_TreeView-item:focus-visible > div,.hLwWNO .PRIVATE_TreeView-item.focus-visible > div{outline:2px solid HighlightText;outline-offset:-2;}}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-container{--level:1;--toggle-width:1rem;position:relative;display:grid;grid-template-columns:calc(calc(var(--level) - 1) * (var(--toggle-width) / 2)) var(--toggle-width) 1fr;grid-template-areas:'spacer toggle content';width:100%;min-height:2rem;font-size:14px;color:#e6edf3;border-radius:6px;cursor:pointer;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-container:hover{background-color:rgba(177,186,196,0.12);}/*!sc*/
@media (forced-colors:active){.hLwWNO .PRIVATE_TreeView-item-container:hover{outline:2px solid transparent;outline-offset:-2px;}}/*!sc*/
@media (pointer:coarse){.hLwWNO .PRIVATE_TreeView-item-container{--toggle-width:1.5rem;min-height:2.75rem;}}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-container:has(.PRIVATE_TreeView-item-skeleton):hover{background-color:transparent;cursor:default;}/*!sc*/
@media (forced-colors:active){.hLwWNO .PRIVATE_TreeView-item-container:has(.PRIVATE_TreeView-item-skeleton):hover{outline:none;}}/*!sc*/
.hLwWNO[data-omit-spacer='true'] .PRIVATE_TreeView-item-container{grid-template-columns:0 0 1fr;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item[aria-current='true'] > .PRIVATE_TreeView-item-container{background-color:rgba(177,186,196,0.08);}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item[aria-current='true'] > .PRIVATE_TreeView-item-container::after{content:'';position:absolute;top:calc(50% - 0.75rem);left:-8px;width:0.25rem;height:1.5rem;background-color:#2f81f7;border-radius:6px;}/*!sc*/
@media (forced-colors:active){.hLwWNO .PRIVATE_TreeView-item[aria-current='true'] > .PRIVATE_TreeView-item-container::after{background-color:HighlightText;}}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-toggle{grid-area:toggle;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;color:#7d8590;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-toggle--hover:hover{background-color:rgba(177,186,196,0.12);}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-toggle--end{border-top-left-radius:6px;border-bottom-left-radius:6px;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-content{grid-area:content;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px;gap:8px;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-content-text{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-visual{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#7d8590;}/*!sc*/
.hLwWNO .PRIVATE_TreeView-item-level-line{width:100%;height:100%;border-right:1px solid;border-color:rgba(240,246,252,0.1);}/*!sc*/
@media (hover:hover){.hLwWNO .PRIVATE_TreeView-item-level-line{border-color:transparent;}.hLwWNO:hover .PRIVATE_TreeView-item-level-line,.hLwWNO:focus-within .PRIVATE_TreeView-item-level-line{border-color:rgba(240,246,252,0.1);}}/*!sc*/
.hLwWNO .PRIVATE_TreeView-directory-icon{display:grid;color:#7d8590;}/*!sc*/
.hLwWNO .PRIVATE_VisuallyHidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;-webkit-clip:rect(0,0,0,0);clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}/*!sc*/
data-styled.g104[id="TreeView__UlBox-sc-4ex6b6-0"]{content:"hLwWNO,"}/*!sc*/
</style><meta data-hydrostats="publish"/> <!-- --> <!-- --> <!-- --> <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><div class="Box-sc-g0xbh4-0"><div style="--sticky-pane-height:100vh" class="Box-sc-g0xbh4-0 fSWWem"><div class="Box-sc-g0xbh4-0 kPPmzM"><div class="Box-sc-g0xbh4-0 cIAPDV"><div tabindex="0" class="Box-sc-g0xbh4-0 gvCnwW"><div class="Box-sc-g0xbh4-0 ioxSsX"><div class="Box-sc-g0xbh4-0 eUyHuk"></div><div class="Box-sc-g0xbh4-0 hAeDYA"><div role="separator" class="Box-sc-g0xbh4-0 dZCkhR"></div></div><div style="--pane-width:320px" class="Box-sc-g0xbh4-0 gNdDUH"><span class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 rTZSs"><form><label for=":Rdjal5:-width-input">Pane width</label><p id=":Rdjal5:-input-hint">Use a value between <!-- -->0<!-- -->% and <!-- -->0<!-- -->%</p><input id=":Rdjal5:-width-input" aria-describedby=":Rdjal5:-input-hint" name="pane-width" inputMode="numeric" pattern="[0-9]*" autoCorrect="off" autoComplete="off" type="text" value=""/><button type="submit">Change width</button></form></span><div class="Box-sc-g0xbh4-0 react-tree-pane-contents"><div id="repos-file-tree" class="Box-sc-g0xbh4-0 jywUSN"><div class="Box-sc-g0xbh4-0 hBSSUC"><div class="Box-sc-g0xbh4-0 iPurHz"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 fNPcqd"><button type="button" aria-label="Expand side panel" data-testid="expand-file-tree-button-mobile" class="types__StyledButton-sc-ws60qy-0 cmNjCr"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-arrow-left" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path></svg></span><span data-component="text">Files</span></span></button><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-label="Side panel" aria-expanded="true" aria-controls="repos-file-tree" class="types__StyledButton-sc-ws60qy-0 lhczWi" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button></h2><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 imcwCi">Files</h2></div><div class="Box-sc-g0xbh4-0 hVHHYa"><div class="Box-sc-g0xbh4-0 idZfsJ"><button type="button" id="branch-picker-repos-header-ref-selector" aria-haspopup="true" tabindex="0" aria-label="master branch" data-testid="anchor-button" class="types__StyledButton-sc-ws60qy-0 hPfySA react-repos-tree-pane-ref-selector width-full ref-selector-class"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><div class="Box-sc-g0xbh4-0 bKgizp"><div class="Box-sc-g0xbh4-0 bwTunw"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 caeYDk"><span class="Text-sc-17v1xeu-0 bOMzPg"> <!-- -->master</span></div></div></span><span data-component="trailingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area"></button></div><div class="Box-sc-g0xbh4-0 jahcnb"><span role="tooltip" aria-label="Add file" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-s"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Add file" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dRdQkF" href="/dennykuo/tw-city-selector/new/master/dist"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg></a></span><button data-component="IconButton" type="button" aria-label="Search this repository" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dsmVIn"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button></div></div></div><div class="Box-sc-g0xbh4-0 ccToMy"><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><span class="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0 TextInputWrapper-sc-1mqhpbi-1 hSXtjz hZMmEi TextInput-wrapper" aria-busy="false"><span class="TextInput-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autoCorrect="off" spellcheck="false" placeholder="Go to file" data-component="input" class="UnstyledTextInput-sc-14ypya-0 cDLBls" value=""/><span class="TextInput-icon"><div class="Box-sc-g0xbh4-0 cNvKlH"><kbd>t</kbd></div></span></span></div><div class="Box-sc-g0xbh4-0 cLfAnm"><div class="react-tree-show-tree-items"><div data-testid="repos-file-tree-container" class="Box-sc-g0xbh4-0 erWCJP"><nav aria-label="File Tree Navigation"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 rTZSs"></span><ul role="tree" aria-label="Files" class="TreeView__UlBox-sc-4ex6b6-0 hLwWNO"><li class="PRIVATE_TreeView-item" tabindex="0" id=".github-item" role="treeitem" aria-labelledby=":Rqcndjal5:" aria-describedby=":Rqcndjal5H1: :Rqcndjal5H2:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":Rqcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":Rqcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>.github</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="cypress-item" role="treeitem" aria-labelledby=":R1acndjal5:" aria-describedby=":R1acndjal5H1: :R1acndjal5H2:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":R1acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R1acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>cypress</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="dist-item" role="treeitem" aria-labelledby=":R1qcndjal5:" aria-describedby=":R1qcndjal5H1: :R1qcndjal5H2:" aria-level="1" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":R1qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R1qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>dist</span></span></div></div><ul role="group" style="list-style:none;padding:0;margin:0"><li class="PRIVATE_TreeView-item" tabindex="0" id="dist/tw-city-selector.js-item" role="treeitem" aria-labelledby=":Rb9qcndjal5:" aria-describedby=":Rb9qcndjal5H1: :Rb9qcndjal5H2:" aria-level="2" aria-current="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:2"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":Rb9qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":Rb9qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>tw-city-selector.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="dist/tw-city-selector.js.map-item" role="treeitem" aria-labelledby=":Rj9qcndjal5:" aria-describedby=":Rj9qcndjal5H1: :Rj9qcndjal5H2:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:2;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":Rj9qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":Rj9qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>tw-city-selector.js.map</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="dist/tw-city-selector.min.js-item" role="treeitem" aria-labelledby=":Rr9qcndjal5:" aria-describedby=":Rr9qcndjal5H1: :Rr9qcndjal5H2:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:2;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":Rr9qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":Rr9qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>tw-city-selector.min.js</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="0" id="docs-item" role="treeitem" aria-labelledby=":R2acndjal5:" aria-describedby=":R2acndjal5H1: :R2acndjal5H2:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":R2acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R2acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>docs</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="src-item" role="treeitem" aria-labelledby=":R2qcndjal5:" aria-describedby=":R2qcndjal5H1: :R2qcndjal5H2:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":R2qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R2qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>src</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id=".gitignore-item" role="treeitem" aria-labelledby=":R3acndjal5:" aria-describedby=":R3acndjal5H1: :R3acndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R3acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R3acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>.gitignore</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="README.md-item" role="treeitem" aria-labelledby=":R3qcndjal5:" aria-describedby=":R3qcndjal5H1: :R3qcndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R3qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R3qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="bower.json-item" role="treeitem" aria-labelledby=":R4acndjal5:" aria-describedby=":R4acndjal5H1: :R4acndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R4acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R4acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>bower.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="cypress.json-item" role="treeitem" aria-labelledby=":R4qcndjal5:" aria-describedby=":R4qcndjal5H1: :R4qcndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R4qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R4qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>cypress.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="package.json-item" role="treeitem" aria-labelledby=":R5acndjal5:" aria-describedby=":R5acndjal5H1: :R5acndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R5acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R5acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>package.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="webpack.config.js-item" role="treeitem" aria-labelledby=":R5qcndjal5:" aria-describedby=":R5qcndjal5H1: :R5qcndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R5qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R5qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>webpack.config.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="webpack.docs.config.js-item" role="treeitem" aria-labelledby=":R6acndjal5:" aria-describedby=":R6acndjal5H1: :R6acndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R6acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R6acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>webpack.docs.config.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="webpack.umd-test.config.js-item" role="treeitem" aria-labelledby=":R6qcndjal5:" aria-describedby=":R6qcndjal5H1: :R6qcndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R6qcndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R6qcndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>webpack.umd-test.config.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="yarn.lock-item" role="treeitem" aria-labelledby=":R7acndjal5:" aria-describedby=":R7acndjal5H1: :R7acndjal5H2:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:1;content-visibility:auto;contain-intrinsic-size:auto 2rem"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R7acndjal5:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":R7acndjal5H1:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>yarn.lock</span></span></div></div></li></ul></nav></div></div><div class="Box-sc-g0xbh4-0 hwhShM"><div class="Box-sc-g0xbh4-0 cYPxpP"><a href="https://docs.github.com/repositories/working-with-files/using-files/navigating-code-on-github" target="_blank" class="Link__StyledLink-sc-14289xe-0 bJBoUI">Documentation</a> • <a href="https://github.com/orgs/community/discussions/54546" target="_blank" class="Link__StyledLink-sc-14289xe-0 bJBoUI">Share feedback</a></div></div></div><div class="Box-sc-g0xbh4-0 fBtiVT"><div class="Box-sc-g0xbh4-0 cYPxpP"><a href="https://docs.github.com/repositories/working-with-files/using-files/navigating-code-on-github" target="_blank" class="Link__StyledLink-sc-14289xe-0 bJBoUI">Documentation</a> • <a href="https://github.com/orgs/community/discussions/54546" target="_blank" class="Link__StyledLink-sc-14289xe-0 bJBoUI">Share feedback</a></div></div></div></div></div></div></div><main class="Box-sc-g0xbh4-0 emFMJu"><div class="Box-sc-g0xbh4-0"></div><div class="Box-sc-g0xbh4-0 hlUAHL"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 iStsmI"><div class="Box-sc-g0xbh4-0 eIgvIk"><div class="Box-sc-g0xbh4-0 eVFfWF container"><div class="Box-sc-g0xbh4-0 kgXdnT react-code-view-header--narrow"><div class="Box-sc-g0xbh4-0 kzTa-dF"><div class="Box-sc-g0xbh4-0 bbXCl"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 fNPcqd"><button type="button" aria-label="Expand side panel" data-testid="expand-file-tree-button-mobile" class="types__StyledButton-sc-ws60qy-0 cmNjCr"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-arrow-left" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path></svg></span><span data-component="text">Files</span></span></button><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-label="Side panel" aria-expanded="true" aria-controls="repos-file-tree" class="types__StyledButton-sc-ws60qy-0 lhczWi" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button></h2><div class="Box-sc-g0xbh4-0 hGGMNu"><div class="Box-sc-g0xbh4-0 eHRrYV"><button type="button" id="branch-picker-repos-header-ref-selector-narrow" aria-haspopup="true" tabindex="0" aria-label="master branch" data-testid="anchor-button" class="types__StyledButton-sc-ws60qy-0 ePclzw ref-selector-class"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><div class="Box-sc-g0xbh4-0 bKgizp"><div class="Box-sc-g0xbh4-0 bwTunw"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 dKmYfk"><span class="Text-sc-17v1xeu-0 bOMzPg"> <!-- -->master</span></div></div></span><span data-component="trailingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area"></button></div> <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><button type="button" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hPOZTU"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 jcILRt js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button" id=":R9aaqjal5:" aria-haspopup="true" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div><div class="Box-sc-g0xbh4-0 hSNzKh"><div class="Box-sc-g0xbh4-0 eTvGbF"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb-mobile-heading" id="repos-header-breadcrumb-mobile" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="repos-header-breadcrumb-mobile-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 iJtJJh" href="/dennykuo/tw-city-selector/tree/master">tw-city-selector</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fWVgeN">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 hUWqlv" href="/dennykuo/tw-city-selector/tree/master/dist">dist</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fWVgeN">/</span><h1 tabindex="-1" id="file-name-id-mobile" class="Heading__StyledHeading-sc-1c1dgg0-0 diwsLq">tw-city-selector.js</h1></div><button data-component="IconButton" type="button" aria-label="Copy path" data-testid="breadcrumb-copy-path-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dzga-dt"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div></div></div></div><div id="StickyHeader" class="Box-sc-g0xbh4-0 bDwCYs react-code-view-header--wide"><div class="Box-sc-g0xbh4-0 fywjmm"><div class="Box-sc-g0xbh4-0 dyczTK"><div class="Box-sc-g0xbh4-0 kszRgZ"><div class="Box-sc-g0xbh4-0 eTvGbF"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb-wide-heading" id="repos-header-breadcrumb-wide" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="repos-header-breadcrumb-wide-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 iJtJJh" href="/dennykuo/tw-city-selector/tree/master">tw-city-selector</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fWVgeN">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 hUWqlv" href="/dennykuo/tw-city-selector/tree/master/dist">dist</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fWVgeN">/</span><h1 tabindex="-1" id="file-name-id-wide" class="Heading__StyledHeading-sc-1c1dgg0-0 diwsLq">tw-city-selector.js</h1></div><button data-component="IconButton" type="button" aria-label="Copy path" data-testid="breadcrumb-copy-path-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dzga-dt"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div></div><div class="Box-sc-g0xbh4-0 gtBUEp"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><button type="button" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hPOZTU"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 jcILRt js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button" id=":R9pkqjal5:" aria-haspopup="true" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 MERGN react-code-view-bottom-padding"> <div class="Box-sc-g0xbh4-0 cMYnca"></div><div class="Box-sc-g0xbh4-0"></div> <!-- --> <!-- --> </div><div class="Box-sc-g0xbh4-0 MERGN"> <!-- --> <!-- --> <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button><div class="Box-sc-g0xbh4-0 brFBoI"><div class="Box-sc-g0xbh4-0 eYedVD"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">Latest commit</h2><div style="width:120px" class="Skeleton Skeleton--text" data-testid="loading"> </div><div class="Box-sc-g0xbh4-0 jGfYmh"><div data-testid="latest-commit-details" class="Box-sc-g0xbh4-0 lhFvfi"></div><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">History</h2><a aria-label="Commit history" class="types__StyledButton-sc-ws60qy-0 dWukOn react-last-commit-history-group" href="/dennykuo/tw-city-selector/commits/master/dist/tw-city-selector.js" data-size="small"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text"><span class="Text-sc-17v1xeu-0 hfRvxg">History</span></span></span></a><div class="Box-sc-g0xbh4-0 bqgLjk"></div><span role="tooltip" aria-label="Commit history" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-n"><a aria-label="Commit history" class="types__StyledButton-sc-ws60qy-0 dWukOn react-last-commit-history-icon" href="/dennykuo/tw-city-selector/commits/master/dist/tw-city-selector.js"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div><div class="Box-sc-g0xbh4-0 iJmJly"><div class="Box-sc-g0xbh4-0 jACbi container"><div class="Box-sc-g0xbh4-0 bSdwWB react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 fOEJrA text-mono"><div title="25.9 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">2 lines (2 loc) · 25.9 KB</span></div></div></div><div class="Box-sc-g0xbh4-0 react-code-size-details-banner"><button type="button" id=":R2bqlajal5:" aria-haspopup="true" tabindex="0" data-testid="copilot-popover-button" data-size="small" class="types__StyledButton-sc-ws60qy-0 cuVVHm"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M6.25 9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 6.25 9Zm4.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"></path><path d="M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0 1 16 9.736V11c0 .24-.086.438-.156.567-.073.131-.16.253-.259.366-.18.21-.404.413-.605.58a10.19 10.19 0 0 1-.792.597l-.015.01-.006.004-.028.018a8.849 8.849 0 0 1-.456.281c-.307.177-.749.41-1.296.642C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.472-4.387-.935a12.28 12.28 0 0 1-1.296-.641 8.849 8.849 0 0 1-.456-.281l-.028-.02-.006-.003-.015-.01a10.593 10.593 0 0 1-.792-.596 5.264 5.264 0 0 1-.605-.58 2.133 2.133 0 0 1-.259-.367A1.189 1.189 0 0 1 0 11V9.736a2.75 2.75 0 0 1 1.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765ZM3 7.824v4.261c.02.013.043.025.065.038.264.152.65.356 1.134.562.972.412 2.307.815 3.801.815 1.494 0 2.83-.403 3.8-.815.412-.174.813-.375 1.2-.6v-4.26l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.06-.328-2.71-.991A3.233 3.233 0 0 1 8 6.266c-.144.269-.321.52-.54.743C6.81 7.672 5.896 8 4.75 8c-.652 0-1.236-.082-1.726-.291L3 7.824Zm6.237-5.031c-.204.218-.359.678-.242 1.614.091.726.303 1.23.618 1.553.299.304.784.54 1.638.54.922 0 1.28-.199 1.442-.38.179-.2.308-.578.308-1.37 0-.765-.123-1.242-.37-1.555-.233-.296-.693-.586-1.713-.7-1.044-.116-1.488.091-1.681.298Zm-2.472 0c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614Z"></path></svg></span><span data-component="text">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 gBKNLX react-blob-view-header-sticky" id="repos-sticky-header"><div class="Box-sc-g0xbh4-0 ePiodO"><div class="Box-sc-g0xbh4-0 react-blob-sticky-header"><div class="Box-sc-g0xbh4-0 kQJlnf"><div class="Box-sc-g0xbh4-0 gJICKO"><div class="Box-sc-g0xbh4-0 iZJewz"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 iJtJJh" href="/dennykuo/tw-city-selector/tree/master">tw-city-selector</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 iqTHmv">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 hUWqlv" href="/dennykuo/tw-city-selector/tree/master/dist">dist</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 iqTHmv">/</span><h1 tabindex="-1" id="sticky-file-name-id" class="Heading__StyledHeading-sc-1c1dgg0-0 jAEDJk">tw-city-selector.js</h1></div></div><button type="button" data-size="small" class="types__StyledButton-sc-ws60qy-0 kGDoCG"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text">Top</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 bESQXL"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">File metadata and controls</h2><div class="Box-sc-g0xbh4-0 bfkNRF"><ul aria-label="File view" class="SegmentedControl__SegmentedControlList-sc-1rzig82-0 ivYJSK"><li class="Box-sc-g0xbh4-0 fXBLEV"><button aria-current="true" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 bFrOJy"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Code</div></span></button></li><li class="Box-sc-g0xbh4-0 gbKtit"><button aria-current="false" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 dAXkSP"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-in-header"><div class="Box-sc-g0xbh4-0 fOEJrA text-mono"><div title="25.9 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">2 lines (2 loc) · 25.9 KB</span></div></div></div><div class="Box-sc-g0xbh4-0 react-code-size-details-in-header"><button type="button" id=":R79jqlajal5:" aria-haspopup="true" tabindex="0" data-testid="copilot-popover-button" data-size="small" class="types__StyledButton-sc-ws60qy-0 cuVVHm"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M6.25 9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 6.25 9Zm4.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"></path><path d="M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0 1 16 9.736V11c0 .24-.086.438-.156.567-.073.131-.16.253-.259.366-.18.21-.404.413-.605.58a10.19 10.19 0 0 1-.792.597l-.015.01-.006.004-.028.018a8.849 8.849 0 0 1-.456.281c-.307.177-.749.41-1.296.642C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.472-4.387-.935a12.28 12.28 0 0 1-1.296-.641 8.849 8.849 0 0 1-.456-.281l-.028-.02-.006-.003-.015-.01a10.593 10.593 0 0 1-.792-.596 5.264 5.264 0 0 1-.605-.58 2.133 2.133 0 0 1-.259-.367A1.189 1.189 0 0 1 0 11V9.736a2.75 2.75 0 0 1 1.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765ZM3 7.824v4.261c.02.013.043.025.065.038.264.152.65.356 1.134.562.972.412 2.307.815 3.801.815 1.494 0 2.83-.403 3.8-.815.412-.174.813-.375 1.2-.6v-4.26l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.06-.328-2.71-.991A3.233 3.233 0 0 1 8 6.266c-.144.269-.321.52-.54.743C6.81 7.672 5.896 8 4.75 8c-.652 0-1.236-.082-1.726-.291L3 7.824Zm6.237-5.031c-.204.218-.359.678-.242 1.614.091.726.303 1.23.618 1.553.299.304.784.54 1.638.54.922 0 1.28-.199 1.442-.38.179-.2.308-.578.308-1.37 0-.765-.123-1.242-.37-1.555-.233-.296-.693-.586-1.713-.7-1.044-.116-1.488.091-1.681.298Zm-2.472 0c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614Z"></path></svg></span><span data-component="text">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 iBylDf"><div class="Box-sc-g0xbh4-0 kSGBPx react-blob-header-edit-and-raw-actions"><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><a href="https://github.com/dennykuo/tw-city-selector/raw/master/dist/tw-city-selector.js" data-testid="raw-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hHvcfT"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Raw</span></span></a><button data-component="IconButton" type="button" aria-label="Copy raw content" data-testid="copy-raw-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 kCdBku"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span role="tooltip" aria-label="Download raw file" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-n"><button data-component="IconButton" type="button" aria-label="Download raw content" data-testid="download-raw-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 jcdBXR"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 bJBoUI js-github-dev-shortcut d-none" href="https://github.dev/"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 bJBoUI js-github-dev-new-tab-shortcut d-none" href="https://github.dev/" target="_blank"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><span role="tooltip" aria-label="Fork this repository and edit the file" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-nw"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Edit file" data-testid="edit-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 bpoOwX" href="/dennykuo/tw-city-selector/edit/master/dist/tw-city-selector.js"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a></span><button data-component="IconButton" type="button" aria-label="More edit options" data-testid="more-edit-button" id=":Rl7pjqlajal5:" aria-haspopup="true" tabindex="0" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 kCdBku"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div><button hidden="" data-testid="" data-hotkey="e,E" data-hotkey-scope="read-only-cursor-text-area"></button></div><span role="tooltip" aria-label="Open symbols panel" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-nw"><button data-component="IconButton" type="button" aria-label="Symbols" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" class="types__StyledButton-sc-ws60qy-0 bhUFcA" data-testid="symbols-button" id="symbols-button" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button></span><div class="Box-sc-g0xbh4-0 react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" aria-label="Edit and raw actions" class="types__StyledButton-sc-ws60qy-0 jYfgHQ js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button" id=":R1dpjqlajal5:" aria-haspopup="true" tabindex="0" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div></div><div class="Box-sc-g0xbh4-0"></div></div><div class="Box-sc-g0xbh4-0 etfROT"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 jWnGGx"><div class="Box-sc-g0xbh4-0 TCenl"><div id="highlighted-line-menu-positioner" class="Box-sc-g0xbh4-0 cluMzC"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 cluMzC"><div class="Box-sc-g0xbh4-0 eRkHwF"><div class="Box-sc-g0xbh4-0 knCTAx react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-paste-markdown-skip="true" data-hpc="true"><div class="react-line-numbers" style="pointer-events:auto"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right:16px">1</div><div data-line-number="2" class="react-line-number react-code-text" style="padding-right:16px">2</div></div><div class="react-code-lines"><div class="react-code-text react-code-line-contents" style="min-height:auto"><div><div id="LC1" class="react-file-line html-div" data-testid="code-cell" data-line-number="1" style="position:relative">!function(i,t){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=t():&quot;function&quot;==typeof define&amp;&amp;define.amd?define(&quot;TwCitySelector&quot;,[],t):&quot;object&quot;==typeof exports?exports.TwCitySelector=t():i.TwCitySelector=t()}(window,function(){return function(i){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return i[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=i,n.c=t,n.d=function(i,t,s){n.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:s})},n.r=function(i){&quot;undefined&quot;!=typeof Symbol&amp;&amp;Symbol.toStringTag&amp;&amp;Object.defineProperty(i,Symbol.toStringTag,{value:&quot;Module&quot;}),Object.defineProperty(i,&quot;__esModule&quot;,{value:!0})},n.t=function(i,t){if(1&amp;t&amp;&amp;(i=n(i)),8&amp;t)return i;if(4&amp;t&amp;&amp;&quot;object&quot;==typeof i&amp;&amp;i&amp;&amp;i.__esModule)return i;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,&quot;default&quot;,{enumerable:!0,value:i}),2&amp;t&amp;&amp;&quot;string&quot;!=typeof i)for(var o in i)n.d(s,o,function(t){return i[t]}.bind(null,o));return s},n.n=function(i){var t=i&amp;&amp;i.__esModule?function(){return i.default}:function(){return i};return n.d(t,&quot;a&quot;,t),t},n.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},n.p=&quot;&quot;,n(n.s=0)}([function(i,t,n){&quot;use strict&quot;;n.r(t);var s={counties:[&quot;台北市&quot;,&quot;基隆市&quot;,&quot;新北市&quot;,&quot;宜蘭縣&quot;,&quot;桃園市&quot;,&quot;新竹市&quot;,&quot;新竹縣&quot;,&quot;苗栗縣&quot;,&quot;台中市&quot;,&quot;彰化縣&quot;,&quot;南投縣&quot;,&quot;嘉義市&quot;,&quot;嘉義縣&quot;,&quot;雲林縣&quot;,&quot;台南市&quot;,&quot;高雄市&quot;,&quot;澎湖縣&quot;,&quot;金門縣&quot;,&quot;屏東縣&quot;,&quot;台東縣&quot;,&quot;花蓮縣&quot;,&quot;連江縣&quot;],districts:[[[&quot;中正區&quot;,&quot;大同區&quot;,&quot;中山區&quot;,&quot;松山區&quot;,&quot;大安區&quot;,&quot;萬華區&quot;,&quot;信義區&quot;,&quot;士林區&quot;,&quot;北投區&quot;,&quot;內湖區&quot;,&quot;南港區&quot;,&quot;文山區&quot;],[&quot;100&quot;,&quot;103&quot;,&quot;104&quot;,&quot;105&quot;,&quot;106&quot;,&quot;108&quot;,&quot;110&quot;,&quot;111&quot;,&quot;112&quot;,&quot;114&quot;,&quot;115&quot;,&quot;116&quot;]],[[&quot;仁愛區&quot;,&quot;信義區&quot;,&quot;中正區&quot;,&quot;中山區&quot;,&quot;安樂區&quot;,&quot;暖暖區&quot;,&quot;七堵區&quot;],[&quot;200&quot;,&quot;201&quot;,&quot;202&quot;,&quot;203&quot;,&quot;204&quot;,&quot;205&quot;,&quot;206&quot;]],[[&quot;萬里區&quot;,&quot;金山區&quot;,&quot;板橋區&quot;,&quot;汐止區&quot;,&quot;深坑區&quot;,&quot;石碇區&quot;,&quot;瑞芳區&quot;,&quot;平溪區&quot;,&quot;雙溪區&quot;,&quot;貢寮區&quot;,&quot;新店區&quot;,&quot;坪林區&quot;,&quot;烏來區&quot;,&quot;永和區&quot;,&quot;中和區&quot;,&quot;土城區&quot;,&quot;三峽區&quot;,&quot;樹林區&quot;,&quot;鶯歌區&quot;,&quot;三重區&quot;,&quot;新莊區&quot;,&quot;泰山區&quot;,&quot;林口區&quot;,&quot;蘆洲區&quot;,&quot;五股區&quot;,&quot;八里區&quot;,&quot;淡水區&quot;,&quot;三芝區&quot;,&quot;石門區&quot;],[&quot;207&quot;,&quot;208&quot;,&quot;220&quot;,&quot;221&quot;,&quot;222&quot;,&quot;223&quot;,&quot;224&quot;,&quot;226&quot;,&quot;227&quot;,&quot;228&quot;,&quot;231&quot;,&quot;232&quot;,&quot;233&quot;,&quot;234&quot;,&quot;235&quot;,&quot;236&quot;,&quot;237&quot;,&quot;238&quot;,&quot;239&quot;,&quot;241&quot;,&quot;242&quot;,&quot;243&quot;,&quot;244&quot;,&quot;247&quot;,&quot;248&quot;,&quot;249&quot;,&quot;251&quot;,&quot;252&quot;,&quot;253&quot;]],[[&quot;宜蘭市&quot;,&quot;頭城鎮&quot;,&quot;礁溪鄉&quot;,&quot;壯圍鄉&quot;,&quot;員山鄉&quot;,&quot;羅東鎮&quot;,&quot;三星鄉&quot;,&quot;大同鄉&quot;,&quot;五結鄉&quot;,&quot;冬山鄉&quot;,&quot;蘇澳鎮&quot;,&quot;南澳鄉&quot;,&quot;釣魚台列嶼&quot;],[&quot;260&quot;,&quot;261&quot;,&quot;262&quot;,&quot;263&quot;,&quot;264&quot;,&quot;265&quot;,&quot;266&quot;,&quot;267&quot;,&quot;268&quot;,&quot;269&quot;,&quot;270&quot;,&quot;272&quot;,&quot;290&quot;]],[[&quot;中壢區&quot;,&quot;平鎮區&quot;,&quot;龍潭區&quot;,&quot;楊梅區&quot;,&quot;新屋區&quot;,&quot;觀音區&quot;,&quot;桃園區&quot;,&quot;龜山區&quot;,&quot;八德區&quot;,&quot;大溪區&quot;,&quot;復興區&quot;,&quot;大園區&quot;,&quot;蘆竹區&quot;],[&quot;320&quot;,&quot;324&quot;,&quot;325&quot;,&quot;326&quot;,&quot;327&quot;,&quot;328&quot;,&quot;330&quot;,&quot;333&quot;,&quot;334&quot;,&quot;335&quot;,&quot;336&quot;,&quot;337&quot;,&quot;338&quot;]],[[&quot;東區&quot;,&quot;北區&quot;,&quot;香山區&quot;],[&quot;300&quot;,&quot;300&quot;,&quot;300&quot;]],[[&quot;竹北市&quot;,&quot;湖口鄉&quot;,&quot;新豐鄉&quot;,&quot;新埔鎮&quot;,&quot;關西鎮&quot;,&quot;芎林鄉&quot;,&quot;寶山鄉&quot;,&quot;竹東鎮&quot;,&quot;五峰鄉&quot;,&quot;橫山鄉&quot;,&quot;尖石鄉&quot;,&quot;北埔鄉&quot;,&quot;峨眉鄉&quot;],[&quot;302&quot;,&quot;303&quot;,&quot;304&quot;,&quot;305&quot;,&quot;306&quot;,&quot;307&quot;,&quot;308&quot;,&quot;310&quot;,&quot;311&quot;,&quot;312&quot;,&quot;313&quot;,&quot;314&quot;,&quot;315&quot;]],[[&quot;竹南鎮&quot;,&quot;頭份市&quot;,&quot;三灣鄉&quot;,&quot;南庄鄉&quot;,&quot;獅潭鄉&quot;,&quot;後龍鎮&quot;,&quot;通霄鎮&quot;,&quot;苑裡鎮&quot;,&quot;苗栗市&quot;,&quot;造橋鄉&quot;,&quot;頭屋鄉&quot;,&quot;公館鄉&quot;,&quot;大湖鄉&quot;,&quot;泰安鄉&quot;,&quot;銅鑼鄉&quot;,&quot;三義鄉&quot;,&quot;西湖鄉&quot;,&quot;卓蘭鎮&quot;],[&quot;350&quot;,&quot;351&quot;,&quot;352&quot;,&quot;353&quot;,&quot;354&quot;,&quot;356&quot;,&quot;357&quot;,&quot;358&quot;,&quot;360&quot;,&quot;361&quot;,&quot;362&quot;,&quot;363&quot;,&quot;364&quot;,&quot;365&quot;,&quot;366&quot;,&quot;367&quot;,&quot;368&quot;,&quot;369&quot;]],[[&quot;中區&quot;,&quot;東區&quot;,&quot;南區&quot;,&quot;西區&quot;,&quot;北區&quot;,&quot;北屯區&quot;,&quot;西屯區&quot;,&quot;南屯區&quot;,&quot;太平區&quot;,&quot;大里區&quot;,&quot;霧峰區&quot;,&quot;烏日區&quot;,&quot;豐原區&quot;,&quot;后里區&quot;,&quot;石岡區&quot;,&quot;東勢區&quot;,&quot;和平區&quot;,&quot;新社區&quot;,&quot;潭子區&quot;,&quot;大雅區&quot;,&quot;神岡區&quot;,&quot;大肚區&quot;,&quot;沙鹿區&quot;,&quot;龍井區&quot;,&quot;梧棲區&quot;,&quot;清水區&quot;,&quot;大甲區&quot;,&quot;外埔區&quot;,&quot;大安區&quot;],[&quot;400&quot;,&quot;401&quot;,&quot;402&quot;,&quot;403&quot;,&quot;404&quot;,&quot;406&quot;,&quot;407&quot;,&quot;408&quot;,&quot;411&quot;,&quot;412&quot;,&quot;413&quot;,&quot;414&quot;,&quot;420&quot;,&quot;421&quot;,&quot;422&quot;,&quot;423&quot;,&quot;424&quot;,&quot;426&quot;,&quot;427&quot;,&quot;428&quot;,&quot;429&quot;,&quot;432&quot;,&quot;433&quot;,&quot;434&quot;,&quot;435&quot;,&quot;436&quot;,&quot;437&quot;,&quot;438&quot;,&quot;439&quot;]],[[&quot;彰化市&quot;,&quot;芬園鄉&quot;,&quot;花壇鄉&quot;,&quot;秀水鄉&quot;,&quot;鹿港鎮&quot;,&quot;福興鄉&quot;,&quot;線西鄉&quot;,&quot;和美鎮&quot;,&quot;伸港鄉&quot;,&quot;員林市&quot;,&quot;社頭鄉&quot;,&quot;永靖鄉&quot;,&quot;埔心鄉&quot;,&quot;溪湖鎮&quot;,&quot;大村鄉&quot;,&quot;埔鹽鄉&quot;,&quot;田中鎮&quot;,&quot;北斗鎮&quot;,&quot;田尾鄉&quot;,&quot;埤頭鄉&quot;,&quot;溪州鄉&quot;,&quot;竹塘鄉&quot;,&quot;二林鎮&quot;,&quot;大城鄉&quot;,&quot;芳苑鄉&quot;,&quot;二水鄉&quot;],[&quot;500&quot;,&quot;502&quot;,&quot;503&quot;,&quot;504&quot;,&quot;505&quot;,&quot;506&quot;,&quot;507&quot;,&quot;508&quot;,&quot;509&quot;,&quot;510&quot;,&quot;511&quot;,&quot;512&quot;,&quot;513&quot;,&quot;514&quot;,&quot;515&quot;,&quot;516&quot;,&quot;520&quot;,&quot;521&quot;,&quot;522&quot;,&quot;523&quot;,&quot;524&quot;,&quot;525&quot;,&quot;526&quot;,&quot;527&quot;,&quot;528&quot;,&quot;530&quot;]],[[&quot;南投市&quot;,&quot;中寮鄉&quot;,&quot;草屯鎮&quot;,&quot;國姓鄉&quot;,&quot;埔里鎮&quot;,&quot;仁愛鄉&quot;,&quot;名間鄉&quot;,&quot;集集鎮&quot;,&quot;水里鄉&quot;,&quot;魚池鄉&quot;,&quot;信義鄉&quot;,&quot;竹山鎮&quot;,&quot;鹿谷鄉&quot;],[&quot;540&quot;,&quot;541&quot;,&quot;542&quot;,&quot;544&quot;,&quot;545&quot;,&quot;546&quot;,&quot;551&quot;,&quot;552&quot;,&quot;553&quot;,&quot;555&quot;,&quot;556&quot;,&quot;557&quot;,&quot;558&quot;]],[[&quot;東區&quot;,&quot;西區&quot;],[&quot;600&quot;,&quot;600&quot;]],[[&quot;番路鄉&quot;,&quot;梅山鄉&quot;,&quot;竹崎鄉&quot;,&quot;阿里山&quot;,&quot;中埔鄉&quot;,&quot;大埔鄉&quot;,&quot;水上鄉&quot;,&quot;鹿草鄉&quot;,&quot;太保市&quot;,&quot;朴子市&quot;,&quot;東石鄉&quot;,&quot;六腳鄉&quot;,&quot;新港鄉&quot;,&quot;民雄鄉&quot;,&quot;大林鎮&quot;,&quot;溪口鄉&quot;,&quot;義竹鄉&quot;,&quot;布袋鎮&quot;],[&quot;602&quot;,&quot;603&quot;,&quot;604&quot;,&quot;605&quot;,&quot;606&quot;,&quot;607&quot;,&quot;608&quot;,&quot;611&quot;,&quot;612&quot;,&quot;613&quot;,&quot;614&quot;,&quot;615&quot;,&quot;616&quot;,&quot;621&quot;,&quot;622&quot;,&quot;623&quot;,&quot;624&quot;,&quot;625&quot;]],[[&quot;斗南鎮&quot;,&quot;大埤鄉&quot;,&quot;虎尾鎮&quot;,&quot;土庫鎮&quot;,&quot;褒忠鄉&quot;,&quot;東勢鄉&quot;,&quot;台西鄉&quot;,&quot;崙背鄉&quot;,&quot;麥寮鄉&quot;,&quot;斗六市&quot;,&quot;林內鄉&quot;,&quot;古坑鄉&quot;,&quot;莿桐鄉&quot;,&quot;西螺鎮&quot;,&quot;二崙鄉&quot;,&quot;北港鎮&quot;,&quot;水林鄉&quot;,&quot;口湖鄉&quot;,&quot;四湖鄉&quot;,&quot;元長鄉&quot;],[&quot;630&quot;,&quot;631&quot;,&quot;632&quot;,&quot;633&quot;,&quot;634&quot;,&quot;635&quot;,&quot;636&quot;,&quot;637&quot;,&quot;638&quot;,&quot;640&quot;,&quot;643&quot;,&quot;646&quot;,&quot;647&quot;,&quot;648&quot;,&quot;649&quot;,&quot;651&quot;,&quot;652&quot;,&quot;653&quot;,&quot;654&quot;,&quot;655&quot;]],[[&quot;中西區&quot;,&quot;東區&quot;,&quot;南區&quot;,&quot;北區&quot;,&quot;安平區&quot;,&quot;安南區&quot;,&quot;永康區&quot;,&quot;歸仁區&quot;,&quot;新化區&quot;,&quot;左鎮區&quot;,&quot;玉井區&quot;,&quot;楠西區&quot;,&quot;南化區&quot;,&quot;仁德區&quot;,&quot;關廟區&quot;,&quot;龍崎區&quot;,&quot;官田區&quot;,&quot;麻豆區&quot;,&quot;佳里區&quot;,&quot;西港區&quot;,&quot;七股區&quot;,&quot;將軍區&quot;,&quot;學甲區&quot;,&quot;北門區&quot;,&quot;新營區&quot;,&quot;後壁區&quot;,&quot;白河區&quot;,&quot;東山區&quot;,&quot;六甲區&quot;,&quot;下營區&quot;,&quot;柳營區&quot;,&quot;鹽水區&quot;,&quot;善化區&quot;,&quot;大內區&quot;,&quot;山上區&quot;,&quot;新市區&quot;,&quot;安定區&quot;],[&quot;700&quot;,&quot;701&quot;,&quot;702&quot;,&quot;704&quot;,&quot;708&quot;,&quot;709&quot;,&quot;710&quot;,&quot;711&quot;,&quot;712&quot;,&quot;713&quot;,&quot;714&quot;,&quot;715&quot;,&quot;716&quot;,&quot;717&quot;,&quot;718&quot;,&quot;719&quot;,&quot;720&quot;,&quot;721&quot;,&quot;722&quot;,&quot;723&quot;,&quot;724&quot;,&quot;725&quot;,&quot;726&quot;,&quot;727&quot;,&quot;730&quot;,&quot;731&quot;,&quot;732&quot;,&quot;733&quot;,&quot;734&quot;,&quot;735&quot;,&quot;736&quot;,&quot;737&quot;,&quot;741&quot;,&quot;742&quot;,&quot;743&quot;,&quot;744&quot;,&quot;745&quot;]],[[&quot;新興區&quot;,&quot;前金區&quot;,&quot;苓雅區&quot;,&quot;鹽埕區&quot;,&quot;鼓山區&quot;,&quot;旗津區&quot;,&quot;前鎮區&quot;,&quot;三民區&quot;,&quot;楠梓區&quot;,&quot;小港區&quot;,&quot;左營區&quot;,&quot;仁武區&quot;,&quot;大社區&quot;,&quot;東沙群島&quot;,&quot;南沙群島&quot;,&quot;岡山區&quot;,&quot;路竹區&quot;,&quot;阿蓮區&quot;,&quot;田寮區&quot;,&quot;燕巢區&quot;,&quot;橋頭區&quot;,&quot;梓官區&quot;,&quot;彌陀區&quot;,&quot;永安區&quot;,&quot;湖內區&quot;,&quot;鳳山區&quot;,&quot;大寮區&quot;,&quot;林園區&quot;,&quot;鳥松區&quot;,&quot;大樹區&quot;,&quot;旗山區&quot;,&quot;美濃區&quot;,&quot;六龜區&quot;,&quot;內門區&quot;,&quot;杉林區&quot;,&quot;甲仙區&quot;,&quot;桃源區&quot;,&quot;那瑪夏區&quot;,&quot;茂林區&quot;,&quot;茄萣區&quot;],[&quot;800&quot;,&quot;801&quot;,&quot;802&quot;,&quot;803&quot;,&quot;804&quot;,&quot;805&quot;,&quot;806&quot;,&quot;807&quot;,&quot;811&quot;,&quot;812&quot;,&quot;813&quot;,&quot;814&quot;,&quot;815&quot;,&quot;817&quot;,&quot;819&quot;,&quot;820&quot;,&quot;821&quot;,&quot;822&quot;,&quot;823&quot;,&quot;824&quot;,&quot;825&quot;,&quot;826&quot;,&quot;827&quot;,&quot;828&quot;,&quot;829&quot;,&quot;830&quot;,&quot;831&quot;,&quot;832&quot;,&quot;833&quot;,&quot;840&quot;,&quot;842&quot;,&quot;843&quot;,&quot;844&quot;,&quot;845&quot;,&quot;846&quot;,&quot;847&quot;,&quot;848&quot;,&quot;849&quot;,&quot;851&quot;,&quot;852&quot;]],[[&quot;馬公市&quot;,&quot;西嶼鄉&quot;,&quot;望安鄉&quot;,&quot;七美鄉&quot;,&quot;白沙鄉&quot;,&quot;湖西鄉&quot;],[&quot;880&quot;,&quot;881&quot;,&quot;882&quot;,&quot;883&quot;,&quot;884&quot;,&quot;885&quot;]],[[&quot;金沙鎮&quot;,&quot;金湖鎮&quot;,&quot;金寧鄉&quot;,&quot;金城鎮&quot;,&quot;烈嶼鄉&quot;,&quot;烏坵鄉&quot;],[&quot;890&quot;,&quot;891&quot;,&quot;892&quot;,&quot;893&quot;,&quot;894&quot;,&quot;896&quot;]],[[&quot;屏東市&quot;,&quot;三地門鄉&quot;,&quot;霧台鄉&quot;,&quot;瑪家鄉&quot;,&quot;九如鄉&quot;,&quot;里港鄉&quot;,&quot;高樹鄉&quot;,&quot;鹽埔鄉&quot;,&quot;長治鄉&quot;,&quot;麟洛鄉&quot;,&quot;竹田鄉&quot;,&quot;內埔鄉&quot;,&quot;萬丹鄉&quot;,&quot;潮州鎮&quot;,&quot;泰武鄉&quot;,&quot;來義鄉&quot;,&quot;萬巒鄉&quot;,&quot;崁頂鄉&quot;,&quot;新埤鄉&quot;,&quot;南州鄉&quot;,&quot;林邊鄉&quot;,&quot;東港鎮&quot;,&quot;琉球鄉&quot;,&quot;佳冬鄉&quot;,&quot;新園鄉&quot;,&quot;枋寮鄉&quot;,&quot;枋山鄉&quot;,&quot;春日鄉&quot;,&quot;獅子鄉&quot;,&quot;車城鄉&quot;,&quot;牡丹鄉&quot;,&quot;恆春鎮&quot;,&quot;滿州鄉&quot;],[&quot;900&quot;,&quot;901&quot;,&quot;902&quot;,&quot;903&quot;,&quot;904&quot;,&quot;905&quot;,&quot;906&quot;,&quot;907&quot;,&quot;908&quot;,&quot;909&quot;,&quot;911&quot;,&quot;912&quot;,&quot;913&quot;,&quot;920&quot;,&quot;921&quot;,&quot;922&quot;,&quot;923&quot;,&quot;924&quot;,&quot;925&quot;,&quot;926&quot;,&quot;927&quot;,&quot;928&quot;,&quot;929&quot;,&quot;931&quot;,&quot;932&quot;,&quot;940&quot;,&quot;941&quot;,&quot;942&quot;,&quot;943&quot;,&quot;944&quot;,&quot;945&quot;,&quot;946&quot;,&quot;947&quot;]],[[&quot;台東市&quot;,&quot;綠島鄉&quot;,&quot;蘭嶼鄉&quot;,&quot;延平鄉&quot;,&quot;卑南鄉&quot;,&quot;鹿野鄉&quot;,&quot;關山鎮&quot;,&quot;海端鄉&quot;,&quot;池上鄉&quot;,&quot;東河鄉&quot;,&quot;成功鎮&quot;,&quot;長濱鄉&quot;,&quot;太麻里&quot;,&quot;金峰鄉&quot;,&quot;大武鄉&quot;,&quot;達仁鄉&quot;],[&quot;950&quot;,&quot;951&quot;,&quot;952&quot;,&quot;953&quot;,&quot;954&quot;,&quot;955&quot;,&quot;956&quot;,&quot;957&quot;,&quot;958&quot;,&quot;959&quot;,&quot;961&quot;,&quot;962&quot;,&quot;963&quot;,&quot;964&quot;,&quot;965&quot;,&quot;966&quot;]],[[&quot;花蓮市&quot;,&quot;新城鄉&quot;,&quot;秀林鄉&quot;,&quot;吉安鄉&quot;,&quot;壽豐鄉&quot;,&quot;鳳林鎮&quot;,&quot;光復鄉&quot;,&quot;豐濱鄉&quot;,&quot;瑞穗鄉&quot;,&quot;萬榮鄉&quot;,&quot;玉里鎮&quot;,&quot;卓溪鄉&quot;,&quot;富里鄉&quot;],[&quot;970&quot;,&quot;971&quot;,&quot;972&quot;,&quot;973&quot;,&quot;974&quot;,&quot;975&quot;,&quot;976&quot;,&quot;977&quot;,&quot;978&quot;,&quot;979&quot;,&quot;981&quot;,&quot;982&quot;,&quot;983&quot;]],[[&quot;南竿鄉&quot;,&quot;北竿鄉&quot;,&quot;莒光鄉&quot;,&quot;東引鄉&quot;],[&quot;209&quot;,&quot;210&quot;,&quot;211&quot;,&quot;212&quot;]]]},o={counties:[&quot;Taipei City&quot;,&quot;Keelung City&quot;,&quot;New Taipei City&quot;,&quot;Yilan County&quot;,&quot;Taoyuan City&quot;,&quot;Hsinchu City&quot;,&quot;Hsinchu County&quot;,&quot;Miaoli County&quot;,&quot;Taichung City&quot;,&quot;Changhua County&quot;,&quot;Nantou County&quot;,&quot;Chiayi City&quot;,&quot;Chiayi County&quot;,&quot;Yunlin County&quot;,&quot;Tainan City&quot;,&quot;Kaohsiung City&quot;,&quot;Penghu County&quot;,&quot;Kinmen County&quot;,&quot;Pingtung County&quot;,&quot;Taitung County&quot;,&quot;Hualien County&quot;,&quot;Lienchiang County&quot;],districts:[[[&quot;Zhongzheng District&quot;,&quot;Datong District&quot;,&quot;Zhongshan District&quot;,&quot;Songshan District&quot;,&quot;Da’an District&quot;,&quot;Wanhua District&quot;,&quot;Xinyi District&quot;,&quot;Shilin District&quot;,&quot;Beitou District&quot;,&quot;Neihu District&quot;,&quot;Nangang District&quot;,&quot;Wenshan District&quot;],[&quot;100&quot;,&quot;103&quot;,&quot;104&quot;,&quot;105&quot;,&quot;106&quot;,&quot;108&quot;,&quot;110&quot;,&quot;111&quot;,&quot;112&quot;,&quot;114&quot;,&quot;115&quot;,&quot;116&quot;]],[[&quot;Ren’ai District&quot;,&quot;Xinyi District&quot;,&quot;Zhongzheng District&quot;,&quot;Zhongshan District&quot;,&quot;Anle District&quot;,&quot;Nuannuan District&quot;,&quot;Qidu District&quot;],[&quot;200&quot;,&quot;201&quot;,&quot;202&quot;,&quot;203&quot;,&quot;204&quot;,&quot;205&quot;,&quot;206&quot;]],[[&quot;Wanli District&quot;,&quot;Jinshan District&quot;,&quot;Banqiao District&quot;,&quot;Xizhi District&quot;,&quot;Shenkeng District&quot;,&quot;Shiding District&quot;,&quot;Ruifang District&quot;,&quot;Pingxi District&quot;,&quot;Shuangxi District&quot;,&quot;Gongliao District&quot;,&quot;Xindian District&quot;,&quot;Pinglin District&quot;,&quot;Wulai District&quot;,&quot;Yonghe District&quot;,&quot;Zhonghe District&quot;,&quot;Tucheng District&quot;,&quot;Sanxia District&quot;,&quot;Shulin District&quot;,&quot;Yingge District&quot;,&quot;Sanchong District&quot;,&quot;Xinzhuang District&quot;,&quot;Taishan District&quot;,&quot;Linkou District&quot;,&quot;LuzhouDistrict&quot;,&quot;Wugu District&quot;,&quot;Bali District&quot;,&quot;Tamsui District&quot;,&quot;Sanzhi District&quot;,&quot;Shimen District&quot;],[&quot;207&quot;,&quot;208&quot;,&quot;220&quot;,&quot;221&quot;,&quot;222&quot;,&quot;223&quot;,&quot;224&quot;,&quot;226&quot;,&quot;227&quot;,&quot;228&quot;,&quot;231&quot;,&quot;232&quot;,&quot;233&quot;,&quot;234&quot;,&quot;235&quot;,&quot;236&quot;,&quot;237&quot;,&quot;238&quot;,&quot;239&quot;,&quot;241&quot;,&quot;242&quot;,&quot;243&quot;,&quot;244&quot;,&quot;247&quot;,&quot;248&quot;,&quot;249&quot;,&quot;251&quot;,&quot;252&quot;,&quot;253&quot;]],[[&quot;Yilan City&quot;,&quot;Toucheng Township&quot;,&quot;Jiaoxi Township&quot;,&quot;Zhuangwei Township&quot;,&quot;Yuanshan Township&quot;,&quot;Luodong Township&quot;,&quot;Sanxing Township&quot;,&quot;Datong Township&quot;,&quot;Wujie Township&quot;,&quot;Dongshan Township&quot;,&quot;Su’ao Township&quot;,&quot;Nan’ao Township&quot;,&quot;Diauyutai&quot;],[&quot;260&quot;,&quot;261&quot;,&quot;262&quot;,&quot;263&quot;,&quot;264&quot;,&quot;265&quot;,&quot;266&quot;,&quot;267&quot;,&quot;268&quot;,&quot;269&quot;,&quot;270&quot;,&quot;272&quot;,&quot;290&quot;]],[[&quot;Zhongli District&quot;,&quot;Pingzhen District&quot;,&quot;Longtan District&quot;,&quot;Yangmei District&quot;,&quot;Xinwu District&quot;,&quot;Guanyin District&quot;,&quot;Taoyuan District&quot;,&quot;Guishan District&quot;,&quot;Bade District&quot;,&quot;Daxi District&quot;,&quot;Fuxing District&quot;,&quot;Dayuan District&quot;,&quot;Luzhu District&quot;],[&quot;320&quot;,&quot;324&quot;,&quot;325&quot;,&quot;326&quot;,&quot;327&quot;,&quot;328&quot;,&quot;330&quot;,&quot;333&quot;,&quot;334&quot;,&quot;335&quot;,&quot;336&quot;,&quot;337&quot;,&quot;338&quot;]],[[&quot;East District&quot;,&quot;North District&quot;,&quot;Xiangshan District&quot;],[&quot;300&quot;,&quot;300&quot;,&quot;300&quot;]],[[&quot;Zhubei City&quot;,&quot;Hukou Township&quot;,&quot;Xinfeng Township&quot;,&quot;Xinpu Township&quot;,&quot;Guanxi Township&quot;,&quot;Qionglin Township&quot;,&quot;Baoshan Township&quot;,&quot;Zhudong Township&quot;,&quot;Wufeng Township&quot;,&quot;Hengshan Township&quot;,&quot;Jianshi Township&quot;,&quot;Beipu Township&quot;,&quot;Emei Township&quot;],[&quot;302&quot;,&quot;303&quot;,&quot;304&quot;,&quot;305&quot;,&quot;306&quot;,&quot;307&quot;,&quot;308&quot;,&quot;310&quot;,&quot;311&quot;,&quot;312&quot;,&quot;313&quot;,&quot;314&quot;,&quot;315&quot;]],[[&quot;Zhunan Township&quot;,&quot;Toufen Township&quot;,&quot;Sanwan Township&quot;,&quot;Nanzhuang Township&quot;,&quot;Shitan Township&quot;,&quot;Houlong Township&quot;,&quot;Tongxiao Township&quot;,&quot;Yuanli Township&quot;,&quot;Miaoli City&quot;,&quot;Zaoqiao Township&quot;,&quot;Touwu Township&quot;,&quot;Gongguan Township&quot;,&quot;Dahu Township&quot;,&quot;Tai’an Township&quot;,&quot;Tongluo Township&quot;,&quot;Sanyi Township&quot;,&quot;Xihu Township&quot;,&quot;Zhuolan Township&quot;],[&quot;350&quot;,&quot;351&quot;,&quot;352&quot;,&quot;353&quot;,&quot;354&quot;,&quot;356&quot;,&quot;357&quot;,&quot;358&quot;,&quot;360&quot;,&quot;361&quot;,&quot;362&quot;,&quot;363&quot;,&quot;364&quot;,&quot;365&quot;,&quot;366&quot;,&quot;367&quot;,&quot;368&quot;,&quot;369&quot;]],[[&quot;Central District&quot;,&quot;East District&quot;,&quot;South District&quot;,&quot;West District&quot;,&quot;North District&quot;,&quot;Beitun District&quot;,&quot;Xitun District&quot;,&quot;Nantun District&quot;,&quot;Taiping District&quot;,&quot;Dali District&quot;,&quot;Wufeng District&quot;,&quot;Wuri District&quot;,&quot;Fengyuan District&quot;,&quot;Houli District&quot;,&quot;Shigang District&quot;,&quot;Dongshi District&quot;,&quot;Heping District&quot;,&quot;Xinshe District&quot;,&quot;Tanzi District&quot;,&quot;Daya District&quot;,&quot;Shengang District&quot;,&quot;Dadu District&quot;,&quot;ShaluDistrict&quot;,&quot;Longjing District&quot;,&quot;Wuqi District&quot;,&quot;Qingshui District&quot;,&quot;Dajia District&quot;,&quot;Waipu District&quot;,&quot;Da’an District&quot;],[&quot;400&quot;,&quot;401&quot;,&quot;402&quot;,&quot;403&quot;,&quot;404&quot;,&quot;406&quot;,&quot;407&quot;,&quot;408&quot;,&quot;411&quot;,&quot;412&quot;,&quot;413&quot;,&quot;414&quot;,&quot;420&quot;,&quot;421&quot;,&quot;422&quot;,&quot;423&quot;,&quot;424&quot;,&quot;426&quot;,&quot;427&quot;,&quot;428&quot;,&quot;429&quot;,&quot;432&quot;,&quot;433&quot;,&quot;434&quot;,&quot;435&quot;,&quot;436&quot;,&quot;437&quot;,&quot;438&quot;,&quot;439&quot;]],[[&quot;Changhua City&quot;,&quot;Fenyuan Township&quot;,&quot;Huatan Township&quot;,&quot;Xiushui Township&quot;,&quot;Lukang Township&quot;,&quot;Fuxing Township&quot;,&quot;Xianxi Township&quot;,&quot;Hemei Township&quot;,&quot;Shengang Township&quot;,&quot;Yuanlin Township&quot;,&quot;Shetou Township&quot;,&quot;Yongjing Township&quot;,&quot;Puxin Township&quot;,&quot;Xihu Township&quot;,&quot;Dacun Township&quot;,&quot;Puyan Township&quot;,&quot;Tianzhong Township&quot;,&quot;Beidou Township&quot;,&quot;Tianwei Township&quot;,&quot;Pitou Township&quot;,&quot;Xizhou Township&quot;,&quot;Zhutang Township&quot;,&quot;Erlin Township&quot;,&quot;Dacheng Township&quot;,&quot;Fangyuan Township&quot;,&quot;Ershui Township&quot;],[&quot;500&quot;,&quot;502&quot;,&quot;503&quot;,&quot;504&quot;,&quot;505&quot;,&quot;506&quot;,&quot;507&quot;,&quot;508&quot;,&quot;509&quot;,&quot;510&quot;,&quot;511&quot;,&quot;512&quot;,&quot;513&quot;,&quot;514&quot;,&quot;515&quot;,&quot;516&quot;,&quot;520&quot;,&quot;521&quot;,&quot;522&quot;,&quot;523&quot;,&quot;524&quot;,&quot;525&quot;,&quot;526&quot;,&quot;527&quot;,&quot;528&quot;,&quot;530&quot;]],[[&quot;Nantou City&quot;,&quot;Zhongliao Township&quot;,&quot;Caotun Township&quot;,&quot;Guoxing Township&quot;,&quot;Puli Township&quot;,&quot;Ren’ai Township&quot;,&quot;Mingjian Township&quot;,&quot;Jiji Township&quot;,&quot;Shuili Township&quot;,&quot;Yuchi Township&quot;,&quot;Xinyi Township&quot;,&quot;Zhushan Township&quot;,&quot;Lugu Township&quot;],[&quot;540&quot;,&quot;541&quot;,&quot;542&quot;,&quot;544&quot;,&quot;545&quot;,&quot;546&quot;,&quot;551&quot;,&quot;552&quot;,&quot;553&quot;,&quot;555&quot;,&quot;556&quot;,&quot;557&quot;,&quot;558&quot;]],[[&quot;East District&quot;,&quot;West District&quot;],[&quot;600&quot;,&quot;600&quot;]],[[&quot;FanluTownship&quot;,&quot;Meishan Township&quot;,&quot;Zhuqi Township&quot;,&quot;Alishan Township&quot;,&quot;Zhongpu Township&quot;,&quot;Dapu Township&quot;,&quot;Shuishang Township&quot;,&quot;Lucao Township&quot;,&quot;Taibao City&quot;,&quot;Puzi City&quot;,&quot;Dongshi Township&quot;,&quot;Liujiao Township&quot;,&quot;Xingang Township&quot;,&quot;Minxiong Township&quot;,&quot;Dalin Township&quot;,&quot;Xikou Township&quot;,&quot;Yizhu Township&quot;,&quot;Budai Township&quot;],[&quot;602&quot;,&quot;603&quot;,&quot;604&quot;,&quot;605&quot;,&quot;606&quot;,&quot;607&quot;,&quot;608&quot;,&quot;611&quot;,&quot;612&quot;,&quot;613&quot;,&quot;614&quot;,&quot;615&quot;,&quot;616&quot;,&quot;621&quot;,&quot;622&quot;,&quot;623&quot;,&quot;624&quot;,&quot;625&quot;]],[[&quot;Dounan Township&quot;,&quot;Dapi Township&quot;,&quot;Huwei Township&quot;,&quot;Tuku Township&quot;,&quot;Baozhong Township&quot;,&quot;Dongshi Township&quot;,&quot;Taixi Township&quot;,&quot;Lunbei Township&quot;,&quot;Mailiao Township&quot;,&quot;Douliu City&quot;,&quot;Linnei Township&quot;,&quot;Gukeng Township&quot;,&quot;Citong Township&quot;,&quot;Xiluo Township&quot;,&quot;Erlun Township&quot;,&quot;Beigang Township&quot;,&quot;Shuilin Township&quot;,&quot;Kouhu Township&quot;,&quot;Sihu Township&quot;,&quot;Yuanchang Township&quot;],[&quot;630&quot;,&quot;631&quot;,&quot;632&quot;,&quot;633&quot;,&quot;634&quot;,&quot;635&quot;,&quot;636&quot;,&quot;637&quot;,&quot;638&quot;,&quot;640&quot;,&quot;643&quot;,&quot;646&quot;,&quot;647&quot;,&quot;648&quot;,&quot;649&quot;,&quot;651&quot;,&quot;652&quot;,&quot;653&quot;,&quot;654&quot;,&quot;655&quot;]],[[&quot;West Central District&quot;,&quot;East District&quot;,&quot;South District&quot;,&quot;North District&quot;,&quot;Anping District&quot;,&quot;Annan District&quot;,&quot;Yongkang District&quot;,&quot;Guiren District&quot;,&quot;Xinhua District&quot;,&quot;Zuozhen District&quot;,&quot;Yujing District&quot;,&quot;Nanxi District&quot;,&quot;Nanhua District&quot;,&quot;Rende District&quot;,&quot;Guanmiao District&quot;,&quot;Longqi District&quot;,&quot;Guantian District&quot;,&quot;Madou District&quot;,&quot;Jiali District&quot;,&quot;Xigang District&quot;,&quot;Qigu District&quot;,&quot;Jiangjun District&quot;,&quot;Xuejia District&quot;,&quot;Beimen District&quot;,&quot;Xinying District&quot;,&quot;Houbi District&quot;,&quot;Baihe District&quot;,&quot;Dongshan District&quot;,&quot;Liujia District&quot;,&quot;Xiaying District&quot;,&quot;Liuying District&quot;,&quot;Yanshui District&quot;,&quot;Shanhua District&quot;,&quot;Danei District&quot;,&quot;Shanshang District&quot;,&quot;Xinshi District&quot;,&quot;Anding District&quot;],[&quot;700&quot;,&quot;701&quot;,&quot;702&quot;,&quot;704&quot;,&quot;708&quot;,&quot;709&quot;,&quot;710&quot;,&quot;711&quot;,&quot;712&quot;,&quot;713&quot;,&quot;714&quot;,&quot;715&quot;,&quot;716&quot;,&quot;717&quot;,&quot;718&quot;,&quot;719&quot;,&quot;720&quot;,&quot;721&quot;,&quot;722&quot;,&quot;723&quot;,&quot;724&quot;,&quot;725&quot;,&quot;726&quot;,&quot;727&quot;,&quot;730&quot;,&quot;731&quot;,&quot;732&quot;,&quot;733&quot;,&quot;734&quot;,&quot;735&quot;,&quot;736&quot;,&quot;737&quot;,&quot;741&quot;,&quot;742&quot;,&quot;743&quot;,&quot;744&quot;,&quot;745&quot;]],[[&quot;Xinxing District&quot;,&quot;Qianjin District&quot;,&quot;Lingya District&quot;,&quot;Yancheng District&quot;,&quot;Gushan District&quot;,&quot;Qijin District&quot;,&quot;Qianzhen District&quot;,&quot;Sanmin District&quot;,&quot;Nanzi District&quot;,&quot;Xiaogang District&quot;,&quot;Zuoying District&quot;,&quot;Renwu District&quot;,&quot;Dashe District&quot;,&quot;Dongsha Islands&quot;,&quot;Nansha Islands&quot;,&quot;Gangshan District&quot;,&quot;Luzhu District&quot;,&quot;Alian District&quot;,&quot;Tianliao District&quot;,&quot;Yanchao District&quot;,&quot;Qiaotou District&quot;,&quot;Ziguan District&quot;,&quot;Mituo District&quot;,&quot;Yong’an District&quot;,&quot;Hunei District&quot;,&quot;Fengshan District&quot;,&quot;Daliao District&quot;,&quot;Linyuan District&quot;,&quot;Niaosong District&quot;,&quot;Dashu District&quot;,&quot;Qishan District&quot;,&quot;Meinong District&quot;,&quot;Liugui District&quot;,&quot;Neimen District&quot;,&quot;Shanlin District&quot;,&quot;Jiaxian District&quot;,&quot;Taoyuan District&quot;,&quot;Namaxia District&quot;,&quot;Maolin District&quot;,&quot;Qieding District&quot;],[&quot;800&quot;,&quot;801&quot;,&quot;802&quot;,&quot;803&quot;,&quot;804&quot;,&quot;805&quot;,&quot;806&quot;,&quot;807&quot;,&quot;811&quot;,&quot;812&quot;,&quot;813&quot;,&quot;814&quot;,&quot;815&quot;,&quot;817&quot;,&quot;819&quot;,&quot;820&quot;,&quot;821&quot;,&quot;822&quot;,&quot;823&quot;,&quot;824&quot;,&quot;825&quot;,&quot;826&quot;,&quot;827&quot;,&quot;828&quot;,&quot;829&quot;,&quot;830&quot;,&quot;831&quot;,&quot;832&quot;,&quot;833&quot;,&quot;840&quot;,&quot;842&quot;,&quot;843&quot;,&quot;844&quot;,&quot;845&quot;,&quot;846&quot;,&quot;847&quot;,&quot;848&quot;,&quot;849&quot;,&quot;851&quot;,&quot;852&quot;]],[[&quot;Magong City&quot;,&quot;Xiyu Township&quot;,&quot;Wang’an Township&quot;,&quot;Qimei Township&quot;,&quot;Baisha Township&quot;,&quot;Huxi Township&quot;],[&quot;880&quot;,&quot;881&quot;,&quot;882&quot;,&quot;883&quot;,&quot;884&quot;,&quot;885&quot;]],[[&quot;Jinsha Township&quot;,&quot;Jinhu Township&quot;,&quot;Jinning Township&quot;,&quot;Jincheng Township&quot;,&quot;Lieyu Township&quot;,&quot;Wuqiu Township&quot;],[&quot;890&quot;,&quot;891&quot;,&quot;892&quot;,&quot;893&quot;,&quot;894&quot;,&quot;896&quot;]],[[&quot;Pingtung City&quot;,&quot;Sandimen Township&quot;,&quot;Wutai Township&quot;,&quot;Majia Township&quot;,&quot;Jiuru Township&quot;,&quot;Ligang Township&quot;,&quot;Gaoshu Township&quot;,&quot;Yanpu Township&quot;,&quot;Changzhi Township&quot;,&quot;Linluo Township&quot;,&quot;Zhutian Township&quot;,&quot;Neipu Township&quot;,&quot;Wandan Township&quot;,&quot;Chaozhou Township&quot;,&quot;Taiwu Township&quot;,&quot;Laiyi Township&quot;,&quot;Wanluan Township&quot;,&quot;Kanding Township&quot;,&quot;Xinpi Township&quot;,&quot;Nanzhou Township&quot;,&quot;Linbian Township&quot;,&quot;Donggang Township&quot;,&quot;Liuqiu Township&quot;,&quot;Jiadong Township&quot;,&quot;Xinyuan Township&quot;,&quot;Fangliao Township&quot;,&quot;Fangshan Township&quot;,&quot;Chunri Township&quot;,&quot;Shizi Township&quot;,&quot;Checheng Township&quot;,&quot;Mudan Township&quot;,&quot;Hengchun Township&quot;,&quot;Manzhou Township&quot;],[&quot;900&quot;,&quot;901&quot;,&quot;902&quot;,&quot;903&quot;,&quot;904&quot;,&quot;905&quot;,&quot;906&quot;,&quot;907&quot;,&quot;908&quot;,&quot;909&quot;,&quot;911&quot;,&quot;912&quot;,&quot;913&quot;,&quot;920&quot;,&quot;921&quot;,&quot;922&quot;,&quot;923&quot;,&quot;924&quot;,&quot;925&quot;,&quot;926&quot;,&quot;927&quot;,&quot;928&quot;,&quot;929&quot;,&quot;931&quot;,&quot;932&quot;,&quot;940&quot;,&quot;941&quot;,&quot;942&quot;,&quot;943&quot;,&quot;944&quot;,&quot;945&quot;,&quot;946&quot;,&quot;947&quot;]],[[&quot;Taitung City&quot;,&quot;Ludao Township&quot;,&quot;Lanyu Township&quot;,&quot;Yanping Township&quot;,&quot;Beinan Township&quot;,&quot;Luye Township&quot;,&quot;Guanshan Township&quot;,&quot;Haiduan Township&quot;,&quot;Chishang Township&quot;,&quot;Donghe Township&quot;,&quot;Chenggong Township&quot;,&quot;Changbin Township&quot;,&quot;Taimali Township&quot;,&quot;Jinfeng Township&quot;,&quot;Dawu Township&quot;,&quot;Daren Township&quot;],[&quot;950&quot;,&quot;951&quot;,&quot;952&quot;,&quot;953&quot;,&quot;954&quot;,&quot;955&quot;,&quot;956&quot;,&quot;957&quot;,&quot;958&quot;,&quot;959&quot;,&quot;961&quot;,&quot;962&quot;,&quot;963&quot;,&quot;964&quot;,&quot;965&quot;,&quot;966&quot;]],[[&quot;Hualien City&quot;,&quot;Xincheng Township&quot;,&quot;Xiulin Township&quot;,&quot;Ji’an Township&quot;,&quot;Shoufeng Township&quot;,&quot;Fenglin Township&quot;,&quot;Guangfu Township&quot;,&quot;Fengbin Township&quot;,&quot;Ruisui Township&quot;,&quot;Wanrong Township&quot;,&quot;Yuli Township&quot;,&quot;Zhuoxi Township&quot;,&quot;Fuli Township&quot;],[&quot;970&quot;,&quot;971&quot;,&quot;972&quot;,&quot;973&quot;,&quot;974&quot;,&quot;975&quot;,&quot;976&quot;,&quot;977&quot;,&quot;978&quot;,&quot;979&quot;,&quot;981&quot;,&quot;982&quot;,&quot;983&quot;]],[[&quot;Nangan Township&quot;,&quot;Beigan Township&quot;,&quot;Juguang Township&quot;,&quot;Dongyin Township&quot;],[&quot;209&quot;,&quot;210&quot;,&quot;211&quot;,&quot;212&quot;]]]};function e(i,t){for(var n=0;n&lt;t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,&quot;value&quot;in s&amp;&amp;(s.writable=!0),Object.defineProperty(i,s.key,s)}}var a=function(){function i(){var t=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:{},n=arguments.length&gt;1&amp;&amp;void 0!==arguments[1]?arguments[1]:[],s=arguments.length&gt;2&amp;&amp;void 0!==arguments[2]?arguments[2]:{};return function(i,t){if(!(i instanceof t))throw new TypeError(&quot;Cannot call a class as a function&quot;)}(this,i),n.length&amp;&amp;this.checkOptionsRequired(t,n),this.setOptionsExtend(t,s)}var t,n,s;return t=i,(n=[{key:&quot;checkOptionsRequired&quot;,value:function(i,t){var n=&quot;&quot;;if(i=i||{},Object.keys(t).forEach(function(t){i.hasOwnProperty(t)||(n+=t+&quot;,&quot;)}),n)throw&quot;缺少參數: &quot;+n}},{key:&quot;setOptionsExtend&quot;,value:function(i,t){if(!i)return t;var n;for(n in i)t[n]=i[n];return t}}])&amp;&amp;e(t.prototype,n),s&amp;&amp;e(t,s),i}();t.default=h;function h(){var i=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:{};this.VERSION=&quot;2.0.0&quot;,this.ROLE_ATTR_NAME=&quot;tw-city-selector&quot;;var t=i.length?[&quot;el&quot;]:[];return this.options=new a(i,t,{el:null,elCounty:null,elDistrict:null,elZipcode:null,only:null,except:null,disabled:!1,hasZipcode:!1,hiddenZipcode:!1,countyValue:null,districtValue:null,countyClassName:&quot;county&quot;,countyFieldName:&quot;county&quot;,districtClassName:&quot;district&quot;,districtFieldName:&quot;district&quot;,zipcodeClassName:&quot;zipcode&quot;,zipcodeFieldName:&quot;zipcode&quot;,lang:&quot;zh-tw&quot;,standardWords:!1,bootstrapStyle:!1}),setTimeout(function(){(function(){if(this.options.el)return this.el=u(this.options.el),this.elCounty=u(this.options.elCounty,this.el),this.elDistrict=u(this.options.elDistrict,this.el),this.elZipcode=u(this.options.elZipcode,this.el),this.elCounty&amp;&amp;this.elCounty.dataset.value&amp;&amp;(this.options.countyValue=this.elCounty.dataset.value,this.options.districtValue=this.elDistrict.dataset.value),r.call(this);var i=document.querySelectorAll(&quot;[role=&quot;+this.ROLE_ATTR_NAME+&quot;]&quot;);return Array.prototype.forEach.call(i,function(i){var t=JSON.parse(JSON.stringify(this));return t.el=i,t.elCounty=null,t.elDistrict=null,t.elZipcode=null,t=function(){return this.options.only=this.el.getAttribute(&quot;data-only&quot;)?this.el.getAttribute(&quot;data-only&quot;).replace(/\s/g,&quot;&quot;).split(&quot;,&quot;):null,this.options.except=this.el.getAttribute(&quot;data-except&quot;)?this.el.getAttribute(&quot;data-except&quot;).replace(/\s/g,&quot;&quot;).split(&quot;,&quot;):null,this.options.countyValue=this.el.getAttribute(&quot;data-county-value&quot;),this.options.districtValue=this.el.getAttribute(&quot;data-district-value&quot;),this.options.hasZipcode=null!=this.el.getAttribute(&quot;data-has-zipcode&quot;),this.options.hiddenZipcode=null!=this.el.getAttribute(&quot;data-hidden-zipcode&quot;),this.options.disabled=null!=this.el.getAttribute(&quot;data-disabled&quot;),this.options.standardWords=null!=this.el.getAttribute(&quot;data-standard-words&quot;),this.options.bootstrapStyle=null!=this.el.getAttribute(&quot;data-bootstrap-style&quot;),this}.call(t),r.call(t)},this),i}).call(this)}.bind(this),0),this}function r(){return this.options.lang&amp;&amp;&quot;en-us&quot;===this.options.lang?this.data=o:this.data=s,function(){var i=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]&amp;&amp;arguments[0],t=i?&quot;台&quot;:&quot;臺&quot;,n=i?&quot;臺&quot;:&quot;台&quot;;this.data.counties=this.data.counties.map(function(i){return i.includes(t)?i.replace(t,n):i}),this.data.districts.forEach(function(i,s,o){o[s][0]=i[0].map(function(i){return i.includes(t)?i.replace(t,n):i})})}.call(this,this.options.standardWords),function(){var i=document.createDocumentFragment();if(!this.elCounty){var t=document.createElement(&quot;select&quot;);this.elCounty=t,i.appendChild(this.elCounty)}this.elCounty.classList.add(this.options.countyClassName),this.elCounty.name=this.options.countyFieldName,this.options.disabled&amp;&amp;this.elCounty.setAttribute(&quot;disabled&quot;,!0);if(function(){var i=this.elCounty;this.options.lang&amp;&amp;&quot;en-us&quot;===this.options.lang?i.options.add(new Option(&quot;Select County/City&quot;,&quot;&quot;)):i.options.add(new Option(&quot;選擇縣市&quot;,&quot;&quot;));for(var t=function(){var i=this.options.only;return&quot;string&quot;==typeof i?i:Array.isArray(i)?i.map(function(i){var t=i.indexOf(&quot;@&quot;);return-1===t?i:i.substring(0,t)}):null}.call(this),n=function(){var i=this.options.except;return&quot;string&quot;==typeof i?i:Array.isArray(i)?i.filter(function(i){return-1===i.indexOf(&quot;@&quot;)}):null}.call(this),s=0,o=this.data.counties.length;s&lt;o;s++)if(!(t&amp;&amp;-1===t.indexOf(this.data.counties[s])||n&amp;&amp;-1!==n.indexOf(this.data.counties[s]))){var e=new Option(this.data.counties[s],this.data.counties[s]);e.dataset.index=s,i.options.add(e)}return!0}.call(this),!this.elDistrict){var n=document.createElement(&quot;select&quot;);this.elDistrict=n,i.appendChild(this.elDistrict)}this.elDistrict.classList.add(this.options.districtClassName),this.elDistrict.name=this.options.districtFieldName,this.options.disabled&amp;&amp;this.elDistrict.setAttribute(&quot;disabled&quot;,!0);if(c.call(this),!this.elZipcode&amp;&amp;this.options.hasZipcode){var s=document.createElement(&quot;input&quot;);this.elZipcode=s,i.appendChild(this.elZipcode),this.elZipcode.type=this.options.hiddenZipcode?&quot;hidden&quot;:&quot;text&quot;,this.elZipcode.name=this.options.zipcodeFieldName,this.elZipcode.classList.add(this.options.zipcodeClassName),this.elZipcode.readOnly=!0,this.options.lang&amp;&amp;&quot;en-us&quot;===this.options.lang?this.elZipcode.placeholder=&quot;ZIP code&quot;:this.elZipcode.placeholder=&quot;郵遞區號&quot;,this.elZipcode.size=3,this.elZipcode.autocomplete=&quot;off&quot;,this.options.disabled&amp;&amp;this.elZipcode.setAttribute(&quot;disabled&quot;,!0)}this.el.appendChild(i)}.call(this),this.options.bootstrapStyle&amp;&amp;function(){var i=document.createDocumentFragment();this.elCounty.setAttribute(&quot;class&quot;,&quot;form-control&quot;),this.elDistrict.setAttribute(&quot;class&quot;,&quot;form-control&quot;),this.options.hasZipcode&amp;&amp;this.elZipcode.setAttribute(&quot;class&quot;,&quot;form-control&quot;);var t=document.createElement(&quot;div&quot;);t.setAttribute(&quot;class&quot;,&quot;form-group&quot;);var n=t.cloneNode();n.appendChild(this.elCounty),i.appendChild(n);var s=t.cloneNode();if(s.appendChild(this.elDistrict),i.appendChild(s),this.options.hasZipcode){var o=t.cloneNode();o.appendChild(this.elZipcode),i.appendChild(o)}this.el.appendChild(i)}.call(this),function(){var i=function(){var i=this.elCounty.querySelector(&quot;option:checked&quot;),t=i.getAttribute(&quot;data-index&quot;);c.call(this,t),this.options.hasZipcode&amp;&amp;(this.elZipcode.value=&quot;&quot;)}.bind(this);this.elCounty.onchange=i}.call(this),function(){var i=function(){var i=this.elDistrict.querySelector(&quot;option:checked&quot;),t=i.dataset.zipcode||&quot;&quot;;(this.options.hasZipcode||this.elZipcode)&amp;&amp;(this.elZipcode.value=t)}.bind(this);this.elDistrict.onchange=i}.call(this),l.call(this,this.options.countyValue,this.options.districtValue),this}function u(i,t){return i?i&amp;&amp;t?t.querySelector(i):document.querySelector(i):null}function c(){for(var i=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:null,t=this.elDistrict;t.firstChild;)t.removeChild(t.firstChild);if(this.options.lang&amp;&amp;&quot;en-us&quot;===this.options.lang?t.options.add(new Option(&quot;Select District&quot;,&quot;&quot;)):t.options.add(new Option(&quot;選擇區域&quot;,&quot;&quot;)),!i)return!0;for(var n=function(i){var t=this.options.only,n=&quot;string&quot;==typeof t;if(!n&amp;&amp;!Array.isArray(t))return null;n&amp;&amp;(t=[t]);var s=null;return t.forEach(function(t){if(-1!==t.indexOf(i)){var n=t.lastIndexOf(&quot;@&quot;);return-1!==n?s=t.substring(n+1).split(&quot;|&quot;):void 0}}),s}.call(this,this.elCounty.value),s=function(i){var t=this.options.except,n=&quot;string&quot;==typeof t;if(!n&amp;&amp;!Array.isArray(t))return null;n&amp;&amp;(t=[t]);var s=null;return t.forEach(function(t){if(-1!==t.indexOf(i)){var n=t.lastIndexOf(&quot;@&quot;);return-1!==n?s=t.substring(n+1).split(&quot;|&quot;):void 0}}),s}.call(this,this.elCounty.value),o=0,e=this.data.districts[i][0].length-1;o&lt;=e;o++)if(!(n&amp;&amp;-1===n.indexOf(this.data.districts[i][0][o])||s&amp;&amp;-1!==s.indexOf(this.data.districts[i][0][o]))){var a=new Option(this.data.districts[i][0][o],this.data.districts[i][0][o]);a.dataset.zipcode=this.data.districts[i][1][o],t.options.add(a)}return!0}function l(){var i=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:null,t=arguments.length&gt;1&amp;&amp;void 0!==arguments[1]?arguments[1]:null,n=document.createEvent(&quot;Event&quot;);n.initEvent(&quot;change&quot;,!0,!0),i&amp;&amp;(this.elCounty.value=i,this.elCounty.dispatchEvent(n)),t&amp;&amp;(this.elDistrict.value=t,this.elDistrict.dispatchEvent(n))}h.prototype.getVersion=function(){return console.log(&quot;Your tw-city-selector.js is v&quot;+this.VERSION),this},h.prototype.setValue=function(){var i=arguments.length&gt;0&amp;&amp;void 0!==arguments[0]?arguments[0]:null,t=arguments.length&gt;1&amp;&amp;void 0!==arguments[1]?arguments[1]:null;return l.call(this,i,t),this},h.prototype.reset=function(){return function(){this.elCounty.selectedIndex=0,c.call(this),this.options.hasZipcode&amp;&amp;(this.elZipcode.value=&quot;&quot;);return this}.call(this),this},String.prototype.includes||(String.prototype.includes=function(i,t){if(i instanceof RegExp)throw TypeError(&quot;first argument must not be a RegExp&quot;);return void 0===t&amp;&amp;(t=0),-1!==this.indexOf(i,t)})}]).default});</div></div></div><div class="react-code-text react-code-line-contents" style="min-height:auto"><div><div id="LC2" class="react-file-line html-div" data-testid="code-cell" data-line-number="2" style="position:relative">//# sourceMappingURL=tw-city-selector.js.map</div></div></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div><button hidden="" data-testid="hotkey-button" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button></section></div></div></div> <!-- --> <!-- --> </div></div></div><div class="Box-sc-g0xbh4-0"></div></main></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 aZrVR"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden=""></button></div> <!-- --> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA__">{"resolvedServerColorMode":"night"}</script></div>
</react-app>
</turbo-frame>



  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer width-full container-xl p-responsive" role="contentinfo">
  <h2 class='sr-only'>Footer</h2>

  <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
    <div class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
      <div class="mt-2 mt-lg-0 d-flex flex-items-center">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
          <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>        <span>
        &copy; 2023 GitHub, Inc.
        </span>
      </div>
    </div>

    <nav aria-label='Footer' class="col-12 col-lg-8">
      <h3 class='sr-only' id='sr-footer-heading'>Footer navigation</h3>
      <ul class="list-style-none d-flex flex-wrap col-12 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0" aria-labelledby='sr-footer-heading'>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
          <li class="mr-3 mr-lg-0"><a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
          <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
          <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
      </ul>
    </nav>
  </div>

  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-fg-muted"></span>
  </div>
</footer>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>
<template id="snippet-clipboard-copy-button-unpositioned">
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>


    <style>
      .user-mention[href$="/popnfresh234"] {
        color: var(--color-user-mention-fg);
        background-color: var(--color-user-mention-bg);
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
        padding: 0 2px;
      }
    </style>


    </div>

    <div id="js-global-screen-reader-notice" class="sr-only" aria-live="polite" ></div>
  </body>
</html>

