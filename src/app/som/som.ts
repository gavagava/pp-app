export type GxFontStylePart = 'Regular' | 'Bold' | 'Italic' | 'Underline' | 'Strikeout';
export type OdAttribute = 'Unknown' | 'Name' | 'Id' | 'Key' | 'Timestamp' | 'ClassId' | 'Descr';
export type OdFindAttribute = 'None' | 'Name' | 'Ident' | 'Key' | 'NameOrIdent';
export type PvtEvaluatorElementType = 'None' | 'Sum' | 'Avg' | 'Min' | 'Max' | 'Moda' | 'Median' | 'Disp' | 'StdDev' | 'Skewness' | 'Excess' | 'Razmah' | 'Var' | 'SQ' | 'Auto1' | 'HiD' | 'HiQ' | 'LoQ' | 'LoD' | 'DataSource' | 'CountNull' | 'CountNotNull' | 'Common';
export type EaxGridStylePart = 'Unknown' | 'Table' | 'FixedCorner' | 'TopHeader' | 'LeftHeader' | 'Internals' | 'Totals' | 'TotalsHeader' | 'ABC' | 'ABCHeader' | 'HighlightedCells' | 'ChangedCells' | 'VirtualCells' | 'Calcs' | 'InternalFormatConditions' | 'TotalsFormatConditions' | 'ABCFormatConditions' | 'RangeFormatConditions' | 'RangeCellStyles' | 'ABCTop' | 'ABCBottom' | 'Default' | 'ValueChange' | 'LastStyleTag';
export type LnTransformPeriodPart = 'None' | 'StartDate' | 'IdentificationEndDate' | 'EndDate' | 'ForecastStartDate';
export type TsAutoPeriodOption = 'IdentStartByFact' | 'IdentStartByIdentEnd' | 'IdentEndByFact' | 'ForecastEndByIdentEnd' | 'ForecastEndByFact' | 'IdentEndAsNow' | 'IdentStartAsNow' | 'ForecastEndAsNow' | 'IdentEndByFactStart' | 'IdentEndByIdentStart' | 'IdentStartByForecastEnd' | 'ForecastEndByIdentStart' | 'IdentStartByOwner' | 'IdentEndByOwner' | 'ForecastEndByOwner' | 'None';
export type StatDependenceType = 'Linear' | 'Quadratic' | 'Polynomial' | 'Compound' | 'Growth' | 'Logarithmic' | 'Hyperbolic' | 'Exponential' | 'Inverse' | 'Power' | 'Logistic' | 'SquareRoot' | 'LogParabolic';
export type EaxMapIndicatorType = 'Color' | 'Depth' | 'Bar' | 'Pie' | 'MarkerColor' | 'ArrowColor' | 'ArrowThickness';
export type BubbleChartDimension = 'X' | 'Y' | 'Radial' | 'Color';
export type EaxIndicatorType = 'Value' | 'Color' | 'Size';
export type EaxGridIndicatorType = 'Value' | 'BackgroundColor' | 'FontColor' | 'FontSize';
export type EaxChartIndicatorType = 'Value';
export type CubeSelControlOption = 'Default' | 'PermanentParamControl';
export type EaxRangeType = 'Internal' | 'LeftHeader' | 'TopHeader' | 'FixedCorner' | 'Legend' | 'Totals' | 'DimCalculates' | 'Pareto' | 'Rank' | 'HeaderDrillDown' | 'HeaderDrillUp' | 'HeaderGroup' | 'HeaderUngroup' | 'ParetoOthers' | 'TransformCalculates';
export type DimCalendarLvl = 'None' | 'Root' | 'Year' | 'HalfYear' | 'Quarter' | 'Month' | 'Day' | 'NineMonths' | 'Week';
export type SvcSamplingFlag = 'Unknown' | 'IsOn' | 'Memory' | 'Time' | 'Sql' | 'Cube' | 'Pivot' | 'Sheet' | 'Dim' | 'Rub' | 'Laner' | 'Report' | 'RepSheet' | 'RepDataIsl' | 'RepTabIsl' | 'Fore';
export type ElAccessAttribute = 'None' | 'ReadAccess' | 'WriteAccess' | 'DeleteAccess' | 'AccessAccess';
export type TriState = 0 | 1 | 2;
export type BinAttachmentDisposition = 0 | 1 | 2;
export type ItDataType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 259;
export type ItDataDomain = 0 | 1 | 2 | 3;
export type SortDirection = 'None' | 'Asc' | 'Desc';
export type ListOperation = 'None' | 'Get' | 'Set' | 'Add' | 'Remove' | 'Change';
export type TabRangeType = 'Cells' | 'Rows' | 'Columns' | 'Table' | 'None' | 'MultiPart';
export type SizeUnits = 'Mm' | 'Mkm' | 'DLU96' | 'Pt';
export type TreeRelation = 'Unknown' | 'FirstChild' | 'LastChild' | 'NextSibling' | 'PrevSibling' | 'FirstSibling' | 'LastSibling';
export type GxStringAlignment = 'Near' | 'Center' | 'Far';
export type GxVerticalAlignment = 'Top' | 'Center' | 'Bottom';
export type GxPaperFormat = 'Custom' | 'Letter' | 'LetterSmall' | 'Screen4x3' | 'Screen16x9' | 'Legal' | 'Paper10x14' | 'Paper11x17' | 'A1' | 'A2' | 'A3' | 'A4' | 'A4Small' | 'A5' | 'B4' | 'B5' | 'Envelope9' | 'Envelope10' | 'Envelope11' | 'Envelope12' | 'Envelope14' | 'EnvelopeC5' | 'EnvelopeC3' | 'EnvelopeC4' | 'EnvelopeC6' | 'EnvelopeC65' | 'EnvelopeB4' | 'EnvelopeB5' | 'EnvelopeB6' | 'Paper12x11' | 'LetterRotated' | 'A3Rotated' | 'A4Rotated' | 'A5Rotated' | 'A6' | 'A6Rotated' | 'B4JISRotated' | 'B5JISRotated' | 'B6JIS' | 'B6JISRotated' | 'A1Rotated' | 'A2Rotated';
export type GxPaperOrientation = 'Portrait' | 'Landscape';
export type GxPrintOrder = 'FromLeftToRight' | 'FromTopToBottom';
export type AuthenticationMode = 'AnyAccepted' | 'Password' | 'Domain' | 'Role' | 'DomainExplicit';
export type OAuthService = 'Twitter' | 'Google' | 'Facebook' | 'LinkedIn' | 'LiveJournal';
export type ObAuditOperationState = 'Default' | 'ForceDeny' | 'ForceAudit' | 'ForceDenyAndAudit';
export type SpecialObjectIndex = 'None' | 'DefaultTopobase' | 'DimensionImageList' | 'SharedParams' | 'CustomExtender' | 'Printers' | 'RdsDatabase' | 'DefaultDatabase' | 'DefaultModelSpace' | 'DefaultMobileApplication' | 'MetabaseCustomEvents' | 'TabSheetColumnsDimension' | 'TabSheetRowsDimension' | 'LastElement';
export type MbObjectsPath = 'Children' | 'ConsistOf' | 'RefsBy';
export type ObjectCopyOperation = 'CreateNew' | 'MoveToParent' | 'OverwriteExisting' | 'ChangeCurrent' | 'SharePointShare' | 'ShareMobile';
export type UiSelectionModeEnum = 'None' | 'SingleSelect' | 'SingleSelectNullable' | 'MultiSelect' | 'MultiSelectStandard';
export type MbSubjectType = 'Unknown' | 'User' | 'Group';
export type MbUserLockedState = 'Unknown' | 'NotLocked' | 'Locked' | 'LockedForever';
export type MbSecAbacAlg = 'DenyOverride' | 'PermitOverride' | 'FirstApplicable' | 'OnlyOneApplicable';
export type MbSecAbacOp = 'Empty' | 'Equal' | 'NotEqual' | 'Less' | 'Greater' | 'NotLess' | 'NotGreater';
export type MbSecAbacEffect = 'Permit' | 'Deny';
export type MbSecAbacDataType = 'NoData' | 'String' | 'Integer' | 'Float' | 'DateTime' | 'Blob' | 'Boolean' | 'Date' | 'Decimal';
export type MbSecAbacAttrType = 'User' | 'Group' | 'Global' | 'Class' | 'ClassId';
export type MbSecPredefinedPrivilege = 'None' | 'Login' | 'ChangePrivileges' | 'ChangeRights' | 'ReadAnyObject' | 'ReadJournal' | 'ClearJournal' | 'CreateUsers' | 'DisconnectUsers' | 'DbSecurityAdmin' | 'OpenNavObjects';
export type MbSecStationAccessType = 'Default' | 'Forbidden' | 'Allowed';
export type MbSecMandatoryAccessType = 'None' | 'Simple' | 'UseLevels';
export type MbSecControlMethodsCombineAlgorithm = 'Default' | 'Deny' | 'Permit';
export type MbSecDomainSubjectAddState = 0 | 1 | 2 | 4 | 16 | 32 | 64;
export type BiSearchMode = 'Disable' | 'MsObjects' | 'SourceData' | 'Full';
export type MbSecIsaModePromoteOptions = 0 | 1 | 2 | 4 | 8;
export type ApplyStateType = 'None' | 'Created' | 'Changed' | 'Error' | 'Deleted';
export type MbSecSnapshotExecuteCommand = 'Save' | 'Load';
export type MbSecSnapshotExecuteState = 'None' | 'Saving' | 'Loading' | 'Waiting' | 'Finished' | 'FinishedWithError';
export type MbSecSnapshotApplyOperationType = 'None' | 'Begin' | 'Read' | 'Prepare' | 'Descriptors' | 'Objects' | 'Security' | 'IsaUser' | 'UpdateUsers' | 'End';
export type SdApplyFlags = 0 | 1 | 2;
export type MsgQMessageType = 'Unknown' | 'Custom';
export type CustomObHandlerType = 'Default' | 'Open' | 'Edit';
export type MbUpdateReflectObjectsRightsType = 'AfterAll' | 'Ask' | 'AfterEach' | 'Never';
export type MbUpdateApplyOptions = 'None' | 'ReopenMetabase' | 'FlushCache' | 'SetCurrentStamp' | 'UpdateUsers' | 'EnableIgnoreErrors' | 'AutoCheckConflicts' | 'EnableIgnoreConflicts' | 'RequireResolveLinks' | 'SkipEnabled';
export type MbObjectAlterType = 'Default' | 'Recreate' | 'Restrict';
export type MbObjectUpdateType = 'Simple' | 'Unbound' | 'UnboundUpdate' | 'UnboundParent' | 'Bound' | 'BindById' | 'BindByKey' | 'UpdateOnly' | 'CreateOnly';
export type MbObjectUpdateConstraint = 'None' | 'CreateOnly' | 'UpdateOnly' | 'Inherit';
export type MbObjectUpdateBoundType = 'None' | 'ByKey' | 'ById' | 'Inherit';
export type MbObjectUpdateUnboundType = 'Bound' | 'Unbound' | 'UnboundUpdate' | 'UnboundParent';
export type MbUpdateAccessType = 'None' | 'Full' | 'Restricted' | 'PartAccess';
export type MbUpdateNodeType = 'Folder' | 'Object' | 'Sql' | 'DeleteObject' | 'DataObject' | 'Comment' | 'SecuritySubject' | 'SpecialObjects';
export type MbObjectUpdatePart = 'None' | 'Metadata' | 'SecurityDescriptor' | 'MetadataSD' | 'Data' | 'DataMetadata' | 'DataSD' | 'DataMetadataSD' | 'CreateDescriptor' | 'ReplaceSecurityDescriptor';
export type MbObjectUpdateOrder = 'Default' | 'BeforeParent' | 'AfterParent' | 'AfterParentData';
export type MbUpdateAccessTokenOptions = 'Default' | 'AssignFromObject' | 'Manual';
export type MbUpdateMethod = 'MetadataOnly' | 'DataOnly' | 'All' | 'None';
export type UpdateDataConstraintsHandlingType = 'Default' | 'Ask' | 'NoCheck' | 'KeepRecordUnchanged' | 'KeepTableUnchanged' | 'ErrorBreak';
export type ObjectUpdateDataBatchMode = 'Default' | 'Override' | 'InsertOnly' | 'UpdateOnly' | 'UpdateInsert';
export type MbUpdateObjectApplyStateValue = 'None' | 'CreateNew' | 'EditExisting' | 'Conflict' | 'ConflictKey' | 'ConflictId' | 'ConflictClassId' | 'ConflictObjectNotFound' | 'ConflictMissingMetadata' | 'ConflictVcsObject' | 'MandatoryConflict' | 'ConflictObjectVersion' | 'ConflictObjectOriginalMetabaseDifferent' | 'ConflictDependenciesObjectsVersion';
export type UpdateLoadMode = 'Replace' | 'Insert' | 'Update' | 'InsertUpdate' | 'NoUpdate' | 'Refresh' | 'Start' | 'Apply';
export type MbUpdateExecuteState = 'None' | 'Saving' | 'Loading' | 'Applying' | 'Waiting' | 'Finished' | 'FinishedWithError';
export type MbUpdateExecuteCommand = 'Save' | 'Load' | 'Apply';
export type MbUpdateProgressStage = 'Unknown' | 'Start' | 'Prepare' | 'Apply' | 'Finish' | 'LoadPrepare' | 'LoadApply' | 'LoadFinish' | 'AfterApply';
export type DmRelation = 'First' | 'Last' | 'Next' | 'Prev';
export type DmPredefinedAttribute = 'None' | 'Ident' | 'Name' | 'Order' | 'ImageIndex';
export type DmElRelative = 'Unknown' | 'Current' | 'All' | 'Children' | 'ChildrenRecursive' | 'Siblings' | 'Parent' | 'AllParents' | 'Level';
export type DmElSelectOp = 'Unknown' | 'Select' | 'Deselect' | 'Invert' | 'Set';
export type CubeExecFiltFuncPredef = 'None' | 'Top' | 'Filter' | 'Order' | 'NonEmpty';
export type CubeExecSetupUnitOpt = 'Default' | 'Normalized' | 'Natural' | 'Selected';
export type BasicAggregatorOper = 'None' | 'Sum' | 'Min' | 'Max' | 'Count' | 'CountNull' | 'CountAll' | 'ArithmeticalMean' | 'ActualMean' | 'First' | 'Last' | 'StandardDeviationP' | 'Median' | 'StandardDeviation' | 'UniqueValues';
export type EaxExistingDataPreserveMethod = 'None' | 'Always' | 'OnNull';
export type ChronologicalAggregatorOper = 'None' | 'Mean' | 'UniformDisaggregation';
export type StyleSheetType = 0 | 1;
export type StyleSheetConflictResolutionType = 'Replace' | 'Skip' | 'Add';
export type PvtDimPos = 'Unknown' | 'Left' | 'Top' | 'Fixed';
export type PvtAggregationOperation = 'None' | 'Sum' | 'DataSource' | 'Max' | 'Min' | 'Avg' | 'Facts' | 'Count' | 'CountNull' | 'CountAll' | 'ActualFirst' | 'ActualLast' | 'ActualMean' | 'StDeviationP' | 'Median' | 'StDeviation' | 'CountUnique';
export type PvtDimViewMode = 'DimInSlot' | 'LevInSlot' | 'Default';
export type EaxCalendarViewMode = 'Elements' | 'Levels' | 'Full';
export type PivotFilterType = 'None' | 'EqA' | 'NEqA' | 'GA' | 'LA' | 'GEqA' | 'LEqA' | 'NLAandNGB' | 'LAorGB' | 'Expression';
export type PivotFilterArea = 'Table' | 'Range';
export type PivotFilterElements = 'RowsAndColumns' | 'Rows' | 'Columns';
export type PvtTotalParentNamingMode = 'Source' | 'TotalMethod' | 'Combined';
export type PvtEvaluatorDimCalcType = 'Custom' | 'PercentToTotal' | 'PercentToSubTotal';
export type PvtValueArea = 'Table' | 'Row' | 'Column';
export type PvtRankType = 'None' | 'Asc' | 'Desc';
export type PvtValueType = 'Absolute' | 'Percentage' | 'Change' | 'Growth' | 'GrowthRate';
export type PvtSortKind = 'None' | 'Selection' | 'Row' | 'Column' | 'Dimension';
export type PvtHighlightType = 'None' | 'EqA' | 'NEqA' | 'GA' | 'LA' | 'GEqA' | 'LEqA' | 'NLAandNGB' | 'LAorGB' | 'ALargest' | 'ALowest';
export type PvtSortDiapason = 'Owner' | 'Level' | 'Group' | 'All';
export type PvtParetoKind = 'Percent' | 'Count' | 'Sum';
export type MergedNamingMode = 'UpperElement' | 'LowerElement' | 'CombinedElement';
export type EaxDataSourceFactOperationType = 'None' | 'Set' | 'Include' | 'Exclude';
export type EaxOpenCubeOpts = 'None' | 'DefaultView' | 'DataAndSelection';
export type EaxVisualSelectionAction = 'DeleteElements' | 'OnlyElements';
export type EaxHeaderTitleType = 'None' | 'Columns' | 'Rows' | 'Custom';
export type EaxHeaderTitleContentType = 'Dim' | 'Attr' | 'DimAndAttr';
export type EaxAdjustMode = 'None' | 'ColumnsThenRows' | 'RowsThenColumns' | 'Columns' | 'Rows' | 'Auto' | 'Simple';
export type EaxDataDisplayMode = 'Interactive' | 'Hidden' | 'Unhidden';
export type BarDockingEdge = 'Top' | 'Left' | 'Bottom' | 'Right' | 'None';
export type EaxAggregationFunction = 'Sum' | 'Average' | 'Min' | 'Max' | 'NONE' | 'Count' | 'CountNull' | 'CountAll' | 'ActualFirst' | 'ActualLast' | 'ActualMean' | 'StDeviationP' | 'Median' | 'StDeviation' | 'CountUnique';
export type EaxChartSingleCellRangeMode = 'EntireGrid' | 'SingleCell' | 'SingleRow' | 'SingleColumn';
export type EaxChartEvaluatedElements = 0 | 1 | 2;
export type EaxPointChartMode = 'XYY' | 'XYXY' | 'YXX' | 'YXYX';
export type EaxDrillMethod = 'Down' | 'Up' | 'ToFixed' | 'IntoFixed' | 'OutOfFixed' | 'DownThrough' | 'UpThrough';
export type EaxVisChangeSelectionMethod = 'Exclude' | 'KeepOnly' | 'Include';
export type EaxDataDrillType = 0 | 1 | 2 | 4 | 8 | 16 | 32;
export type BubbleTreeDimension = 'Color' | 'Size' | 'Value';
export type TreeMapDimension = 'Color' | 'Size' | 'Value' | 'Height';
export type EaxWindowsPosition = 'Maximized' | 'Vertical' | 'Horizontal';
export type TimeUnits = 'Seconds' | 'Minutes' | 'Hours';
export type CDOp = 'Up' | 'Down' | 'LevelUp' | 'LevelDown' | 'Add' | 'Remove' | 'Rename' | 'AddExisting';
export type EaxHierarchiesOp = 'Add' | 'AddAlterKey' | 'Clear' | 'ClearAll' | 'Item' | 'AddDependant' | 'AddRemoveDependant' | 'PushChangesToDimInstance' | 'ModifiedCDElemsOnly' | 'SaveHierarchyToMetabase';
export type EaxTransformationType = 'CalcTransformations' | 'SortTransformations' | 'FilterTransformations' | 'AddFilterTransformations';
export type EaxTransformationCalculationMode = 'AfterDataSourceExecute' | 'AfterCalcTotals' | 'AfterAggregation';
export type EaxTransformationsEditOp = 'Edit' | 'Cancel' | 'Save';
export type TabHyperlinkActionType = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type EaxTablePart = 'Table' | 'Corner' | 'Data' | 'LeftHeader' | 'LeftHeaderTotals' | 'TopHeader' | 'TopHeaderTotals' | 'Dimension' | 'Level' | 'Calculate' | 'DimElement';
export type EaxDataDrillMode = 'None' | 'Replace' | 'Invert' | 'Add';
export type TsStatisticsType = 'Sum' | 'Average' | 'Min' | 'Max' | 'Count' | 'NonEmptyCount' | 'EmptyCount' | 'Mode' | 'Median' | 'Disp' | 'StdDev' | 'Skew' | 'Kurt' | 'Range' | 'VarC' | 'SQ' | 'AutoCorrelation1' | 'HighDecile' | 'HighQuartile' | 'LowQuartile' | 'LowDecile' | 'NumbersCount' | 'R2' | 'AdjR2' | 'R2_2' | 'AdjR2_2' | 'Fstat' | 'ProbFstat' | 'LogL' | 'AIC' | 'SC' | 'SE' | 'Jstat' | 'ProbJstat' | 'DW' | 'DWLowerBound' | 'DWUpperBound' | 'HQcriterion' | 'AvgLogL' | 'McFaddenRsquared' | 'RestrLogL' | 'LRstatistic' | 'LRprobability' | 'ME' | 'MAE' | 'MSE' | 'SqMSE' | 'VE' | 'SEE' | 'JBStat' | 'SSR' | 'NumOfIter' | 'ObservationsCount' | 'AveDev' | 'InterquartileRange' | 'AutoCorrelation2' | 'DistinctCount' | 'Fstat_2' | 'ProbFstat_2' | 'ProbJBStat' | 'MaxAE' | 'MD' | 'SD';
export type TsStatisticsTreeNodeType = 'Statistics' | 'Category' | 'Custom';
export type TsStatisticsCategory = 'Common' | 'QualityCriteria' | 'DiagnosticCriteria' | 'ResidualsAnalysis' | 'Characteristics' | 'Variations' | 'Form' | 'OrderStatistics' | 'Dependence' | 'SamplingDescr' | 'InformationCriteria' | 'OtherStatistics';
export type EaxCustomStatisticsType = 'StartDate' | 'EndDate' | 'FStartDate' | 'LStartDate' | 'FEndDate' | 'LEndDate' | 'Scale';
export type EaxMode = 'MultiDimension' | 'Series';
export type TopobaseFormat = 'Svg' | 'Google' | 'Triangulate' | 'Vml' | 'Silverlight3D' | 'Sphere' | 'GRD' | 'TriangulateS';
export type EaxDimAttributesNamingMode = 'DimAttributesNamingSet' | 'DimAttributesNamingAppend' | 'DimAttributesNamingRemove';
export type EaxDataAreaSliceCalculationOptions = 'None' | 'TreatNullsAsZeros';
export type EaxGridRefreshPart = 'All' | 'WidthAndHeight' | 'TableStyle' | 'InternalStyle';
export type EaxFileFormat = 'Report' | 'Cube';
export type RdsAttributeKind = 'Predefined' | 'Common' | 'Linked' | 'Imported' | 'Calculated';
export type RdsPredefinedAttribute = 'None' | 'Key' | 'Name' | 'ParentKey' | 'Order' | 'Version' | 'InDate' | 'OutDate' | 'GUID' | 'ReadAccess' | 'WriteAccess' | 'DeleteAccess' | 'AccessAccess' | 'Hidden' | 'SourceDictionary' | 'SourceElement';
export type RdsConstraintType = 'Restrict' | 'Cascade' | 'None' | 'SetNull' | 'MakeHidden';
export type RdsReferenceDisplayFormat = 'Unknown' | 'ValueOnly' | 'KeyOnly' | 'KeyAndValue';
export type RdsPredefinedParam = 'None' | 'CurDate';
export type RdsDictTimeDependencyType = 'None' | 'TimeReadOnly' | 'TimeMutable';
export type RdsElementOperation = 'Unknown' | 'Insert' | 'Update' | 'Delete' | 'DeleteChildren';
export type ConditionOperation = 'Equal' | 'NotEqual' | 'Lesser' | 'LesserOrEqual' | 'Greater' | 'GreaterOrEqual' | 'Like';
export type CubeFactBindingAggregationType = 'None' | 'Sum' | 'Count' | 'Avg' | 'Min' | 'Max' | 'StdDev' | 'Median' | 'StdDevP' | 'CountDistinct' | 'Custom';
export type DtProviderType = 'Unknown' | 'Excel' | 'ExcelEx' | 'OleDb' | 'Access' | 'Xml' | 'Text' | 'Mb' | 'Unpivot' | 'Json' | 'Rest';
export type DtAutoFillMode = 'Strings' | 'DataRow' | 'Default';
export type DtExcelImexMode = 'Export' | 'Import' | 'Linked';
export type DtXmlFormat = 'FieldsAsNodes' | 'FieldsAsAttributes';
export type DtTextFmtType = 'Fixed' | 'Delimited';
export type AuthMethodRest = 'None' | 'Basic' | 'Digest' | 'Negotiate';
export type DbCommandType = 'Unknown' | 'Query' | 'Command' | 'StoredProc' | 'RefCursor';
export type DtbDalServerMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type CubeImportExecuteCommand = 'None' | 'Run' | 'RunAsync';
export type CubeImportResultType = 'Cube' | 'Rubricator';
export type CubeImportExecuteState = 'None' | 'Running' | 'Finished' | 'FinishedWithError' | 'Waiting';
export type TsFormulaKind = 'None' | 'Deterministic' | 'LinearRegression' | 'ExponentialSmoothing' | 'Arima' | 'User' | 'CurveEstimation' | 'SlideSmoothing' | 'MedianSmoothing' | 'HodrickPrescottFilter' | 'NonLinearEquations' | 'InterindustryBalance' | 'ErrorCorrectionModel' | 'ECMEquation' | 'NonLinearOptimization' | 'Aggregation' | 'NonLinearRegression' | 'GreyForecast' | 'LRXFilter' | 'CointegrationEquation' | 'BandpassFilter' | 'DetermAggregation' | 'SLS2' | 'FillGaps' | 'Cumulative' | 'Census2' | 'Collapse' | 'Interpolate' | 'Splice' | 'LinearEquations' | 'BinaryRegression' | 'PointwiseCollapse' | 'CrossDimensionAggregation' | 'PooledModel' | 'ValueAtRisk' | 'Census1' | 'R';
export type TsInversionType = 'None' | 'Log' | 'DLog' | 'PCH' | 'Diff' | 'Normalization' | 'Standardization' | 'RateOfChange' | 'PCHA' | 'TS' | 'SA' | 'OA';
export type TsInversionLag = 'PrecidingValue' | 'PrecidingYear' | 'EndOfPrecedingYear';
export type StatSeasonalityType = 'None' | 'Additive' | 'Multiplicative';
export type StatDependenceCriterionType = 'R2' | 'R2Adj' | 'RSS' | 'Serr';
export type StatInterceptMode = 'None' | 'ManualEstimate' | 'AutoEstimate';
export type StatCriterionType = 'SumOfSquareForecast' | 'MeanError' | 'MeanAbsError' | 'SumOfSquareError' | 'R2' | 'R2adj';
export type ECMType = 'NoTrendNoIntercept' | 'NoTrendIntercept' | 'TrendIntercept' | 'TrendTrend' | 'QTrendTrend';
export type ARMAInitType = 'Manual' | 'Auto';
export type ARMAEstimationMethodType = 'OLS' | 'GaussNewton' | 'LevenbergMarquardt' | 'ConjugateGradient';
export type StatSearchType = 'NoSearch' | 'Grid' | 'Optimal';
export type StatTrendType = 'None' | 'Linear' | 'Exponential' | 'Damped';
export type StatMissingDataMethod = 'SampleAverage' | 'NPointsAverage' | 'PrevValue' | 'LinInterpolation' | 'LinTrend' | 'AnyValue' | 'Casewise' | 'Geometric' | 'SpecifiedValue' | 'Spline' | 'Pattern' | 'Overlay' | 'GrowthRate' | 'PreviousGrowthRate' | 'SucceedingValue' | 'SucceedingGrowthRate' | 'None';
export type TsVarKind = 'Serie' | 'Input' | 'Output';
export type TsVarSourceKind = 'LanerSerie';
export type TsTermSourceKind = 'VarSource' | 'VarSlice';
export type TsMethodModifyType = 'Replace' | 'Update' | 'Extend';
export type MsDiagnosticTestType = 'OmittedVariables' | 'RedundantVariables' | 'SerialCorellationLM' | 'WhiteHeteroskedasticity' | 'RamseyResset' | 'Chow';
export type ChowTestType = 'BreakPoint' | 'Forecast';
export type StatOptimizationMethod = 'LevenbergMarquardt' | 'QuasiNewton';
export type TsCumulativeMethodType = 'Average' | 'Max' | 'Min' | 'Multiply' | 'StDev' | 'Sum' | 'Median';
export type TsSpliceType = 'Ratio' | 'Butt' | 'Pch';
export type TsSpliceDirection = 'Both' | 'Backward' | 'Forward';
export type HPSmoothingParameterModeType = 'EditDirectly' | 'SetByFrequencyRule';
export type TsBPFOutputType = 'CycleSeries' | 'NonCyclicalSeries';
export type StatTraidingDaysAdjustmentType = 'No' | 'NotApplied' | 'Yes' | 'Auto';
export type StatCensus2HolidaysAdjustmentType = 'None' | 'Easter' | 'All' | 'Factors';
export type TsCensus2OutputType = 'B1' | 'D10' | 'D11' | 'D12' | 'D13';
export type TsInterpolateType = 'Repeat' | 'Prorate' | 'Linear' | 'Geometric' | 'Spline' | 'Lagrange' | 'Polynomial' | 'Pattern' | 'First' | 'Last';
export type TsPatternType = 'Average' | 'First' | 'Last';
export type TsAgregationMethodType = 'Sum' | 'Min' | 'Max' | 'Average' | 'SumSq' | 'AveDev' | 'DevSq' | 'GeoMean' | 'HarMean' | 'Kurt' | 'Median' | 'Skew' | 'StDev' | 'StDevP' | 'Dispersion' | 'DispersionP' | 'WeightedSum' | 'WeightedAverage' | 'AveragePch' | 'AveragePchYOY' | 'WeightedAveragePch' | 'WeightedAveragePchYoY' | 'AverageDLog' | 'AverageDLogYOY' | 'WeightedAverageDLog' | 'WeightedAverageDLogYoY' | 'MedianPch' | 'MedianPchYOY' | 'Mode' | 'NumberOfObservations' | 'NumberOfMissingValues' | 'Weights' | 'Percentile' | 'CompositionRelevance' | 'WeightedGeoAverage';
export type TsCollapseType = 'Total' | 'Average' | 'Minimum' | 'Maximum' | 'First' | 'Last' | 'Range' | 'Spread';
export type TsCensus1OutputType = 'MA' | 'RD' | 'S' | 'SA' | 'TC' | 'I';
export type LinearEqSolutionType = 'InvMatrix' | 'GaussMethod';
export type NonLinearEquationsType = 'HMethod' | 'MinErrorMethod' | 'NewtonMethod' | 'IterationsMethod' | 'MinErrorGaussNewtonMethod';
export type MsCalcType = 'Pointwise' | 'Serie';
export type MsCalcDirection = 'Forward' | 'Backward';
export type HieFilterMode = 'All' | 'LightWeight' | 'None';
export type LnColumnType = 'Attribute' | 'Inversion' | 'Database' | 'Scenario' | 'Name';
export type LnDatabaseColumnText = 'Name' | 'Path';
export type LnSerieKind = 'Source' | 'Calculate' | 'Group' | 'CalculateGroup' | 'Derived' | 'UserGroup';
export type LnDataDisplayType = 'CalculatedValues' | 'SourceValues';
export type LnSerieFlags = 1 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
export type LnOptionState = 'OnOption' | 'OffOption' | 'Default';
export type LnSuppressEmptyArea = 'SerieBounds' | 'FullSerie';
export type LnStatisticType = 'R2' | 'AdjR2' | 'Fstat' | 'ProbFstat' | 'LogL' | 'AIC' | 'SC' | 'SE' | 'DW' | 'DWLowerBound' | 'DWUpperBound' | 'ME' | 'MAE' | 'MSE' | 'SqMSE' | 'VE' | 'SEE' | 'Min' | 'Max' | 'Average' | 'Median' | 'Mode' | 'StDev' | 'Dispersion' | 'StartDate' | 'EndDate' | 'FStartDate' | 'LStartDate' | 'FEndDate' | 'LEndDate' | 'ObservCnt' | 'EmptyCnt' | 'Scale' | 'Skew' | 'Kurt' | 'ObsCount';
export type WbkChartType = 'Simple' | 'StatMethod' | 'DetermAggregation' | 'SpliceMethod';
export type WbkChartSerieType = 'Simple' | 'Factor' | 'Fact' | 'Modeling' | 'Forecast' | 'Residuals' | 'UpperConfidenceLevel' | 'LowerConfidenceLevel' | 'DUpperConfidenceLevel' | 'DLowerConfidenceLevel' | 'B01' | 'D10' | 'D11' | 'D12' | 'D13' | 'Aggregation' | 'Factors' | 'Weights' | 'CompositionRelevance';
export type WbkValidationSheetState = 'On' | 'Off' | 'Deleted';
export type FrResultType = 'Unknown' | 'Char' | 'String' | 'Integer' | 'Real' | 'Date' | 'Boolean' | 'Matrix' | 'Variant' | 'Object' | 'RealArray';
export type FrMethodType = 'Arithmetic' | 'Pointwise' | 'Serie';
export type LnSerieOperation = 'None' | 'CreateCopy';
export type SchedulerTaskPeriodType = 'None' | 'Daily' | 'Weekly' | 'Monthly' | 'OneTimeOnly' | 'Timely';
export type SchedulerTaskPeriodOneTimeStartMode = 'Queued' | 'Immediate' | 'ByTime' | 'OnLogon';
export type SchedulerTaskType = 'Unknown' | 'ExecuteSub' | 'CalculateCube' | 'CalculateReport' | 'ExecuteETL' | 'CalculateModel' | 'ExecuteNETMethod' | 'CalculateMDCalculation' | 'PubMobApp';
export type SchedulerTaskState = 'Inactive' | 'Ready' | 'Executing' | 'Succeeded' | 'Failed';
export type EtlObjectType = 'PlainDataSource' | 'PlainDataDestination' | 'PlainDataJoin' | 'PlainDataUnion' | 'PlainDataSplit' | 'PlainDataDeduplicate' | 'PlainDataGroup' | 'PlainDataFilter' | 'PlainDataSort' | 'PlainDataMapper' | 'PlainDataUser' | 'PlainDataXmlParser' | 'PlainDataFixedUser' | 'MDFilter' | 'CodeBlock' | 'SQLCommandBlock' | 'FixedCodeBlock' | 'KeyGenerator' | 'Constant' | 'PlainLink' | 'PlainDataMetabaseProvider' | 'PlainDataAccessProvider' | 'PlainDataExcelProvider' | 'PlainDataExcelConsumer' | 'PlainDataDbaseProvider' | 'PlainDataParadoxProvider' | 'PlainDataXmlProvider' | 'PlainDataWebProvider' | 'PlainDataTextProvider' | 'PlainDataOleDbProvider' | 'PlainDataUserProvider' | 'PlainDataVfpProvider' | 'PlainDataExcelProviderEx' | 'PlainDataRdsProvider' | 'PlainDataFixedUserProvider' | 'PlainDataJsonProvider' | 'PlainDataRestProvider' | 'PlainDataMetabaseConsumer' | 'PlainDataAccessConsumer' | 'PlainDataDbaseConsumer' | 'PlainDataXmlConsumer' | 'PlainDataTextConsumer' | 'PlainDataOleDbConsumer' | 'PlainDataUserConsumer' | 'PlainDataVfpConsumer' | 'PlainDataSqlCommandConsumer' | 'PlainDataCopy' | 'PlainDataExcelConsumerEx' | 'PlainDataRdsConsumer' | 'PlainDataCubeConsumer' | 'PlainDataFixedUserConsumer' | 'PlainDataJsonConsumer';
export type EtlActionOnProblem = 'None' | 'Abort' | 'DiscardInvalidRecords' | 'DiscardRecordsInTransaction';
export type EtlTaskExecuteCommand = 'None' | 'Run' | 'RunAsync';
export type EtlTaskExecuteState = 'None' | 'Running' | 'Finished' | 'FinishedWithError';
export type PrxSheetType = 'Table' | 'Document';
export type EaxDataAreaSliceType = 'Pivot' | 'Laner';
export type EaxObjectType = 'None' | 'Grid' | 'Chart' | 'Map' | 'BubbleChart' | 'Statistics' | 'Speedometer' | 'BubbleTree' | 'TreeMap' | 'MapChart';
export type PrxDataIslandPart = 'DataOnly' | 'ColumnsHeader' | 'NoRowsHeader' | 'RowsHeader' | 'NoColumnsHeader' | 'Full';
export type PrxAdjustMode = 'Default' | 'ColumnsThenRows' | 'RowsThenColumns' | 'None' | 'Columns' | 'Rows';
export type PrxDataIslandHeaderBehaviour = 'Fixed' | 'Capture' | 'Insert';
export type PrxControlPanelPosition = 'None' | 'Left' | 'Top' | 'Right' | 'Bottom';
export type TabObjectMovementModeEnum = 0 | 1 | 2 | 3 | 4;
export type TabNumberStyleEnum = 0 | 1 | 2 | 3 | 4;
export type TabFootnotesLocationEnum = 0 | 1;
export type TabFootnotesNumberingRuleEnum = 0 | 1;
export type TabBorderStyleEnum = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TabBorderWeightEnum = -1 | 0 | 1 | 2 | 3;
export type TabBorderIndexEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TabFormatAlignmentEnum = -1 | 0 | 1 | 2 | 3 | 4;
export type TabFormatLayoutEnum = -1 | 0 | 1 | 2;
export type TabFormatWordWrapEnum = -1 | 0 | 1 | 2;
export type TabAccessRightsEnum = -1 | 0 | 1 | 2 | 3;
export type TabActivationEditorModeEnum = -1 | 0 | 1 | 2;
export type TabHyperlinkTarget = -1 | 0 | 1 | 2 | 3;
export type TabConditionType = 'Values' | 'CellContent' | 'RankValues' | 'Average' | 'Duplicate' | 'Formula' | 'Growth' | 'Scale' | 'Extended';
export type TabCondPredefinedGradientStyle = 'GreenYellowRed' | 'BlueYellowRed' | 'YellowRed' | 'YellowGreen' | 'GreenYellow' | 'RedYellow' | 'RedYellowBlue' | 'RedYellowGreen';
export type TabCondPredefinedDataBarStyle = 'Blue' | 'Green' | 'Red' | 'Yellow' | 'LightBlue' | 'Purple';
export type TabConditionIconType = 'Circles' | 'CircleFillB' | 'CircleFillC' | 'ArrowsB' | 'ArrowsC' | 'BarFillB' | 'BarFillC' | 'Cylinders' | 'Flags1' | 'Flags2' | 'Triangles' | 'Symbols' | 'Arrows' | 'Arrows2';
export type TabConditionPredefinedScaleStyle = 'RedGreen' | 'GreenRed' | 'BlueGradient' | 'GreenGradient' | 'RedGradient' | 'GreyGradient';
export type TabFormatValuesStyle = 0 | 1 | 2 | 3;
export type TabFormatValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type TabConditionIconRangeCond = 0 | 1;
export type TabFormatContentType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TabConditionCellContentValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TabConditionCellContentText = 0 | 1 | 2 | 3 | 4;
export type TabConditionCellContentDate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TabFormatRankType = 0 | 1;
export type TabFormatAverageType = 0 | 1 | 2 | 3;
export type TabFormatDuplicateType = 0 | 1;
export type TabFormatGrowthDirection = 'Rows' | 'Columns';
export type TabFormatScaleType = 'Linear' | 'EqualValues';
export type TabTablePredefinedStyle = 'Undefined' | 'Blue' | 'DarkBlue' | 'Red' | 'DarkRed' | 'Green' | 'DarkGreen' | 'Purple' | 'DarkPurple' | 'Orange' | 'DarkOrange' | 'ExtBlueStriped' | 'ExtBlue' | 'ExtGreyStriped' | 'ExtGrey' | 'ExtDarkBlueStriped' | 'ExtDarkBlue' | 'ExtGreenStriped' | 'ExtGreen' | 'ExtBrownStriped' | 'ExtBrown' | 'ExtRedStriped' | 'ExtRed';
export type TabFilterConditionType = 'Equal' | 'NotEqual' | 'More' | 'MoreEqual' | 'Less' | 'LessEqual' | 'BeginWith' | 'NotBeginWith' | 'EndFor' | 'NotEndFor' | 'Contains' | 'NotContains';
export type TabFilterRelation = 'And' | 'Or';
export type TabFilterItemState = 'Inactive' | 'Limit' | 'Condition';
export type TabFixedBehaviour = 'Off' | 'Resizable' | 'Selectable' | 'All';
export type TabSelectionType = 'Normal' | 'RowOnly' | 'RowsOnly' | 'ColumnOnly' | 'ColumnsOnly' | 'Cell' | 'CellCross' | 'Cross' | 'FocusOnly';
export type TabCellSearchTarget = 1 | 2 | 4;
export type TabCellSearchDirection = 'Rows' | 'Columns';
export type TabSearchArea = 'Cells' | 'Columns' | 'Rows';
export type KeyModifiers = 'None' | 'Shift' | 'Ctrl' | 'Alt';
export type TabRangeFillType = 1 | 2 | 4 | 5;
export type ChartStyle = 0 | 1 | 2 | 3;
export type ChartType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
export type ChartOrientation = 0 | 1;
export type ChartDisplayMode = 0 | 1 | 2;
export type AdhocDimType = 'DataSource' | 'Additional' | 'SelectedArea';
export type AdhocSyncIndexDimDirection = 'Bidirectional' | 'Consumer';
export type AdhocShareType = 'View' | 'Edit';
export type AdhocDocModeType = 'Document' | 'Slides';
export type AuditLogType = 'None' | 'Logons' | 'Operations' | 'OperationsTree' | 'LogonsFilter';
export type AuditLogArchiveFormat = 'Binary' | 'CSV';
export type MsTargetConstraintStatus = 'Undefined' | 'NotReached' | 'Reached' | 'Disabled';
export type MsVariableTestType = 'DF' | 'Granger' | 'Johansen' | 'PairCorrelation';
export type ADFEquationType = 'Simple' | 'Constant' | 'ConstantTrend';
export type ADFTestedSeriesType = 'Level' | 'FirstDifference' | 'SecondDifference';
export type MsWorkbookType = 'Variable' | 'Chain' | 'TargetProblem' | 'TargetConstraints';
export type MsCalcPeriod = 'Identification' | 'Forecast' | 'Both';
export type MsDisplayAttribute = 'Derive' | 'Id' | 'Name' | 'UseMnemo';
export type MsModelKnd = 'Simple' | 'NonLinearEquations' | 'InterindustryBalance' | 'ErrorCorrectionModel' | 'LinearEquations' | 'PanelData' | 'ValueAtRisk';
export type MsFormulaTransformVariableKind = 'Stub' | 'Parameter' | 'Attribute';
export type MsAttributeVariableType = 'Series' | 'Observation';
export type MsFormulaKnd = 'None' | 'Deterministic' | 'LinearRegression' | 'ExponentialSmoothing' | 'Arima' | 'User' | 'CurveEstimation' | 'SlideSmoothing' | 'MedianSmoothing' | 'HodrickPrescottFilter' | 'NonLinearEquations' | 'InterindustryBalance' | 'ErrorCorrectionModel' | 'ECMEquation' | 'NonLinearOptimization' | 'Aggregation' | 'NonLinearRegression' | 'GreyForecast' | 'LRXFilter' | 'CointegrationEquation' | 'BandpassFilter' | 'DetermAggregation' | 'SLS2' | 'FillGaps' | 'Cumulative' | 'Census2' | 'Collapse' | 'Interpolate' | 'Splice' | 'LinearEquations' | 'BinaryRegression' | 'PointwiseCollapse' | 'CrossDimensionAggregation' | 'PooledModel' | 'ValueAtRisk' | 'Census1' | 'R';
export type MsMethodSeriesKind = 'Fitted' | 'Forecast' | 'Residuals' | 'LowerConfidenceLevel' | 'UpperConfidenceLevel' | 'DynamicLowerConfidenceLevel' | 'DynamicUpperConfidenceLevel' | 'Input' | 'AddFactor';
export type MsCorrectStubPeriod = 'NotCorrect' | 'CorrectStubPeriod' | 'CorrectProblemPeriod';
export type PDLConstraintKind = 'None' | 'NearEnd' | 'FarEnd' | 'Both';
export type MsCointegrationEquationOperandType = 'Common' | 'LongTerm' | 'Both';
export type MsCalculationChainType = 'Folder' | 'Model' | 'MetaModel' | 'Iterator' | 'Branch' | 'Group' | 'Variable' | 'VisualElement' | 'System' | 'TargetProblem' | 'TargetConstraint' | 'TargetTrajectory' | 'MultiDimIterator' | 'Validation' | 'UserOptimizationProblem' | 'UserOptimizationConstraint';
export type MsItemType = 'Unknown' | 'Folder' | 'Model' | 'MetaModel' | 'Problem' | 'Variable';
export type CpExtremumType = 'Minimum' | 'Maximum';
export type CpNonLinearMethodType = 'GridSearch' | 'SequentialQP' | 'SequentialSimplex' | 'DifferentEvolution';
export type CpStateVariablesCalculationTechniqueType = 'IterativeCalculation' | 'DirectEntirelySubstitution';
export type MsLevelFormat = 'None' | 'Short' | 'Long';
export type MsChainOperation = 'Save' | 'Load' | 'Delete';
export type CalcAction = 'Run' | 'Suspend' | 'Resume' | 'StepDate' | 'StepInto' | 'StepOver' | 'Stop';
export type MsReportType = 'Variables' | 'Scenarios';
export type FormulaEditorFunctionsType = 'TimeSeries' | 'Adomd';
export type VfKind = 'MissingData' | 'MissingMetaData' | 'RevisionComparison' | 'CrossFrequency' | 'Level' | 'GrowthRate' | 'Ratio' | 'Trend' | 'Custom' | 'StatisticalOutliers' | 'Correlation' | 'RevisionMetadataComparison' | 'ComponentMismatch' | 'CrossDatabase';
export type VfMissingDataType = 'All' | 'Leading' | 'Lagging' | 'InData';
export type VfStatisticalOutliersType = 'CrossSerie' | 'CrossDate' | 'Total';
export type VfRevisionComparisonType = 'Change' | 'Increase' | 'Decrease' | 'AddedValue' | 'RemovedValue' | 'NonChanged';
export type VfRevisionMetadataComparisonType = 'Change' | 'NonChanged' | 'AddedValue' | 'RemovedValue' | 'Increase' | 'Decrease';
export type VfComparisonOperator = 'More' | 'Less' | 'Between' | 'Notbetween' | 'MoreOrEqual' | 'LessOrEqual' | 'Equal' | 'NotEqual';
export type VfMetaAttributeValueType = 'Value' | 'Parameter' | 'Unspecified' | 'IgnoreSaving';
export type VfCrossDbMappingType = 'Attributes' | 'TargetConst' | 'ComparatorConst';
export type VfDateOptions = 'SpecificDate' | 'DependsFromData' | 'RelativeDate';
export type VfSeverity = 'Information' | 'Low' | 'High' | 'Critical';
export type VfDiagnosticReportException = 'None' | 'First' | 'Last' | 'Next' | 'Previous';
export type DmMethodKind = 'None' | 'KeyInfluences' | 'KmodesClusterAnalysis' | 'SelfOrganizingMap' | 'HighlightExceptions' | 'DecisionTree' | 'LogisticRegression' | 'BackPropagation' | 'DiscriminantAnalysis' | 'GreyForecast' | 'CurveEstimation' | 'ExponentialSmoothing' | 'AssociationRules' | 'RandomForest' | 'GradientBoostedTrees';
export type DmForecastingMethod = 'GreyForecast' | 'CurveEstimation' | 'ExponentialSmoothing';
export type DmDataSourceKind = 'DmTable' | 'DmReport' | 'DmPivotTable' | 'Laner';
export type DmCrossValidationSamplingType = 'Kfold' | 'LeaveOneOut' | 'RandomSampling';
export type StatBinningMethod = 'None' | 'EqualWidth' | 'EqualDepth' | 'KMeansClustering';
export type DmExplanatoryType = 'Continuous' | 'Ordered' | 'Categorical';
export type LicenseFeatureType = 'PrognozPlatform' | 'Dashboard' | 'Report' | 'OLAP' | 'TimeSeries' | 'Modeling' | 'Scorecard' | 'DWDesigner' | 'DevEnv' | 'Adm' | 'ExcelAddin' | 'WordAddin' | 'Stat' | 'PowerPointAddin' | 'DashboardViewer' | 'DashboardEditor' | 'ReportViewer' | 'ReportEditor';
export type BinaryData = string;
export type StringColor = string;
export type LocaleInt = number;
export type CodePageInt = number;
export type OperationId = string;
export type RequestId = string;
export interface ListRange {
  start?: number;
  count?: number;
}
export interface ErrorInfo {
  id: number;
  message: string;
  nested?: ErrorInfo;
}
export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}
export interface IndexedColor {
  Index: number;
  Value: StringColor;
}
export interface ImageProperties {
  width: number;
  height: number;
  dpi: number;
  format: string;
}
export interface TabRange extends Rect {
}
export interface TabComplexRange extends TabRange {
  type?: TabRangeType;
  address?: string;
  parts?: TabRangeVec;
}
export interface TabNumberFormatStyle {
}
export interface Size {
  width: number;
  height: number;
}
export interface SizeU extends Size {
  units: SizeUnits;
}
export interface TypedValue {
  v: any;
  dt?: ItDataType;
}
export interface ItKey {
  k: number;
  id?: string;
}
export interface ListFilter {
  range?: ListRange;
  parent?: ItKey;
}
export interface ItEntity extends ItKey {
  n?: string;
  vis?: boolean;
}
export interface AnyArgs {
  its?: AnyArgsVec;
}
export interface TreeMoveInfo {
  element: ItKey;
  relation: TreeRelation;
}
export interface GxFont {
  family: string;
  style: GxFontStyle;
  size: SizeU;
}
export interface GxPageMargins {
  left: number;
  top: number;
  right: number;
  bottom: number;
  units: SizeUnits;
}
export interface GxPageSettings {
  paperSize?: SizeU;
  margins?: GxPageMargins;
  paperFormat?: GxPaperFormat;
  paperOrientation?: GxPaperOrientation;
}
export interface TabPrintScale {
  value?: number;
  fitToPages?: boolean;
  pageWidth?: number;
  pageHeight?: number;
}
export interface TabPageSettings extends GxPageSettings {
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  printHyperlinks?: boolean;
  blackAndWhite?: boolean;
  printOrder?: GxPrintOrder;
  range?: TabRange;
  titleColumns?: TabRange;
  titleRows?: TabRange;
  scale?: TabPrintScale;
}
export interface GxTitle {
  text?: string;
  title?: string;
  font?: GxFont;
  textColor?: StringColor;
  backgroundColor?: StringColor;
  textAlignment?: GxStringAlignment;
  verticalTextAlignment?: GxVerticalAlignment;
  size?: SizeU;
  visible?: boolean;
  htmlText?: string;
  htmlTitle?: string;
  isControl?: boolean;
  autoHeight?: boolean;
  customFormat?: TabNumberFormatStyle;
}
export interface Od {
  i: string;
  n: string;
  k: number;
  c: number;
  p?: number;
  h?: boolean;
  sdKey?: number;
  hasPrv?: boolean;
  ic?: boolean;
  refs?: OdRefs;
  effectiveRights?: OdRights;
}
export interface GxHeaderPart {
  font?: GxFont;
  textColor?: StringColor;
  text?: string;
  image?: BinaryData;
  imageDocument?: Od;
  imageAsBackground?: boolean;
  imageTransparentColor?: StringColor;
  imageSize?: SizeU;
}
export interface GxHeader {
  printable?: boolean;
  left?: GxHeaderPart;
  center?: GxHeaderPart;
  right?: GxHeaderPart;
  margin?: SizeU;
}
export interface MbLogonExtendedData {
  endpoint?: string;
  metabase?: string;
}
export interface MbLogonData {
  driver: string;
  server: string;
  database: string;
  schema?: string;
  unicode?: TriState;
  authentication?: AuthenticationMode;
  locale?: LocaleInt;
  extended?: MbLogonExtendedData;
}
export interface MbDef {
  id: string;
  locale?: LocaleInt;
  logonData?: MbLogonData;
}
export interface MbId {
  id: string;
}
export interface UserId {
  id: string;
  domain?: boolean;
}
export interface GetOAuthTokenArg {
  oauthService: OAuthService;
  applicationUrl: string;
  loginCode?: string;
}
export interface GetOAuthTokenResult {
  oauth_token: string;
}
export interface ImpersonLogonData {
  mbUser?: UserId;
  pass?: string;
  role?: string;
  token?: string;
  userOs?: string;
  userDescription?: string;
  userIp?: string;
  userStation?: string;
}
export interface OAuthLogonData extends ImpersonLogonData {
  oauthService: OAuthService;
  oauth_token: string;
  oauth_verifier: string;
}
export interface GetSAMLRequestArg {
  responseUrl: string;
}
export interface GetSAMLRequestResult {
  samlRequest: string;
}
export interface SAML2LogonData extends ImpersonLogonData {
  responseUrl: string;
  remoteAddr: string;
  samlResponse: string;
}
export interface GetVerifierCodeResult {
  cookie: number;
  verifierCode: BinaryData;
}
export interface VerifierCodeLogonData extends ImpersonLogonData {
  user: UserId;
  certificate: string;
  cookie: number;
  signature: BinaryData;
}
export interface UserCreds {
  user?: UserId;
  pass: string;
  imperson?: ImpersonLogonData;
  useMetabase?: TriState;
  oauth?: OAuthLogonData;
  saml2?: SAML2LogonData;
  verifier?: VerifierCodeLogonData;
  bin?: BinaryData;
  useGuestCreds?: boolean;
  userCertificate?: string;
}
export interface RealmUserCreds {
  realm: string;
  admin?: boolean;
  creds?: UserCreds;
}
export interface UserCredsCache {
  its: RealmUserCredsVec;
}
export interface CloseMetabaseArg {
  detach?: boolean;
}
export interface OpenMetabaseArg {
  createNew?: boolean;
  skipOpen?: boolean;
  newPassword?: string;
  sessCookie?: string;
  passChangingWarnsAsErrors?: boolean;
}
export interface CreateNewMetabaseResult {
  bSucceeded?: boolean;
  errorInfo?: ErrorInfo;
}
export interface OpenMetabaseResult extends MbId {
  createNew?: CreateNewMetabaseResult;
  passwordChanged?: boolean;
  sessKey?: number;
  sessCookie?: string;
  version?: string;
  defLocale?: LocaleInt;
}
export interface OdId {
  id: string;
}
export interface MbLogonParams {
  descr: string;
  realm: string;
  toAdmin: boolean;
  logonData?: MbLogonData;
}
export interface Sd {
  k: number;
  isInherited?: boolean;
  isSealed?: boolean;
  discrete: SdDiscrete;
  mandatory?: SdMandatory;
  applyFlags?: SdApplyFlags;
}
export interface SelectionChangeCounters {
  Content?: number;
  Structure?: number;
}
export interface ForeExpr {
  innerText?: string;
  displayText?: string;
}
export interface ExpressionTerm {
  bIsLiteral?: boolean;
  sText?: string;
  sFormula?: string;
  sParseableText?: string;
}
export interface ExpressionTerms {
  terms?: TExpressionTerms;
}
export interface ExpMetaOperations {
  Terms?: boolean;
  IsValid?: boolean;
  bErrorMessage?: boolean;
  bErrorPosition?: boolean;
  NewTerm?: boolean;
  Reparse?: boolean;
}
export interface ExpMetaOperationsPattern extends ExpMetaOperations {
}
export interface TreeTermParam {
  n: string;
  v: any;
}
export interface ExpressionArgs {
  Terms?: ExpressionTerms;
  NewTermParams?: TreeTermParams;
  InsertNewTermAt?: number;
}
export interface ExpressionResult {
  Terms?: ExpressionTerms;
  bIsValid?: boolean;
  sErrorMessage?: string;
  sErrorPosition?: string;
  NewTerm?: ExpressionTerm;
}
export interface ExpOperations {
  meta: ExpMetaOperations;
  metaGet?: ExpMetaOperationsPattern;
}
export interface ExpressionId {
  id: string;
}
export interface TermProviderId {
  id: string;
}
export interface OdName {
  locale: LocaleInt;
  name?: string;
  descr?: string;
}
export interface OdRefs {
  consistOf?: Ods;
  refsBy?: Ods;
  shortcutConsistOf?: Ods;
}
export interface OdRights {
  effectiveMask: number;
  allowReadDescr: boolean;
  allowWriteDescr: boolean;
  allowRead: boolean;
  allowWrite: boolean;
  allowExport: boolean;
  allowImport: boolean;
  allowPrint: boolean;
}
export interface Ob extends Od {
  obId?: OdId;
  names?: OdNames;
  isPermanent?: boolean;
  isTemp?: boolean;
}
export interface Ods {
  its?: OdVec;
}
export interface OdClass {
  k: number;
}
export interface OdFindInfo {
  active: boolean;
  text: string;
  attribute?: OdFindAttribute;
  attributes?: OdFindAttributes;
  caseSensitive: boolean;
  wholeWordsOnly: boolean;
  scanNestedNamespaces: boolean;
  scanHiddenFolders: boolean;
  classId?: OdClass;
}
export interface OdsFilt {
  levels?: number;
  includeRoot?: boolean;
  hideEmptyFolders?: boolean;
  hideAllFolders?: boolean;
  limit?: number;
  classes?: OdClasses;
  findInfo?: OdFindInfo;
  includeInternals?: boolean;
  includeRootPath?: boolean;
  includeRootSiblings?: boolean;
  containers?: OdClasses;
  rootParent?: number;
  findTextInFoldersOnly?: boolean;
  hideFoundEmptyFolders?: boolean;
  hiddenContainers?: OdClasses;
  hideLinkObjects?: boolean;
}
export interface MbSubject extends ItEntity {
  type?: MbSubjectType;
  sid: SubjectSid;
  data?: MbSubjectData;
  accessToken?: MbAccessToken;
  logonHoursPolicy?: MbSecLogonHoursPolicy;
  stationsPolicy?: MbSecStationsPolicy;
  privileges?: MbPrivileges;
  profile?: MbSecProfile;
  stationMACs?: MbSecDomainStationsPolicy;
  stationIPs?: MbSecDomainStationsPolicy;
}
export interface OdNamePattern {
  locale?: LocaleInt;
  names?: boolean;
  descriptions?: boolean;
  effectiveRights?: boolean;
  effectiveRightsSubj?: MbSubject;
}
export interface OdBasePattern extends OdNamePattern {
}
export interface OdRefsPattern {
  all?: boolean;
  consistOf?: boolean;
  consistOfRecursive?: boolean;
  refsBy?: boolean;
  refsByRecursive?: boolean;
  shortcutConsistOf?: boolean;
}
export interface OdsPattern extends OdNamePattern {
  sd?: boolean;
  n?: boolean;
  i?: boolean;
  ts?: boolean;
  ds?: boolean;
  isShortcut?: boolean;
  isLink?: boolean;
  prv?: boolean;
  fullUrl?: boolean;
  mbsource?: boolean;
  ver?: boolean;
  refs?: OdRefsPattern;
}
export interface OdsOrderBy {
  asc?: boolean;
  foldersFirst?: boolean;
  attribute?: OdAttribute;
  attributes?: OdAttributes;
}
export interface OdArg extends ItEntity {
  value?: any;
  dt?: ItDataType;
  binding?: string;
}
export interface OdOpenArgsBase {
  updateCache?: boolean;
}
export interface OdOpenArgs extends OdOpenArgsBase {
  args?: OdArgs;
  bind?: boolean;
}
export interface ObInst {
  obDesc?: Ob;
  openArgs?: OdOpenArgs;
}
export interface ObInstId {
  id: string;
}
export interface ObAuditOp {
  operationKey: number;
  comment?: string;
  state?: ObAuditOperationState;
}
export interface Sds {
  its: SdPtrVec;
}
export interface ObjectMds {
  its?: ObjectMdVec;
}
export interface SpecialObjectsPattern {
  objects?: boolean;
  dimImageList?: boolean;
  sharedParams?: boolean;
  smallImages?: boolean;
  largeImages?: boolean;
}
export interface GetBinaryResult extends ExportData {
}
export interface SharedAdhocPlugin extends ItEntity {
  iconIndex?: number;
  webUrl?: string;
}
export interface SharedAdhocPlugins {
  its: SharedAdhocPluginsVec;
}
export interface SharedPlugins {
  smallImages?: GetBinaryResult;
  largeImages?: GetBinaryResult;
  adhocPlugins?: SharedAdhocPlugins;
}
export interface SharedParams {
  plugins?: SharedPlugins;
}
export interface SpecialObjects {
  objects?: SpecialObjectsMap;
  dimImageList?: GetBinaryResult;
  sharedParams?: SharedParams;
}
export interface GetObjectsResult {
  id: OdId;
  objects?: Ods;
  sds?: Sds;
  mds?: ObjectMds;
  specialObjects?: SpecialObjects;
}
export interface MbCacheFlush {
  all?: boolean;
  object?: Od;
  instance?: OdId;
}
export interface MbRefresh {
  all?: boolean;
  objects?: boolean;
  security?: boolean;
  cache?: MbCacheFlush;
}
export interface MbCheckAuditLogin {
  checkOnly?: boolean;
  simplePassword?: boolean;
  realmCreds?: RealmUserCreds;
}
export interface MbSubjectMemberOf {
  sid: string;
  isUser: boolean;
}
export interface MbSubjectMemberOfResult {
  sids?: any;
}
export interface ObjectMdPattern extends OdBasePattern {
  obInst?: boolean;
  pars?: boolean;
}
export interface GetObjectsArg {
  pattern?: OdsPattern;
  refresh?: MbRefresh;
  orderBy?: OdsOrderBy;
  recent?: boolean;
  range?: ListRange;
  expandResult?: boolean;
  active?: boolean;
  mds?: boolean;
  md?: ObjectMdPattern;
  rootOnly?: boolean;
  specialObjects?: SpecialObjectsPattern;
  path?: MbObjectsPath;
}
export interface GetObjectsOpArg {
  parent: OdId;
  filter?: OdsFilt;
  arg?: GetObjectsArg;
}
export interface ObjectCreateBaseInfo {
  name: string;
  id: string;
  parent?: Od;
  permanent?: boolean;
  locale?: LocaleInt;
  names?: OdNames;
}
export interface ObjectCreateInfo extends ObjectCreateBaseInfo {
  classId: number;
  shortcut?: Od;
  linkMetabase?: ObInst;
}
export interface ObjectMoveInfo {
  parent: Od;
}
export interface ObjectOverwriteInfo {
  object?: Od;
  instance?: OdId;
}
export interface ObjectSharePointShareInfo {
  title: string;
  body: string;
  reply?: string;
}
export interface ObjectShareMobileInfo {
  url: string;
}
export interface ObjectCopyInfo {
  operation: ObjectCopyOperation;
  create?: ObjectCreateBaseInfo;
  move?: ObjectMoveInfo;
  overwrite?: ObjectOverwriteInfo;
  sharePointShare?: ObjectSharePointShareInfo;
  withData?: boolean;
  recursive?: boolean;
  keepMoniker?: boolean;
  shareMobile?: ObjectShareMobileInfo;
  autoGenerateName?: boolean;
  copyExternal?: boolean;
}
export interface SaveObjectAsArg {
  destination: ObjectCopyInfo;
  getObjects?: GetObjectsOpArg;
}
export interface SaveObjectAsResult {
  object?: Ob;
  objects?: GetObjectsResult;
}
export interface LinkMd {
  logonData?: MbLogonData;
  loginPrompt?: boolean;
  useMetabaseCredentials?: boolean;
  credentials?: UserCreds;
}
export interface LinkCreateInfo {
  mbId?: MbId;
  meta?: LinkMd;
}
export interface CreateObjectArg {
  info: ObjectCreateInfo;
  linkInfo?: LinkCreateInfo;
  getObjects?: GetObjectsOpArg;
}
export interface CreateObjectResult {
  id: OdId;
  object?: Ob;
  objects?: GetObjectsResult;
}
export interface CopyObjectArg {
}
export interface CopyObjectResult {
  id: OdId;
  object?: Ob;
}
export interface MoveObjectArg {
  info: ObjectMoveInfo;
  getObjects?: GetObjectsOpArg;
}
export interface MoveObjectResult {
  object?: Od;
  objects?: GetObjectsResult;
}
export interface DeleteObjectsArg {
  objectKey?: number;
  objects?: Ods;
  getObjects?: GetObjectsOpArg;
}
export interface DeleteObjectsResult {
  objects?: GetObjectsResult;
}
export interface UiControlBindingValue {
  UI: string;
  mandatory?: boolean;
  readOnly?: boolean;
}
export interface UiControlBindingCheckBox extends UiControlBindingValue {
  value?: boolean;
  caption?: string;
}
export interface UiControlBindingIntegerEdit extends UiControlBindingValue {
  value?: number;
  minValue?: number;
  maxValue?: number;
}
export interface UiControlBindingFloatEdit extends UiControlBindingValue {
  value?: number;
  minValue?: number;
  maxValue?: number;
  precision?: number;
  step?: number;
}
export interface UiControlBindingDateTimePicker extends UiControlBindingValue {
  value?: any;
  minValue?: any;
  maxValue?: any;
  dropCalendar?: boolean;
  spin?: boolean;
  time?: boolean;
  checkBox?: boolean;
  checkBoxFocus?: boolean;
}
export interface UiControlBindingString extends UiControlBindingValue {
  value?: string;
  maxLength?: number;
}
export interface UiControlBindingEditBox extends UiControlBindingString {
  multiLine?: boolean;
}
export interface UiControlBindingIdentEdit extends UiControlBindingString {
  allowDot?: boolean;
}
export interface UiControlBindingMaskEdit extends UiControlBindingString {
  autoSelect?: boolean;
  mask?: string;
  inputTemplate?: string;
  validChars?: string;
}
export interface UiControlBindingComboBox extends UiControlBindingString {
  listMode?: boolean;
  items?: string;
  separators?: string;
}
export interface UiControlBindingTreeCombo extends UiControlBindingString {
  nodes?: string;
  separators?: string;
  sortType?: number;
}
export interface UiControlBindingSlider extends UiControlBindingValue {
}
export interface UiControlBindingIntegerSlider extends UiControlBindingValue {
  value?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}
export interface UiControlBindingFloatSlider extends UiControlBindingSlider {
  value?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}
export interface UiControlBindingObjectParamValue {
  itemId: string;
  value?: string;
}
export interface UiControlBindingDimCombo extends UiControlBindingValue {
  value?: any;
  object?: string;
  rds?: string;
  group?: string;
  schema?: string;
  valueAttribute?: string;
  levelAttribute?: string;
  selectionMode?: UiSelectionModeEnum;
  dataSourceKey?: number;
  pointKey?: number;
  dimensionKey?: number;
  paramValues?: UiControlBindingObjectParamValues;
  multiSelect?: boolean;
  modeElements?: boolean;
  modeLevels?: boolean;
  period?: boolean;
  multiLevels?: boolean;
}
export interface UiControlBinding {
  value: UiControlBindingValue;
}
export interface ObjectMd {
  obInst?: ObInst;
  dirty?: boolean;
  pars?: OdArgs;
}
export interface MbObjectPattern extends ObjectMdPattern {
}
export interface MbObjectMd extends ObjectMd {
}
export interface SetObjectArg {
  pattern: MbObjectPattern;
  meta: MbObjectMd;
  metaGet?: MbObjectPattern;
}
export interface SetObjectResult {
  id: OdId;
  metaGet?: MbObjectMd;
}
export interface MbAutoRun {
  obDesc?: Ob;
}
export interface MbAutoRunPattern {
  obDesc?: OdBasePattern;
}
export interface MbSubjects {
  its: MbSubjectPtrVec;
}
export interface MbSession {
  id?: string;
  userName?: string;
  userOsName?: string;
  hostName?: string;
  netAddress?: string;
}
export interface MbSessions {
  its: MbSessionPtrVec;
}
export interface SubjectSid {
  sid: string;
  type?: MbSubjectType;
}
export interface BinaryId {
  id: string;
}
export interface MbUserData {
  mustChangePasswordAtNextLogon?: boolean;
  cannotChangePassword?: boolean;
  lockedState?: MbUserLockedState;
  manageDBGrants?: boolean;
  maxLogonSessions?: number;
  lastLoginStamp?: any;
  hasAccessToRepository?: boolean;
  isAdmin?: boolean;
  isIsa?: boolean;
  isRoled?: boolean;
  credentials?: UserCreds;
  oldCredentials?: UserCreds;
  changePassStamp?: any;
  autoRun?: MbAutoRun;
  temporaryAge?: number;
  eternalPass?: boolean;
  certificate?: string;
  applyCertificate?: BinaryId;
}
export interface MbUserDataPattern {
  autoRun?: MbAutoRunPattern;
}
export interface MbGroupData {
  members?: MbSubjects;
  hasAccessToken?: boolean;
}
export interface MbSubjectData {
  desc?: string;
  memberOf?: MbSubjects;
  isNT?: boolean;
  isExternal?: boolean;
  isBuiltin?: boolean;
  tag?: any;
  user?: MbUserData;
  group?: MbGroupData;
}
export interface MbSubjectDataPattern {
  user?: MbUserDataPattern;
}
export interface MbSecLogonHour {
  begin: any;
  end: any;
  allowed: boolean;
}
export interface MbSecLogonHours {
  its?: MbSecLogonHourVec;
}
export interface MbSecLogonHoursPeriod {
  begin?: any;
  end?: any;
  daysOfWeek?: number;
  hours: MbSecLogonHours;
}
export interface MbSecLogonHoursPeriods {
  its: MbSecLogonHoursPeriodVec;
}
export interface MbSecLogonHoursPolicy {
  weekDayHours?: MbSecLogonHoursPeriods;
  periods?: MbSecLogonHoursPeriods;
}
export interface MbAccessToken {
  its?: MbAccessClassifications;
}
export interface MbSecStationsPolicy extends MbSecStations {
  access?: MbSecStationAccessType;
}
export interface MbSecDomainStationsPolicy extends MbSecStationsPolicy {
}
export interface MbPrivileges {
  its: MbPrivilegeVec;
}
export interface MbSecProfile extends ItEntity {
  sid: SubjectSid;
  subject?: MbSubject;
  emails?: MbSecProfileEmails;
  props?: MbSecProfileProps;
  privateFolder?: Ob;
}
export interface MbSecAbacTarget {
  n?: string;
  op?: MbSecAbacOp;
  val?: string;
}
export interface MbSecAbacFind {
  n?: string;
  id?: string;
  k?: number;
}
export interface MbSecAbacFindArr {
  n?: ArrString;
  id?: ArrString;
  k?: ArrLong;
}
export interface MbSecAbac {
  n?: string;
  id?: string;
  description?: string;
  k?: number;
  target?: MbSecAbacTarget;
  active?: boolean;
}
export interface MbSecAbacRuleSimple extends MbSecAbac {
  condition?: string;
  effect?: MbSecAbacEffect;
}
export interface MbSecAbacRule {
  find?: MbSecAbacFind;
  rule?: MbSecAbacRuleSimple;
}
export interface MbSecAbacRuleVec {
  its: MbSecAbacRulePtrVec;
}
export interface MbSecAbacPolicySimple extends MbSecAbac {
  alg?: MbSecAbacAlg;
  rules?: MbSecAbacRuleVec;
}
export interface MbSecAbacPolicy {
  find?: MbSecAbacFind;
  policy?: MbSecAbacPolicySimple;
}
export interface MbSecAbacPolicies {
  its: MbSecAbacPolicyPtrVec;
}
export interface MbSecAbacPolicySets {
  its: MbSecAbacPolicySetPtrVec;
}
export interface MbSecAbacPolicySetSimple extends MbSecAbac {
  alg?: MbSecAbacAlg;
  policies?: MbSecAbacPolicies;
  policySets?: MbSecAbacPolicySets;
}
export interface MbSecAbacPolicySet {
  find?: MbSecAbacFind;
  set?: MbSecAbacPolicySetSimple;
}
export interface MbSecAbacRules {
  alg?: MbSecAbacAlg;
  policySets?: MbSecAbacPolicySets;
}
export interface MbSecAbacRulesPattern {
  set?: ListOperation;
  policy?: ListOperation;
  rule?: ListOperation;
  findSetArr?: MbSecAbacFindArr;
  findPolicy?: MbSecAbacFind;
  findRule?: MbSecAbacFind;
}
export interface AbacClassIds {
  cls?: ArrLong;
}
export interface MbSecAbacAttribute extends MbSecAbac {
  dataType?: MbSecAbacDataType;
  defaultValue?: string;
}
export interface MbSecAbacAttributes {
  its: MbSecAbacAttributePtrVec;
}
export interface AbacPatternFilter extends MbSecAbacFind {
  cl?: number;
  sid?: string;
}
export interface MbSecAbacAttrInstance extends MbSecAbac {
  dataType?: MbSecAbacDataType;
  val?: string;
  arr?: ArrString;
}
export interface MbSecAbacAttrInstances {
  its: MbSecAbacAttrInstancePtrVec;
}
export interface MbSecAbacVals {
  subjFilter?: AbacPatternFilter;
  attrs?: MbSecAbacAttrInstances;
}
export interface MbSecAbacSubjVals {
  its: MbSecAbacValsPtrVec;
}
export interface MbSecSubjFilter {
  its?: MbSecSubjFilterPtrVec;
}
export interface MbSecAbacPatternFilter {
  op: ListOperation;
  type: MbSecAbacAttrType;
  find?: AbacPatternFilter;
}
export interface MbSecAbacObj {
  id: string;
  attrs: MbSecAbacAttrInstances;
}
export interface MbSecAbacObjVals {
  its: MbSecAbacObjValsPtrVec;
}
export interface MbSecClFilter {
  classIds: ArrLong;
}
export interface MbSecObjFilter {
  ids: ArrString;
}
export interface MbSecAbacClAttrs {
  classId: number;
  attrs: MbSecAbacAttributes;
}
export interface MbSecAbacClsAttrs {
  its: MbSecAbacClAttrsPtrVec;
}
export interface MbSubjectsSearch {
  nameCriteria?: string;
  isUser?: boolean;
  isGroup?: boolean;
  includeDb?: boolean;
  includeNt?: boolean;
  includeMetabaseNt?: boolean;
}
export interface MbLookupSubjectInfo {
  sid: string;
}
export interface MbDalDrv {
  name: string;
  id: string;
  tech: number;
  version: number;
}
export interface MbDalDrvsResult {
  drvs: MbDalDrvItems;
}
export interface MbDalDrvsArg {
  isPublic?: boolean;
}
export interface MbSubjectsSearchItem {
  k: number;
  sid: SubjectSid;
  name: string;
  descr: string;
  distinguishedName: string;
  userPrincipalName: string;
  fullName: string;
  isNt: boolean;
}
export interface MbSubjectsSearchResult {
  subjects: MbSubjectsSearchItems;
}
export interface MbSubjectPattern {
  data?: boolean;
  dataPatt?: MbSubjectDataPattern;
  memberOf?: ListOperation;
  members?: ListOperation;
  accessToken?: boolean;
  logonHoursPolicy?: boolean;
  stationsPolicy?: ListOperation;
  privileges?: ListOperation;
  profile?: boolean;
  stationMACs?: ListOperation;
  stationIPs?: ListOperation;
}
export interface MbSecProfileEmail {
  name: string;
  email: string;
}
export interface MbSecProfileEmails {
  its: MbSecProfileEmailsVec;
  def?: MbSecProfileEmail;
  work?: MbSecProfileEmail;
  personal?: MbSecProfileEmail;
  mobile?: MbSecProfileEmail;
}
export interface MbSecProfileProp extends ItKey {
  value: any;
  dt?: ItDataType;
}
export interface MbSecProfileProps {
  its: MbSecProfilePropsVec;
}
export interface MbSecProfilePattern {
  subject?: boolean;
  data?: boolean;
  privateFolder?: OdBasePattern;
}
export interface MbSecProfiles {
  its: MbSecProfilePtrVec;
}
export interface MbObjects {
  ods?: Ods;
  sds?: Sds;
}
export interface MbSecCategory extends ItEntity {
  hierarchical?: boolean;
}
export interface MbSecLevel extends ItEntity {
  category: MbSecCategory;
  marking?: boolean;
  exportAllowed?: boolean;
  printAllowed?: boolean;
  description?: string;
  treatSectionAsDocument?: boolean;
}
export interface MbSecLevels {
  its: MbSecLevelPtrVec;
}
export interface MbSecCategories {
  its: MbSecCategoryPtrVec;
}
export interface MbAccessClassification {
  category: ItEntity;
  level?: ItEntity;
}
export interface MbPrivilege extends ItEntity {
  predefined: MbSecPredefinedPrivilege;
  holders?: MbSubjects;
}
export interface MbPrivilegePattern {
  holders?: ListOperation;
}
export interface ObClassOp extends ItEntity {
  mask?: number;
}
export interface ObClassOps {
  its: ObClassOpVec;
  maskAll?: number;
}
export interface ObClass extends ItEntity {
  classId: OdClass;
  isRightsAllowed?: boolean;
  isRightsSupported?: boolean;
  operations?: ObClassOps;
  sd?: Sd;
}
export interface ObClassPattern {
  operations?: boolean;
  security?: boolean;
}
export interface ObClasses {
  its: ObClassVec;
}
export interface ObClassesFilter extends ListFilter {
  classes?: ArrULong;
}
export interface ObClassAudit {
  classId: OdClass;
  filter?: number;
  trackHistory?: number;
}
export interface MbSecAuditPolicy {
  classesAudit?: ObClassAuditVec;
  logRecordCountThreshold1?: number;
  logRecordCountThreshold2?: number;
}
export interface MbSecPasswordHashing {
  isON?: boolean;
  excludeAdmin?: boolean;
}
export interface MbSecPasswordPolicy {
  minLength?: number;
  minAge?: number;
  maxAge?: number;
  restrictUserName?: boolean;
  restrictFullUserName?: boolean;
  requireDifferentChars?: boolean;
  uniquenessDegree?: number;
  requireDifferentLetterCase?: boolean;
  forbiddenStrings?: ArrString;
  checkForbiddenStrings?: boolean;
  maxRepeatedCharCount?: number;
  historyLength?: number;
  hashing?: MbSecPasswordHashing;
  requireDigitsAndChars?: boolean;
  requireNonAlphabeticChars?: boolean;
  warningMaxAge?: number;
}
export interface MbSecAccessPolicy {
  isscreenshotsupported?: boolean;
}
export interface MbSecDomain extends ItEntity {
  access?: MbSecStationAccessType;
}
export interface MbSecDomains {
  its: MbSecDomainVec;
}
export interface MbSecStation extends ItEntity {
  domain?: ItEntity;
  fullName?: string;
  access?: MbSecStationAccessType;
}
export interface MbSecStations {
  its: MbSecStationVec;
}
export interface MbSecPolicySettings {
  objectsIdFormat?: string;
  allowedDocumentFormats?: ArrString;
  mandatoryAccessControl?: MbSecMandatoryAccessType;
  restrictAdminAccess?: boolean;
  restrictIsaAccess?: boolean;
  restrictUserDeletion?: boolean;
  restrictGroupDeletion?: boolean;
  discretionaryAccessControl?: boolean;
  attributeBasedAccessControl?: boolean;
  methodsCombineAlgorithm?: MbSecControlMethodsCombineAlgorithm;
  supportUserPrivateFolder?: boolean;
  screenshotWithoutSecurity?: boolean;
  copyToClipboardAllowed?: boolean;
  auditClipboardOperations?: boolean;
  allowUserQueries?: boolean;
  forceCleanMemory?: boolean;
  enforceApplicationRole?: boolean;
  checkUserPassword?: boolean;
  allowCreateUserGrant?: boolean;
  lockIdentifiersPeriod?: number;
  autoLockPeriod?: number;
  createDeferredSubjects?: boolean;
  maxFailedLogons?: number;
  failedLogonsCounterResetPeriod?: number;
  isaPresent?: boolean;
  chkObjVerOnUpdFromPef?: boolean;
  mbId?: string;
}
export interface MbSecPolicy {
  categories?: MbSecCategories;
  levels?: MbSecLevels;
  privileges?: MbPrivileges;
  auditPolicy?: MbSecAuditPolicy;
  passwordPolicy?: MbSecPasswordPolicy;
  stationsPolicy?: MbSecStationsPolicy;
  domains?: MbSecDomains;
  stations?: MbSecStations;
  autoRun?: MbAutoRun;
  rootObject?: Ob;
  settings?: MbSecPolicySettings;
  abacRules?: MbSecAbacRules;
}
export interface MbSecPolicyPattern {
  categories?: ListOperation;
  categoriesFilter?: ListFilter;
  levels?: ListOperation;
  levelsFilter?: ListFilter;
  privileges?: boolean;
  privilege?: MbPrivilegePattern;
  privilegesFilter?: ListFilter;
  auditPolicy?: boolean;
  passwordPolicy?: boolean;
  stationsPolicy?: ListOperation;
  domains?: boolean;
  stations?: boolean;
  stationsFilter?: ListFilter;
  autoRun?: MbAutoRunPattern;
  rootObject?: OdBasePattern;
  settings?: boolean;
  abacRules?: MbSecAbacRulesPattern;
}
export interface MbSecDomainSubjectAddStateEntry {
  subjectType: MbSubjectType;
  state?: MbSecDomainSubjectAddState;
}
export interface MbSecDomainSubjectAddStateEntries {
  its: MbSecDomainSubjectAddStateEntryVec;
}
export interface MbSecOnCredentialsRequired {
  logonParams?: MbLogonParams;
  creds?: UserCreds;
  resolved?: boolean;
}
export interface MbSecOnDomainSubjectAdd {
  subject?: MbSubject;
  state?: number;
}
export interface MbSecOnDomainSubjectAddPattern {
  subject?: MbSubjectPattern;
}
export interface MbSecApply {
  onCredentialsRequired?: MbSecOnCredentialsRequired;
  onDomainSubjectAdd?: MbSecOnDomainSubjectAdd;
}
export interface MbSecApplyPattern {
  onDomainSubjectAdd?: MbSecOnDomainSubjectAddPattern;
}
export interface MbSecMd {
  users?: MbSubjects;
  groups?: MbSubjects;
  objects?: MbObjects;
  sharepointSettings?: string;
  credsCache?: UserCredsCache;
  policy?: MbSecPolicy;
  objectClasses?: ObClasses;
  accessPolicy?: MbSecAccessPolicy;
  newObjectInfo?: Od;
  profiles?: MbSecProfiles;
  bisearchEnable?: BiSearchMode;
  updateHandler?: string;
  currentDomainSubjectAddStates?: MbSecDomainSubjectAddStateEntries;
  apply?: MbSecApply;
  reportStamp?: string;
  abacUsAttrs?: MbSecAbacAttributes;
  abacGrAttrs?: MbSecAbacAttributes;
  abacUsVals?: MbSecAbacSubjVals;
  abacGrVals?: MbSecAbacSubjVals;
  abacGlAttrs?: MbSecAbacAttributes;
  abacClAttrs?: MbSecAbacClsAttrs;
  abacObjVals?: MbSecAbacObjVals;
  abacSubjAttr?: MbSecAbacAttribute;
  abacSubjAttrs?: MbSecAbacAttributes;
  abacObjAttr?: MbSecAbacAttribute;
  abacObjAttrs?: MbSecAbacAttributes;
  abacClassIds?: AbacClassIds;
}
export interface MbSecOdFilter {
  keys?: IntSet;
}
export interface MbSubjectsFilter extends ListFilter {
  single?: MbSubject;
  current?: boolean;
}
export interface MbSecProfilesFilter extends ListFilter {
  single?: MbSecProfile;
  current?: boolean;
}
export interface MbSecMdPattern {
  users?: ListOperation;
  usersFilter?: MbSubjectsFilter;
  user?: MbSubjectPattern;
  groups?: ListOperation;
  groupsFilter?: MbSubjectsFilter;
  group?: MbSubjectPattern;
  objects?: boolean;
  objectsFilter?: MbSecOdFilter;
  accessPolicy?: boolean;
  sharepointSettings?: boolean;
  credsCache?: ListOperation;
  policy?: MbSecPolicyPattern;
  objectClasses?: boolean;
  objectClass?: ObClassPattern;
  objectClassFilter?: ObClassesFilter;
  newObjectInfo?: OdClass;
  profiles?: ListOperation;
  profilesFilter?: MbSecProfilesFilter;
  profile?: MbSecProfilePattern;
  bisearchEnable?: boolean;
  updateHandler?: boolean;
  currentDomainSubjectAddStates?: MbSecDomainSubjectAddStateEntries;
  apply?: MbSecApplyPattern;
  reportStamp?: LocaleInt;
  abacUsAttrs?: boolean;
  abacGrAttrs?: boolean;
  abacUsVals?: boolean;
  abacGrVals?: boolean;
  abacUsValsFilter?: MbSecSubjFilter;
  abacGrValsFilter?: MbSecSubjFilter;
  abacGlAttrs?: boolean;
  abacClAttrs?: boolean;
  abacClFilter?: MbSecClFilter;
  abacObjFilter?: MbSecObjFilter;
  abacObjVals?: boolean;
  abacAttr?: MbSecAbacPatternFilter;
}
export interface MbSecPromoteToIsaModeAction {
  isa: MbSubject;
  options: MbSecIsaModePromoteOptions;
}
export interface MbSecPolicyAction {
  promoteToIsaMode?: MbSecPromoteToIsaModeAction;
  revertToStandardMode?: boolean;
}
export interface MbSecAction {
  policyAction?: MbSecPolicyAction;
}
export interface OdCheckAccOp {
}
export interface OdCheckAccRes {
  data?: BinaryData;
}
export interface OdCheckOb {
}
export interface OdCheckAcc {
  ob: OdCheckOb;
  op: OdCheckAccOp;
  res?: OdCheckAccRes;
}
export interface MbSecOdCheckAccArg {
  its: OdCheckAccVec;
  opt?: number;
}
export interface MbSecOdCheckAccRes {
  its: OdCheckAccVec;
}
export interface MbSecRawPattern {
  stamp?: boolean;
  doc?: boolean;
  sd?: boolean;
  sdKey?: number;
}
export interface MbSecRawData {
  stamp?: any;
  doc?: BinaryData;
  sd?: BinaryData;
}
export interface MbSecRawPatternGet extends MbSecRawPattern {
  force?: boolean;
}
export interface MbSecRawDataGet extends MbSecRawData {
}
export interface MbSecRawPatternSet extends MbSecRawPattern {
  ob?: boolean;
}
export interface MbSecRawDataSet extends MbSecRawData {
  obKey?: number;
  obSd?: number;
}
export interface MbSecRawSetResult {
  stamp?: any;
  sdKey?: number;
  obSd?: number;
}
export interface GetMbSecArg {
  pattern?: MbSecMdPattern;
  checkAcc?: MbSecOdCheckAccArg;
  raw?: MbSecRawPatternGet;
}
export interface GetMbSecResult {
  id: MbId;
  meta?: MbSecMd;
  checkAcc?: MbSecOdCheckAccRes;
  rawData?: MbSecRawDataGet;
}
export interface SetMbSecArg {
  pattern: MbSecMdPattern;
  meta: MbSecMd;
  metaGet?: GetMbSecArg;
  action?: MbSecAction;
  raw?: MbSecRawPatternSet;
  rawData?: MbSecRawDataSet;
}
export interface SetMbSecResult {
  id: MbId;
  metaGet?: GetMbSecResult;
  rawRes?: MbSecRawSetResult;
}
export interface GetSessionsArg {
  filters?: MbSessions;
  credsCachePattern?: ListOperation;
  credsCacheMeta?: UserCredsCache;
}
export interface GetSessionsResult {
  id: MbId;
  sessions: MbSessions;
  apply?: MbSecApply;
}
export interface DisconnectSessionsArg {
  filters?: MbSessions;
  credsCachePattern?: ListOperation;
  credsCacheMeta?: UserCredsCache;
  metaGet?: GetSessionsArg;
}
export interface DisconnectSessionsResult {
  id: MbId;
  metaGet?: GetSessionsResult;
  apply?: MbSecApply;
  sessions?: MbSessions;
}
export interface ExportMbSubjectsId {
  id: string;
}
export interface ExportMbSubjectsArg {
}
export interface ExportMbSubjectsResult {
  id: ExportMbSubjectsId;
  exportedSubjects?: BinaryId;
}
export interface MbSecSnapshotId {
  id: string;
}
export interface MbSecSnapshotLogItem {
  subjectType: MbSubjectType;
  subjectName: string;
  applyState: ApplyStateType;
  message: string;
}
export interface MbSecSnapshotLog {
  its?: MbSecSnapshotLogItems;
}
export interface MbSecSnapshotExecuteLoadOnSubjectApplyState {
  applyState?: ApplyStateType;
  subject?: MbSubject;
  state?: number;
}
export interface MbSecSnapshotExecuteLoadOnSubjectApplyStatePattern {
  subject?: MbSubjectPattern;
}
export interface MbSecSnapshotExecuteLoadOnOperationState {
  applyOperation?: MbSecSnapshotApplyOperationType;
  state?: number;
}
export interface MbSecSnapshotExecuteLoadState {
  onSubjectApply?: MbSecSnapshotExecuteLoadOnSubjectApplyState;
  onOperation?: MbSecSnapshotExecuteLoadOnOperationState;
  onCredentialsRequired?: MbSecOnCredentialsRequired;
}
export interface MbSecSnapshotExecuteLoadStatePattern {
  onSubjectApply?: MbSecSnapshotExecuteLoadOnSubjectApplyStatePattern;
}
export interface MbSecSnapshotExecute {
  command?: MbSecSnapshotExecuteCommand;
  async?: boolean;
  resolveTimeout?: number;
  state?: MbSecSnapshotExecuteState;
  savedSnapshot?: BinaryId;
  snapshotToLoad?: BinaryId;
  loadState?: MbSecSnapshotExecuteLoadState;
  errorInfo?: ErrorInfo;
}
export interface MbSecSnapshotExecutePattern {
  loadState?: MbSecSnapshotExecuteLoadStatePattern;
}
export interface MbSecSnapshotMd {
  execute?: MbSecSnapshotExecute;
  log?: MbSecSnapshotLog;
}
export interface MbSecSnapshotMdPattern {
  all?: boolean;
  log?: boolean;
  logCount?: number;
  execute?: boolean;
  executePatt?: MbSecSnapshotExecutePattern;
}
export interface GetMbSecSnapshotArg {
  pattern?: MbSecSnapshotMdPattern;
}
export interface GetMbSecSnapshotResult {
  id: MbSecSnapshotId;
  meta?: MbSecSnapshotMd;
}
export interface SetMbSecSnapshotArg {
  pattern: MbSecSnapshotMdPattern;
  meta: MbSecSnapshotMd;
  metaGet?: MbSecSnapshotMdPattern;
}
export interface SetMbSecSnapshotResult {
  id: MbSecSnapshotId;
  meta?: MbSecSnapshotMd;
}
export interface OpenMbSecSnapshotArg {
  metaGet?: MbSecSnapshotMdPattern;
}
export interface OpenMbSecSnapshotResult {
  id: MbSecSnapshotId;
  meta?: MbSecSnapshotMd;
}
export interface SdAce {
  subject?: MbSubject;
  allow?: number;
  deny?: number;
  audit?: number;
}
export interface SdDiscrete {
  aces: SdAcePtrVec;
}
export interface SdMandatory {
  accessToken?: MbAccessToken;
}
export interface SdLabel {
  k: number;
  subject?: MbSubject;
}
export interface SdLabelSubj {
}
export interface SdLabelSubjs {
  its: SdLabelSubjsVec;
}
export interface SdLabels {
  its: SdLabelsVec;
  bitCount?: number;
  defaultValue?: SdLabelSubjs;
}
export interface ResourceId {
  id: string;
}
export interface ResourceStrTranslation {
}
export interface ResourceStr extends ItKey {
  its: ResourceStrTranslationsVec;
}
export interface ResourceStrs {
  locales?: IntSet;
  its?: ResourceStrsVec;
}
export interface ResourceStrsFilter {
  strs?: ItKeys;
  locales?: IntSet;
  convertRtfToHtml?: boolean;
}
export interface ResourceBinariesFilter {
  binaries?: ItKeys;
  locales?: IntSet;
}
export interface ResourceLocale extends ItEntity {
  isDef?: boolean;
  isCur?: boolean;
}
export interface ResourceLocales {
  its: ResourceLocalesVec;
  def?: ResourceLocale;
  cur?: ResourceLocale;
}
export interface ResourceBinaryTranslation {
}
export interface ResourceBinary extends ItKey {
  its: ResourceBinaryTranslationsVec;
}
export interface ResourceBinaries {
  locales?: IntSet;
  its?: ResourceBinariesVec;
}
export interface ResourceMd extends ObjectMd {
  strs?: ResourceStrs;
  locales?: ResourceLocales;
  binaries?: ResourceBinaries;
}
export interface ResourceMdPattern extends ObjectMdPattern {
  strs?: ListOperation;
  strsFilter?: ResourceStrsFilter;
  locales?: ListOperation;
  binaries?: ListOperation;
  binariesFilter?: ResourceBinariesFilter;
}
export interface GetResourceArg {
  pattern?: ResourceMdPattern;
}
export interface GetResourceResult {
  id: ResourceId;
  meta?: ResourceMd;
}
export interface SetResourceArg {
  pattern: ResourceMdPattern;
  meta: ResourceMd;
  metaGet?: ResourceMdPattern;
}
export interface SetResourceResult {
  id: ResourceId;
  meta?: ResourceMd;
}
export interface ResourceOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface OpenResourceArg {
  args: ResourceOpenArgs;
  metaGet?: ResourceMdPattern;
}
export interface OpenResourceResult {
  id: ResourceId;
  meta?: ResourceMd;
}
export interface ShareId {
  id: string;
}
export interface OpenShareArg {
  mb: MbId;
}
export interface OpenShareResult {
  id: ShareId;
}
export interface MsgQId {
  id: string;
}
export interface CreateMsgQArg {
  share: ShareId;
}
export interface CreateMsgQResult {
  id: MsgQId;
}
export interface MsgQStamp {
  k: number;
}
export interface MsgQMessages {
  its?: MsgQMessagesVec;
}
export interface ReadMsgQArg {
  queue: MsgQId;
  stamp?: MsgQStamp;
}
export interface ReadMsgQResult {
  queue: MsgQId;
  stamp: MsgQStamp;
  messages?: MsgQMessages;
}
export interface WriteMsgQArg {
  queue: MsgQId;
  messages?: MsgQMessages;
}
export interface WriteMsgQResult {
  queue: MsgQId;
}
export interface ShareArg {
  openShare?: OpenShareArg;
  closeShare?: ShareId;
  createMsgQ?: CreateMsgQArg;
  readMsgQ?: ReadMsgQArg;
  writeMsgQ?: WriteMsgQArg;
}
export interface ShareResult {
  openShare?: OpenShareResult;
  closeShare?: boolean;
  createMsgQ?: CreateMsgQResult;
  readMsgQ?: ReadMsgQResult;
  writeMsgQ?: WriteMsgQResult;
}
export interface MsgQMessageData {
}
export interface MsgQMessage {
  type: MsgQMessageType;
  data: MsgQMessageData;
}
export interface MsgQMessageCustomData extends MsgQMessageData {
  text?: string;
  data?: any;
}
export interface CustomObId {
  id: string;
}
export interface CustomOperation extends ItEntity {
}
export interface CustomOperations {
  its: CustomOperationsVec;
}
export interface CustomClass extends ItEntity {
  implURL: string;
  operations?: CustomOperations;
  smallImage?: BinaryData;
  largeImage?: BinaryData;
  c?: number;
  h?: boolean;
}
export interface CustomClassPattern {
  smallImage?: boolean;
  largeImage?: boolean;
}
export interface CustomClasses {
  its: CustomClassesVec;
}
export interface CustomClassesFilter {
  keys?: IntSet;
}
export interface CustomObRef extends ItKey {
  obDesc?: Od;
}
export interface CustomObRefs {
  its: CustomObRefsVec;
}
export interface CustomObData {
  refs?: CustomObRefs;
  content: any;
}
export interface CustomObMd extends ObjectMd {
  data?: CustomObData;
  handlerResult?: any;
  classes?: CustomClasses;
}
export interface CustomObMdPattern extends ObjectMdPattern {
  all?: boolean;
  data?: boolean;
  auditOp?: ObAuditOp;
  execHandler?: CustomObHandlerType;
  classes?: boolean;
  classesFilter?: CustomClassesFilter;
  customClass?: CustomClassPattern;
}
export interface GetCustomObArg {
  pattern?: CustomObMdPattern;
}
export interface GetCustomObResult {
  id: CustomObId;
  meta?: CustomObMd;
}
export interface SetCustomObArg {
  pattern: CustomObMdPattern;
  meta: CustomObMd;
  metaGet?: CustomObMdPattern;
}
export interface SetCustomObResult {
  id: CustomObId;
  meta?: CustomObMd;
}
export interface OpenCustomObArg {
  args?: OdOpenArgsBase;
  openForEdit?: boolean;
  metaGet?: CustomObMdPattern;
  openAsDescriptor?: boolean;
}
export interface OpenCustomObResult {
  id: CustomObId;
  meta?: CustomObMd;
}
export interface MbUpdateId {
  id: string;
}
export interface CustomProperty {
  id?: string;
  name?: string;
  value?: any;
}
export interface CustomProperties {
  its: CustomPropertyVec;
}
export interface MbUpdateFolderNode {
  childrenCount?: number;
  children?: MbUpdateNodeVec;
}
export interface MbUpdateDataObjectNode {
  method?: MbUpdateMethod;
  primaryKey?: string;
  referenceConstraintsHandling?: UpdateDataConstraintsHandlingType;
  batchMode?: ObjectUpdateDataBatchMode;
  updateRdsSequence?: boolean;
  requestAdminCredentials?: boolean;
  isIdentity?: boolean;
  allowExistingRubricatorUpdate?: boolean;
}
export interface MbUpdateSpecialObjectsNode {
  applyObjects?: SpecialObjectIndexVec;
  objectNodes?: SpecialObjectsMap;
}
export interface MbUpdateObjectApplyState {
  state?: MbUpdateObjectApplyStateValueSet;
  updateObject?: Od;
  conflictObject?: Od;
  forceUpdateObject?: Od;
  forceUpdateVcs?: boolean;
  createdObject?: Od;
  forceParent?: Od;
  applyAfterParent?: boolean;
}
export interface MbUpdateObjectApplyStatePattern {
  updateObject?: OdBasePattern;
  conflictObject?: OdBasePattern;
  forceUpdateObject?: OdBasePattern;
  createdObject?: OdBasePattern;
  forceParent?: OdBasePattern;
}
export interface MbUpdateObjectNode {
  object?: Od;
  isSaved?: boolean;
  updatePart?: MbObjectUpdatePart;
  updateType?: MbObjectUpdateTypeSet;
  parent?: number;
  includeChildrenDependencies?: TriState;
  updateOrder?: MbObjectUpdateOrder;
  includeData?: boolean;
  alterType?: MbObjectAlterType;
  objectId?: string;
  objectName?: string;
  objectOldKey?: number;
  applyState?: MbUpdateObjectApplyState;
  constraint?: MbObjectUpdateConstraint;
  boundType?: MbObjectUpdateBoundType;
  unboundType?: MbObjectUpdateUnboundType;
  forceUniqueId?: boolean;
  forceKeepId?: boolean;
  acl?: SdAcePtrVec;
  accessToken?: MbAccessToken;
  accessTokenOptions?: MbUpdateAccessTokenOptions;
  sdApplyLog?: string;
  version?: number;
  originalMetabase?: string;
  dependenciesObjects?: ArrULong;
  dataObject?: MbUpdateDataObjectNode;
  specialObjects?: MbUpdateSpecialObjectsNode;
}
export interface MbUpdateObjectNodePattern {
  object?: OdBasePattern;
  applyState?: boolean;
  applyStatePattern?: MbUpdateObjectApplyStatePattern;
  acl?: boolean;
  accessToken?: boolean;
  dependenciesObjects?: boolean;
}
export interface MbUpdateSqlNodeSqlEntry {
  driver?: string;
  sql?: string;
}
export interface MbUpdateSqlNode {
  sql?: MbUpdateSqlNodeSqlEntries;
  databaseKey?: number;
  ignoreErrors?: boolean;
  databaseNode?: number;
  isDatabaseValid?: boolean;
}
export interface MbUpdateDeleteObjectNode {
  objectId?: string;
  objectKey?: number;
  objectClass?: number;
  object?: Od;
}
export interface MbUpdateDeleteObjectNodePattern {
  object?: OdBasePattern;
}
export interface MbUpdateCommentNode {
  comment?: string;
}
export interface MbUpdateSecuritySubjectNode {
  subject?: MbSubject;
}
export interface MbUpdateSecuritySubjectNodePattern {
  subject?: MbSubjectPattern;
}
export interface MbUpdateNode {
  k?: number;
  index?: number;
  type?: MbUpdateNodeType;
  label?: string;
  condition?: string;
  parentNode?: number;
  enabled?: boolean;
  customProperties?: CustomProperties;
  folder?: MbUpdateFolderNode;
  object?: MbUpdateObjectNode;
  sql?: MbUpdateSqlNode;
  deleteObject?: MbUpdateDeleteObjectNode;
  comment?: MbUpdateCommentNode;
  securitySubject?: MbUpdateSecuritySubjectNode;
}
export interface MbUpdateFolderNodePattern {
  children?: boolean;
  childrenRecursive?: boolean;
  range?: ListRange;
}
export interface MbUpdateNodePattern {
  root?: number;
  customProperties?: boolean;
  folder?: MbUpdateFolderNodePattern;
  object?: MbUpdateObjectNodePattern;
  deleteObject?: MbUpdateDeleteObjectNodePattern;
  securitySubject?: MbUpdateSecuritySubjectNodePattern;
}
export interface MbUpdateProperty extends ItEntity {
  dt?: ItDataType;
  v?: any;
}
export interface MbUpdateProperties {
  its: MbUpdatePropertyVec;
}
export interface MbUpdateAccessSubject {
  sid?: SubjectSid;
  remappingSid?: SubjectSid;
  alternativeSid?: SubjectSid;
  name?: string;
  description?: string;
}
export interface MbUpdateAccessSubjects {
  its: MbUpdateAccessSubjectVec;
}
export interface MbUpdateSecurityLevel {
  n: string;
  index: number;
  description: string;
  category?: number;
  criticalityLabel: number;
  isValid: boolean;
  exists: boolean;
}
export interface MbUpdateSecurityLevels {
  its: MbUpdateSecurityLevelVec;
}
export interface MbUpdateSecurityCategory {
  k: number;
  name: string;
  levels?: MbUpdateSecurityLevels;
  isValid: boolean;
  exists: boolean;
}
export interface MbUpdateSecurityCategoryPattern {
  levels?: boolean;
}
export interface MbUpdateSecurityCategories {
  its: MbUpdateSecurityCategoryVec;
}
export interface MbUpdateMandatoryAccess {
  categories?: MbUpdateSecurityCategories;
  isValid?: boolean;
  isSimple?: boolean;
}
export interface MbUpdateMandatoryAccessPattern {
  categories?: boolean;
  category?: MbUpdateSecurityCategoryPattern;
}
export interface MbUpdateLogRecord {
  isFinished: boolean;
  hasError: boolean;
  error?: ErrorInfo;
  errorSkipped: boolean;
  hasConflicts: boolean;
  hasOnResolve: boolean;
  localObjectVersion: number;
  localOriginalMetabase: string;
  updateObjectVersion: number;
  updateOriginalMetabase: string;
}
export interface MbUpdateLogRecords {
  its: MbUpdateLogRecordVec;
}
export interface MbUpdateLog {
  updateUserName: string;
  updateUserSid: string;
  updateWorkstation: string;
  updateStartTimestamp: any;
  updateFinishTimestamp: any;
  updateMetabase: string;
  records?: MbUpdateLogRecords;
  hasErrors: boolean;
  hasConflicts: boolean;
  hasOnResolve: boolean;
  isFinished: boolean;
  inProgress: boolean;
  hasErrorSkipped: boolean;
}
export interface MbUpdateLogPattern {
  records?: boolean;
  recordsFilter?: ListFilter;
}
export interface MbUpdateObjectAlterTypeEntry {
  classId: number;
  alterType?: MbObjectAlterType;
}
export interface MbUpdateObjectAlterTypeEntries {
  its: MbUpdateObjectAlterTypeEntryVec;
}
export interface MbUpdateMdFile {
  binaryId?: BinaryId;
  newFormat: boolean;
}
export interface MbUpdateMdLoadFromFile extends MbUpdateMdFile {
  mode: UpdateLoadMode;
}
export interface MbUpdateMdSaveToFile extends MbUpdateMdFile {
}
export interface MbUpdateProgressData {
  stage?: MbUpdateProgressStage;
  total?: number;
  current?: number;
  node?: MbUpdateNode;
  object?: Od;
  error?: ErrorInfo;
}
export interface MbUpdateProgressDataPattern {
  all?: boolean;
  node?: boolean;
  nodePattern?: MbUpdateNodePattern;
  object?: boolean;
  objectPattern?: OdBasePattern;
  error?: boolean;
}
export interface MbUpdateExecuteCallback {
  onCredentialsRequired?: MbSecOnCredentialsRequired;
  onProgress?: MbUpdateProgressData;
}
export interface MbUpdateExecuteCallbackPattern {
  onProgressPattern?: MbUpdateProgressDataPattern;
}
export interface MbUpdateExecute {
  command?: MbUpdateExecuteCommand;
  async?: boolean;
  resolveTimeout?: number;
  state?: MbUpdateExecuteState;
  loadFromFile?: MbUpdateMdLoadFromFile;
  saveToFile?: MbUpdateMdSaveToFile;
  callback?: MbUpdateExecuteCallback;
  errorInfo?: ErrorInfo;
}
export interface MbUpdateExecutePattern {
  callbackPattern?: MbUpdateExecuteCallbackPattern;
}
export interface MbUpdateMd {
  rootFolder?: MbUpdateNode;
  properties?: MbUpdateProperties;
  eventsNode?: MbUpdateNode;
  reflectObjectsRights?: MbUpdateReflectObjectsRightsTypeSet;
  specialObjectsNode?: MbUpdateNode;
  applyOptions?: MbUpdateApplyOptionsSet;
  alterTypes?: MbUpdateObjectAlterTypeEntries;
  updateType?: MbObjectUpdateTypeSet;
  description?: string;
  constraint?: MbObjectUpdateConstraint;
  boundType?: MbObjectUpdateBoundType;
  localCopy?: boolean;
  useLocalVcsFiles?: boolean;
  subjects?: MbUpdateAccessSubjects;
  allowReplaceSD?: boolean;
  mandatoryAccess?: MbUpdateMandatoryAccess;
  securityConflictsLog?: string;
  accessAllowed?: MbUpdateAccessType;
  requireUserUpdateMessage?: boolean;
  priorDataLinkDependentsClear?: boolean;
  customProperties?: CustomProperties;
  createUserName?: string;
  createUserSID?: string;
  createWorkstation?: string;
  createTimestamp?: any;
  createMetabase?: string;
  createPlatformVersion?: string;
  log?: MbUpdateLog;
  execute?: MbUpdateExecute;
}
export interface MbUpdateMdPattern {
  all?: boolean;
  node?: boolean;
  nodePattern?: MbUpdateNodePattern;
  eventsNode?: boolean;
  specialObjectsNode?: boolean;
  properties?: ListOperation;
  customProperties?: ListOperation;
  alterTypes?: MbUpdateObjectAlterTypeEntries;
  subjects?: boolean;
  mandatoryAccess?: boolean;
  mandatoryAccessPattern?: MbUpdateMandatoryAccessPattern;
  log?: boolean;
  logPattern?: MbUpdateLogPattern;
  execute?: boolean;
  executePattern?: MbUpdateExecutePattern;
}
export interface GetMbUpdateArg {
  pattern?: MbUpdateMdPattern;
}
export interface GetMbUpdateResult {
  id: MbUpdateId;
  meta?: MbUpdateMd;
}
export interface SetMbUpdateArg {
  pattern: MbUpdateMdPattern;
  meta: MbUpdateMd;
  metaGet?: MbUpdateMdPattern;
}
export interface SetMbUpdateResult {
  id: MbUpdateId;
  meta?: MbUpdateMd;
}
export interface OpenMbUpdateArg {
  metaGet?: MbUpdateMdPattern;
}
export interface OpenMbUpdateResult {
  id: MbUpdateId;
  meta?: MbUpdateMd;
}
export interface DmId {
  id: string;
}
export interface ElKey {
  key: any;
}
export interface ElKeyName extends ElKey {
  n: string;
}
export interface SimpleArrayList {
  its?: Avs;
}
export interface ElAvBase {
}
export interface ElAv extends ElAvBase {
  transl?: ElAvTranslations;
}
export interface ElBase {
  n: string;
  a?: Avs;
  ea?: ElAvs;
}
export interface ElHistRec extends ElBase {
  inDate: any;
  outDate: any;
}
export interface El extends ElBase {
  k: any;
  h: boolean;
  o: number;
  s?: boolean;
  p?: any;
  hist?: ElHistData;
  accKey?: number;
}
export interface DimAttrId {
  id: string;
}
export interface AttrTranslationsPattern {
  locales?: LocaleIntVec;
}
export interface AttrsPattern {
  attrIds?: DimAttrIds;
  attributes?: string;
  attributeValuesOnly?: boolean;
  extendedAttributeValuesOnly?: boolean;
}
export interface TextFilter extends AttrsPattern {
  text: string;
  wholeWordsOnly?: boolean;
  caseSensitive?: boolean;
}
export interface ElsFilter {
  levels?: number;
  includeRoot?: boolean;
  onlySelected?: boolean;
  keys?: ElKeys;
  text?: TextFilter;
  includeParents?: boolean;
  includeParentsWithSiblings?: boolean;
  onlyWithData?: boolean;
  group?: ItKey;
  elementsGroup?: boolean;
}
export interface ElsPattern extends AttrsPattern {
  getSelectState?: boolean;
  getParentKey?: boolean;
  getHasChildren?: boolean;
  getLevel?: boolean;
  getHasSelectedChildren?: boolean;
  getHistory?: boolean;
  getHasData?: boolean;
  getImageIndex?: boolean;
  getChildIndex?: boolean;
  getChildrenCount?: boolean;
  getHasCalc?: boolean;
  useSelIndex?: boolean;
}
export interface OdMetaDescr extends ItEntity {
  cls: OdClass;
}
export interface DmAttr extends ItEntity {
  dt: ItDataType;
  uniqueIndex?: string;
  predefined?: DmPredefinedAttribute;
  dataDomain?: ItDataDomain;
}
export interface DmAttrs extends DmAttrsVec {
  ident?: number;
  name?: number;
  order?: number;
  imageIndex?: number;
}
export interface DmHier extends ItEntity {
  sourceDimKey?: number;
  originalDimKey?: number;
}
export interface DmAttrHier extends DmHier {
  baseAttr?: DmAttr;
  level?: number;
}
export interface DmLev extends ItEntity {
}
export interface DmBlock extends ItEntity {
}
export interface DmIndex extends ItEntity {
  block?: ItEntity;
  attrs?: ItEntities;
  primary?: boolean;
  unique?: boolean;
  useInSelection?: boolean;
}
export interface DmGroup extends ItEntity {
}
export interface DmSelectionSchema extends ItEntity {
}
export interface DmMetaDescr extends OdMetaDescr {
}
export interface DmSelectionArg {
  newInstance?: boolean;
  copyInstance?: boolean;
  setHierarchy?: DmHierArg;
  setGroup?: DmSelectGroupArg;
  setCompound?: DmCompoundArg;
  setSchema?: DmSelectionSchemaArg;
  elSelectOp: DmElSelectOp;
  elRelative: DmElRelative;
  elKeys?: ElKeys;
  next?: DmSelectionArg;
  assign?: DmSelectionAssignArg;
  nextList?: DmSelectionArgVec;
  setLevel?: DmSelectLevelArg;
  limitElements?: boolean;
  setCalendarPeriod?: DmCalendarSelectionPeriodArg;
  selectFilter?: DmSelectFilterArg;
  setElementsGroup?: DmGroupArg;
  schemaNoApply?: boolean;
  createGroupOrSchema?: DimCreateGroupOrSchemaArg;
  parseAttr?: DmSelectionParseAttrArg;
}
export interface GetDimMetadataResult {
  id: DmId;
  data: DmMetadata;
  els?: GetDimElementsResult;
}
export interface DmSelectionCompound extends ItKey {
  isCompound?: boolean;
  isSingleSelected?: boolean;
  displayAsCompound?: boolean;
  selection?: DmSelectionSet;
}
export interface DmSelectionSetItem extends ItEntity {
  compound?: DmSelectionCompound;
  meta?: GetDimMetadataResult;
  sel?: DmSelectionArg;
}
export interface DmSelectionSchemaArg extends ItEntity {
  applyOnlyOnce?: boolean;
  onceApplied?: boolean;
  applyImmediate?: boolean;
  applyOnRebuild?: boolean;
}
export interface DmSelectionMeta {
  selectedCount: number;
  group?: DmGroup;
  schema?: DmSelectionSchemaArg;
  hierarchy?: DmHier;
  compound?: DmSelectionCompound;
  elementsGroup?: DmGroup;
  allowToChangeElementGroup?: boolean;
}
export interface DmMetadata extends ObjectMd {
  descr?: DmMetaDescr;
  blocks?: DmBlocks;
  attrs?: DmAttrs;
  attrHiers?: DmAttrHiers;
  levs?: DmLevs;
  indexes?: DmIndexes;
  hiers?: DmHiers;
  groups?: DmGroups;
  schemas?: DmSelectionSchemas;
  selection?: DmSelectionMeta;
  errorInfo?: ErrorInfo;
  calendarLevs?: DimCalendarLvlSet;
  defaultEl?: number;
}
export interface GetDimMetadataArg {
  pattern: DmMetadataPattern;
  elsArg?: GetDimElementsArg;
}
export interface DmMetadataPattern extends ObjectMdPattern {
  getDescr?: boolean;
  getAttrs?: boolean;
  getAttrHiers?: boolean;
  getBlocks?: boolean;
  getIndexes?: boolean;
  getLevs?: boolean;
  getHiers?: boolean;
  getGroups?: boolean;
  getSchemas?: boolean;
  getSelection?: boolean;
  getCompound?: boolean;
  dimArg?: GetDimMetadataArg;
  getBuildExcept?: boolean;
  getCalendarLevs?: boolean;
  getDefaultElem?: boolean;
}
export interface DmHierArg {
  id: string;
}
export interface DmGroupArg {
  id: string;
}
export interface DmSelectGroupArg extends DmGroupArg {
  limitToGroup?: boolean;
}
export interface DmCompoundArg {
  isCompound?: boolean;
  isSingleSelected?: boolean;
  displayAsCompound?: boolean;
  decompose?: boolean;
  compose?: boolean;
}
export interface DmSelectionTransform {
  apply?: boolean;
}
export interface DmSelectionAssignArg {
  source: DmId;
  append?: boolean;
  keepGroup?: boolean;
  keepSchema?: boolean;
  keepHierarchy?: boolean;
  transform?: DmSelectionTransform;
}
export interface DmSelectLevelArg extends ItKey {
  selectOp?: DmElSelectOp;
}
export interface DmCalendarSelectionPeriod {
  active?: boolean;
  start?: any;
  end?: any;
  levels?: DimCalendarLvlSet;
}
export interface DmCalendarSelectionPeriodArg extends DmCalendarSelectionPeriod {
  append?: boolean;
  findOutActive?: boolean;
}
export interface DmSelectFilterArg extends TextFilter {
  onlySelected?: boolean;
  includeParents?: boolean;
  includeChildren?: boolean;
}
export interface DimCreateGroupOrSchemaArg {
  isGroup?: boolean;
  name?: string;
  CreateOnly?: boolean;
}
export interface DmSelectionParseAttrArg {
  attr?: number;
  value?: TypedValue;
}
export interface ElAccessAttLabel {
  att: ElAccessAttribute;
  val?: SdLabelSubjs;
  allowed?: boolean;
}
export interface ElAccess {
  k: number;
  its: ElAccessAttLabelsVec;
}
export interface ElsAccess {
  acc?: ElAccessVec;
  labels?: SdLabels;
  attrs?: ElAccessAttributeVec;
}
export interface ElsAccessPattern {
  acc?: boolean;
  labels?: boolean;
}
export interface GetElsArg {
  parent?: ElKey;
  filter?: ElsFilter;
  pattern?: ElsPattern;
  range?: ListRange;
  totalCount?: boolean;
  acc?: ElsAccessPattern;
  filteredCount?: boolean;
}
export interface GetElsResult {
  els?: Els;
  totalCount?: number;
  acc?: ElsAccess;
  filteredCount?: number;
}
export interface DmOrderAtt {
  att: DimAttrId;
  asc?: boolean;
}
export interface DmOrderBy {
  its: DmOrderAttVec;
}
export interface GetDimElementsArg extends GetElsArg {
  selectionInfo?: boolean;
  changeSelection?: DmSelectionArg;
  text?: boolean;
  orderBy?: DmOrderBy;
}
export interface DimElementsSelectionInfo {
  firstSelected?: El;
  lastSelected?: El;
  selectedCount: number;
  calendarPeriod?: DmCalendarSelectionPeriod;
  text?: string;
  elementsGroup?: ItEntity;
  schema?: DmSelectionSchemaArg;
  group?: ItEntity;
}
export interface ChangeDimSelectionResult extends DmId {
  selectionInfo?: DimElementsSelectionInfo;
}
export interface GetDimElementsResult extends GetElsResult {
  id: DmId;
  selectionInfo?: DimElementsSelectionInfo;
}
export interface DmOpenBinding {
  value: string;
  object?: boolean;
  paramVals?: boolean;
  group?: boolean;
  selection?: boolean;
  defValue?: TypedValue;
  schema?: boolean;
}
export interface DmOpenArgs extends OdOpenArgs {
  calendarOpenAs?: number;
  binding?: DmOpenBinding;
}
export interface OpenDimArg {
  openArgs: DmOpenArgs;
  metaArg?: GetDimMetadataArg;
  clearGlobalCache?: boolean;
}
export interface OpenDimResult {
  id: DmId;
  meta?: GetDimMetadataResult;
}
export interface CubeExecFiltFunc {
  predefined: CubeExecFiltFuncPredef;
  text?: string;
}
export interface CubeExecFiltFuncNone extends CubeExecFiltFunc {
}
export interface CubeExecFiltFuncNonEmpty extends CubeExecFiltFunc {
  nonEmpty?: boolean;
}
export interface CubeExecFiltFuncTop extends CubeExecFiltFunc {
  function?: string;
  argument?: string;
  value?: string;
}
export interface CubeExecFiltFuncFilter extends CubeExecFiltFunc {
  condition?: string;
}
export interface CubeExecFiltFuncOrder extends CubeExecFiltFunc {
  orderBy?: string;
  orderType?: string;
}
export interface CubeExecFiltItem {
  text?: string;
  dimension?: ItEntity;
  function: CubeExecFiltFunc;
}
export interface CubeExecFiltSetup {
  its: CubeExecFiltItemsVec;
}
export interface CubeExecDimUnitsSetup {
  unitOption?: CubeExecSetupUnitOpt;
}
export interface CubeExecSetup {
  filter?: CubeExecFiltSetup;
  units?: CubeExecDimUnitsSetup;
}
export interface CubeDests {
  its: CubeDestsVec;
}
export interface CubeMd extends ObjectMd {
  dims?: CubeDims;
  dests?: CubeDests;
  selControl?: CubeSelControl;
  supportsRub?: boolean;
}
export interface CubeMdPattern extends ObjectMdPattern {
  all?: boolean;
  dims?: ListOperation;
  dimsFilter?: ListFilter;
  dim?: CubeDimPattern;
  dest?: ItKey;
  dests?: ListOperation;
  destsFilter?: ListFilter;
  selControl?: boolean;
}
export interface CubeDataSource extends ObInst {
  dest?: ItKey;
  dests?: CubeDests;
  cubeMd?: CubeMd;
}
export interface CubeDataSourcePattern {
  all?: boolean;
  dests?: boolean;
  getCubeArg?: CubeMdPattern;
}
export interface EaxDimLevelAggregator extends ItEntity {
  useDefaultLevelAggregation?: boolean;
  preserveMethod?: EaxExistingDataPreserveMethod;
  include?: DmLevs;
  includeChildren?: boolean;
  basicAggregatorOperation?: BasicAggregatorOper;
  includeOwner?: boolean;
}
export interface EaxBasicMatrixAggregator {
  useSelection?: boolean;
  dimLevelsAggregators?: EaxDimLevelAggregators;
}
export interface EaxChronoDimLevelAggregator extends ItEntity {
  useDefaultAggregation?: boolean;
  putonSrcLvl?: boolean;
  include?: DmLev;
  ChronoAggregOper?: ChronologicalAggregatorOper;
  includeChildren?: boolean;
}
export interface EaxChronoMartrixAggregator {
  chronoLevels?: EaxChronoAggregators;
}
export interface EaxMatrixAggregatorItem {
  factKey?: number;
  basicAggreg?: EaxBasicMatrixAggregator;
  chronoAggreg?: EaxChronoMartrixAggregator;
  cubeDimKey?: number;
  fromCube?: boolean;
  isCustomHierarchy?: boolean;
}
export interface EaxMatrixAggregatorsCollectionItem {
  destinationKey?: ItEntity;
  matrixAggregators?: EaxMatrixAggregators;
}
export interface RawMd extends ObjectMd {
  md?: any;
  mdb?: BinaryData;
  mod?: BinaryData;
  doc?: BinaryData;
  docFileName?: string;
  docMimeType?: string;
  stamp?: any;
  paramsDoc?: any;
  deps?: any;
  objDescr?: any;
  paramsb?: BinaryData;
  namesDoc?: any;
}
export interface RawMdPattern extends ObjectMdPattern {
  md?: boolean;
  mod?: boolean;
  doc?: boolean;
  docData?: boolean;
  isCustExt?: boolean;
  isBinMd?: boolean;
  isBinPar?: boolean;
}
export interface GetRawMdResult extends RawMd {
}
export interface SetRawMdArg {
  pattern: RawMdPattern;
  meta: RawMd;
  save?: boolean;
  metaGet?: RawMdPattern;
  isNew?: boolean;
}
export interface SetRawMdResult {
  id: OdId;
  meta?: RawMd;
}
export interface PredefinedStyleMdPattern {
  previews?: boolean;
}
export interface PredefinedStylesMdPattern {
  styleIndex?: boolean;
  styles?: PredefinedStyleMdPattern;
}
export interface PredefinedStylesDesc {
  predefinedStyleCount: number;
  previews?: PredefinedStylePreviewVec;
}
export interface PredefinedStyleDesc {
  predefinedStyleIndex: number;
}
export interface StyleSheetId {
  id: string;
}
export interface StyleSheetMdPattern {
  preview?: boolean;
}
export interface StyleSheetItem {
  key: number;
  tag: string;
  preview?: BinaryData;
  name: string;
  id: string;
}
export interface StyleDesc {
  name?: string;
  styleSheetKey?: number;
}
export interface StyleSheetMd {
  name?: string;
  type: StyleSheetType;
  items: StyleSheetItemVec;
}
export interface GetStyleSheetArg {
  pattern: StyleSheetMdPattern;
}
export interface GetStyleSheetResult {
  id: StyleSheetId;
  meta: StyleSheetMd;
}
export interface OpenStyleSheetArg extends OdOpenArgs {
  metaGet?: StyleSheetMdPattern;
}
export interface OpenStyleSheetResult {
  id: StyleSheetId;
  meta?: StyleSheetMd;
}
export interface StyleSheetCopyItem {
  id: string;
  resolution?: StyleSheetConflictResolutionType;
}
export interface CopyStyleSheetArg {
  resolution?: StyleSheetConflictResolutionType;
  items?: StyleSheetCopyItemVec;
}
export interface CopyStyleSheetResult {
}
export interface EaxOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
  storeObject?: boolean;
}
export interface EaxId {
  id: string;
}
export interface PvtDimNaming {
  expression: string;
}
export interface PvtCustomDimNaming {
  expression?: string;
  enabled?: boolean;
}
export interface PvtDimNamings {
  its: PvtDimNamingsVec;
  customNaming?: PvtCustomDimNaming;
}
export interface PvtDimCompound {
  isCompound?: boolean;
  displayAsCompound?: boolean;
  setIsFixed?: boolean;
}
export interface PvtDimFilterSettings {
  useCondition?: boolean;
  condition?: string;
  keepParent?: boolean;
}
export interface PvtDimSettings {
  filter?: PvtDimFilterSettings;
  needKeepLeafParents?: boolean;
  keepLeafParents?: TriState;
}
export interface PvtDim extends ItEntity {
  position?: PvtDimPos;
  meta?: GetDimMetadataResult;
  changeSelection?: DmSelectionArg;
  reverseOrder?: boolean;
  leafElementsOnly?: boolean;
  rowsViewMode?: PvtDimViewMode;
  columnsViewMode?: PvtDimViewMode;
  actualViewMode?: PvtDimViewMode;
  namings?: PvtDimNamings;
  compound?: PvtDimCompound;
  isTimeline?: boolean;
  calendarViewMode?: EaxCalendarViewMode;
  changeCounters?: SelectionChangeCounters;
  settings?: PvtDimSettings;
  isCombinedWithPrev?: boolean;
}
export interface PvtDims {
  its: PvtDimVec;
  viewMode?: PvtDimViewMode;
  execSetup?: CubeExecSetup;
}
export interface EaxDataEditState {
  readOnly?: boolean;
  modified?: boolean;
  modifiedSeries?: boolean;
  calcModified?: boolean;
}
export interface PvtSlotEl {
  k?: any;
  n?: string;
}
export interface PvtSlot {
  els: PvtSlotEls;
}
export interface PvtTableHeader {
  dims?: ItKeys;
  slots?: PvtSlots;
}
export interface PvtTableCell {
}
export interface PvtAttributeLinkPart {
  dimKey?: number;
  attrKey?: number;
  allowNull?: boolean;
}
export interface PvtAttributeLink {
  firstPart?: PvtAttributeLinkPart;
  secondPart?: PvtAttributeLinkPart;
  isValid?: boolean;
}
export interface PvtFilterSettings {
  suppressZeros?: boolean;
  suppressEmpty?: boolean;
  suppressNoNumeric?: boolean;
  useCondition?: boolean;
  conditionType?: PivotFilterType;
  conditionValueA?: any;
  conditionValueB?: any;
  keepParent?: boolean;
  enabled?: boolean;
  attrLinks?: PvtAttributeLinksVec;
  useTransformation?: boolean;
  keepNeighbors?: boolean;
  condition?: string;
}
export interface PvtHeaderFilterSettings extends PvtFilterSettings {
  excludeElements?: boolean;
}
export interface PvtFilter extends PvtFilterSettings {
  area?: PivotFilterArea;
  elements?: PivotFilterElements;
  range?: Rect;
  separateHeaders?: boolean;
}
export interface EaxExpanderMeta {
  dimKey?: number;
  levelIndex?: number;
  state?: boolean;
  isLeftHeader?: boolean;
}
export interface PvtTable {
  columns?: PvtTableHeader;
  rows?: PvtTableHeader;
  cells?: PvtTableCells;
  expanderStates?: EaxExpandersData;
}
export interface PvtTotalsItem {
  dimKey: number;
  baseLevel: number;
  types?: PvtEvaluatorElementTypes;
}
export interface PvtEvaluatorTotalsSettings {
  namingMode?: PvtTotalParentNamingMode;
  totalsNameSeparator?: string;
  hierarchyTotal?: boolean;
  overallTotal?: boolean;
  insteadOwnerTotalsType?: PvtEvaluatorElementType;
}
export interface PvtTotals {
  treatEmptyAsZero?: boolean;
  includeOwner?: boolean;
  byHierarchy?: boolean;
  byLevels?: boolean;
  rowTypes?: PvtEvaluatorElementTypes;
  columnTypes?: PvtEvaluatorElementTypes;
  dataSourceTotalsDefined?: boolean;
  commonTotalsAvailable?: boolean;
  items?: PvtTotalsItems;
  enabled?: boolean;
  placeBeforeData?: boolean;
  overallTotal?: boolean;
  evaluateForSingleElement?: boolean;
  rowSettings?: PvtEvaluatorTotalsSettings;
  columnSettings?: PvtEvaluatorTotalsSettings;
}
export interface PvtDimCalcItem {
  relativeElement?: ElKey;
}
export interface PvtDimCalc {
  items?: PvtDimCalcItemsVec;
}
export interface PvtDimCalcs {
  its: PvtDimCalcsVec;
}
export interface PvtEvaluator {
  totals?: PvtTotals;
  calcs?: PvtDimCalcs;
}
export interface PvtHeaderDimSort {
}
export interface PvtHeaderSorting {
  its: PvtHeaderDimSorts;
}
export interface PvtDataSlotSort {
}
export interface PvtDataSorting {
  its: PvtDataSlotSorts;
}
export interface EaxTransformations {
  its?: EaxTransformationVec;
}
export interface PvtSortItem {
  key?: number;
  kind?: PvtSortKind;
  index?: number;
  direction?: SortDirection;
  dimKey?: number;
  attrKey?: number;
  skipNonNumeric?: boolean;
  useTransformationValues?: boolean;
  transformations?: EaxTransformations;
  pos?: number;
  selectionText?: string;
}
export interface PvtSorting {
  header?: PvtHeaderSorting;
  columns?: PvtDataSorting;
  rows?: PvtDataSorting;
  items?: PvtSortItemsVec;
}
export interface PvtHighlightItem {
  index: number;
  conditionType?: PvtHighlightType;
  conditionValueA?: any;
  conditionValueB?: any;
  range?: Rect;
  area?: PivotFilterArea;
  enabled?: boolean;
}
export interface PvtHighlight {
  its: PvtHighlightItemsVec;
}
export interface PvtParetoSettingsItem {
  threshold?: number;
  kind?: PvtParetoKind;
  display?: boolean;
}
export interface PvtParetoSettings {
  elementIndex?: number;
  enabled?: boolean;
  topSettings?: PvtParetoSettingsItem;
  bottomSettings?: PvtParetoSettingsItem;
  otherAggregation?: PvtEvaluatorElementType;
}
export interface PvtPareto {
  columnsSettings?: PvtParetoSettings;
  rowsSettings?: PvtParetoSettings;
}
export interface PvtHeaderEvaluatedSlot extends ItEntity {
  pos?: number;
}
export interface PvtHeaderSettings {
  filter?: PvtHeaderFilterSettings;
  evaluatedSlots?: PvtHeaderEvaluatedSlotVec;
}
export interface EaxPivot {
  fixedElementsAggregation?: PvtAggregationOperation;
  filter?: PvtFilter;
  evaluator?: PvtEvaluator;
  sorting?: PvtSorting;
  pareto?: PvtPareto;
  highlight?: PvtHighlight;
  useDataCache?: boolean;
  drillThrough?: boolean;
  isEditEnabled?: boolean;
  topHeaderSettings?: PvtHeaderSettings;
  leftHeaderSettings?: PvtHeaderSettings;
  partialExecute?: boolean;
  isFactsAggregationAvailable?: boolean;
  separateCombinedDimsNamings?: boolean;
  mergedMode?: MergedNamingMode;
  mergedNamingSeparator?: string;
  dimsUnitedLeft?: TriState;
  dimsUnitedTop?: TriState;
  levelsSeparatedLeft?: boolean;
  levelsSeparatedTop?: boolean;
}
export interface EaxDataSourceDim extends ItEntity {
  dataSource: ItEntity;
  isFixed?: boolean;
  isCommon?: boolean;
}
export interface EaxDataSource extends ItEntity {
  cube?: CubeDataSource;
}
export interface SearchStrStrItem {
  k: string;
  v: string;
}
export interface SearchSelsItem {
  k: number;
  n: string;
  v: SearchStrStrDict;
}
export interface SearchCalenInfo {
  cLvlDimKey?: number;
  startDate?: any;
  endDate?: any;
}
export interface SearchCalenInfoRow {
  k: number;
  v: SearchCalenInfo;
}
export interface SearchRubFactorMetaItem {
  id?: string;
  k?: number;
  vals?: ArrLong;
}
export interface SearchRubFactorItem {
  factorKey?: number;
  attrs?: SearchRubFactorMetaDict;
}
export interface SearchSourceDataMeta {
  sourceClassId?: number;
  sourceKey?: number;
  sourceId?: string;
  sourceName?: string;
  hlSourceName?: string;
  sel?: SearchSelsDict;
  freeDims?: SearchSelsDict;
  calenInfo?: SearchCalenInfoDict;
  destKey?: number;
  factors?: SearchRubFactorDict;
}
export interface EaxDataSourceFactOperation {
  oSourceKey: number;
  FactKeys: ArrLong;
  Type: EaxDataSourceFactOperationType;
  SourceMeta: SearchSourceDataMeta;
}
export interface EaxDataSources {
  its: EaxDataSourcesVec;
  OpenOptions?: EaxOpenCubeOpts;
  DataSourceFactOperation?: EaxDataSourceFactOperation;
}
export interface EaxGridStyle {
  defaultStyle?: TabStyle;
  fixedCorner?: TabStyle;
  topHeader?: TabStyle;
  leftHeader?: TabStyle;
  internals?: TabStyle;
  totals?: TabStyle;
  totalsHeader?: TabStyle;
  ABC?: TabStyle;
  ABCHeader?: TabStyle;
  ABCTop?: TabStyle;
  ABCBottom?: TabStyle;
  highlightedCells?: TabStyle;
  changedCells?: TabStyle;
  virtualCells?: TabStyle;
  valueChange?: TabStyle;
  table?: TabTableStyle;
  calcs?: EaxCalcItemStyles;
  internalFormatConditions?: TabFormatConditions;
  totalsFormatConditions?: TabFormatConditions;
  ABCFormatConditions?: TabFormatConditions;
  rangeFormatConditions?: TabFormatConditions;
  rangeCellStyles?: TabStyles;
  partStyle?: EaxTablePartStyle;
}
export interface EaxObject {
  visible?: boolean;
  active?: boolean;
  enabled?: boolean;
  viewScale?: number;
  viewSize?: SizeU;
  sizeChanged?: boolean;
  viewOrder?: number;
  available?: boolean;
  syncIndicators?: boolean;
  visSelAction?: EaxVisualSelectionAction;
}
export interface EaxGridAdjust {
  mode?: EaxAdjustMode;
  minVisibleDataColumns?: number;
  maxRowsInCell?: number;
}
export interface EaxGridSelectElementsAction {
  range: TabComplexRange;
  slotIndex?: number;
}
export interface EaxGridAction {
  deleteElements?: EaxGridSelectElementsAction;
  keepElements?: EaxGridSelectElementsAction;
}
export interface TabFootnotesOptions {
  position?: BarDockingEdge;
  percentWidth?: number;
  percentHeight?: number;
}
export interface EaxGridLegendInfo {
  index: number;
  id: string;
}
export interface EaxGridLegends {
  md?: any;
  legendAssignment?: EaxGridIndicatorLegendAssignment;
}
export interface EaxGrid extends EaxObject {
  style?: EaxGridStyle;
  transposed?: boolean;
  displayLegend?: boolean;
  displayNumbers?: boolean;
  displayGrid?: boolean;
  fixHeaders?: boolean;
  fixHeadersOnPrint?: boolean;
  rowsHierarchical?: boolean;
  columnsHierarchical?: boolean;
  rowsHierarchyIndent?: number;
  columnsHierarchyIndent?: number;
  headerTitleType?: EaxHeaderTitleType;
  headerTitleContentType?: EaxHeaderTitleContentType;
  headerTitle?: string;
  adjust?: EaxGridAdjust;
  action?: EaxGridAction;
  isEnabledRowsGrowth?: boolean;
  isEnabledColsGrowth?: boolean;
  canEnableRowsGrowth?: boolean;
  canEnableColsGrowth?: boolean;
  dataDisplayMode?: EaxDataDisplayMode;
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxGridIndicatorElements;
  rowsSparklines?: boolean;
  columnsSparklines?: boolean;
  totalsSparklines?: boolean;
  indicatorAggs?: EaxGridIndicatorAggregations;
  legends?: EaxGridLegends;
  hyperlinksAsText?: boolean;
  footnotesOptions?: TabFootnotesOptions;
  highlightEvaluatedCells?: boolean;
}
export interface EaxChartSeriesPoints {
  index: number;
  points: EaxChartSeriePointsVec;
}
export interface EaxChartPointAction {
  series: EaxChartSeriesPointsVec;
}
export interface EaxChartAction {
  deleteElements?: EaxChartPointAction;
  onlyElements?: EaxChartPointAction;
  selElements?: EaxChartPointAction;
}
export interface EaxGridEmulateHyperlinkClick {
  row: number;
  column: number;
}
export interface EaxGridDrillDown {
  method: EaxDrillMethod;
  row: number;
  column: number;
  dimKey?: number;
  range?: TabComplexRange;
}
export interface EaxMapDrillDown {
  method: EaxDrillMethod;
  territoryId?: string;
  territoriesIds?: Avs;
}
export interface EaxChartDrillDown {
  method: EaxDrillMethod;
  serie: number;
  point?: number;
  dimKey?: number;
  points?: EaxChartSeriesPointsVec;
}
export interface PrxChartDrillDown extends EaxChartDrillDown {
  id: string;
}
export interface PrxGridDrillDown extends EaxGridDrillDown {
}
export interface PrxDrillDown {
  checkOnly?: boolean;
  grid?: PrxGridDrillDown;
  chart?: PrxChartDrillDown;
}
export interface EaxDrillDown {
  checkOnly?: boolean;
  grid?: EaxGridDrillDown;
  map?: EaxMapDrillDown;
  chart?: EaxChartDrillDown;
}
export interface EaxChartDrillInfo {
  method: EaxDataDrillType;
  serie: number;
  point?: number;
}
export interface EaxGridHyperlinkClickResult {
  action?: string;
  obj?: OdId;
  classId?: number;
}
export interface EaxDrillDownResult {
  cellDrillable?: boolean;
  serieDrillable?: boolean;
  territoryDrillable?: boolean;
}
export interface PrxDrillDownResult {
  cellDrillable?: boolean;
  serieDrillable?: boolean;
}
export interface EaxObjectSelAction {
  selElements?: EaxObjectSerieIds;
}
export interface EaxVisDrillAction {
  method: EaxDrillMethod;
  elementsIds?: EaxObjectSerieIds;
}
export interface EaxVisChangeSelectionAction {
  method: EaxVisChangeSelectionMethod;
  elementsIds?: EaxObjectSerieIds;
}
export interface EaxVisDrillInfo {
  elementId: any;
  method: EaxDataDrillType;
}
export interface EaxVisActionsInfo {
  drill?: EaxVisDrillInfos;
}
export interface EaxSelectableObject extends EaxObject {
  action?: EaxObjectSelAction;
  drillAction?: EaxVisDrillAction;
  changeSelectionAction?: EaxVisChangeSelectionAction;
  actionsInfo?: EaxVisActionsInfo;
}
export interface EaxChart extends EaxObject {
  range?: Rect;
  dataRange?: TabComplexRange;
  displayTotals?: boolean;
  useNormalization?: boolean;
  displayHidden?: boolean;
  buildPointNameHierarchy?: boolean;
  seriesInRows?: boolean;
  seriesLimit?: number;
  pointChartMode?: EaxPointChartMode;
  singleCellRangeMode?: EaxChartSingleCellRangeMode;
  evaluatedElements?: EaxChartEvaluatedElements;
  action?: EaxChartAction;
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxChartIndicatorElements;
  drill?: EaxChartDrillInfos;
  indicatorAggs?: EaxChartIndicatorAggregations;
}
export interface EaxMapDrillInfo {
  territoryId: any;
  method: EaxDataDrillType;
}
export interface EaxMapAction extends EaxObjectSelAction {
  selMarkers?: Avs;
}
export interface EaxMap extends EaxObject {
  dataIndex?: number;
  terrDimension?: ItEntity;
  terrAttribute?: ItEntity;
  pointsCount?: number;
  beginColor?: StringColor;
  endColor?: StringColor;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxMapIndicatorElements;
  territoriesDim?: ItEntity;
  timelineDim?: ItEntity;
  enable3D?: boolean;
  drill?: EaxMapDrillInfos;
  action?: EaxMapAction;
  indicatorAggs?: EaxMapIndicatorAggregations;
}
export interface EaxSpeedometer extends EaxObject {
  maxValue?: number;
  minValue?: number;
  aggregationFunction?: EaxAggregationFunction;
  autoScale?: boolean;
}
export interface EaxBubbleTree extends EaxSelectableObject {
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxBubbleTreeIndicatorElements;
  indicatorAggs?: EaxBubbleTreeIndicatorAggregations;
}
export interface EaxMapChart extends EaxObject {
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxMapChartIndicatorElements;
  indicatorAggs?: EaxMapChartIndicatorAggregations;
  enable3D?: boolean;
  action?: EaxMapAction;
  drill?: EaxMapDrillInfos;
}
export interface EaxBubbleChart extends EaxSelectableObject {
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxBubbleChartIndicatorElements;
  indicatorAggs?: EaxBubbleChartIndicatorAggregations;
}
export interface EaxTreeMap extends EaxSelectableObject {
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  indicatorElements?: EaxTreeMapIndicatorElements;
  indicatorAggs?: EaxTreeMapIndicatorAggregations;
}
export interface EaxSheet extends ItEntity {
  eax?: EaxId;
  isActive?: boolean;
}
export interface EaxSheets {
  active?: number;
  its: EaxSheetsVec;
}
export interface EaxCalendarOption {
  dimKey: number;
  showPeriod?: boolean;
  showLevels?: boolean;
}
export interface ViewerUpdateSettings {
  updateByIntervalEnabled?: boolean;
  autoUpdateByData?: boolean;
  AutoUpdateInterval?: number;
  autoUpdateIntervalUnits?: TimeUnits;
}
export interface EaxOptions {
  ignoreDirtyOnClose?: boolean;
  showDestinationsCombo?: boolean;
  calendarOptions?: EaxCalendarOptions;
  updateSettings?: ViewerUpdateSettings;
}
export interface EaxInteractiveMode {
  zoomAxisX?: boolean;
  autoScroll?: boolean;
  drillDown?: boolean;
  selection?: boolean;
  zoomAxisXAvailable?: boolean;
  autoScrollAvailable?: boolean;
  drillDownAvailable?: boolean;
  selectionAvailable?: boolean;
  useGridSelection?: boolean;
}
export interface CDActionArg {
  dimkey?: number;
  parentId?: string;
  valueId?: string;
  otherId?: string;
  name?: string;
}
export interface CDAttr extends ItEntity {
  dt?: ItDataType;
  aprimary?: boolean;
  aname?: boolean;
  aord?: boolean;
  aid?: boolean;
  nullable?: boolean;
}
export interface CDLevel extends ItEntity {
}
export interface CDElement {
  id?: string;
  owner?: any;
  map?: CDElementAttrValues;
  arg?: CDActionArg;
}
export interface CDAttrs {
  its?: CDAttrVec;
}
export interface CDElems {
  its?: CDElementVec;
}
export interface CDLevels {
  its?: CDLevelVec;
}
export interface CustomDimension {
  attrs?: CDAttrVec;
  elems?: CDElementVec;
  lvls?: CDLevelVec;
}
export interface CustomDimensionMdPattern extends ObjectMdPattern {
  op?: CDOp;
  arg?: CDActionArg;
  els?: ListOperation;
  attrs?: ListOperation;
  levels?: ListOperation;
}
export interface EaxHierarchyActionArg {
  dimkey?: number;
  sourcedimkey?: number;
  okey?: number;
  alterkey?: number;
  elemId?: string;
  transform?: ItKey;
  cd?: CustomDimension;
  hasNewElements?: boolean;
}
export interface EaxHierarchyItem extends ItEntity {
  arg?: EaxHierarchyActionArg;
}
export interface EaxHierarchies {
  its?: EaxHierarchyVec;
}
export interface EaxHierarchiesMdPattern extends ObjectMdPattern {
  arg?: EaxHierarchyActionArg;
}
export interface MsFormulaTransformPattern {
  inputs?: ListOperation;
  outputs?: ListOperation;
  formulaCount?: boolean;
  formulas?: TsFormulaPattern;
  displayId?: boolean;
  equationsFormula?: TsFormulaPattern;
  series?: ListOperation;
  kind?: boolean;
  displaySettings?: boolean;
  additionalAttributes?: boolean;
  calculationType?: boolean;
  calculationDirection?: boolean;
  transformVariable?: MsFormulaTransformVariablePattern;
  objectList?: ListOperation;
  params?: boolean;
}
export interface MsFormulaTransform {
  inputs?: MsFormulaTransformVariables;
  outputs?: MsFormulaTransformVariables;
  formulaCount?: number;
  formulas?: TsFormulas;
  displayId?: boolean;
  equationsFormula?: TsFormula;
  series?: MsFormulaTransformVariables;
  kind?: MsModelKnd;
  displaySettings?: MsDisplaySettings;
  additionalAttributes?: string;
  calculationType?: MsCalcType;
  calculationDirection?: MsCalcDirection;
  objectList?: MsFormulaObjectList;
  params?: MsModelParams;
}
export interface MsModelPeriod {
  identificationStartDate?: any;
  identificationEndDate?: any;
  forecastStartDate?: any;
  forecastEndDate?: any;
  identificationStartDateParamID?: string;
  identificationEndDateParamID?: string;
  forecastStartDateParamID?: string;
  forecastEndDateParamID?: string;
  autoPeriod?: number;
  identificationStartOffset?: number;
  identificationEndOffset?: number;
  forecastEndOffset?: number;
  isIdentStartCorrect?: boolean;
  isIdentEndCorrect?: boolean;
  isForecastEndCorrect?: boolean;
}
export interface EaxTransformationActionArg {
  type?: EaxTransformationType;
  dimkey?: number;
  de?: number;
  elemId?: string;
  transform?: ItKey;
  formula?: MsFormulaTransformPattern;
  period?: boolean;
  filterTransformations?: boolean;
  generatedName?: boolean;
  k?: number;
}
export interface SetEaxTransformationsResult {
  keys: EaxTransformationKeyVec;
}
export interface EaxTransformation extends ItEntity {
  enabled?: boolean;
  expression?: string;
  formulaTransform?: MsFormulaTransform;
  modelPeriod?: MsModelPeriod;
  type?: EaxTransformationType;
  dimkey?: number;
  de?: number;
  elemId?: string;
  hierOp?: EaxHierarchiesOp;
  error?: string;
  isFilter?: boolean;
  name?: string;
  generatedName?: string;
  calculationMode?: EaxTransformationCalculationMode;
}
export interface EaxTransformationPosition {
  k: number;
  pos: number;
}
export interface EaxTransformationCalcMode {
  k: number;
  calculationMode: EaxTransformationCalculationMode;
}
export interface EaxTransformationsSet {
  calcTransformations?: EaxTransformations;
  filterTransformations?: EaxTransformations;
  sortTransformations?: EaxTransformations;
}
export interface EaxTransformationsMdPattern {
  opCT?: ListOperation;
  opFT?: ListOperation;
  opST?: ListOperation;
}
export interface EaxTransformationsSaveArg {
  dimkey: number;
  de?: number;
  elemId?: string;
}
export interface EaxTransformationsEditArg {
  transformation?: EaxTransformationType;
  sortItem?: number;
  operation: EaxTransformationsEditOp;
  saveArg?: EaxTransformationsSaveArg;
}
export interface PutBinaryArg {
  operation?: ListOperation;
  data?: BinaryData;
  format?: string;
  fileName?: string;
}
export interface PutBinaryResult {
  id: BinaryId;
}
export interface GetBinaryArg {
  keep?: boolean;
  content?: boolean;
}
export interface ExportData {
  format: string;
  fileContent?: BinaryData;
  storeId?: BinaryId;
  warnings?: ArrString;
  fileName?: string;
}
export interface ExportSettings {
  storeResult?: boolean;
  format?: string;
  CSSClassName?: string;
  palette?: boolean;
  autoHeight?: boolean;
  objectAsBitmap?: boolean;
  chartAsBitmap?: boolean;
  mapAsBitmap?: boolean;
  cellImages?: boolean;
  fixEmfLines?: boolean;
  printMode?: boolean;
  showWarnings?: boolean;
  fileName?: string;
}
export interface EaxExportData extends ExportData {
}
export interface EaxExportDataPattern extends ExportSettings {
  chartAsImage?: boolean;
  selections?: EaxSelectionsVec;
}
export interface EaxHeader extends GxHeader {
}
export interface EaxPageSettings extends GxPageSettings {
}
export interface EaxTabRange {
  type: EaxRangeType;
  range?: TabComplexRange;
}
export interface EaxTabRangesPattern {
  all?: boolean;
  types?: EaxRangeTypes;
}
export interface EaxResources {
  isMultiLanguage?: boolean;
}
export interface EaxTablePartDesc {
  part: EaxTablePart;
  dimKey?: number;
  levelIndex?: number;
  element?: El;
}
export interface EaxHeaderPlacementSettings {
  partDesc?: EaxTablePartDesc;
  separated?: TriState;
  hierarchical?: TriState;
  duplicateParent?: TriState;
  collapseChildren?: TriState;
  childrenBeforeParents?: TriState;
  placement?: TriState;
  stairsHierarchy?: boolean;
  autoIndent?: TriState;
  indentValue?: number;
  displaySortIcons?: TriState;
  leafElementsOnly?: boolean;
  expanderPosition?: number;
  hierarchyIndentPosition?: number;
  hierarchyIndent?: number;
  outputData?: boolean;
  outputLeftHeader?: boolean;
  outputTopHeader?: boolean;
  needKeepLeafParents?: boolean;
  keepLeafParents?: TriState;
  sortIconsEnabled?: boolean;
  mergedKey?: ElKey;
  uniteDimWithPrev?: boolean;
  combineElementWithPrevious?: boolean;
}
export interface EaxDrillSettingsValue {
  key: number;
  value: any;
}
export interface EaxDimensionDrillSettings {
  mode?: EaxDataDrillMode;
  sheet?: ItKey;
  dim?: ItKey;
  index?: ItKey;
  attribute?: ItKey;
  attributes?: string;
  action?: string;
  actionType?: TabHyperlinkActionType;
  values?: EaxDrillSettingsValueVec;
}
export interface EaxDimensionDrillSettingsPattern {
  values?: ListOperation;
}
export interface EaxDimensionSettings {
  partDesc?: EaxTablePartDesc;
  drilled?: TriState;
  isDrilled?: boolean;
  drillSettings?: EaxDimensionDrillSettings;
}
export interface EaxStatistic extends ItEntity {
  nodeType: TsStatisticsTreeNodeType;
  value?: any;
  group?: ItKey;
  type?: TsStatisticsType;
  category?: TsStatisticsCategory;
  custom?: EaxCustomStatisticsType;
}
export interface EaxStatistics {
  its: EaxStatisticsVec;
  vis?: boolean;
  enabled?: boolean;
}
export interface EaxStatisticsPattern {
  includeAll?: boolean;
}
export interface GetTabSheetDataArg {
  pattern: TabSheetPattern;
  range?: TabRange;
  ranges?: TabRanges;
  action?: TabSheetAction;
}
export interface GetMapArg {
  pattern: MapMdPattern;
}
export interface GetChartArg {
  pattern: ChartMdPattern;
}
export interface GetSpeedometerArg {
  pattern: SpeedometerMdPattern;
}
export interface GetBubbleTreeArg {
  pattern: BubbleTreeMdPattern;
}
export interface GetTreeMapArg {
  pattern: TreeMapMdPattern;
}
export interface GetMapChartArg {
  pattern: MapChartMdPattern;
}
export interface GetBubbleChartArg {
  pattern: BubbleChartMdPattern;
}
export interface GetTabSheetDataResult {
  id: TabSheetId;
  sheet?: TabSheetStruct;
  ranges?: TabSheetParts;
  metaData?: TabMd;
  searchResult?: TabSearchResult;
  refresh?: EaxRefreshResult;
}
export interface GetMapResult {
  id: MapId;
  meta: MapMd;
}
export interface GetChartResult {
  id: ChartId;
  meta: ChartMd;
}
export interface GetChartStyleResult {
  colors?: string;
}
export interface GetSpeedometerResult {
  id: SpeedometerId;
  meta: SpeedometerMd;
}
export interface GetBubbleTreeResult {
  id: BubbleTreeId;
  meta: BubbleTreeMd;
}
export interface GetTreeMapResult {
  id: TreeMapId;
  meta: TreeMapMd;
}
export interface GetMapChartResult {
  id: MapChartId;
  meta: MapChartMd;
}
export interface GetBubbleChartResult {
  id: BubbleChartId;
  meta: BubbleChartMd;
}
export interface SetTabSheetDataArg {
  TabSheetData?: TabData;
  metaData?: TabMd;
  range?: TabRange;
  setPattern?: TabSheetPattern;
  getArg?: GetTabSheetDataArg;
  refresh?: EaxRefresh;
  action?: TabSheetAction;
}
export interface SetMapArg {
  meta: MapMd;
  metaGet?: MapMdPattern;
}
export interface SetChartArg {
  meta: ChartMd;
  metaGet?: ChartMdPattern;
}
export interface SetSpeedometerArg {
  meta: SpeedometerMd;
  metaGet?: SpeedometerMdPattern;
}
export interface SetBubbleTreeArg {
  meta: BubbleTreeMd;
  metaGet?: BubbleTreeMdPattern;
}
export interface SetTreeMapArg {
  meta: TreeMapMd;
  metaGet?: TreeMapMdPattern;
}
export interface SetMapChartArg {
  meta: MapChartMd;
  metaGet?: MapChartMdPattern;
}
export interface SetBubbleChartArg {
  meta: BubbleChartMd;
  metaGet?: BubbleChartMdPattern;
}
export interface SetTabSheetDataResult extends GetTabSheetDataResult {
}
export interface SetMapResult {
  id: MapId;
  metaGet?: MapMd;
}
export interface SetChartResult {
  id: ChartId;
  metaGet?: ChartMd;
}
export interface SetSpeedometerResult {
  id: SpeedometerId;
  metaGet?: SpeedometerMd;
}
export interface SetBubbleTreeResult {
  id: BubbleTreeId;
  metaGet?: BubbleTreeMd;
}
export interface SetTreeMapResult {
  id: TreeMapId;
  metaGet?: TreeMapMd;
}
export interface SetMapChartResult {
  id: MapChartId;
  metaGet?: MapChartMd;
}
export interface SetBubbleChartResult {
  id: BubbleChartId;
  metaGet?: BubbleChartMd;
}
export interface UndoRedo {
  enabled?: boolean;
  undo?: number;
  redo?: number;
  isEmpty?: boolean;
  delUndoRedo?: number;
  block?: boolean;
}
export interface EaxDimFixInfo {
  dimKey: number;
  value: boolean;
  canFix?: boolean;
  compoundKey?: number;
  sourcesKeys?: EaxKeysVec;
}
export interface EaxPinnedDim {
  sourceKey: number;
  dimKey: number;
  value: boolean;
}
export interface GetEaxPinnableDimsArg {
  dims?: EaxPinnedDims;
  direction: boolean;
}
export interface EaxDimJoinInfo {
  sourceKey: number;
  dimKey: number;
  indexId: string;
  op: ListOperation;
  ownerDimKey?: number;
}
export interface EaxDimDataFilterResult {
  dimKey: number;
  els?: GetDimElementsResult;
}
export interface EaxDimsDataFilterResult {
  its: EaxDimDataFiltersResult;
}
export interface EaxDimDataFilterArg {
  dimKey: number;
  elsArg?: GetDimElementsArg;
}
export interface EaxDimDataFilters {
  dimsArg?: EaxDimDataFilterArgs;
}
export interface EaxDataFilter {
  min?: number;
  max?: number;
  dataDimsFilterResult?: EaxDimsDataFilterResult;
}
export interface EaxDataStatistics {
  minValue: number;
  maxValue: number;
}
export interface EaxDrillInfo {
  n: number;
  method: EaxDataDrillType;
}
export interface StreamId {
  id: string;
}
export interface GenWbkId {
  ob?: Ob;
}
export interface EaxSpecialDims {
  timeLineDimension?: ItEntity;
  objectivesDimension?: ItEntity;
  indicatorsDimension?: ItEntity;
  markerDimension?: ItEntity;
  secondaryObjectivesDimension?: ItEntity;
  timeLineValidDims?: ItKeys;
  objectivesValidDims?: ItKeys;
  indicatorsValidDims?: ItKeys;
  markerValidDims?: ItKeys;
  secondaryObjectivesValidDims?: ItKeys;
}
export interface EaxValidation {
  k?: number;
  id?: string;
  n?: string;
  metabaseKey?: number;
}
export interface EaxValidations {
  its: EaxValidationsVec;
}
export interface VfDiagnosticReport {
  rules?: VfRules;
  exceptions?: VfRules;
  exception?: TabComplexRange;
  showExplainedExceptions?: boolean;
  hasRuns?: boolean;
  explanation?: string;
}
export interface VfDiagnosticReportPattern {
  rules?: boolean;
  exception?: VfDiagnosticReportException;
  showExplainedExceptions?: boolean;
}
export interface PrxGridDescr {
  dataSource?: Od;
}
export interface EaxTimedTopobase {
  timePoint: number;
  key?: number;
  topobase?: any;
  topobase2?: string;
  availableFormats?: TopobaseFormatVec;
}
export interface EaxDimMoveInfo {
  sourceKey: number;
  dimKey: number;
  indexFrom: number;
  indexTo: number;
  swap: boolean;
}
export interface EaxDimAttributeNaming {
  dimKey: number;
  attrKey: number;
  setAttribute: boolean;
}
export interface EaxDimAttributeNamingItem {
  key: number;
  id?: string;
  isset?: boolean;
  isdefault?: boolean;
  setorder?: number;
}
export interface EaxDimAttributesNamingItem {
  dimKey: number;
  attrKeys?: EaxDimNamingAttributes;
  useCustomNaming?: boolean;
}
export interface EaxDimAttributesNaming {
  multipleAttributesEnabled?: boolean;
  multipleAttributesSpaced?: boolean;
  multipleAttributesSeparator?: string;
  mode?: EaxDimAttributesNamingMode;
  attributes?: EaxDimAttributesNamingVec;
}
export interface EaxAddFormula {
  name: string;
  dimKey: number;
  elementKey?: any;
  useGridSelection?: boolean;
  combine?: boolean;
  args?: any;
}
export interface EaxPivotDataChangedArgs {
  dimKey: number;
  elementKey: any;
}
export interface EaxMd extends ObjectMd {
  dims?: PvtDims;
  dataEditState?: EaxDataEditState;
  table?: PvtTable;
  pivot?: EaxPivot;
  dataSources?: EaxDataSources;
  dataSourceDims?: EaxDataSourceDims;
  grid?: EaxGrid;
  chart?: EaxChart;
  map?: EaxMap;
  sheets?: EaxSheets;
  windowsPosition?: EaxWindowsPosition;
  title?: GxTitle;
  params?: OdArgs;
  eaxParams?: OdArgs;
  options?: EaxOptions;
  interactiveMode?: EaxInteractiveMode;
  hiddenDims?: ItKeys;
  exportData?: EaxExportData;
  header?: EaxHeader;
  footer?: EaxHeader;
  pageSettings?: EaxPageSettings;
  specificRanges?: EaxTabRanges;
  statistics?: EaxStatistics;
  speedometer?: EaxSpeedometer;
  bubbleTree?: EaxBubbleTree;
  treeMap?: EaxTreeMap;
  mapChart?: EaxMapChart;
  bubbleChart?: EaxBubbleChart;
  hasPivot?: boolean;
  getTabSheet?: GetTabSheetDataResult;
  getMap?: GetMapResult;
  getChart?: GetChartResult;
  getSpeedometer?: GetSpeedometerResult;
  getBubbleTree?: GetBubbleTreeResult;
  getTreeMap?: GetTreeMapResult;
  getMapChart?: GetMapChartResult;
  getBubbleChart?: GetBubbleChartResult;
  setTabSheet?: SetTabSheetDataResult;
  setMap?: SetMapResult;
  setChart?: SetChartResult;
  setSpeedometer?: SetSpeedometerResult;
  setBubbleTree?: SetBubbleTreeResult;
  setTreeMap?: SetTreeMapResult;
  setMapChart?: SetMapChartResult;
  setBubbleChart?: SetBubbleChartResult;
  undoRedo?: UndoRedo;
  lockrecalc?: boolean;
  fixedDims?: EaxDimFixInfos;
  moveDim?: EaxDimMoveInfo;
  dimAttrNaming?: EaxDimAttributeNaming;
  dimAttrsNaming?: EaxDimAttributesNaming;
  displaySourcesNames?: boolean;
  dataFilter?: EaxDataFilter;
  dataStatistics?: EaxDataStatistics;
  rowsDrill?: EaxDrillInfos;
  columnsDrill?: EaxDrillInfos;
  resources?: EaxResources;
  pinnedDims?: EaxPinnedDims;
  pinnableDims?: EaxPinnedDims;
  mode?: EaxMode;
  topobaseKey?: number;
  settings?: StreamId;
  specialDims?: EaxSpecialDims;
  hierarchies?: EaxHierarchies;
  transformations?: EaxTransformations;
  customDimension?: CustomDimension;
  canGenWbk?: boolean;
  generatedWbk?: GenWbkId;
  generatedProblem?: number;
  validations?: EaxValidations;
  diagnosticReport?: VfDiagnosticReport;
  timedTopobases?: EaxTimedTopobases;
  metaHierarchy?: boolean;
  metaHieMembers?: EaxMetaHieMemVec;
  dmHiers?: DmHiers;
  indicatorsSels?: EaxIndicatorsSelections;
  changeUnitsSelection?: DmSelectionArg;
  unitsDim?: GetDimMetadataResult;
  selectPart?: EaxTablePartDesc;
  defaultActivePart?: EaxTablePartDesc;
  selectedParts?: EaxTablePartDescsVec;
  tableParts?: EaxTablePartDescsVec;
  rangeParts?: EaxTablePartDescsVec;
  hdrPlacementSettings?: EaxHeaderPlacementSettings;
  changeTransformationPos?: EaxTransformationPosition;
  changeTransformationCalcMode?: EaxTransformationCalcMode;
  dataSliceAggs?: EaxSliceIndicatorAggregations;
  dimJoins?: EaxDimJoinInfos;
  dimensionSettings?: EaxDimensionSettings;
  groupRange?: TabComplexRange;
  ungroupRange?: TabComplexRange;
  addFormula?: EaxAddFormula;
  arrangeTransformations?: ArrLong;
  calculationOptions?: EaxDataAreaSliceCalculationOptions;
  skipEmptyValues?: boolean;
  styleSheets?: GetStyleSheetResultVec;
  lockUpdate?: boolean;
  dataAreaCalcOnChangedData?: TriState;
  sliceCalcOnChangedData?: TriState;
  sliceKeepChangedData?: TriState;
  checkChangedData?: boolean;
  aggregatorsCollection?: EaxMatrixAggregatorsCollection;
}
export interface PvtSlotPattern {
  useSelIndex?: boolean;
  elementKey?: boolean;
  elementName?: boolean;
}
export interface PvtHeaderPattern {
  parentKey?: boolean;
  elementKey?: boolean;
  elementName?: boolean;
}
export interface PvtTablePattern {
  headers?: boolean;
  slots?: PvtSlotPattern;
  hierarchicalHdrs?: PvtHeaderPattern;
  cells?: boolean;
  emptyCells?: boolean;
  cellsRange?: Rect;
  scales?: boolean;
  expandersMeta?: boolean;
}
export interface EaxGridStylePattern {
  all?: boolean;
  parts?: EaxGridStyleParts;
  ops?: EaxGridStylePartListOps;
  partDesc?: EaxTablePartDesc;
}
export interface EaxTimedTopobasesPattern {
  format?: TopobaseFormat;
}
export interface PvtHeaderSettingsPattern {
  evaluatedSlots?: ListOperation;
}
export interface PvtPattern {
  sortItems?: ListOperation;
  leftHeader?: PvtHeaderSettingsPattern;
  topHeader?: PvtHeaderSettingsPattern;
}
export interface EaxMdPattern extends ObjectMdPattern {
  dimArg?: GetDimMetadataArg;
  dataEditState?: boolean;
  dims?: boolean;
  specialDims?: boolean;
  dimNamings?: boolean;
  dimSettings?: boolean;
  table?: PvtTablePattern;
  changeSelection?: boolean;
  pivot?: boolean;
  pareto?: boolean;
  dataSources?: ListOperation;
  dataSource?: CubeDataSourcePattern;
  forceLoadDims?: boolean;
  dataSourceDims?: boolean;
  filter?: boolean;
  totals?: boolean;
  sorting?: boolean;
  leftHeaderSettings?: boolean;
  topHeaderSettings?: boolean;
  dimCalcs?: ListOperation;
  dimCalcsItems?: ListOperation;
  highlight?: ListOperation;
  gridStyle?: EaxGridStylePattern;
  grid?: boolean;
  chart?: boolean;
  map?: boolean;
  title?: boolean;
  params?: boolean;
  eaxParams?: boolean;
  options?: boolean;
  calendarOptions?: ListOperation;
  sheets?: ListOperation;
  duplicateSheet?: number;
  insertAfter?: number;
  interactiveMode?: boolean;
  hiddenDims?: ListOperation;
  exportData?: EaxExportDataPattern;
  header?: boolean;
  footer?: boolean;
  pageSettings?: boolean;
  specificRanges?: EaxTabRangesPattern;
  statistics?: EaxStatisticsPattern;
  speedometer?: boolean;
  bubbleTree?: boolean;
  treeMap?: boolean;
  mapChart?: boolean;
  bubbleChart?: boolean;
  getTabSheet?: GetTabSheetDataArg;
  getMap?: GetMapArg;
  getChart?: GetChartArg;
  getSpeedometer?: GetSpeedometerArg;
  getBubbleTree?: GetBubbleTreeArg;
  getTreeMap?: GetTreeMapArg;
  getMapChart?: GetMapChartArg;
  getBubbleChart?: GetBubbleChartArg;
  setTabSheet?: SetTabSheetDataArg;
  setMap?: SetMapArg;
  setChart?: SetChartArg;
  setSpeedometer?: SetSpeedometerArg;
  setBubbleTree?: SetBubbleTreeArg;
  setTreeMap?: SetTreeMapArg;
  setMapChart?: SetMapChartArg;
  setBubbleChart?: SetBubbleChartArg;
  undoRedo?: boolean;
  lockrecalc?: boolean;
  fixedDims?: boolean;
  dimAttrsNaming?: boolean;
  displaySourcesNames?: boolean;
  resetTopobase?: boolean;
  topobaseKey?: boolean;
  rowsDrill?: boolean;
  columnsDrill?: boolean;
  drillRange?: TabRange;
  chartDrill?: boolean;
  chartDrillSeriesOnly?: boolean;
  mapDrill?: boolean;
  mapTerritoryDrill?: any;
  resources?: boolean;
  metaVisibleObjects?: boolean;
  propertiesVisibleObjects?: boolean;
  pinnedDims?: boolean;
  pinnableDims?: GetEaxPinnableDimsArg;
  mode?: boolean;
  settings?: boolean;
  dataStatistics?: boolean;
  dimFilters?: EaxDimDataFilters;
  hierarchies?: EaxHierarchiesOp;
  hierarchiesArg?: EaxHierarchyActionArg;
  transformations?: ListOperation;
  transformationsArg?: EaxTransformationActionArg;
  customDimension?: CDOp;
  canGenWbk?: boolean;
  genWbk?: boolean;
  genProblem?: boolean;
  validations?: ListOperation;
  diagnosticReport?: VfDiagnosticReportPattern;
  timedTopobases?: EaxTimedTopobasesPattern;
  metaHierarchy?: boolean;
  dmHiers?: ListOperation;
  indicatorsSels?: boolean;
  editTransformation?: EaxTransformationsEditArg;
  useGridAutoAdjust?: boolean;
  unitsDim?: GetDimMetadataArg;
  defaultActivePart?: boolean;
  selectedParts?: boolean;
  tableParts?: boolean;
  hdrPlacementSettings?: EaxTablePartDesc;
  dimensionSettings?: EaxTablePartDesc;
  dimensionDrillSettings?: EaxDimensionDrillSettingsPattern;
  attrLinks?: ListOperation;
  dataSliceAggs?: boolean;
  addMetaHieSelection?: boolean;
  dimJoins?: boolean;
  rangeParts?: TabComplexRange;
  pivotPattern?: PvtPattern;
  calculationOptions?: boolean;
  skipEmptyValues?: boolean;
  styleSheets?: StyleSheetMdPattern;
  dataAreaCalcOnChangedData?: boolean;
  sliceCalcOnChangedData?: boolean;
  sliceKeepChangedData?: boolean;
  checkChangedDataArgs?: EaxPivotDataChangedArgs;
  aggregatorsCollection?: boolean;
}
export interface EaxSaveDataArg {
  continueOnError?: boolean;
}
export interface EaxSaveDataErrorInfo extends ErrorInfo {
}
export interface EaxSaveDataResult {
  errorInfo?: EaxSaveDataErrorInfo;
}
export interface EaxRefresh {
  grid?: boolean;
  map?: boolean;
  chart?: boolean;
  all?: boolean;
  fetchData?: boolean;
  saveData?: boolean;
  saveDataArg?: EaxSaveDataArg;
  revisionComment?: string;
  flushDataCache?: boolean;
  selection?: boolean;
  gridPart?: boolean;
  gridPartArg?: EaxGridRefreshPart;
  bubbleTree?: boolean;
  treeMap?: boolean;
  mapChart?: boolean;
  bubbleChart?: boolean;
  dataSource?: boolean;
}
export interface EaxRefreshResult {
  saveDataResult?: EaxSaveDataResult;
}
export interface EaxMdArg {
  refresh?: EaxRefresh;
  drillDown?: EaxDrillDown;
  emulateGridHyperlinkClick?: EaxGridEmulateHyperlinkClick;
}
export interface EaxMdResult {
  refresh?: EaxRefreshResult;
  drillDown?: EaxDrillDownResult;
  changedDims?: ArrLong;
  transformations?: SetEaxTransformationsResult;
  gridHyperlinkClick?: EaxGridHyperlinkClickResult;
}
export interface GetEaxMdArg extends EaxMdArg {
  pattern?: EaxMdPattern;
  getChangedDims?: boolean;
}
export interface GetEaxMdResult extends EaxMdResult {
  id: EaxId;
  meta?: EaxMd;
}
export interface FromFileEaxArg {
  fileType: EaxFileFormat;
  fileContent?: BinaryData;
}
export interface SetEaxMdArg extends EaxMdArg {
  pattern: EaxMdPattern;
  meta: EaxMd;
  metaGet?: EaxMdPattern;
  fileArgs?: FromFileEaxArg;
}
export interface SetEaxMdResult extends EaxMdResult {
  id: EaxId;
  meta?: EaxMd;
}
export interface OpenEaxArg {
  args: EaxOpenArgs;
  metaGet?: EaxMdPattern;
  metaGetActiveSheet?: EaxMdPattern;
  createInfo?: ObjectCreateInfo;
  metaSet?: SetEaxMdArg;
  metaSetActiveSheet?: SetEaxMdArg;
}
export interface OpenEaxResult {
  id: EaxId;
  meta?: EaxMd;
  metaActiveSheet?: EaxMd;
  metaSet?: SetEaxMdResult;
}
export interface OpenScorecardArg extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface ScorecardId {
  id: string;
}
export interface ScorecardPerspective extends ItEntity {
}
export interface ScorecardPerspectives {
  its: ScorecardPerspectivesVec;
}
export interface ScorecardGoalValue {
  val: any;
  dt: ItDataType;
}
export interface ScorecardObjective extends ItEntity {
  goal?: ScorecardGoalValue;
  value?: number;
  perspective?: number;
}
export interface ScorecardObjectives {
  its: ScorecardObjectivesVec;
}
export interface ScorecardViewExportData extends ExportData {
}
export interface ScorecardViewExportDataPattern extends ExportSettings {
  size: SizeU;
  exportScTitle?: boolean;
}
export interface ScDim extends ItEntity {
  meta?: GetDimMetadataResult;
  changeSelection?: DmSelectionArg;
}
export interface ScDims {
  its: ScDimVec;
}
export interface ScorecardMd extends ObjectMd {
  calcDate?: any;
  minDate: any;
  maxDate: any;
  calenLevel?: DimCalendarLvl;
  calenNameFormat?: string;
  objectives: ScorecardObjectives;
  perspectives: ScorecardPerspectives;
  view?: ScorecardViewExportData;
  parameters?: ScDims;
  title?: GxTitle;
}
export interface ScorecardMdPattern extends ObjectMdPattern {
  goals?: boolean;
  perspectives?: ListFilter;
  objectives?: ListFilter;
  view?: ScorecardViewExportDataPattern;
  params?: boolean;
  dimArg?: GetDimMetadataArg;
  title?: boolean;
}
export interface ScorecardRefresh {
  recalc?: boolean;
}
export interface GetScorecardMdArg {
  pattern: ScorecardMdPattern;
  refresh?: ScorecardRefresh;
  getObjValDate?: any;
  calendarLevel?: DimCalendarLvl;
}
export interface GetScorecardMdResult {
  id: ScorecardId;
  meta: ScorecardMd;
}
export interface OpenScorecardOpArg {
  args: OpenScorecardArg;
  getMd?: GetScorecardMdArg;
}
export interface OpenScorecardResult {
  id: ScorecardId;
  meta?: GetScorecardMdResult;
}
export interface SetScorecardMdArg {
  pattern: ScorecardMdPattern;
  meta: ScorecardMd;
  perspectivesOp?: ListOperation;
  objectivesOp?: ListOperation;
  refresh?: ScorecardRefresh;
  metaGet?: GetScorecardMdArg;
}
export interface SetScorecardMdResult {
  id: ScorecardId;
  metaGet?: GetScorecardMdResult;
}
export interface RdsId {
  id: string;
}
export interface RdsAttrTranslation extends ItEntity {
  locale: LocaleInt;
  attribute?: ItEntity;
}
export interface RdsAttrTranslations {
  its: RdsAttrTranslationsVec;
  isON?: boolean;
}
export interface RdsAttr extends ItEntity {
  predefined?: RdsPredefinedAttribute;
  dt?: ItDataType;
  kind?: RdsAttributeKind;
  nullable?: boolean;
  hasMultipleValues?: boolean;
  readAccess?: string;
  writeAccess?: string;
  timeDependent?: boolean;
  tag?: any;
  visibleForEdit?: TriState;
  translations?: RdsAttrTranslations;
  isTranslation?: boolean;
  link?: ItEntity;
  lookup?: ItEntity;
  dataDomain?: ItDataDomain;
  defExpr?: string;
  deKind?: number;
}
export interface RdsAttrs {
  its: RdsAttrsVec;
}
export interface RdsParamControl {
  controlledParam: ItEntity;
  controlAttribute?: ItEntity;
  controlExpr?: string;
}
export interface RdsParamsControl {
  its: RdsParamControlsVec;
}
export interface RdsLink extends ItEntity {
  attribute?: ItEntity;
  refDictionary?: Od;
  refAttribute?: ItEntity;
  deleteConstraint?: RdsConstraintType;
  displayAttribute?: ItEntity;
  displayFormat?: RdsReferenceDisplayFormat;
  group?: ItEntity;
  paramsControl?: RdsParamsControl;
}
export interface RdsLinks {
  its: RdsLinksVec;
}
export interface RdsDictionaryTranslation extends ItEntity {
  locale: LocaleInt;
  isDefault?: boolean;
}
export interface RdsDictionaryTranslations {
  its: RdsDictionaryTranslationsVec;
  isON?: boolean;
}
export interface RdsParam extends ItEntity {
  attribute?: ItEntity;
  predefined?: RdsPredefinedParam;
  skipOnNull?: boolean;
}
export interface RdsParams {
  its: RdsParamsVec;
}
export interface RdsLevel extends ItEntity {
}
export interface RdsLevels {
  its: RdsLevelsVec;
}
export interface RdsImportSchema extends ItEntity {
}
export interface RdsImportSchemas {
  its: RdsImportSchemasVec;
}
export interface RdsExportSchema extends ItEntity {
}
export interface RdsExportSchemas {
  its: RdsExportSchemasVec;
}
export interface RdsUniqueKeyAttribute {
  attribute?: ItEntity;
}
export interface RdsUniqueKeyAttributes {
  its: RdsUniqueKeyAttributeVec;
}
export interface RdsMetaIndex {
  enabled?: boolean;
}
export interface RdsUniqueKey extends ItEntity {
  attributes?: RdsUniqueKeyAttributes;
  hidden?: boolean;
  useInSelection?: boolean;
  caseSensitive?: boolean;
  checkError?: ErrorInfo;
}
export interface RdsUniqueKeyPattern {
  all?: boolean;
  attributes?: ListOperation;
  check?: boolean;
}
export interface RdsUniqueKeys {
  its: RdsUniqueKeyVec;
}
export interface RdsNonUniqueKeyAttribute {
  attribute?: ItEntity;
}
export interface RdsNonUniqueKeyAttributes {
  its: RdsNonUniqueKeyAttributeVec;
}
export interface RdsNonUniqueKey extends ItEntity {
  attributes?: RdsNonUniqueKeyAttributes;
  metaIndex?: RdsMetaIndex;
}
export interface RdsNonUniqueKeyPattern {
  all?: boolean;
  attributes?: ListOperation;
}
export interface RdsNonUniqueKeys {
  its: RdsNonUniqueKeyVec;
}
export interface RdsMd extends ObjectMd {
  attrs?: RdsAttrs;
  db?: Od;
  links?: RdsLinks;
  params?: RdsParams;
  translations?: RdsDictionaryTranslations;
  levels?: RdsLevels;
  importSchemas?: RdsImportSchemas;
  exportSchemas?: RdsExportSchemas;
  uniqueKeys?: RdsUniqueKeys;
  nonUniqueKeys?: RdsNonUniqueKeys;
  timeDependency?: RdsDictTimeDependencyType;
  eeCallback?: string;
  defaultElemKey?: ElKey;
}
export interface RdsMdPattern extends ObjectMdPattern {
  all?: boolean;
  attrs?: ListOperation;
  db?: boolean;
  links?: ListOperation;
  params?: ListOperation;
  translations?: ListOperation;
  levels?: ListOperation;
  importSchemas?: ListOperation;
  exportSchemas?: ListOperation;
  uniqueKeys?: ListOperation;
  uniqueKey?: RdsUniqueKeyPattern;
  nonUniqueKeys?: ListOperation;
  nonUniqueKey?: RdsNonUniqueKeyPattern;
}
export interface RdsActionArg {
  execImport?: ItEntity;
  execExport?: ItEntity;
}
export interface RdsActionResult {
  execImport?: boolean;
  execExport?: boolean;
}
export interface GetRdsArg {
  pattern?: RdsMdPattern;
}
export interface GetRdsResult {
  id: RdsId;
  meta?: RdsMd;
}
export interface SetRdsArg {
  pattern: RdsMdPattern;
  meta: RdsMd;
  metaGet?: RdsMdPattern;
  action?: RdsActionArg;
}
export interface SetRdsResult {
  id: RdsId;
  meta?: RdsMd;
  action?: RdsActionResult;
}
export interface RdsOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
  fetchAll?: boolean;
  setDefaultDateTimeParamValues?: boolean;
  autoCloseParamValues?: boolean;
}
export interface OpenRdsArg {
  args: RdsOpenArgs;
  metaGet?: RdsMdPattern;
}
export interface ParamValuesId {
  id: string;
}
export interface OpenRdsParamsArg extends OpenRdsArg {
  paramValuesId?: ParamValuesId;
}
export interface OpenRdsResult {
  id: RdsId;
  meta?: RdsMd;
}
export interface OpenRdsParamsResult {
  id: RdsId;
  meta?: RdsMd;
  ParamValMon: RdsId;
}
export interface GetRdsElementsArg extends GetElsArg {
  showHidden?: boolean;
  attrTransl?: AttrTranslationsPattern;
}
export interface GetRdsElementsResult extends GetElsResult {
  id: RdsId;
  attrLocales?: LocaleIntVec;
}
export interface ElData extends El {
  attrIds?: DimAttrIds;
}
export interface ElMoveInfo {
  element: ElKey;
  relation: TreeRelation;
}
export interface AttrCondition {
  attr: DimAttrId;
  op: ConditionOperation;
  val: any;
}
export interface RdsBatchArg {
  conds?: AttrConditionsVec;
}
export interface RdsCleanupArg extends RdsBatchArg {
  closeDate?: any;
}
export interface RdsBatchResult {
  count: number;
}
export interface RdsUpdateElement extends ElKey {
  data?: ElData;
  moveTo?: ElMoveInfo;
}
export interface RdsUpdateElementsArg {
  its: RdsUpdateElementsVec;
  data?: ElData;
  moveTo?: ElMoveInfo;
  fetchData?: boolean;
  attrTransl?: AttrTranslationsPattern;
  fetchPatt?: ElsPattern;
  fetchAttrTransl?: AttrTranslationsPattern;
}
export interface RdsUpdateElementsResult {
  its: ElDatas;
  attrIds?: DimAttrIds;
}
export interface RdsDeleteElementsArg {
  its: ElKeys;
}
export interface RdsDeleteElementsResult {
  count: number;
}
export interface SetRdsElementsArg {
  op: RdsElementOperation;
  key: ElKey;
  data?: ElData;
  moveTo?: ElMoveInfo;
  fetchData?: boolean;
  cleanup?: RdsCleanupArg;
  update?: RdsUpdateElementsArg;
  insert?: RdsUpdateElementsArg;
  del?: RdsDeleteElementsArg;
  delChildren?: RdsDeleteElementsArg;
  attrTransl?: AttrTranslationsPattern;
  fetchPatt?: ElsPattern;
  fetchAttrTransl?: AttrTranslationsPattern;
}
export interface SetRdsElementsResult {
  id: RdsId;
  key: ElKey;
  data?: ElData;
  cleanup?: RdsBatchResult;
  update?: RdsUpdateElementsResult;
  insert?: RdsUpdateElementsResult;
  del?: RdsDeleteElementsResult;
  delChildren?: RdsDeleteElementsResult;
}
export interface CubeId {
  id: string;
}
export interface CubeStandardDim {
  isFacts?: boolean;
  hideFacts?: boolean;
}
export interface CubeDimSettings {
  standard?: CubeStandardDim;
}
export interface CubeDim extends ItEntity {
  obDesc?: Od;
  settings?: CubeDimSettings;
  dimMetadata?: DmMetadata;
}
export interface CubeDims {
  its: CubeDimsVec;
}
export interface CubeDest extends ItEntity {
  isDefault?: boolean;
}
export interface CubeSelControlItem extends ItKey {
  controllingDim?: Od;
  controlledObject?: Od;
  controlledParam?: ItEntity;
  controlledOwner?: Od;
  isEmpty?: boolean;
  isDimension?: boolean;
  expression?: ForeExpr;
}
export interface CubeSelControl {
  its: CubeSelControlItemsVec;
  options?: CubeSelControlOptions;
  isEmpty?: boolean;
}
export interface CubeDimPattern {
  settings?: boolean;
  dimMdPattern?: DmMetadataPattern;
}
export interface GetCubeDataArg extends PvtTablePattern {
  params?: OdArgs;
  selection: DmSelectionSet;
  dest?: ItKey;
  dims?: PvtDims;
  pivot?: EaxPivot;
}
export interface GetCubeDataResult extends PvtTable {
}
export interface CoordEl {
}
export interface CellValue {
}
export interface DataCell {
  v?: CellValue;
  c: CellCoord;
}
export interface DataMatrix {
  dims?: DmSelectionSet;
  cells?: DataCellset;
}
export interface DataMatrixPattern {
  dims?: boolean;
  dimArg?: GetDimMetadataArg;
  cells?: boolean;
}
export interface GetCubeMatrixArg extends DataMatrixPattern {
  params?: OdArgs;
  selection: DmSelectionSet;
  dest?: ItKey;
  useCache?: boolean;
  execSetup?: CubeExecSetup;
}
export interface GetCubeMatrixResult extends DataMatrix {
  cellsBinary?: BinaryData;
}
export interface GetCubeArg {
  pattern?: CubeMdPattern;
  data?: GetCubeDataArg;
  matrix?: GetCubeMatrixArg;
}
export interface GetCubeResult {
  id: CubeId;
  meta?: CubeMd;
  data?: GetCubeDataResult;
  matrix?: GetCubeMatrixResult;
}
export interface SetCubeArg {
  pattern: CubeMdPattern;
  meta: CubeMd;
  metaGet?: CubeMdPattern;
}
export interface SetCubeResult {
  id: CubeId;
  meta?: CubeMd;
}
export interface CubeOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface OpenCubeArg {
  args: CubeOpenArgs;
  metaGet?: CubeMdPattern;
}
export interface OpenCubeResult {
  id: CubeId;
  meta?: CubeMd;
}
export interface PvtId {
  id: string;
}
export interface DataAreaParam {
  paramsBinary?: BinaryData;
  sliceKey: number;
  mbId: string;
}
export interface GetPvtTablesResult {
  slitsBinary?: BinaryData;
  MatrixPart?: BinaryData;
}
export interface RubAtt extends ItEntity {
  value: any;
  valuesObj?: Od;
  dt?: ItDataType;
  predefined?: boolean;
  valueText?: string;
  primary?: boolean;
  unitsObj?: Od;
}
export interface RubAtts {
  its: RubAttVec;
}
export interface RubFact extends ItEntity {
  atts?: RubAtts;
}
export interface RubOpenArgs extends OdOpenArgs {
}
export interface RubId {
  id: string;
}
export interface RubDim extends ItEntity {
  meta?: GetDimMetadataResult;
}
export interface RubDims {
  its: RubDimVec;
}
export interface RubRecord extends ItEntity {
}
export interface RubRevision extends RubRecord {
  stamp?: any;
  objectKey?: number;
  comment?: string;
  userName?: string;
  isLabel?: boolean;
}
export interface RubRevisions {
  its?: RubRevisionsVec;
}
export interface RubActionResult {
  cutRevisions?: boolean;
  labelRevisions?: RubRevision;
  rollbackRevision?: boolean;
}
export interface RubLabelRevisionsArg extends RubRevision {
  save?: boolean;
}
export interface RubCutRevisionsArg {
  fromRevision: number;
  toRevision: number;
  saveLabels: boolean;
  removeDeleted?: boolean;
}
export interface RubRollbackRevisionArg {
  toRevision: number;
}
export interface RubActionArg {
  cutRevisions?: RubCutRevisionsArg;
  labelRevisions?: RubLabelRevisionsArg;
  rollbackRevision?: RubRollbackRevisionArg;
}
export interface RubPeriod {
  startYear: number;
  endYear: number;
}
export interface RubProperties {
}
export interface CalendarPeriod {
  start: any;
  end: any;
}
export interface RubObservationsTable extends PvtTable {
}
export interface RubObservationsTablePattern extends PvtTablePattern {
  facts: RubFactsVec;
  period?: CalendarPeriod;
  getCellDate?: boolean;
}
export interface VfValidationExecDatas {
  its: VfValidationExecDataVec;
}
export interface RubOb {
  od?: Od;
  validationExecDatas?: VfValidationExecDatas;
}
export interface RubObs {
  its?: RubObVec;
}
export interface RubMd extends ObjectMd {
  action?: RubActionResult;
  revisions?: RubRevisions;
  atts?: RubAtts;
  period?: RubPeriod;
  valuesAtts?: RubAtts;
  properties?: RubProperties;
  observationsTable?: RubObservationsTable;
  objects?: RubObs;
}
export interface RubObjectsPattern extends GetObjectsOpArg {
  getValidationExecData?: boolean;
}
export interface RubMdPattern extends ObjectMdPattern {
  action?: RubActionArg;
  revisions?: boolean;
  atts?: boolean;
  period?: boolean;
  valuesAtts?: boolean;
  properties?: boolean;
  observationsTable?: RubObservationsTablePattern;
  objects?: RubObjectsPattern;
}
export interface GetRubMdArg {
  pattern?: RubMdPattern;
}
export interface GetRubMdResult {
  id: RubId;
  meta?: RubMd;
}
export interface OpenRubArg {
  args: RubOpenArgs;
  metaGet?: RubMdPattern;
}
export interface OpenRubResult {
  id: RubId;
  meta?: RubMd;
}
export interface DtFieldDependents {
  its: ArrString;
}
export interface DtField extends ItEntity {
  dt: ItDataType;
  dd?: ItDataDomain;
  size?: number;
  precision?: number;
  expression?: string;
  calculated?: boolean;
  dependents?: DtFieldDependents;
  dateFormat?: string;
}
export interface DtFields {
  its: DtFieldsVec;
}
export interface DtRow extends Avs {
}
export interface DtRows {
  its?: DtRowsVec;
}
export interface DtProviderDataFormat {
  useSystem?: boolean;
  dateFormat?: string;
  decimalSeparator?: string;
  usePredefinedDateFormats?: boolean;
}
export interface DtProviderBase {
  stringDataFormat?: DtProviderDataFormat;
  typeGuessRows?: number;
  autoFillMode?: DtAutoFillMode;
  filterIf?: string;
}
export interface DtExcelProvider extends DtProviderBase {
  driverVersion?: string;
  hasHeader?: boolean;
  query?: string;
  imexMode?: DtExcelImexMode;
  checkFieldName?: boolean;
}
export interface DtExcelProviderEx extends DtProviderBase {
  sheet?: string;
  hasHeader?: boolean;
  headerRow?: number;
  format?: string;
  dataRow?: number;
  guessRows?: number;
}
export interface DtProviderAccess extends DtProviderBase {
  query?: string;
}
export interface DtProviderXml extends DtProviderBase {
  formatType?: DtXmlFormat;
  xpath?: string;
  selectionNamespaces?: string;
}
export interface DtProviderText extends DtProviderBase {
  encoding?: string;
  rangeHasHeader?: boolean;
  rangeFirstRow?: number;
  rowDelimiter?: string;
  formatType?: DtTextFmtType;
  colDelimiter?: string;
  textQualifier?: string;
  allowMuchColDel?: boolean;
  headerRow?: number;
  codePage?: CodePageInt;
}
export interface DtProviderOleDb extends DtProviderBase {
  connectionString?: string;
  query?: string;
}
export interface DtProviderMb extends DtProviderBase {
  dataset?: Ob;
}
export interface DtProviderJson extends DtProviderBase {
  jsonpath?: string;
}
export interface DtProviderRestAuth {
  authMethod: AuthMethodRest;
  user?: string;
  password?: string;
}
export interface DtProviderRest extends DtProviderBase {
  resultType?: DtProviderType;
  resultProviderJson?: DtProviderJson;
  resultProviderXml?: DtProviderXml;
  url?: string;
  auth?: DtProviderRestAuth;
}
export interface DtProviderUnpivot extends DtProviderBase {
  provider?: DtProviderMd;
  leftBegin?: number;
  leftEnd?: number;
  headTop?: number;
  headBottom?: number;
  headColumn?: number;
  dataTop?: number;
  dataWidth?: number;
  dataRight?: number;
  dataBottom?: number;
  fixedCells?: DtProviderUnpivotFixedCells;
  fieldsNames?: boolean;
  fieldNamesRow?: number;
  fieldNamesColumn?: number;
}
export interface DtProviderProps {
  type?: DtProviderType;
  fileContent?: BinaryData;
  srcFileName?: string;
  excel?: DtExcelProvider;
  excelEx?: DtExcelProviderEx;
  access?: DtProviderAccess;
  xml?: DtProviderXml;
  txt?: DtProviderText;
  oleDb?: DtProviderOleDb;
  mb?: DtProviderMb;
  unpivot?: DtProviderUnpivot;
  json?: DtProviderJson;
  rest?: DtProviderRest;
  wrapUnpivot?: boolean;
  unwrapUnpivot?: boolean;
  usePrevFileContent?: boolean;
  fileBinary?: BinaryId;
}
export interface DtTable {
  n: string;
}
export interface DtTables {
  its: DtTablesVec;
}
export interface DtFieldSplitter {
  fieldIndex: number;
  delimiters: string;
  maxFields?: number;
  maxRows?: number;
}
export interface DtProviderAction {
  reopen?: boolean;
  fieldsFromSource?: boolean;
  splitFields?: DtFieldSplitter;
}
export interface CubeImportAction {
  dtAction?: DtProviderAction;
  initBinds?: boolean;
}
export interface Position {
  x: number;
  y: number;
}
export interface DtMergedCell {
  startRow: number;
  endRow: number;
  startCol: number;
  endCol: number;
}
export interface DtProviderMd {
  fields?: DtFields;
  rows?: DtRows;
  tables?: DtTables;
  props?: DtProviderProps;
  firstDataCell?: Position;
  mergedCells?: DtMergedCellsVec;
}
export interface DtProviderUnpivotFixedCell {
  row: number;
  column: number;
}
export interface DtProviderMdPattern {
  fields?: boolean;
  rows?: boolean;
  tables?: boolean;
  rowsFilter?: ListFilter;
  props?: boolean;
  firstDataCell?: boolean;
  mergedCells?: boolean;
  createByDtCreator?: boolean;
  deptsFor?: ArrLong;
}
export interface DbCommandId {
  id: string;
}
export interface DbCommandTextItem {
  driverID: string;
  driverName?: string;
  sqlText: string;
}
export interface DbCommandText {
  its?: DbCommandTextItemsVec;
  sqlText: string;
}
export interface DbCommandResult {
  rowsAffected?: number;
  args: OdOpenArgs;
}
export interface DbCommandMd extends ObjectMd {
  type: DbCommandType;
  text?: DbCommandText;
  database?: Od;
  fields?: DtFields;
  openArgs?: OdOpenArgs;
  rows?: DtRows;
  execResult?: DbCommandResult;
}
export interface DbCommandMdPattern extends ObjectMdPattern {
  all?: boolean;
  database?: boolean;
  text?: boolean;
  fields?: ListOperation;
  openArgs?: boolean;
  rows?: boolean;
  rowsFilter?: ListFilter;
  exec?: boolean;
}
export interface GetDbCommandArg {
  pattern?: DbCommandMdPattern;
}
export interface GetDbCommandResult {
  id: DbCommandId;
  meta?: DbCommandMd;
}
export interface SetDbCommandArg {
  pattern: DbCommandMdPattern;
  meta: DbCommandMd;
  metaGet?: DbCommandMdPattern;
}
export interface SetDbCommandResult {
  id: DbCommandId;
  meta?: DbCommandMd;
}
export interface DbCommandOpenArgs extends OdOpenArgsBase {
  openForEdit?: boolean;
}
export interface OpenDbCommandArg {
  args: DbCommandOpenArgs;
  metaGet?: DbCommandMdPattern;
}
export interface OpenDbCommandResult {
  id: DbCommandId;
  meta?: DbCommandMd;
}
export interface DtbDalId {
  id: string;
}
export interface ExecDtbDalArg {
  binCmd?: BinaryData;
}
export interface ExecDtbDalResult {
  binRes?: BinaryData;
}
export interface DtbDalOpenArgs extends OdOpenArgs {
  credentials?: UserCreds;
  onlyLD?: boolean;
  admin?: boolean;
  dbLogonDrv?: string;
  binLD?: BinaryData;
}
export interface OpenDtbDalArg {
  args: DtbDalOpenArgs;
  exec?: ExecDtbDalArg;
}
export interface OpenDtbDalResult {
  id: DtbDalId;
  mode?: DtbDalServerMode;
  driver: string;
  binRes?: BinaryData;
  exec?: ExecDtbDalResult;
}
export interface CubeImportId {
  id: string;
}
export interface CubeImportDimBindFieldTranslation {
  sourceField: string;
  locale: LocaleInt;
}
export interface CubeImportDimBindFieldTranslations {
  its: CubeImportDimBindFieldTranslationsVec;
  locale?: LocaleInt;
}
export interface CubeImportDimBindField {
  name: string;
  attributeId?: string;
  identifying?: boolean;
  translations?: CubeImportDimBindFieldTranslations;
}
export interface CubeImportDimBindFields {
  its: CubeImportDimBindFieldsVec;
}
export interface CubeImportDimBindNameField {
  sourceField: string;
  levelOrder?: number;
}
export interface CubeImportDimBindNameFields {
  its: CubeImportDimBindNameFieldsVec;
}
export interface CubeImportDimBind {
  sourceField: string;
  dictionary?: Od;
  dimension?: ItKey;
  attrId?: string;
  isCalendar?: boolean;
  dimCalendarLvl?: DimCalendarLvl;
  index?: string;
  constValue?: any;
  metaAttribute?: ItKey;
  fields?: CubeImportDimBindFields;
  newDictionaryName?: string;
  nameFields?: CubeImportDimBindNameFields;
  skipLoad?: boolean;
}
export interface CubeImportDimBinds {
  its: CubeImportDimBindsVec;
}
export interface CubeImportFactBind {
  sourceField: string;
  factKey?: any;
  metaAttr?: ItKey;
  newElementName?: string;
  cubeFactAggrType?: CubeFactBindingAggregationType;
}
export interface CubeImportFactBinds {
  its: CubeImportFactBindsVec;
  newDictionaryName?: string;
}
export interface CubeImportExecuteStateWaiting {
  onCredentialsRequired?: MbSecOnCredentialsRequired;
}
export interface CubeImportResultIncorrectSourceRow {
  rowValues: DtRow;
  incorrectValueIndexes: any;
  rowNumber: number;
  srcRowNumber: number;
}
export interface CubeImportResultIncorrectSourceRows {
  its: CubeImportResultIncorrectSourceRowsVec;
}
export interface CubeImportExecuteResult {
  duplicates?: DtRows;
  nulls?: DtRows;
  incorrectSourceRows?: CubeImportResultIncorrectSourceRows;
  skipped?: DtRows;
}
export interface CubeImportExecuteResultPattern {
  duplicates?: ListRange;
  nulls?: ListRange;
  incorrectSourceRows?: ListRange;
  skipped?: ListRange;
}
export interface CubeImportExecute {
  command?: CubeImportExecuteCommand;
  state?: CubeImportExecuteState;
  waiting?: CubeImportExecuteStateWaiting;
  errorInfo?: ErrorInfo;
  cubeOd?: Od;
  extendedResult?: boolean;
  useWaitings?: boolean;
  executeResult?: CubeImportExecuteResult;
}
export interface CubeImportMd extends ObjectMd {
  execute?: CubeImportExecute;
  dimBinds?: CubeImportDimBinds;
  factBinds?: CubeImportFactBinds;
  source?: DtProviderMd;
  db?: ObInst;
  rdsDb?: ObInst;
  parent?: Od;
  createInfo?: ObjectCreateBaseInfo;
  resultType?: CubeImportResultType;
  dest?: Od;
  addAllFields?: boolean;
  editExistingObject?: boolean;
  createStoredView?: boolean;
  createETLTask?: boolean;
  loadDuplicates?: boolean;
}
export interface CubeImportMdPattern extends ObjectMdPattern {
  all?: boolean;
  dimBinds?: boolean;
  factBinds?: boolean;
  execute?: boolean;
  source?: DtProviderMdPattern;
  db?: boolean;
  rdsDb?: boolean;
  dest?: boolean;
  parent?: boolean;
  createInfo?: boolean;
  resultType?: boolean;
  executeResult?: CubeImportExecuteResultPattern;
  addAllFields?: boolean;
  editExistingObject?: boolean;
  createStoredView?: boolean;
  createETLTask?: boolean;
}
export interface GetCubeImportArg {
  pattern?: CubeImportMdPattern;
  action?: CubeImportAction;
  keepResult?: boolean;
}
export interface GetCubeImportResult {
  id: CubeImportId;
  meta?: CubeImportMd;
}
export interface SetCubeImportArg {
  pattern: CubeImportMdPattern;
  meta: CubeImportMd;
  action?: CubeImportAction;
  metaGet?: CubeImportMdPattern;
}
export interface SetCubeImportResult {
  id: CubeImportId;
  meta?: CubeImportMd;
}
export interface OpenCubeImportArg {
  metaGet?: CubeImportMdPattern;
  action?: CubeImportAction;
}
export interface OpenCubeImportResult {
  id: CubeImportId;
  meta?: CubeImportMd;
}
export interface SlParseStr {
  value: string;
  assignOrder?: boolean;
}
export interface StatCoefficients {
  estimate?: ArrDouble;
  standardError?: ArrDouble;
  tStatistic?: ArrDouble;
  probability?: ArrDouble;
}
export interface SlARMA {
  parseAR?: SlParseStr;
  parseMA?: SlParseStr;
  parseARSeas?: SlParseStr;
  parseMASeas?: SlParseStr;
  orderAR?: ArrLong;
  orderMA?: ArrLong;
  calcInitMode?: ARMAInitType;
  initAR?: ArrDouble;
  initMA?: ArrDouble;
  initIntercept?: number;
  estimationMethod?: ARMAEstimationMethodType;
  tolerance?: number;
  maxIteration?: number;
  coefficientsAR?: StatCoefficients;
  coefficientsMA?: StatCoefficients;
  diff?: number;
  diffSeas?: number;
  orderARSeas?: ArrLong;
  orderMASeas?: ArrLong;
  initARSeas?: ArrDouble;
  initMASeas?: ArrDouble;
  periodSeas?: number;
  coefficientsARSeas?: StatCoefficients;
  coefficientsMASeas?: StatCoefficients;
  useARMAasInstrums?: boolean;
  useAnalyticDeriv?: boolean;
  useBackCast?: boolean;
}
export interface StatSeasonal {
  mode?: StatSeasonalityType;
  cycle?: number;
}
export interface TsVarSource {
  kind: TsVarSourceKind;
  serie?: ItKey;
}
export interface TsVar extends ItEntity {
  kind: TsVarKind;
  source?: TsVarSource;
}
export interface TsVars {
  its: TsVarsVec;
}
export interface TsTermSource {
  kind: TsTermSourceKind;
  varSource?: TsVarSource;
  var?: ItKey;
  name?: string;
}
export interface TsInversion {
  type: TsInversionType;
  lag?: TsInversionLag;
  previousLag?: number;
  seasonality?: StatSeasonalityType;
  dependence?: StatDependenceType;
  K?: number;
}
export interface TsSpliceTermInfo {
  startDate?: any;
  endDate?: any;
  boundByData?: boolean;
}
export interface MsFormulaTransformSlice extends ItEntity {
  variableKey?: number;
  stubKey?: number;
  selections?: DimSelections;
  aggregator?: BasicAggregatorOper;
  parametrizedDimensions?: MsParametrizedDimensions;
  unitInfo?: MsUnitInfo;
  level?: DimCalendarLvl;
}
export interface TsTerm extends ItKey {
  source?: TsTermSource;
  lag?: string;
  inversion?: TsInversion;
  splice?: TsSpliceTermInfo;
  innerText?: string;
  slice?: MsFormulaTransformSlice;
  termText?: string;
  date?: any;
  level?: DimCalendarLvl;
}
export interface TsTerms {
  its: TsTermsVec;
}
export interface StatMissingData {
  specifiedVector?: ArrDouble;
  method?: StatMissingDataMethod;
  methodParameter?: number;
  specifiedValue?: number;
  specifiedTerm?: TsTerm;
}
export interface TsExpr extends ItKey {
  innerText?: string;
  displayText?: string;
  terms?: TsTerms;
}
export interface TsExprs {
  its: TsExprsVec;
  clear?: boolean;
}
export interface MsFormulaTerm {
  k?: number;
  slice?: MsFormulaTransformSlice;
  lag?: string;
  key?: number;
  termToText?: string;
  termToInnerText?: string;
  termInfo?: TsTerm;
  unitInfo?: MsUnitInfo;
  included?: boolean;
  entryKey?: number;
  name?: string;
  nonLinearControlFormulaTerm?: MsNonLinearControlFormulaTerm;
}
export interface MsFormulaTerms {
  its: MsFormulaTermVec;
}
export interface MsCompositeFormulaTerms {
  its: MsCompositeFormulaTermsVec;
  termInfo?: TsTerm;
  simpleTerm?: number;
}
export interface MsEvaluateSeriesResult {
  its: MsEvaluateSeriesResultVec;
  dates?: Avs;
  levels?: ArrLong;
}
export interface MsPDLCoefficients extends StatCoefficients {
  estimatesSum: number;
  stdErrSum: number;
  tStatSum: number;
}
export interface StatIntercept {
  mode?: StatInterceptMode;
  estimate?: number;
  standardError?: number;
  tStatistic?: number;
  probability?: number;
}
export interface StatModelCoefficients {
  precision?: number;
  intercept?: StatIntercept;
  coefficients?: StatCoefficients;
}
export interface StatConstCoefficientsArr {
  precision?: number;
  its: StatConstCoefficientsVec;
}
export interface MsCompositeFormulaTermsPattern {
  term?: MsCompositeFormulaTermPattern;
  termInfo?: boolean;
  simpleTerm?: boolean;
}
export interface MsCointegrationEquationOperand extends MsCompositeFormulaTerm {
  type?: MsCointegrationEquationOperandType;
}
export interface MsCointegrationEquationOperands {
  its: MsCointegrationEquationOperandsVec;
}
export interface StatSummaryStatistics {
  stR2?: number;
  stAdjR2?: number;
  stR2_2?: number;
  stAdjR2_2?: number;
  stSE?: number;
  stSSR?: number;
  stLogL?: number;
  stDW?: number;
  stDWLowerBound?: number;
  stDWUpperBound?: number;
  stSD?: number;
  stAIC?: number;
  stSC?: number;
  stFstat_2?: number;
  stProbFstat_2?: number;
  stFstat?: number;
  stProbFstat?: number;
  stME?: number;
  stMAE?: number;
  stMSE?: number;
  stMaxAE?: number;
  stSqMSE?: number;
  stVE?: number;
  stSEE?: number;
  stMD?: number;
  stHQcriterion?: number;
  stAvgLogL?: number;
  stMcFaddenRsquared?: number;
  stRestrLogL?: number;
  stLRstatistic?: number;
  stLRprobability?: number;
  stIncludedObservations?: number;
  stJstat?: number;
  stProbJstat?: number;
  stNumOfIter?: number;
  stJBStat?: number;
  stProbJBStat?: number;
}
export interface MsPairCorrelationMatrix {
  data?: ArrDouble;
  error?: string;
}
export interface TsDeterministicMethod {
  modifyType?: TsMethodModifyType;
  expression?: string;
  result?: MsFormulaTerm;
  operands?: MsFormulaTerms;
  aggregateOperands?: MsCompositeFormulaTerms;
  factsMatrix?: ArrDouble;
  pairCorrelationMatrix?: MsPairCorrelationMatrix;
}
export interface LinearRegressionAutoSelection {
  isActive?: boolean;
  criterion?: StatCriterionType;
  min?: number;
  max?: number;
}
export interface SpecificationTestStatistic {
  probability: number;
  statistic: number;
}
export interface MsDiagnosticTestResults {
  chiTest?: SpecificationTestStatistic;
  chiTestResult?: boolean;
  fTest?: SpecificationTestStatistic;
  fTestResult?: boolean;
  modelCoefficients?: StatModelCoefficients;
  summaryStatistics?: StatSummaryStatistics;
  coefficientsNames?: ArrString;
  coefficientsAR?: StatCoefficients;
  coefficientsMA?: StatCoefficients;
  coefficientsARNames?: ArrString;
  coefficientsMANames?: ArrString;
  error?: string;
}
export interface MsDiagnosticTest {
  clearIncludedExplanatories?: boolean;
  includedExplanatories?: ArrLong;
  confidenceLevel?: number;
  diagnosticTestResult?: MsDiagnosticTestResults;
}
export interface MsOmittedVariablesTest extends MsDiagnosticTest {
  omittedExplanatories?: MsCompositeFormulaTerms;
}
export interface MsRedundantVariablesTest extends MsDiagnosticTest {
  redundantExplanatories?: ArrLong;
}
export interface MsSerialCorellationLMTest extends MsDiagnosticTest {
  lmOrder?: number;
}
export interface MsWhiteHeteroskedasticityTest extends MsDiagnosticTest {
  crossProduct?: boolean;
}
export interface MsRamseyRessetTest extends MsDiagnosticTest {
  power?: number;
}
export interface MsChowTest extends MsDiagnosticTest {
  groupSeparator?: ArrLong;
  testType?: ChowTestType;
}
export interface MsDiagnosticTestList {
  omittedVariables?: MsOmittedVariablesTest;
  redundantVariables?: MsRedundantVariablesTest;
  serialCorellationLM?: MsSerialCorellationLMTest;
  whiteHeteroskedasticity?: MsWhiteHeteroskedasticityTest;
  ramseyResset?: MsRamseyRessetTest;
  chow?: MsChowTest;
}
export interface MsArmaRoots {
  maRootsRe?: ArrDouble;
  maRootsIm?: ArrDouble;
  arRootsRe?: ArrDouble;
  arRootsIm?: ArrDouble;
}
export interface TsLinearRegressionMethod {
  constantMode?: StatInterceptMode;
  constantValue?: number;
  autoSelection?: LinearRegressionAutoSelection;
  confidenceLevel?: number;
  ARMA?: SlARMA;
  missingData?: StatMissingData;
  explained?: MsFormulaTerm;
  explanatories?: MsCompositeFormulaTerms;
  coefficients?: ArrDouble;
  pairCorrelationMatrix?: MsPairCorrelationMatrix;
  armaCoefficients?: SlARMA;
  pdlStatCoefficients?: MsPDLCoefficients;
  statCoefficients?: StatModelCoefficients;
  diagnosticTests?: MsDiagnosticTestList;
  armaRoots?: MsArmaRoots;
}
export interface TsSLS2Method {
  missingData?: StatMissingData;
  confidenceLevel?: number;
  constantMode?: StatInterceptMode;
  constantValue?: number;
  ARMA?: SlARMA;
  useConstantAsInstrument?: boolean;
}
export interface TsNonLinearRegressionMethod {
  missingData?: StatMissingData;
  confidenceLevel?: number;
  useDerivatives?: boolean;
  initialApproximation?: ArrDouble;
  maxIterations?: number;
  maxStep?: number;
  dampingFactorTolerance?: number;
  expression?: string;
  result?: MsFormulaTerm;
  operands?: MsFormulaTerms;
  coefficients?: Avs;
  coefficientsData?: ArrDouble;
  isCoefficientsSaved?: boolean;
  statCoefficients?: StatConstCoefficientsArr;
  optimizationMethod?: StatOptimizationMethod;
  tolerance?: number;
  useDefaultInitValues?: boolean;
}
export interface TsCumulativeMethod {
  type?: TsCumulativeMethodType;
}
export interface TsFillGapsMethod {
  missingData?: StatMissingData;
}
export interface TsSpliceMethod {
  type?: TsSpliceType;
  direction?: TsSpliceDirection;
}
export interface ExponentialSmoothingParams {
  alpha?: number;
  gamma?: number;
  delta?: number;
  phi?: number;
}
export interface ExponentialSmoothingQuickestDescentParams {
  initialApproximation?: ExponentialSmoothingParams;
  finalApproximation?: ExponentialSmoothingParams;
  gridStep?: number;
}
export interface ExponentialSmoothingBestTrialParams {
  initialApproximation?: ExponentialSmoothingParams;
  order?: number;
  methodConstant?: number;
  maxIteration?: number;
}
export interface ExponentialSmoothingAutoSearch {
  mode?: StatSearchType;
  criterion?: StatCriterionType;
  quickestDescent?: ExponentialSmoothingQuickestDescentParams;
  bestTrial?: ExponentialSmoothingBestTrialParams;
  alphaSearch?: boolean;
  gammaSearch?: boolean;
  deltaSearch?: boolean;
  phiSearch?: boolean;
}
export interface TsExponentialSmoothingMethod {
  trendComponent?: StatTrendType;
  confidenceLevel?: number;
  missingData?: StatMissingData;
  params?: ExponentialSmoothingParams;
  seasonalComponent?: StatSeasonal;
  autoSearch?: ExponentialSmoothingAutoSearch;
  explained?: MsFormulaTerm;
  asForecasting?: boolean;
  bestModelCoefficients?: ExponentialSmoothingParams;
}
export interface MsDependenceForms {
  its: MsDependenceFormsVec;
}
export interface TsCurveEstimationMethod {
  criterion?: StatDependenceCriterionType;
  dependenceForm?: StatDependenceType;
  dependenceFormIncluded?: StatDependenceTypes;
  polynomOrder?: number;
  seasonalComponent?: StatSeasonal;
  missingData?: StatMissingData;
  confidenceLevel?: number;
  bestDependenceForm?: StatDependenceType;
  extrapolateType?: StatDependenceType;
  value?: number;
  explained?: MsFormulaTerm;
  dependenceForms?: MsDependenceForms;
}
export interface TsGreyForecastMethod {
  missingData?: StatMissingData;
  confidenceLevel?: number;
}
export interface TsCointegrationEquationMethod {
  result?: MsFormulaTerm;
  operands?: MsCointegrationEquationOperands;
  missingData?: StatMissingData;
  confidenceLevel?: number;
  modelType?: ECMType;
  endogenousAutoRegressionOrder?: ArrLong;
  exogenousAutoRegressionOrder?: ArrLong;
  intercept?: StatIntercept;
  cointegralCoefficients?: StatCoefficients;
  cointegralEquation?: StatCoefficients;
  longTermExogenious?: ArrLong;
  endogenousCoefficients?: StatCoefficients;
  exogenousCoefficients?: StatCoefficients;
  commonExogenious?: ArrLong;
}
export interface TsSlideSmoothingMethod {
  missingData?: StatMissingData;
  width?: number;
  centerMovingAverage?: boolean;
}
export interface TsHodrickPrescottFilterMethod {
  missingData?: StatMissingData;
  smoothingParameter?: number;
  smoothingParameterMode?: HPSmoothingParameterModeType;
  power?: number;
  smSmoothingParameter?: number;
  explained?: MsFormulaTerm;
}
export interface TsBandpassFilterMethod {
  missingData?: StatMissingData;
  width?: number;
  frequencyLow?: number;
  frequencyHigh?: number;
  outputType?: TsBPFOutputType;
  explained?: MsFormulaTerm;
  weightsMatrix?: ArrDouble;
  cycleTerm?: TsTerm;
  nonCyclicalTerm?: TsTerm;
}
export interface TsCensus2Method {
  missingData?: StatMissingData;
  seasonality?: StatSeasonalityType;
  movingAverage?: ArrDouble;
  dailyWeights?: ArrDouble;
  traidingDaysAdjustment?: StatTraidingDaysAdjustmentType;
  sigmaLower?: number;
  sigmaUpper?: number;
  startMonthOrQuarter?: number;
  holidaysAdjustment?: StatCensus2HolidaysAdjustmentType;
  slidingSpans?: boolean;
  outputType?: TsCensus2OutputType;
  explained?: MsFormulaTerm;
  b1Term?: TsTerm;
  d10Term?: TsTerm;
  d11Term?: TsTerm;
  d12Term?: TsTerm;
  d13Term?: TsTerm;
  b1Result?: ArrDouble;
  d10Result?: ArrDouble;
  d11Result?: ArrDouble;
  d12Result?: ArrDouble;
  d13Result?: ArrDouble;
}
export interface TsInterpolateMethod {
  type?: TsInterpolateType;
  parameter?: number;
  pattern?: TsPatternType;
  inputLevel?: DimCalendarLvl;
  input?: TsTerm;
  result?: MsFormulaTerm;
  specified?: TsTerm;
  missingData?: StatMissingData;
}
export interface TsAggregationFilter extends ItEntity {
  dimension?: ItEntity;
  group?: ItEntity;
  param?: string;
  selection?: DmId;
  useParamAsGroup?: boolean;
  outputParam?: string;
}
export interface TsCrossDimensionAggregationOptions {
  threshold?: number;
  level?: boolean;
  rebase?: boolean;
  rebaseDate?: any;
  levelValue?: number;
  rebaseDateParam?: string;
  treatEmptyWeightsAs?: number;
  treatEmptyCompositionRelevanceAs?: number;
  skipIfWholeWeightIsEmpty?: boolean;
  percentile?: number;
  keepSegment?: boolean;
}
export interface TsAggregationFilters {
  its: TsAggregationFiltersVec;
}
export interface TsCrossDimensionAggregationMethod {
  type?: TsAgregationMethodType;
  filter?: TsAggregationFilters;
  options?: TsCrossDimensionAggregationOptions;
}
export interface TsCollapseBaseMethod {
  type?: TsCollapseType;
  tolerance?: number;
  inputLevel?: DimCalendarLvl;
  input?: TsTerm;
  result?: MsFormulaTerm;
  missingData?: StatMissingData;
}
export interface TsCollapseMethod extends TsCollapseBaseMethod {
}
export interface TsPointwiseCollapseMethod extends TsCollapseBaseMethod {
}
export interface MsAutoCorrelationResult {
  acf?: ArrDouble;
  pacf?: ArrDouble;
  qStatistics?: ArrDouble;
  probability?: ArrDouble;
  confidenceLevel?: number;
}
export interface MsVariableAutoCorrelationResult extends MsAutoCorrelationResult {
  error?: string;
}
export interface TsArimaMethod {
  maxIteration?: number;
  constantMode?: StatInterceptMode;
  constantValue?: number;
  missingData?: StatMissingData;
  confidenceLevel?: number;
  ARMA?: SlARMA;
  explained?: MsFormulaTerm;
  autoCorrelation?: MsAutoCorrelationResult;
  armaCoefficients?: SlARMA;
  statCoefficients?: StatModelCoefficients;
  armaRoots?: MsArmaRoots;
  diagnosticTests?: MsDiagnosticTestList;
}
export interface TsCensus1Method {
  explained?: MsFormulaTerm;
  missingData?: StatMissingData;
  seasonality?: StatSeasonalityType;
  centerMovingAverage?: boolean;
  movingAverage?: ArrDouble;
  ratioDifferences?: ArrDouble;
  seasonal?: ArrDouble;
  seasonalAdjustment?: ArrDouble;
  trendCycle?: ArrDouble;
  irregula?: ArrDouble;
  outputType?: TsCensus1OutputType;
}
export interface TsNonLinearEquationsMethod {
  derivativeShift?: number;
  externalEquations?: ItEntities;
  initApproximation?: ArrDouble;
  jacobianCalcFrequency?: number;
  linearEqSolutionMethod?: LinearEqSolutionType;
  maxIteration?: number;
  methodType?: NonLinearEquationsType;
  minIteration?: number;
  outputOperands?: MsFormulaTerms;
  inputOperands?: MsFormulaTerms;
  tolerance?: number;
}
export interface TsUserMethodParam {
  n: string;
  value: any;
}
export interface TsUserMethodParams {
  its: TsUserMethodParamsVec;
}
export interface TsUserMethod {
  userMethodKey?: number;
  p?: TsUserMethodParams;
}
export interface TsRMethod {
  code?: string;
  result?: MsFormulaTerm;
  inputs?: MsFormulaTerms;
}
export interface MsMethodSeries {
  fitted?: TsTerm;
  forecast?: TsTerm;
  residuals?: TsTerm;
  lowerConfidenceLevel?: TsTerm;
  upperConfidenceLevel?: TsTerm;
  dynamicLowerConfidenceLevel?: TsTerm;
  dynamicUpperConfidenceLevel?: TsTerm;
  input?: TsTerm;
  addFactor?: TsTerm;
}
export interface TsMethod {
  deterministic?: TsDeterministicMethod;
  linearRegression?: TsLinearRegressionMethod;
  cumulative?: TsCumulativeMethod;
  fillGaps?: TsFillGapsMethod;
  splice?: TsSpliceMethod;
  exponentialSmoothing?: TsExponentialSmoothingMethod;
  curveEstimation?: TsCurveEstimationMethod;
  greyForecast?: TsGreyForecastMethod;
  cointegrationEquation?: TsCointegrationEquationMethod;
  slideSmoothing?: TsSlideSmoothingMethod;
  hodrickPrescottFilter?: TsHodrickPrescottFilterMethod;
  nonLinearRegression?: TsNonLinearRegressionMethod;
  bandpassFilter?: TsBandpassFilterMethod;
  census2?: TsCensus2Method;
  interpolate?: TsInterpolateMethod;
  crossDimensionAggregation?: TsCrossDimensionAggregationMethod;
  collapse?: TsCollapseMethod;
  pointwiseCollapse?: TsPointwiseCollapseMethod;
  arima?: TsArimaMethod;
  SLS2?: TsSLS2Method;
  nonLinearEquations?: TsNonLinearEquationsMethod;
  census1?: TsCensus1Method;
  user?: TsUserMethod;
  r?: TsRMethod;
  summaryStatistics?: StatSummaryStatistics;
  name?: string;
  series?: MsMethodSeries;
  evaluateSeries?: MsEvaluateSeriesResult;
  inversionInfo?: TsInversion;
  doUseR?: boolean;
  supportsR?: boolean;
}
export interface TsFormula extends ItKey {
  kind: TsFormulaKind;
  method?: TsMethod;
  exprs?: TsExprs;
  calendarLevel?: DimCalendarLvl;
  outputSliceKey?: number;
  formulaText?: string;
  formulaInnerText?: string;
  calculationType?: MsCalcType;
  calculationDirection?: MsCalcDirection;
}
export interface TsFormulas {
  its: TsFormulasVec;
}
export interface TsTransform {
  vars?: TsVars;
  formulas?: TsFormulas;
}
export interface MsDiagnosticTestPattern {
  includedExplanatories?: boolean;
  confidenceLevel?: boolean;
}
export interface MsOmittedVariablesTestPattern extends MsDiagnosticTestPattern {
  omittedExplanatories?: MsCompositeFormulaTermsPattern;
}
export interface MsRedundantVariablesTestPattern extends MsDiagnosticTestPattern {
  redundantExplanatories?: boolean;
}
export interface MsSerialCorellationLMTestPattern extends MsDiagnosticTestPattern {
  lmOrder?: boolean;
}
export interface MsWhiteHeteroskedasticityTestPattern extends MsDiagnosticTestPattern {
  crossProduct?: boolean;
}
export interface MsRamseyRessetTestPattern extends MsDiagnosticTestPattern {
  power?: boolean;
}
export interface MsChowTestPattern extends MsDiagnosticTestPattern {
  testType?: boolean;
  groupSeparator?: boolean;
}
export interface MsDiagnosticTestListPattern {
  omittedVariables?: MsOmittedVariablesTestPattern;
  redundantVariables?: MsRedundantVariablesTestPattern;
  serialCorellationLM?: MsSerialCorellationLMTestPattern;
  whiteHeteroskedasticity?: MsWhiteHeteroskedasticityTestPattern;
  ramseyResset?: MsRamseyRessetTestPattern;
  chow?: MsChowTestPattern;
}
export interface TsLinearRegressionMethodPattern {
  explained?: boolean;
  explanatories?: MsCompositeFormulaTermsPattern;
  diagnosticTests?: MsDiagnosticTestListPattern;
  armaRoots?: boolean;
}
export interface TsArimaMethodPattern {
  armaRoots?: boolean;
  diagnosticTests?: MsDiagnosticTestListPattern;
}
export interface TsCointegrationEquationMethodPattern {
  coefficients?: boolean;
  operands?: MsCompositeFormulaTermsPattern;
}
export interface TsMethodPattern {
  linearRegression?: TsLinearRegressionMethodPattern;
  cointegrationEquation?: TsCointegrationEquationMethodPattern;
  arima?: TsArimaMethodPattern;
  series?: boolean;
}
export interface TsFormulaPattern {
  method?: TsMethodPattern;
  dimId?: DmId;
  value?: number;
}
export interface HieId {
  id: string;
}
export interface HieAttOrderBy {
  isActive: boolean;
  descending?: boolean;
  attribute?: ItEntity;
}
export interface HieAtt extends ItEntity {
  dim?: ItEntity;
  includeSelectedOnly?: boolean;
  namingFormat: string;
  isLeaf?: boolean;
  levKey: number;
  dimMeta?: GetDimMetadataResult;
  orderBy?: HieAttOrderBy;
  orderInDefaultHie?: number;
}
export interface HieAtts {
  its: HieAttPtrVec;
}
export interface HieLev extends ItEntity {
  atts: HieAtts;
  isLeaf?: boolean;
}
export interface HieLevs {
  its: HieLevPtrVec;
}
export interface HieMdProps {
  whereIsEmpty?: TriState;
  leafLoadExtent?: number;
  filterMode?: HieFilterMode;
}
export interface HieXml {
  data?: string;
}
export interface HieMd extends ObjectMd {
  atts?: HieAtts;
  levs?: HieLevs;
  props?: HieMdProps;
  asXml?: HieXml;
  filterFacts?: IntSet;
}
export interface HieMdPattern extends ObjectMdPattern {
  atts?: boolean;
  levs?: boolean;
  props?: boolean;
  dimArg?: GetDimMetadataArg;
  asXml?: boolean;
  filterFacts?: boolean;
}
export interface GetHieMdArg {
  pattern?: HieMdPattern;
}
export interface GetHieMdResult {
  id: HieId;
  meta?: HieMd;
}
export interface SetHieMdArg {
  pattern: HieMdPattern;
  meta: HieMd;
  metaGet?: HieMdPattern;
}
export interface SetHieMdResult {
  id: HieId;
  meta?: HieMd;
}
export interface HieOpenArgs {
  rubObj?: OdId;
  rubArg?: OpenRubArg;
  eax?: EaxId;
}
export interface OpenHieArg {
  args: HieOpenArgs;
  loadXml?: HieXml;
  metaGet?: HieMdPattern;
}
export interface OpenHieResult {
  id: HieId;
  meta?: HieMd;
}
export interface HmKey {
  p: string;
}
export interface HieMember {
  hie: HieId;
  key: HmKey;
}
export interface Hm {
  p: string;
  n: string;
  o: number;
  h?: boolean;
  a?: Avs;
  f?: RubFact;
  t?: number;
}
export interface HmsFilter extends ListFilter {
}
export interface HmsPattern {
  attributes: string;
  getHasChildrenState?: boolean;
  getFacts?: boolean;
  getIsEmptyState?: boolean;
  getCountTotal?: boolean;
  includeRoot?: boolean;
  getAllFactAtts?: boolean;
  getAttsTextValues?: boolean;
  getLeafOnly?: boolean;
}
export interface GetHieMembersArg {
  parent: HmKey;
  filter: HmsFilter;
  pattern: HmsPattern;
}
export interface GetHieMembersResult {
  id: HieId;
  parent?: HmKey;
  hms?: Hms;
  notEof?: boolean;
}
export interface LnMAVHieMembersPattern {
  Id: HieId;
  keys?: HmKeys;
}
export interface LnMetaAttributesViewerPattern {
  hmPattern?: LnMAVHieMembersPattern;
  series?: boolean;
  observations?: boolean;
  hieMembers?: boolean;
  maxLevel?: number;
  hideEmpty?: boolean;
}
export interface WbkId {
  id: string;
}
export interface LnColumnAtt {
  namingFormat: string;
  att?: RubAtt;
  rubKey?: number;
}
export interface LnColumnDatabase {
  text?: LnDatabaseColumnText;
}
export interface LnColumn extends ItEntity {
  type: LnColumnType;
  readOnly?: boolean;
  att?: LnColumnAtt;
  db?: LnColumnDatabase;
  customTitle?: string;
}
export interface LnColumns {
  its: LnColumnPtrVec;
  fullHints?: boolean;
}
export interface LnTransformPeriod {
  startDate?: any;
  endDate?: any;
  identificationEndDate?: any;
  startOffset?: number;
  endOffset?: number;
  identificationEndOffset?: number;
  periodSet?: LnTransformPeriodSet;
  autoPeriod?: TsAutoPeriodOptions;
}
export interface LnSerieCalc {
  resetFactor?: boolean;
  deleteFactor?: boolean;
  rubKey?: number;
  rubShortcutKey?: number;
  revKey?: number;
  scenKey?: number;
  fact?: RubFact;
  hieMember?: HieMember;
  formula?: TsFormula;
  formulaPeriod?: LnTransformPeriod;
  displayDataAs?: LnDataDisplayType;
  hasDiscrepancies?: boolean;
  sourceStubKey?: number;
  createDerivedSeries?: boolean;
  strictlyDefined?: boolean;
  userFormat?: string;
}
export interface LnSerieDisplayParams {
  inversion?: TsInversionType;
  inversionLag?: TsInversionLag;
  previousInversionLag?: number;
  setDefault?: boolean;
}
export interface LnSerie extends ItEntity {
  kind?: LnSerieKind;
  hint?: string;
  atts?: RubAtts;
  calc?: LnSerieCalc;
  dependencies?: ItKeys;
  dependents?: ItKeys;
  calculate?: boolean;
  selectedUnit?: any;
  valueAttribute?: ItEntity;
  displayParams?: LnSerieDisplayParams;
  parent?: ItKey;
  moveAfter?: ItKey;
  tag?: any;
  hasChildren?: boolean;
  index?: number;
  expanded?: boolean;
  clearAttValues?: boolean;
  remove?: boolean;
  level?: DimCalendarLvl;
  childrenCount?: number;
  visibleChildrenCount?: number;
  flags?: LnSerieFlags;
}
export interface LnSeries {
  its: LnSeriePtrVec;
  pinned?: ItKey;
  displayDataAs?: LnDataDisplayType;
  commentAttribute?: ItEntity;
  autoRecalc?: boolean;
  createDerivedSeries?: LnOptionState;
  permanentData?: boolean;
}
export interface LnPeriod extends CalendarPeriod {
}
export interface LnRub extends ItEntity {
  rubId?: RubId;
  rubObj?: OdId;
  rubArg?: OpenRubArg;
  meta?: RubMd;
}
export interface LnRubs {
  def?: LnRub;
  its: LnRubsVec;
}
export interface LnHeaderColSort {
  col: ItEntity;
}
export interface LnHeaderSorting {
  its: LnHeaderColSorts;
}
export interface LnDataElSort {
  element: ElKey;
}
export interface LnDataSorting {
  its: LnDataElSorts;
}
export interface LnSorting {
  reverseHeader?: boolean;
  header?: LnHeaderSorting;
  data?: LnDataSorting;
}
export interface LnFilter {
  suppressEmpty?: boolean;
  suppressEmptyArea?: LnSuppressEmptyArea;
}
export interface LnStatistic extends ItEntity {
  type: LnStatisticType;
  value: any;
  group: ItKey;
}
export interface LnStatistics {
  its: LnStatisticsVec;
}
export interface LnStatisticsPattern {
  series?: ItKeys;
}
export interface LnResult extends ItEntity {
  correlation?: boolean;
  coefficients?: boolean;
  weights?: boolean;
}
export interface LnResults {
  its: LnResultsVec;
}
export interface LnResultsPattern {
  series?: ItKeys;
  correlation?: boolean;
  coefficients?: boolean;
  weights?: boolean;
  tabSheet?: boolean;
}
export interface TabStyle {
  I?: number;
  Text?: TabTextStyle;
  NumberFormat?: TabNumberFormatStyle;
  Fill?: TabFillStyle;
  Font?: TabFontStyle;
  Borders?: TabBorders;
  BackgroundPicture?: TabBackgroundPictureStyle;
  Hyperlink?: TabHyperlinkStyle;
  Range?: TabRange;
  adjustFormatPrecision?: TabAdjustFormatPrecisionArg;
  Other?: TabOtherStyle;
  Images?: TabStyleImages;
  ContainerInfo?: StyleDesc;
  PictureData?: TabPictureData;
}
export interface LnCellStyle {
  tabStyle?: TabStyle;
  setDefault?: boolean;
}
export interface LnTabStyles {
  splice?: LnCellStyle;
  discrepancy?: LnCellStyle;
  forecast?: LnCellStyle;
}
export interface LnContext {
  enabled?: boolean;
}
export interface WbkObservationsTable extends PvtTable {
}
export interface WbkObservationsTablePattern extends PvtTablePattern {
  getCellDate?: boolean;
  attributes?: ItKeys;
  getCellText?: boolean;
}
export interface WbkCellsTable extends PvtTable {
}
export interface WbkCellsTablePattern extends PvtTablePattern {
  getCellDate?: boolean;
}
export interface WbkSaveAsProblemArg {
  createInfo?: ObjectCreateBaseInfo;
  series?: ItKeys;
}
export interface WbkSaveAsProblemResult {
  object: Ob;
}
export interface WbkCheckFormulaArg {
  formula?: TsFormula;
}
export interface WbkCheckFormulaResult {
  valid?: boolean;
  error?: string;
  position?: number;
}
export interface WbkEditedTransformArg {
  k: ItKey;
}
export interface WbkActionArg {
  saveAsProblem?: WbkSaveAsProblemArg;
  checkFormula?: WbkCheckFormulaArg;
  editTransform?: WbkEditedTransformArg;
  saveTransform?: WbkEditedTransformArg;
  resetTempTransform?: boolean;
  saveTempTransform?: WbkEditedTransformArg;
}
export interface WbkActionResult {
  saveAsProblem?: WbkSaveAsProblemResult;
  checkFormula?: WbkCheckFormulaResult;
}
export interface WbkAttrsTreeOption extends ItEntity {
  rubricator?: Od;
  hierAttrs?: string;
}
export interface WbkAttrsTreeOptions {
  its: WbkAttrsTreeOptionsVec;
  vis?: boolean;
}
export interface WbkChartSerie {
  type: WbkChartSerieType;
  available?: boolean;
  visible?: boolean;
  name?: string;
  index?: number;
}
export interface WbkChart {
  type: WbkChartType;
  series: WbkChartSeries;
}
export interface FrMethodParam {
  n?: string;
  t?: FrResultType;
  defaultValue: any;
}
export interface FrMethodParams {
  its: FrMethodParamsVec;
}
export interface FrMethod extends ItKey {
  title?: string;
  method?: string;
  category?: string;
  description?: string;
  p?: FrMethodParams;
  mtype?: FrMethodType;
}
export interface FrMethods {
  its: FrMethodsVec;
}
export interface WbkMd extends EaxMd {
  hasLaner?: boolean;
  series?: LnSeries;
  columns?: LnColumns;
  period?: LnPeriod;
  rubrs?: LnRubs;
  sorting?: LnSorting;
  lanerFilter?: LnFilter;
  lanerStatistics?: LnStatistics;
  results?: LnResults;
  styles?: LnTabStyles;
  observationsTable?: WbkObservationsTable;
  attrsTreeOptions?: WbkAttrsTreeOptions;
  action?: WbkActionResult;
  lanerChart?: WbkChart;
  cellsTable?: WbkCellsTable;
  getLanerChart?: GetChartResult;
  getModellingChart?: GetChartResult;
  setLanerChart?: SetChartResult;
  setModellingChart?: SetChartResult;
  validationExecDatas?: VfValidationExecDatas;
  validationSheetState?: WbkValidationSheetState;
  validationAvailable?: boolean;
  singleCalendar?: boolean;
  userMethods?: FrMethods;
  dependencies?: ItKeys;
  dependents?: ItKeys;
  lanerContext?: LnContext;
}
export interface LnSeriesFilter extends ListFilter {
  includeCollapsed?: boolean;
}
export interface WbkMdExecParams {
  row?: number;
  column?: number;
  validationKey?: number;
  keys?: ArrLong;
  explanation?: string;
  tRub?: RubId;
  validationExecDataKey?: number;
  execGetValidationExecDatas?: boolean;
  execRemoveValidationExecDatas?: boolean;
  execGetExceptions?: boolean;
  execClearDiagnosticReport?: boolean;
  execGetExplanation?: boolean;
  execSetExplanation?: boolean;
  execOpenExecData?: boolean;
}
export interface WbkMdPattern extends EaxMdPattern {
  series?: ListOperation;
  seriesFilter?: LnSeriesFilter;
  columns?: ListOperation;
  columnsFilter?: ListFilter;
  batchAddSeries?: boolean;
  seriesDependencies?: boolean;
  seriesDependents?: boolean;
  seriesAtts?: boolean;
  seriesPrimaryAttsForEmpty?: boolean;
  seriesDiscrepancies?: boolean;
  seriesDisplayParams?: boolean;
  seriesCalc?: boolean;
  period?: boolean;
  rubrs?: boolean;
  rubrArg?: RubMdPattern;
  lanerFilter?: boolean;
  lanerStatistics?: LnStatisticsPattern;
  results?: LnResultsPattern;
  styles?: boolean;
  observationsTable?: WbkObservationsTablePattern;
  attrsTreeOptions?: ListOperation;
  metaAttributesViewer?: LnMetaAttributesViewerPattern;
  action?: WbkActionArg;
  lanerChart?: boolean;
  cellsTable?: WbkCellsTablePattern;
  getLanerChart?: GetChartArg;
  getModellingChart?: GetChartArg;
  setLanerChart?: SetChartArg;
  setModellingChart?: SetChartArg;
  seriesEx?: LnSerieOperation;
  getSingleCalendar?: boolean;
  validationSheetState?: boolean;
  validationAvailable?: boolean;
  execParams?: WbkMdExecParams;
  userMethods?: boolean;
  dependencies?: boolean;
  dependents?: boolean;
  lanerContext?: boolean;
}
export interface GetWbkMdArg extends EaxMdArg {
  pattern?: WbkMdPattern;
}
export interface GetWbkMdResult extends EaxMdResult {
  id: WbkId;
  meta?: WbkMd;
}
export interface SetWbkMdArg extends EaxMdArg {
  pattern: WbkMdPattern;
  meta: WbkMd;
  metaGet?: WbkMdPattern;
}
export interface SetWbkMdResult extends EaxMdResult {
  id: WbkId;
  meta?: WbkMd;
}
export interface WbkOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
  closeAfterGet?: boolean;
}
export interface OpenWbkArg {
  args: WbkOpenArgs;
  metaGet?: WbkMdPattern;
  metaGetActiveSheet?: WbkMdPattern;
  createInfo?: ObjectCreateInfo;
  metaSet?: SetWbkMdArg;
  metaSetActiveSheet?: SetWbkMdArg;
}
export interface OpenWbkResult {
  id: WbkId;
  meta?: WbkMd;
  metaActiveSheet?: WbkMd;
  metaSet?: SetWbkMdResult;
  metaSetActiveSheet?: SetWbkMdResult;
}
export interface SchedulerId {
  id: string;
}
export interface SchedulerTaskPeriodMonthly {
  months: number;
  day: number;
  dayOfWeek: number;
  weekOfMonth: number;
}
export interface SchedulerTaskPeriod {
  type: SchedulerTaskPeriodType;
  startDateTime: any;
  stopDateTime?: any;
  timeInterval?: any;
  everyDays?: number;
  everyWeeks?: number;
  daysOfWeek?: number;
  monthly?: SchedulerTaskPeriodMonthly;
  startMode?: SchedulerTaskPeriodOneTimeStartMode;
}
export interface SchedulerTaskResult extends ItKey {
  startDate: any;
  finishDate: any;
  state: SchedulerTaskState;
  messages: string;
}
export interface SchedulerTaskResults {
  its: SchedulerTaskResultPtrVec;
}
export interface SchedulerTaskPublishing {
  mailAddress: string;
  mailSubject: string;
  mailBody: string;
  ftpAddress: string;
  appendAttachment: boolean;
  sharePointFolder?: string;
}
export interface SchedulerTaskProperties {
  period?: SchedulerTaskPeriod;
  active?: boolean;
  queueing?: boolean;
  userTag?: string;
  threadClass?: number;
  publishing?: SchedulerTaskPublishing;
  paramValues?: OdOpenArgs;
}
export interface ObjectTask {
  obDesc?: Od;
}
export interface ForeTask extends ObjectTask {
  subName: string;
}
export interface PubMobAppTask extends ObjectTask {
  webApplication?: string;
}
export interface ForeNetTask extends ObjectTask {
  typeName: string;
  methodName: string;
}
export interface ProcReportTask extends ObjectTask {
  formatTag: string;
  exportSettings?: any;
  printer?: string;
}
export interface EtlTask extends ObjectTask {
}
export interface SchedulerTaskSettings {
  fore?: ForeTask;
  foreNet?: ForeNetTask;
  procReport?: ProcReportTask;
  etl?: EtlTask;
  pubMobApp?: PubMobAppTask;
}
export interface SchedulerTask extends ItEntity {
  type: SchedulerTaskType;
  properties?: SchedulerTaskProperties;
  result?: SchedulerTaskResult;
  settings?: SchedulerTaskSettings;
}
export interface SchedulerTasks {
  its: SchedulerTaskPtrVec;
}
export interface SchedulerAppState {
  running?: boolean;
  refreshed?: boolean;
}
export interface SchedulerMd extends ObjectMd {
  tasks?: SchedulerTasks;
  appState?: SchedulerAppState;
}
export interface SchedulerAppStatePattern {
  running?: boolean;
}
export interface SchedulerTaskPattern {
  result?: boolean;
  properties?: boolean;
  settings?: boolean;
}
export interface SchedulerMdPattern extends ObjectMdPattern {
  all?: boolean;
  tasks?: ListOperation;
  tasksFilter?: ListFilter;
  execTasks?: boolean;
  appState?: SchedulerAppStatePattern;
  task?: SchedulerTaskPattern;
}
export interface SchedulerRefresh {
  tasks?: boolean;
  container?: boolean;
}
export interface GetSchedulerArg {
  pattern?: SchedulerMdPattern;
}
export interface GetSchedulerResult {
  id: SchedulerId;
  meta?: SchedulerMd;
}
export interface SetSchedulerArg {
  pattern: SchedulerMdPattern;
  meta: SchedulerMd;
  refresh?: SchedulerRefresh;
  metaGet?: SchedulerMdPattern;
}
export interface SetSchedulerResult {
  id: SchedulerId;
  execResults?: SchedulerTaskResults;
  refreshState?: SchedulerAppState;
  meta?: SchedulerMd;
}
export interface OpenSchedulerArg {
  args?: OdOpenArgsBase;
  metaGet?: SchedulerMdPattern;
}
export interface OpenSchedulerResult {
  id: SchedulerId;
  meta?: SchedulerMd;
}
export interface WspId {
  id: string;
}
export interface WspOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface ShapeMbObject {
  od?: Od;
  read?: boolean;
  write?: boolean;
}
export interface WspShapeObject {
  id: number;
  shapeId: string;
  rect?: Rect;
  shapeMbObject?: ShapeMbObject;
}
export interface WspShapeObjects {
  its?: WspShapeObjectVec;
}
export interface WspViewExportData extends ExportData {
}
export interface WspViewExportDataPattern extends ExportSettings {
  scale?: number;
  size?: SizeU;
}
export interface WspMd extends ObjectMd {
  shapes?: WspShapeObjects;
  view?: WspViewExportData;
  scale?: number;
}
export interface WspMdPattern extends ObjectMdPattern {
  getShapes?: boolean;
  getShapesMbProperties?: boolean;
  mbShapesLast?: boolean;
  view?: WspViewExportDataPattern;
}
export interface OpenWspArg {
  args: WspOpenArgs;
  metaGet?: WspMdPattern;
}
export interface OpenWspResult {
  id: WspId;
  meta?: WspMd;
}
export interface GetWspResult {
  id: WspId;
  meta?: WspMd;
}
export interface SetWspResult {
  id: WspId;
  meta?: WspMd;
}
export interface GetWspMdArg {
  pattern?: WspMdPattern;
}
export interface GetWspMdResult {
  id: WspId;
  meta?: WspMd;
}
export interface SetWspMdArg {
  pattern: WspMdPattern;
  meta: WspMd;
  metaGet?: WspMdPattern;
}
export interface SetWspMdResult {
  id: WspId;
  meta?: WspMd;
}
export interface EtlId {
  id: string;
}
export interface EtlShapeObject {
  id: number;
  rect?: Rect;
  etlObjectKey?: number;
  shapeMbObject?: ShapeMbObject;
  unselectable?: boolean;
}
export interface EtlShapeObjects {
  its?: EtlShapeObjectVec;
}
export interface EtlViewExportData extends ExportData {
}
export interface EtlObjectProperties {
}
export interface DtProvider {
  obDesc?: Od;
}
export interface DtConsumer {
  obDesc?: Od;
  keyFieldNames?: string;
}
export interface EtlPlainDataCopy {
  provider?: DtProvider;
  consumer?: DtConsumer;
  autoLink?: boolean;
  clearConsumer?: boolean;
  commitCount?: number;
  actionOnProblem?: EtlActionOnProblem;
}
export interface EtlObjectSettings {
  plainDataCopy?: EtlPlainDataCopy;
}
export interface EtlObject extends ItEntity {
  type: EtlObjectType;
  obDesc?: Od;
  read?: boolean;
  write?: boolean;
  properties?: EtlObjectProperties;
  settings?: EtlObjectSettings;
}
export interface EtlObjects {
  its: EtlObjectPtrVec;
}
export interface EtlExecute {
  command?: EtlTaskExecuteCommand;
  state?: EtlTaskExecuteState;
  errorInfo?: ErrorInfo;
  progress?: number;
  etlShapeInProgress?: number;
  totalRec?: number;
  errorRec?: number;
  executionTime?: number;
  files?: ArrString;
}
export interface EtlViewExportDataPattern extends ExportSettings {
  scale?: number;
  size?: SizeU;
}
export interface EtlMd extends ObjectMd {
  objects?: EtlObjects;
  shapes?: EtlShapeObjects;
  execute?: EtlExecute;
  partialFetch?: boolean;
  missedFiles?: ItEntities;
  view?: EtlViewExportData;
  scale?: number;
}
export interface EtlObjectPattern {
  result?: boolean;
  properties?: boolean;
  settings?: boolean;
}
export interface EtlMdPattern extends ObjectMdPattern {
  all?: boolean;
  objects?: ListOperation;
  objectsFilter?: ListFilter;
  execute?: boolean;
  object?: EtlObjectPattern;
  partialFetch?: boolean;
  missedFiles?: boolean;
  getShapes?: boolean;
  getShapesMbProperties?: boolean;
  mbShapesLast?: boolean;
  view?: EtlViewExportDataPattern;
}
export interface GetEtlArg {
  pattern?: EtlMdPattern;
}
export interface GetEtlResult {
  id: EtlId;
  meta?: EtlMd;
}
export interface SetEtlArg {
  pattern: EtlMdPattern;
  meta: EtlMd;
  metaGet?: EtlMdPattern;
}
export interface SetEtlResult {
  id: EtlId;
  meta?: EtlMd;
}
export interface EtlOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface OpenEtlArg {
  args: EtlOpenArgs;
  metaGet?: EtlMdPattern;
}
export interface OpenEtlResult {
  id: EtlId;
  meta?: EtlMd;
}
export interface PrxId {
  id: string;
}
export interface PrxPageSettings extends TabPageSettings {
  startPageNumber?: number;
  useSheetPageCount?: boolean;
}
export interface PrxSaveDataArg {
  continueOnError?: boolean;
}
export interface PrxSaveDataErrorInfo extends ErrorInfo {
}
export interface PrxSaveDataResult {
  errorInfo?: PrxSaveDataErrorInfo;
}
export interface PrxDataChange {
  isDataChanged?: boolean;
  saveData?: boolean;
  saveDataArg?: PrxSaveDataArg;
  isEaxGridChanged?: boolean;
}
export interface PrxSheet extends ItEntity {
  recalc?: TriState;
  type: PrxSheetType;
  isActive?: boolean;
  pageSettings?: PrxPageSettings;
  dataChange?: PrxDataChange;
}
export interface PrxSheets {
  active?: number;
  its: PrxSheetsVec;
}
export interface PrxDataSource extends ItEntity {
  cube?: CubeDataSource;
}
export interface PrxDataSources {
  its: PrxDataSourcesVec;
}
export interface PrxTableSource extends ItEntity {
  dataset?: Od;
}
export interface PrxTableSources {
  its: PrxTableSourcesVec;
}
export interface PrxDataFilter {
  available?: boolean;
  enabled?: boolean;
  rangeEnabled?: boolean;
  min?: number;
  max?: number;
}
export interface PivotDim extends ItEntity {
  position?: PvtDimPos;
}
export interface EaxDataAreaPivotSlice {
  dims?: PivotDims;
}
export interface EaxDataAreaSlice extends ItEntity {
  type?: EaxDataAreaSliceType;
  pivotSlice?: EaxDataAreaPivotSlice;
}
export interface EaxGridObject {
  range?: TabComplexRange;
  hyperlinksAsText?: boolean;
  specificRanges?: EaxTabRanges;
  useStyleFormatting?: boolean;
}
export interface EaxDataAreaView extends ItEntity {
  type?: EaxObjectType;
  slice?: ItEntity;
  grid?: EaxGridObject;
}
export interface EaxDataArea {
  slices?: EaxDataAreaSlices;
  views?: EaxDataAreaViews;
}
export interface EaxPivotSlicePattern {
  dims?: boolean;
}
export interface EaxSlicePattern {
  pivotSlice?: EaxPivotSlicePattern;
}
export interface EaxGridPattern {
  range?: boolean;
  hyperlinksAsText?: boolean;
  specificRanges?: EaxTabRangesPattern;
  useStyleFormatting?: boolean;
}
export interface EaxViewsPattern {
  grid?: EaxGridPattern;
}
export interface EaxDataAreaPattern {
  slices?: EaxSlicePattern;
  views?: EaxViewsPattern;
}
export interface PrxSlice extends ItEntity {
  dataSource?: ItEntity;
  filter?: PrxDataFilter;
}
export interface PrxSlices {
  its: PrxSlicesVec;
}
export interface PrxSliceDimension extends ItEntity {
  slice?: PrxSlice;
}
export interface PrxSliceDimensions {
  its: PrxSliceDimensionsVec;
}
export interface PrxIsland extends ItEntity {
  sheet?: ItEntity;
  recalc?: TriState;
}
export interface PrxDataIslandProperties {
  range?: TabRange;
  readOnly?: boolean;
  outputPart?: PrxDataIslandPart;
  outputRange?: string;
  adjustMode?: PrxAdjustMode;
  headersSize?: Size;
  leftHeaderRange?: TabRange;
  topHeaderRange?: TabRange;
  dataRange?: TabRange;
}
export interface PrxDataIsland extends PrxIsland {
  dataSource?: ItEntity;
  slice?: ItEntity;
  properties?: PrxDataIslandProperties;
}
export interface PrxDataIslands {
  its: PrxDataIslandsVec;
}
export interface PrxChangedCellsStyle {
  sheet?: ItKey;
  range?: TabRange;
  style?: TabStyle;
}
export interface PrxChangedCellsStyles {
  its: PrxChangedCellsStyleVec;
}
export interface PrxTableIslandProperties {
  range?: TabRange;
  adjustMode?: PrxAdjustMode;
  columnsBehaviour?: PrxDataIslandHeaderBehaviour;
  rowsBehaviour?: PrxDataIslandHeaderBehaviour;
}
export interface PrxTableIsland extends PrxIsland {
  source?: ItEntity;
  properties?: PrxTableIslandProperties;
}
export interface PrxTableIslands {
  its: PrxTableIslandsVec;
}
export interface PrxControlAppearance {
  report: boolean;
  sheets?: ItKeys;
  singleSheet?: ItEntity;
  specificRecalc: boolean;
  sheetsForRecalc?: ItKeys;
  recalcAllSheets?: boolean;
}
export interface PrxControlDimension {
  dataSource?: ItEntity;
  slice?: ItEntity;
  dimension?: ItEntity;
}
export interface PrxControlValue {
  value: any;
  dt: ItDataType;
  dimId?: DmId;
}
export interface PrxControl extends ItEntity {
  value?: PrxControlValue;
  autoRecalc?: boolean;
  recalcOnChange?: boolean;
  size?: SizeU;
  dimension?: PrxControlDimension;
  controlledByParam?: ItEntity;
  appearance?: PrxControlAppearance;
  multiSelect?: TriState;
  dimMeta?: GetDimMetadataResult;
  binding?: UiControlBinding;
  changeCounters?: SelectionChangeCounters;
}
export interface PrxControlPattern {
  dimArg?: GetDimMetadataArg;
}
export interface PrxSheetControlsOrder {
  SheetKey: number;
  order: PrxControlsOrder;
}
export interface PrxSheetControlsOrders {
  its: PrxControlsOrdersVec;
}
export interface PrxControls {
  its: PrxControlsVec;
  sheetControlsOrders?: PrxSheetControlsOrders;
}
export interface PrxExportData extends ExportData {
}
export interface PrxExportDataPattern extends ExportSettings {
  singleSheet?: ItKey;
  pagesRange?: string;
  pagesKeysRange?: string;
  reportTitle?: boolean;
  sheetTitles?: boolean;
  objects?: boolean;
  hiddenCells?: boolean;
  chartsAsImages?: boolean;
  emptyPages?: boolean;
  breakIntoLayouts?: boolean;
  headlines?: boolean;
  sheetAccess?: boolean;
  flashsAsImages?: boolean;
  hiddenSheets?: boolean;
  formulas?: boolean;
}
export interface PrxDrillRange {
  dsoKey: number;
  sliceKey: number;
  TopLeft: Position;
  BottomRight?: Position;
}
export interface EaxDrillRange {
  sliceKey: number;
  viewKey: number;
  TopLeft: Position;
  BottomRight?: Position;
}
export interface PrxDrill {
  Ranges: PrxDrillRanges;
  DARanges: EaxDrillRanges;
}
export interface PrxOptions {
  displayTabs?: TriState;
  updateSettings?: ViewerUpdateSettings;
  previewEnableEdit?: boolean;
  controlPanelPosition?: PrxControlPanelPosition;
  controlPanelVisible?: boolean;
  footnotesOptions?: TabFootnotesOptions;
}
export interface TabObjectAction {
  objId: string;
}
export interface ChartSerieClickAction extends TabObjectAction {
  serieIdx: number;
  pointIdx: number;
}
export interface MapShapeClickAction extends TabObjectAction {
  shapeId: any;
}
export interface PrxObjectAction {
  chartSerieClick?: ChartSerieClickAction;
  mapShapeClick?: MapShapeClickAction;
}
export interface PrxMd extends ObjectMd {
  recalc?: TriState;
  sheets?: PrxSheets;
  dataSources?: PrxDataSources;
  slices?: PrxSlices;
  tableSources?: PrxTableSources;
  dataIslands?: PrxDataIslands;
  tableIslands?: PrxTableIslands;
  controls?: PrxControls;
  exportData?: PrxExportData;
  dataChange?: PrxDataChange;
  drillCell?: PrxDrill;
  options?: PrxOptions;
  sliceDimensions?: PrxSliceDimensions;
  isRecalced?: boolean;
  objectAction?: PrxObjectAction;
  canGenWbk?: boolean;
  generatedWbk?: GenWbkId;
  generatedProblem?: number;
  validations?: EaxValidations;
  diagnosticReport?: VfDiagnosticReport;
  selectedGrid?: PrxGridDescr;
  dimAttrNaming?: EaxDimAttributeNaming;
  dimAttrsNaming?: EaxDimAttributesNaming;
  changedCellsStyles?: PrxChangedCellsStyles;
  vizSelectionCanCauseRebuild?: boolean;
  styleSheets?: GetStyleSheetResultVec;
  hasEventHandler?: boolean;
  rowsDrill?: EaxDrillInfos;
  columnsDrill?: EaxDrillInfos;
  drillUpHeaderRange?: TabComplexRange;
  drillDownHeaderRange?: TabComplexRange;
  eaxChartDrillEntry?: ItEntity;
  chartDrill?: EaxChartDrillInfos;
  dataArea?: EaxDataArea;
}
export interface PrxIslandPattern {
  operation?: ListOperation;
  properties?: boolean;
}
export interface PrxSheetPattern {
  pageSettings?: boolean;
}
export interface PrxDrillPattern {
  sheetKey: number;
  TopLeft: Position;
  RightBottom?: Position;
}
export interface PrxObjDrillPattern {
  chartDrill?: boolean;
  chartDrillSeriesOnly?: boolean;
  chartDrillID?: string;
  rowsDrill?: boolean;
  columnsDrill?: boolean;
  drillUpHeaderRange?: boolean;
  drillDownHeaderRange?: boolean;
  drillRange?: TabRange;
}
export interface PrxMdPattern extends ObjectMdPattern {
  all?: boolean;
  sheet?: PrxSheetPattern;
  sheets?: ListOperation;
  duplicateSheet?: number;
  sheetsFilter?: ListFilter;
  tableSources?: ListOperation;
  tableSourcesFilter?: ListFilter;
  dataSources?: ListOperation;
  dataSourcesFilter?: ListFilter;
  dataSource?: CubeDataSourcePattern;
  slices?: ListOperation;
  slicesFilter?: ListFilter;
  dataIslands?: PrxIslandPattern;
  dataIslandsFilter?: ListFilter;
  tableIslands?: PrxIslandPattern;
  tableIslandsFilter?: ListFilter;
  controls?: ListOperation;
  controlsFilter?: ListFilter;
  control?: PrxControlPattern;
  exportData?: PrxExportDataPattern;
  drillCell?: PrxDrillPattern;
  options?: boolean;
  slicesDimensions?: ListOperation;
  isRecalced?: boolean;
  objectAction?: boolean;
  canGenWbk?: boolean;
  genWbk?: boolean;
  genProblem?: boolean;
  validations?: ListOperation;
  diagnosticReport?: VfDiagnosticReportPattern;
  selectedGrid?: boolean;
  dimAttrsNaming?: boolean;
  changedCellsStyles?: boolean;
  vizSelectionImpact?: boolean;
  styleSheets?: StyleSheetMdPattern;
  hasEventHandler?: boolean;
  objDrillInfo?: PrxObjDrillPattern;
  dataArea?: EaxDataAreaPattern;
}
export interface PrxOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface PrxRefresh {
  recalc?: boolean;
  saveData?: boolean;
  saveDataArg?: PrxSaveDataArg;
}
export interface PrxRefreshResult {
  saveDataResult?: PrxSaveDataResult;
}
export interface GetPrxMdArg {
  pattern?: PrxMdPattern;
  refresh?: PrxRefresh;
}
export interface PrxMdResult {
  refresh?: PrxRefreshResult;
  gridHyperlinkClick?: EaxGridHyperlinkClickResult;
  drillDown?: PrxDrillDownResult;
}
export interface GetPrxMdResult extends PrxMdResult {
  id: PrxId;
  meta?: PrxMd;
}
export interface OpenPrxArg {
  args: PrxOpenArgs;
  metaGet?: PrxMdPattern;
}
export interface OpenPrxResult {
  id: PrxId;
  meta?: PrxMd;
}
export interface SetPrxMdArg {
  pattern: PrxMdPattern;
  meta?: PrxMd;
  refresh?: PrxRefresh;
  emulateGridHyperlinkClick?: EaxGridEmulateHyperlinkClick;
  drillDown?: PrxDrillDown;
  metaGet?: PrxMdPattern;
}
export interface SetPrxMdResult extends PrxMdResult {
  id: PrxId;
  meta?: PrxMd;
}
export interface TabSheetId {
  id: string;
}
export interface TabRow {
}
export interface TabColumn {
}
export interface TabCellSpan {
}
export interface TabExpander {
}
export interface TabObject {
}
export interface TabObjectImage {
  asImage: BinaryData;
}
export interface TabCommonImage {
  Content?: BinaryData;
}
export interface TabImage extends TabCommonImage {
}
export interface TabCellData {
}
export interface TabPictureData {
}
export interface TabConditionIcon {
}
export interface TabHistogramData {
}
export interface TabSparkline {
}
export interface TabCoord {
}
export interface TabCell {
  CD?: TabCellData;
  PD?: TabPictureData;
  CI?: TabConditionIcon;
  HD?: TabHistogramData;
  SL?: TabSparkline;
  DC?: TabCoords;
}
export interface TabFontStyle {
}
export interface TabBrush {
  Image?: TabCommonImage;
}
export interface TabFootnotes {
  Font?: TabFontStyle;
  Brush?: TabBrush;
}
export interface TabFootnote {
}
export interface TabStructure {
  DefaultRow?: TabRow;
  DefaultColumn?: TabColumn;
  DefaultCell?: TabCell;
  Rows?: TabRows;
  Columns?: TabColumns;
  CellSpans?: TabCellSpans;
  Expanders?: TabExpanders;
  Objects?: TabObjects;
  DefaultStyle?: TabStyle;
  Footnotes?: TabFootnotes;
}
export interface TabBorder {
}
export interface TabTextStyle {
}
export interface TabFillStyle {
}
export interface TabOtherStyle {
}
export interface TabHyperlinkStyle {
}
export interface TabBackgroundPictureStyle {
}
export interface TabAdjustFormatPrecisionArg {
  Delta: number;
}
export interface TabStyleImages {
  N?: TabCommonImage;
  H?: TabCommonImage;
  P?: TabCommonImage;
  B?: TabCommonImage;
}
export interface TabStyles extends TabStylesVec {
}
export interface TabIconImage extends TabCommonImage {
}
export interface TabIcon extends TabIconImagesVec {
}
export interface TabImagesData {
  TabImages?: TabImagesVec;
  ConditionIcons?: TabIconsVec;
}
export interface TabData {
  Structure?: TabStructure;
  TabObjectsImages?: TTabObjectImages;
  Cells?: TabCells;
  Styles?: TabStyles;
  Images?: TabImagesData;
  Footnotes?: TabFootnotesVec;
  PredefinedStyles?: PredefinedStylesDesc;
}
export interface TabFormatConditionDetails {
  Values?: TabFormatValues;
  CellContent?: TabFormatCellContent;
  RankValues?: TabFormatRankValues;
  Average?: TabFormatAverage;
  Duplicate?: TabFormatDuplicate;
  Formula?: TabFormatFormula;
  Growth?: TabFormatGrowth;
  Scale?: TabFormatScale;
  Extended?: TabFormatExtended;
}
export interface TabFormatCondition {
  Key: number;
  Type: TabConditionType;
  Range?: TabRange;
  Enabled?: boolean;
  Details?: TabFormatConditionDetails;
  PredefinedGradient?: TabCondPredefinedGradientStyle;
  PredefinedDataBar?: TabCondPredefinedDataBarStyle;
  PredefinedIcon?: TabConditionIconType;
  PredefinedGrowth?: TabConditionIconType;
  PredefinedScale?: TabConditionPredefinedScaleStyle;
}
export interface TabFormatValuesPoint {
  Type: TabFormatValueType;
  Value: any;
  Condition: TabConditionIconRangeCond;
}
export interface TabFormatValues {
  Style: TabFormatValuesStyle;
  MinValueType: TabFormatValueType;
  MinValue: any;
  MinValueColor: StringColor;
  MaxValueType: TabFormatValueType;
  MaxValue: any;
  MaxValueColor: StringColor;
  MidValueType: TabFormatValueType;
  MidValue: any;
  MidValueColor: StringColor;
  Points?: TabFormatValuesPoints;
  IconType?: TabConditionIconType;
  ShowValues?: boolean;
  ReverseIcons?: boolean;
}
export interface TabFormatCellContent {
  ContentType: TabFormatContentType;
  CellValue: any;
  SpecificText: string;
  Style?: TabStyle;
  ValueCondition: TabConditionCellContentValue;
  TextCondition: TabConditionCellContentText;
  DateCondition: TabConditionCellContentDate;
  MinValue: any;
  MaxValue: any;
}
export interface TabFormatRankValues {
  Type: TabFormatRankType;
  Percent: number;
  Count: number;
  Style?: TabStyle;
  PercentUsed: boolean;
}
export interface TabFormatAverage {
  Type: TabFormatAverageType;
  Style?: TabStyle;
}
export interface TabFormatDuplicate {
  Type: TabFormatDuplicateType;
  Style?: TabStyle;
}
export interface TabFormatFormula {
  Condition: string;
  Style?: TabStyle;
}
export interface TabFormatExtended {
  Style?: TabStyle;
}
export interface TabFormatExtension {
}
export interface TabFormatGrowth {
  Direction: TabFormatGrowthDirection;
  IconType: TabConditionIconType;
}
export interface TabFormatScale {
  Type?: TabFormatScaleType;
  IntervalsCount?: number;
  UseAutoColors?: boolean;
  StartColor?: StringColor;
  EndColor?: StringColor;
  Colors?: IndexedColors;
}
export interface TabTableStyle {
  Name: string;
  Range?: TabRange;
  Default?: TabStyle;
  Corner?: TabStyle;
  FirstRow?: TabTableStripe;
  SecondRow?: TabTableStripe;
  FirstColumn?: TabTableStripe;
  SecondColumn?: TabTableStripe;
  HeaderRow?: TabTableStripe;
  HeaderColumn?: TabTableStripe;
  FooterRow?: TabTableStripe;
  FooterColumn?: TabTableStripe;
  PredefinedStyle?: TabTablePredefinedStyle;
  IsEmpty?: boolean;
}
export interface TabTableStripe {
  Width?: number;
  Style?: TabStyle;
}
export interface TabFilterCondition {
  Value?: any;
  TextValue?: string;
}
export interface TabFilterLimitCondition {
}
export interface TabFilterValue {
}
export interface TabFilterItem extends ItKey {
  Conditions?: TabFilterConditions;
  LimitCondition?: TabFilterLimitCondition;
  FilterValues?: TabFilterValuesVec;
}
export interface TabFilter {
  its: TabFilterItemsVec;
  Range?: TabRange;
}
export interface TabFixedArea {
  Size?: Size;
  Behaviour?: TabFixedBehaviour;
  ShowLines?: boolean;
  LinesColor?: StringColor;
  BordersStyle?: TabStyle;
}
export interface TabCellCoords {
  row?: number;
  column?: number;
}
export interface TabSelection {
  type?: TabSelectionType;
  range?: TabComplexRange;
  focusedCell?: TabCellCoords;
}
export interface TabView {
  displayAccessRights?: boolean;
  size?: SizeU;
  leftColumn?: number;
  topRow?: number;
}
export interface TabMd {
  formatConditions?: TabFormatConditions;
  tableStyles?: TabTableStyles;
  autoFilter?: TabFilter;
  fixedArea?: TabFixedArea;
  selection?: TabSelection;
  view?: TabView;
}
export interface TabSheetStruct {
  TabSheetData?: TabData;
}
export interface TabSheetPart {
  range?: TabRange;
  sheet?: TabSheetStruct;
}
export interface TabSheetPattern {
  all?: boolean;
  structure?: boolean;
  data?: boolean;
  images?: boolean;
  DHTML?: boolean;
  styles?: ListOperation;
  objects?: ListOperation;
  metaData?: boolean;
  formatConditions?: ListOperation;
  tableStyles?: ListOperation;
  autoFilter?: ListOperation;
  fixedArea?: boolean;
  objectsAsImage?: boolean;
  skipStaticImages?: boolean;
  selection?: boolean;
  view?: boolean;
  footnotes?: ListOperation;
  dependentCells?: boolean;
  predefinedStyles?: boolean;
}
export interface TabCoordAction {
  row: number;
  column: number;
}
export interface TabSearchText {
  text: string;
  caseSensitive: boolean;
  wholeWordsOnly: boolean;
}
export interface TabHeaderSearchCondition extends TabSearchText {
  index: number;
}
export interface TabHeaderSearch {
  conditions: TabHeaderSearchConditions;
  startIndex?: number;
}
export interface TabCellSearch extends TabSearchText {
  range?: TabRange;
  direction?: TabCellSearchDirection;
  target?: TabCellSearchTarget;
  requiredStyle?: TabStyle;
  startRow?: number;
  startColumn?: number;
}
export interface TabSearch {
  area: TabSearchArea;
  header?: TabHeaderSearch;
  cells?: TabCellSearch;
  resultRange?: ListRange;
}
export interface TabSearchResultItem {
  row: number;
  column: number;
}
export interface TabSearchResult {
  its: TabSearchResultItems;
}
export interface TabSaveStyleAction {
  style: TabStyle;
  styleSheet: StyleDesc;
}
export interface TabAutoFillAction {
  source?: TabRange;
  destination?: TabRange;
  fillType?: TabRangeFillType;
  increment?: number;
}
export interface TabSheetAction {
  hlink?: TabCoordAction;
  picture?: TabCoordActions;
  search?: TabSearch;
  keyModifiers?: KeyModifiers;
  saveStyle?: TabSaveStyleAction;
  autoFill?: TabAutoFillAction;
}
export interface PrxSheetId {
  id: string;
}
export interface GetDocumentDataArg {
}
export interface GetDocumentDataResult {
  id: PrxSheetId;
  result: string;
}
export interface EaxCalcItemStyle {
  Style?: TabStyle;
}
export interface EaxCalcItemStyles extends EaxCalcItemStylesVec {
}
export interface EaxTablePartStyle {
  partDesc?: EaxTablePartDesc;
  dataStyle?: TabStyle;
  headerStyle?: TabStyle;
  formatConditions?: TabFormatConditions;
}
export interface ChartId {
  id: string;
}
export interface ChartMdPattern {
  all?: boolean;
  data?: boolean;
  decoration?: boolean;
  hiChart?: boolean;
  asImage?: ImageProperties;
  predefined?: boolean;
  predefinedImage?: ImageProperties;
  style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
  recommendedCharts?: boolean;
}
export interface RecommendedChart {
  style: ChartStyle;
  type: ChartType;
  orientation: ChartOrientation;
  dispMode: ChartDisplayMode;
  preview: BinaryData;
}
export interface ChartMd {
  md?: any;
  hiChart?: string;
  asImage?: BinaryData;
  options?: string;
  toolTipImageMap?: string;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
  recommendedCharts?: RecommendedChartsArr;
}
export interface GetDefaultChartResult extends GetChartResult {
}
export interface TopobaseId {
  id: string;
}
export interface TopobaseMdPattern {
  topobase?: TopobaseFormat;
  availableFormats?: boolean;
}
export interface TopobaseMd {
  topobaseOd?: Od;
  topobase?: any;
  topobase2?: string;
  availableFormats?: TopobaseFormatVec;
}
export interface GetTopobaseArg {
  pattern: TopobaseMdPattern;
}
export interface GetTopobaseResult {
  id: TopobaseId;
  meta: TopobaseMd;
}
export interface MapId {
  id: string;
}
export interface MapMdPattern extends TopobaseMdPattern {
  All?: boolean;
  DataSource?: boolean;
  Visual?: boolean;
  Style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
}
export interface MapMd extends TopobaseMd {
  md?: any;
  options?: string;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
}
export interface SpeedometerId {
  id: string;
}
export interface SpeedometerMdPattern {
  metaData?: boolean;
}
export interface SpeedometerMd {
  md?: any;
}
export interface BubbleTreeId {
  id: string;
}
export interface BubbleTreeMdPattern {
  all?: boolean;
  metaData?: boolean;
  style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
}
export interface BubbleTreeMd {
  md?: any;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
}
export interface TreeMapId {
  id: string;
}
export interface TreeMapMdPattern {
  all?: boolean;
  metaData?: boolean;
  style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
}
export interface TreeMapMd {
  md?: any;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
}
export interface MapChartId {
  id: string;
}
export interface MapChartMdPattern {
  all?: boolean;
  metaData?: boolean;
  topobase?: TopobaseFormat;
  availableFormats?: boolean;
  style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
}
export interface MapChartMd {
  md?: any;
  topobaseOd?: Od;
  topobase?: any;
  topobase2?: string;
  availableFormats?: TopobaseFormatVec;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
}
export interface BubbleChartId {
  id: string;
}
export interface BubbleChartMdPattern {
  all?: boolean;
  metaData?: boolean;
  style?: boolean;
  predefinedStyles?: PredefinedStylesMdPattern;
}
export interface BubbleChartMd {
  md?: any;
  style?: StyleDesc;
  saveStyle?: StyleDesc;
  predefinedStyles?: PredefinedStylesDesc;
  predefinedStyle?: PredefinedStyleDesc;
}
export interface AdHocId {
  id: string;
}
export interface AdHocIds {
  ids: AdHocIdVec;
}
export interface AdhocDataSourceObject {
  id: string;
  linked?: boolean;
  obj?: OdId;
  createNew?: number;
  dsoObject?: ItEntity;
  changeCounter?: number;
  params?: OdArgs;
  trackSelectedArea?: boolean;
  availableTrack?: boolean;
  sourceDso?: AdhocDataSourceObject;
  undoRedoChangeCounter?: number;
  acceptDataSelection?: boolean;
  slideKey?: number;
}
export interface DataSourceObjects {
  its?: DataSourceObjectsVec;
  autoSyncNewDso?: boolean;
  autoUpdateSources?: boolean;
}
export interface AdhocDsoDimension extends ItEntity {
  dso: string;
  linkedDso?: boolean;
  copydim?: number;
  sourceDim?: DmMetaDescr;
  isOriginal?: boolean;
  changeCounters?: SelectionChangeCounters;
  sourceDimKey?: number;
  type?: AdhocDimType;
}
export interface AdhocDsoDimensions {
  its: AdhocDsoDimensionsVec;
}
export interface AdhocExportDataSource {
  dso: string;
  linkedDso: boolean;
}
export interface AdhocExportDataSources {
  its: AdhocExportDataSourceVec;
}
export interface AdHocExportData extends ExportData {
}
export interface AdHocExportDataPattern extends ExportSettings {
  chartsAsImages?: boolean;
  dso?: AdhocExportDataSources;
  ExportRange?: string;
}
export interface AdhocSyncIndex extends ItEntity {
}
export interface AdhocSyncIndexes {
  its: AdhocSyncIndexesVec;
}
export interface AdhocSyncIndexDimension extends ItEntity {
  syncIndexKey: number;
  syncAttr?: string;
  dsoDim?: AdhocDsoDimension;
  general?: boolean;
  direction?: AdhocSyncIndexDimDirection;
}
export interface AdhocSyncIndexDimensions {
  its: AdhocSyncIndexDimensionsVec;
}
export interface AdhocParamSyncIndex extends ItEntity {
  value?: OdArg;
}
export interface AdhocParamSyncIndexes {
  its: AdhocParamSyncIndexesVec;
}
export interface AdhocParamSyncItem extends ItEntity {
  syncIndexKey: number;
  dso?: string;
  linkedDso?: boolean;
  paramId?: string;
  value?: OdArg;
}
export interface AdhocParamSyncItems {
  its: AdhocParamSyncItemsVec;
}
export interface AdhocChatHistoryAction {
  date: any;
  id?: string;
  body: string;
  userId: string;
}
export interface AdhocChatHistory {
  its: AdhocChatHistoryVec;
}
export interface AdhocChatUser {
  userId?: string;
  shareType?: AdhocShareType;
  isOnline?: boolean;
  email?: string;
}
export interface AdhocChatUsers {
  its: AdhocChatUsersVec;
}
export interface AdhocSynchronization {
  syncIndexes?: AdhocSyncIndexes;
  syncDims?: AdhocSyncIndexDimensions;
  paramSyncIndexes?: AdhocParamSyncIndexes;
  paramSyncItems?: AdhocParamSyncItems;
}
export interface AdhocTranslate {
  isMultyLanguage?: boolean;
}
export interface AdhocChat {
  sharedUsers?: AdhocChatUsers;
  history?: AdhocChatHistory;
}
export interface AdhocSlide {
  key?: number;
  id?: string;
  visible?: boolean;
  name?: string;
  index?: number;
  viewModeImages?: string;
  mainPanel?: any;
  dataSourceObjects?: DataSourceObjects;
  dataSourceLinkedObjects?: DataSourceObjects;
  miniature?: BinaryData;
}
export interface AdhocSlides {
  its: AdhocSlidesVec;
}
export interface AdhocMd8 {
  activeSlideKey?: number;
  activeSlideId?: string;
  slides?: AdhocSlides;
}
export interface AdhocPageSettings extends GxPageSettings {
  scale?: number;
}
export interface AdhocDsoRefresh {
  its?: AdhocDsoRefreshVec;
}
export interface AdHocMd extends ObjectMd {
  Md?: any;
  dataSourceObjects?: DataSourceObjects;
  dataSourceLinkedObjects?: DataSourceObjects;
  dataSourceDimensions?: AdhocDsoDimensions;
  dataSourceLinkedDimensions?: AdhocDsoDimensions;
  synchronization?: AdhocSynchronization;
  shareMd?: AdhocChat;
  customTables?: string;
  exportData?: AdHocExportData;
  translating?: AdhocTranslate;
  Md8?: AdhocMd8;
  pageSettings?: AdhocPageSettings;
  autoUpdateSources?: TriState;
  updateSettings?: ViewerUpdateSettings;
  refreshAction?: AdhocDsoRefresh;
  undoRedo?: UndoRedo;
  isDataChanged?: boolean;
  allowEditData?: boolean;
  binaryItemIds?: AdHocIds;
  binaryData?: BinaryData;
  documentMode?: AdhocDocModeType;
  calcOnChangedData?: TriState;
}
export interface AdhocChatPattern {
  chatHistory?: ListOperation;
  chatHistoryFilter?: ListRange;
  chatUsers?: ListOperation;
}
export interface SlideFilter {
  its?: ArrLong;
  itsById?: ArrString;
}
export interface DataSourcePattern {
  objects?: ListOperation;
  params?: boolean;
  trackSelArea?: boolean;
  refreshDims?: boolean;
  slideKey?: boolean;
}
export interface SlideContentPattern {
  animation?: boolean;
  viewModeImages?: boolean;
  mainPanel?: boolean;
  dsoPattern?: DataSourcePattern;
  dsoLinkedPattern?: DataSourcePattern;
  dataSourceObjects?: ListOperation;
  dataSourceLinkedObjects?: ListOperation;
  miniature?: BinaryData;
}
export interface SlidesPattern {
  activeSlideKey?: boolean;
  activeSlideId?: boolean;
  slides?: ListOperation;
  slideFilter?: SlideFilter;
  allSlidesPattern?: SlideContentPattern;
  activeSlidePattern?: SlideContentPattern;
}
export interface DSDimensionPattern {
  objects?: ListOperation;
  name?: boolean;
  sourceDim?: boolean;
}
export interface BinaryItemPattern {
  itemId?: string;
}
export interface SyncDimsPattern {
  objects?: ListOperation;
  shortSyncInfo?: boolean;
}
export interface SyncParamsPattern {
  objects?: ListOperation;
}
export interface SyncPattern {
  dimsPattern?: SyncDimsPattern;
  paramsPattern?: SyncParamsPattern;
}
export interface AdHocMdPattern extends ObjectMdPattern {
  md?: boolean;
  dsoPattern?: DataSourcePattern;
  dsoLinkedPattern?: DataSourcePattern;
  dataSourceObjects?: ListOperation;
  dataSourceLinkedObjects?: ListOperation;
  dsoDimPattern?: DSDimensionPattern;
  dsoLinkedDimPattern?: DSDimensionPattern;
  dataSourceDimensions?: ListOperation;
  dataSourceLinkedDimensions?: ListOperation;
  syncPattern?: SyncPattern;
  synchronization?: ListOperation;
  shareMd?: AdhocChatPattern;
  customTables?: ListOperation;
  exportData?: AdHocExportDataPattern;
  translating?: boolean;
  layout?: SlidesPattern;
  pageSettings?: boolean;
  updateSettings?: boolean;
  undoRedo?: boolean;
  isDataChanged?: boolean;
  allowEditData?: boolean;
  binaryItems?: boolean;
  documentMode?: boolean;
  calcOnChangedData?: boolean;
  binaryId?: BinaryItemPattern;
}
export interface AdHocOpenArg {
  args?: OdOpenArgs;
  openForEdit?: boolean;
  getMd?: AdHocMdPattern;
}
export interface AdHocSaveDataArg {
  continueOnError?: boolean;
}
export interface AdHocSaveDataErrorInfo extends ErrorInfo {
}
export interface AdHocSaveDataResult {
  errorInfo?: AdHocSaveDataErrorInfo;
}
export interface AdHocRefreshResult {
  saveDataResult?: AdHocSaveDataResult;
}
export interface AdHocMdResult {
  refresh?: AdHocRefreshResult;
}
export interface OpenAdHocResult {
  id: AdHocId;
  meta?: AdHocMd;
}
export interface AdHocRefresh {
  all?: boolean;
  saveData?: boolean;
  saveDataArg?: AdHocSaveDataArg;
}
export interface AdhocMdArg {
  refresh?: AdHocRefresh;
}
export interface GetAdHocMdArg extends AdhocMdArg {
  pattern: AdHocMdPattern;
}
export interface GetAdHocResult extends AdHocMdResult {
  id: AdHocId;
  meta: AdHocMd;
}
export interface SetAdHocMdArg extends AdhocMdArg {
  meta: AdHocMd;
  pattern: AdHocMdPattern;
  metaGet?: AdHocMdPattern;
}
export interface SetAdHocResult extends AdHocMdResult {
  id: AdHocId;
  meta?: AdHocMd;
}
export interface AuditLogId {
  id: string;
}
export interface OpenAuditLogResult extends AuditLogId {
}
export interface AuditLogDataset {
  logType?: AuditLogType;
  session?: number;
  operation?: number;
  top?: number;
  noFilterLogons?: boolean;
}
export interface OpenAuditLogArg extends AuditLogDataset {
}
export interface AuditLogonData {
  stampIn: any;
  stampOut: any;
  userSid: string;
  userName: string;
  userDescription: string;
  station: string;
  userOs: string;
  userIp: string;
  comment: string;
  commentOut: string;
}
export interface AuditOperationData {
  operation: number;
  position: number;
  level: number;
  name: string;
  mask: number;
  objectKey: number;
  objectId: string;
  objectName: string;
  objectClass: number;
  comment: string;
  objectLabel?: number;
}
export interface AuditLogRecord {
  session: number;
  stamp: any;
  succeeded: boolean;
  isLogon: boolean;
  logon?: AuditLogonData;
  oper?: AuditOperationData;
}
export interface AuditLogRecords {
  rs?: AuditLogRecordsVec;
  notEof?: boolean;
  dateOrderAscending?: boolean;
  supportObjectsLabel?: boolean;
}
export interface GetAuditLogResult {
  logRecords?: AuditLogRecords;
  dataKey?: number;
}
export interface GetAuditLogArg {
  count: number;
  dataKey?: number;
  closeFlag?: number;
  logType?: AuditLogType;
}
export interface AuditLogDatasetArg {
  data: AuditLogDataset;
  recs?: GetAuditLogArg;
}
export interface AuditLogDatasetResult {
  dataKey?: number;
  recs?: AuditLogRecords;
}
export interface AuditLogFilterConditionOperation {
  operation?: number;
  operationClass?: number;
}
export interface StringFilterCondition {
  isOn?: boolean;
  value?: string;
  caseSensitive?: boolean;
  wholeWordsOnly?: boolean;
}
export interface AuditLogFilterCondition {
  isAnd?: boolean;
  isNot?: boolean;
  minDate?: any;
  maxDate?: any;
  includeFailedLogons?: boolean;
  includeSucceededLogons?: boolean;
  userNames?: ArrString;
  stations?: ArrString;
  osUsers?: ArrString;
  userIPs?: ArrString;
  includeFailedOperations?: boolean;
  includeSucceededOperations?: boolean;
  operations?: AuditLogFilterConditionOperationVec;
  classes?: ArrLong;
  nameFilter?: StringFilterCondition;
  idFilter?: StringFilterCondition;
  objectKeys?: ArrLong;
}
export interface AuditLogFilterConditionPattern {
  userNames?: ListOperation;
  stations?: ListOperation;
  osUsers?: ListOperation;
  userIPs?: ListOperation;
  operations?: ListOperation;
  classes?: ListOperation;
  objectKeys?: ListOperation;
}
export interface AuditLogFilter {
  conditions?: AuditLogFilterConditionVec;
  dateOrderAscending?: boolean;
  top?: number;
}
export interface AuditLogFilterPattern {
  conditions?: ListOperation;
  condition?: AuditLogFilterConditionPattern;
}
export interface AuditLogMd {
  binFilter?: BinaryData;
  filter?: AuditLogFilter;
}
export interface AuditLogMdPattern {
  binFilter?: boolean;
  filter?: AuditLogFilterPattern;
}
export interface AuditLogArchiveArg {
  active?: number;
  start?: boolean;
  format?: AuditLogArchiveFormat;
  date?: any;
  clearOnDone?: boolean;
  fileName?: string;
}
export interface AuditLogArchiveResult {
  active: number;
  done: boolean;
  progressPercent: number;
  out?: BinaryData;
}
export interface AuditLogLogonsArg {
  fieldName: string;
  fullBuild?: boolean;
}
export interface AuditLogLogonsResult {
  its: ArrString;
}
export interface AuditLogCountArg {
  data: AuditLogDataset;
}
export interface AuditLogCountResult {
  data?: number;
}
export interface GetAuditLogMdArg {
  pattern: AuditLogMdPattern;
}
export interface GetAuditLogMdResult {
  meta?: AuditLogMd;
}
export interface SetAuditLogMdArg {
  pattern: AuditLogMdPattern;
  meta: AuditLogMd;
  archive?: AuditLogArchiveArg;
  logons?: AuditLogLogonsArg;
  count?: AuditLogCountArg;
  metaGet?: AuditLogMdPattern;
  data?: AuditLogDatasetArg;
}
export interface SetAuditLogMdResult {
  archive?: AuditLogArchiveResult;
  logons?: AuditLogLogonsResult;
  count?: AuditLogCountResult;
  metaGet?: AuditLogMd;
  data?: AuditLogDatasetResult;
}
export interface MsId {
  id: string;
}
export interface MsPeriod {
  start: any;
  end: any;
}
export interface MsScenarioNode extends ItEntity {
  scenDesc?: Od;
  moveTo?: TreeMoveInfo;
  internalKey?: number;
}
export interface MsScenarioTree {
  nodes: MsScenarioNodePtrVec;
}
export interface MsModelParam extends ItEntity {
  dataType?: ItDataType;
  defaultValue?: any;
  linkedObjectKey?: number;
  hidden?: boolean;
  tag?: any;
}
export interface MsModelParams {
  its?: MsModelParamsVec;
}
export interface MsCalculationChainEntry extends ItEntity {
  type: MsCalculationChainType;
  excluded?: boolean;
  graphMeta?: string;
  chainGroup?: MsCalculationChainGroup;
  chainFolder?: MsCalculationChainFolder;
  chainIterator?: MsCalculationChainIterator;
  chainBranch?: MsCalculationChainBranch;
  metaModel?: MsMetaModel;
  model?: MsModel;
  chainVariable?: MsCalculationChainVariable;
  targetProblem?: MsTargetProblem;
  targetConstraint?: MsTargetConstraint;
  targetTrajectory?: MsTargetTrajectory;
  userOptimizationProblem?: MsUserOptimizationProblem;
  userOptimizationConstraint?: MsUserOptimizationConstraint;
  parentKey?: number;
  moveTo?: TreeMoveInfo;
}
export interface MsCalculationChainEntries {
  its: MsCalculationChainEntriesVec;
  warning?: string;
}
export interface MsFormulaTransformSlices {
  its: MsFormulaTransformSlicesVec;
}
export interface MsVariableByFactor {
  variableExists?: boolean;
  chainEntry?: MsCalculationChainEntry;
}
export interface MsVariablesByFactors {
  its: MsVariableByFactorVec;
}
export interface MsVariableDataByScenario {
  scenarioKey: number;
  data: ArrDouble;
}
export interface MsVariableData {
  its: MsVariableDataVec;
  modelPeriod: MsModelPeriod;
  level: DimCalendarLvl;
  dates: Avs;
}
export interface MsVariablesData {
  its: MsVariablesDataVec;
}
export interface MsConstraintsKeys {
  targetKey: number;
  entryKey: number;
}
export interface MsTargetConstraintCommonData {
  constraintsKeys: MsConstraintsKeys;
  dates?: ArrDate;
  dateStrings?: ArrString;
  lowerBound?: ArrDouble;
  upperBound?: ArrDouble;
  lowerBoundFixed?: boolean;
  upperBoundFixed?: boolean;
  lowerConstraintStatus?: IntSet;
  upperConstraintStatus?: IntSet;
}
export interface MsVarConstraintsData extends MsTargetConstraintCommonData {
  useLowerBound: boolean;
  useUpperBound: boolean;
  level: DimCalendarLvl;
}
export interface MsVarsConstraintsData {
  its: MsVarConstraintDataVec;
}
export interface MsTargetConstraintData {
  its: MsVariableDataVec;
}
export interface MsTargetConstraintInfoData extends MsTargetConstraintCommonData {
  lowerBoundLagrangeMultiplier?: ArrDouble;
  upperBoundLagrangeMultiplier?: ArrDouble;
}
export interface MsGetTargetConstraintInfoData extends MsTargetConstraintInfoData {
  level?: DimCalendarLvl;
  tcd?: MsTargetConstraintData;
}
export interface MsGetTargetConstraintsData {
  its: MsGetTargetConstraintDataVec;
}
export interface MsConstraintsFlags {
  constraintsKeys: MsConstraintsKeys;
  lowerBoundEmpty: boolean;
  upperBoundEmpty: boolean;
  lowerBoundFixed: boolean;
  upperBoundFixed: boolean;
  lowerConstraintStatus: MsTargetConstraintStatus;
  upperConstraintStatus: MsTargetConstraintStatus;
  useUpperBound?: boolean;
  useLowerBound?: boolean;
}
export interface MsConstraintsFlagsList {
  its: MsConstraintsFlagsVec;
}
export interface MsGroupVariableData {
  its: MsVariableDataVec;
  level: DimCalendarLvl;
}
export interface MsGroupVariablesData {
  its: MsGroupVariablesDataVec;
}
export interface MsGroupVariables {
  groupDates: ArrString;
  groupVariablesData: MsGroupVariablesData;
}
export interface MsGroupsVariables {
  its: MsGroupVariablesVec;
}
export interface MsScenarioValue {
  scenarioKey: number;
  dates?: ArrDate;
  dateStrings?: ArrString;
  values: ArrDouble;
}
export interface MsVariableItem {
  entryKey?: number;
  its: MsScenarioValuesVec;
}
export interface MsSaveVariablesIts {
  its: MsVariableItemVec;
}
export interface MsSaveVariables {
  variables: MsSaveVariablesIts;
}
export interface MsSaveVarConstraints extends MsTargetConstraintCommonData {
  useLowerBound?: boolean;
  useUpperBound?: boolean;
}
export interface MsSaveVarsConstraints {
  its: MsSaveVarConstraintsVec;
}
export interface MsSaveTargetConstraints {
  its: MsTargetConstraintDataVec;
}
export interface MsVariableTestDataItem {
  entryKey: number;
  data: ArrDouble;
}
export interface MsVariableTestData {
  its: MsVariableTestDataVec;
}
export interface MsVariableTestResults {
  ResValueMatrix?: MsMatrixArr;
  PValueMatrix?: MsMatrixArr;
  TStatMatrix?: MsMatrixArr;
  error?: string;
  testData?: MsVariableTestData;
}
export interface MsVariableTestEntrySource {
  index?: number;
  inputEntryKey?: number;
  inversionInfo?: TsInversion;
  lag?: string;
  name?: string;
}
export interface MsVariableTest {
  inputEntrySources?: MsVariableTestEntrySources;
  missingData?: StatMissingData;
  startDate?: any;
  endDate?: any;
  autoCalculateDates?: boolean;
  modelKey?: ItKey;
  variableTestResult?: MsVariableTestResults;
}
export interface MsDFTest extends MsVariableTest {
  autoRegressionOrder?: number;
  equationType?: ADFEquationType;
  testedSeries?: ADFTestedSeriesType;
}
export interface MsJohansenTest extends MsVariableTest {
  autoRegressionOrder?: string;
  modelType?: ECMType;
  exogenousEntrySources?: MsVariableTestEntrySources;
}
export interface MsGrangerTest extends MsVariableTest {
  confidenceLevel?: number;
  lag?: number;
}
export interface MsPairCorrelationTest extends MsVariableTest {
  balancedSample?: boolean;
}
export interface MsCreateSimpleModelResult {
  modelKey: number;
  interVariableKey?: number;
  interModelKey?: number;
}
export interface MsAddFactorResult {
  interVariableKey?: number;
  interModelKey?: number;
}
export interface MsMdExportData extends ExportData {
}
export interface MsWorkbook {
  type?: MsWorkbookType;
  key?: number;
  getWbkResult?: GetWbkMdResult;
  getEaxResult?: GetEaxMdResult;
  setWbkArg?: SetWbkMdArg;
  setEaxArg?: SetEaxMdArg;
}
export interface MsWorkbooks {
  its: MsWorkbookVec;
}
export interface MsMetaModelVisualController {
  variableRubricatorKey?: number;
  workbooks?: MsWorkbooks;
  DFTest?: MsDFTest;
  GrangerTest?: MsGrangerTest;
  JohansenTest?: MsJohansenTest;
  PairCorrelationTest?: MsPairCorrelationTest;
  createSimpleModelResult?: MsCreateSimpleModelResult;
  addFactorResult?: MsAddFactorResult;
  factorKey?: number;
  freeVariables?: MsFormulaTransformSlices;
  variablesByFactors?: MsVariablesByFactors;
  variables?: MsFormulaTransformSlices;
  variablesData?: MsVariablesData;
  modelsData?: MsVariablesData;
  groupVariablesData?: MsGroupsVariables;
  chainEntry?: MsCalculationChainEntry;
  variableAutoCorrelation?: MsVariableAutoCorrelationResult;
  exportData?: MsMdExportData;
  varsConstraintsData?: MsVarsConstraintsData;
  targetConstraintsData?: MsGetTargetConstraintsData;
  varsConstraintsFlags?: MsConstraintsFlagsList;
  targetsConstraintsFlags?: MsConstraintsFlagsList;
  targetProblemData?: MsVariableData;
  userRPath?: string;
  isRExist?: boolean;
}
export interface MsSuppressEmptyFilter {
  suppressEmpty?: boolean;
  suppressEmptyArea?: LnSuppressEmptyArea;
}
export interface MsMetaModel {
  k?: number;
  calculationChain?: MsCalculationChainEntries;
  mmParams?: MsModelParams;
  tag?: any;
  visualController?: MsMetaModelVisualController;
  suppressEmptyFilter?: MsSuppressEmptyFilter;
  readOnly?: boolean;
  variableTestUseR?: boolean;
  calculateIdentOnFact?: boolean;
}
export interface MsDisplaySettings {
  displayTermsAs: MsDisplayAttribute;
}
export interface MsFormulaTransformVariable extends ItEntity {
  slices?: MsFormulaTransformSlices;
  variableStubKey?: number;
  parameterID?: string;
  kind?: MsFormulaTransformVariableKind;
  attributeId?: string;
  attributeType?: MsAttributeVariableType;
}
export interface MsFormulaTransformVariables {
  its: MsFormulaTransformVariablesVec;
}
export interface MsParametrizedDimension {
  dimension: number;
  parameter: number;
}
export interface MsParametrizedDimensions {
  its: MsParametrizedDimensionsVec;
}
export interface MsUnitInfo {
  unit: number;
  measure: number;
  baseUnit: number;
  unitsDimensionKey: number;
}
export interface DimSelection {
  id: DmId;
  variant: any;
}
export interface DimSelections {
  its: SelectionsVec;
}
export interface MsFormulaObject {
  dimKey?: number;
  termToText?: string;
  termToInnerText?: string;
}
export interface MsFormulaObjectList {
  its: MsFormulaObjectVec;
}
export interface MsModel {
  transform?: MsFormulaTransform;
  stochastic?: boolean;
  calculationPeriod?: MsCalcPeriod;
  useModelPeriod?: boolean;
  useExistingData?: boolean;
  treatNullsAsZeros?: boolean;
  autoName?: boolean;
  period?: MsModelPeriod;
  isExclusive?: boolean;
  useAutoPeriod?: boolean;
  error?: string;
  generatedName?: string;
  warnings?: Avs;
  readOnly?: boolean;
}
export interface MsOptimizationFormulaTerm {
  initApproximation?: ArrDouble;
}
export interface MsNonLinearControlFormulaTerm extends MsOptimizationFormulaTerm {
  lowerBound?: number;
  upperBound?: number;
  useLowerBound?: boolean;
  useUpperBound?: boolean;
}
export interface MsTermOptions {
  isPDLTerm?: boolean;
  lagLengthK?: number;
  polinomialDegreeP?: number;
  pdlConstraint?: PDLConstraintKind;
}
export interface MsCompositeFormulaTerm {
  k?: number;
  expression?: string;
  operands?: MsFormulaTerms;
  expressionText?: string;
  aggregationAttrKey?: number;
  inversedExpressionText?: string;
  missingData?: StatMissingData;
  applyMissingData?: boolean;
  customOptions?: MsTermOptions;
  unitInfo?: MsUnitInfo;
  inversion?: TsInversion;
  included?: boolean;
  lag?: number;
}
export interface MsCompositeFormulaTermPattern {
  all?: boolean;
  operands?: boolean;
  included?: boolean;
}
export interface MsFactor {
  termToText?: string;
  serie?: ArrDouble;
  transformedSerie?: ArrDouble;
  inversion?: TsInversion;
  entryKey?: number;
}
export interface MsFactors {
  its: MsFactorVec;
}
export interface MsEvaluateSeriesResultForScenario {
  scenarioKey?: number;
  fact?: ArrDouble;
  modelling?: ArrDouble;
  forecast?: ArrDouble;
  residuals?: ArrDouble;
  factsMatrix?: ArrDouble;
  upperConfidenceLevel?: ArrDouble;
  lowerConfidenceLevel?: ArrDouble;
  dUpperConfidenceLevel?: ArrDouble;
  dLowerConfidenceLevel?: ArrDouble;
  input?: ArrDouble;
  factors?: MsFactors;
}
export interface StatConstCoefficients {
  estimate?: number;
  standardError?: number;
  tStatistic?: number;
  probability?: number;
}
export interface MsDependenceForm {
  dependenceForm: StatDependenceType;
  expression: string;
  statCoefficients: StatModelCoefficients;
  criterionValue: number;
  summaryStatistics: StatSummaryStatistics;
  errors: string;
}
export interface MsCalculationChainGroup {
  level?: DimCalendarLvl;
  period?: MsModelPeriod;
}
export interface MsCalculationChainFolder {
  isCycleFolder?: boolean;
}
export interface MsCalculationChainIterator {
  parameter?: MsModelParam;
  parameterAsGroup?: MsModelParam;
  parameterAsSelection?: MsModelParam;
}
export interface MsCalculationChainBranch {
  parameter?: MsModelParam;
}
export interface MsCalcChainVariableAttribute {
  n: string;
  v: string;
}
export interface MsCalcChainVariableAttributes {
  its: MsCalcChainVariableAttributesVec;
}
export interface MsCalculationChainVariable {
  slice?: MsFormulaTransformSlice;
  fullName?: string;
  originalName?: string;
  originalShortName?: string;
  useCustomName?: boolean;
  attributes?: MsCalcChainVariableAttributes;
  variableExists?: boolean;
}
export interface MsTrajectoryData {
  dates?: ArrDate;
  dateStrings?: ArrString;
  values: ArrDouble;
}
export interface MsScenario {
  k?: number;
  id?: string;
  n?: string;
  isProtected?: boolean;
  internalKey?: number;
}
export interface MsTargetTrajectory {
  targetKey?: number;
  targetScenario?: MsScenario;
  trajectoryScenario?: MsScenario;
  trajectory?: MsTrajectoryData;
}
export interface MsTargetProblem extends MsOptimizationProblem {
  optimisticScenario?: MsScenario;
  constraintKeys?: ArrLong;
  varsConstraintsFlags?: MsConstraintsFlagsList;
  targetsConstraintsFlags?: MsConstraintsFlagsList;
  reportId?: string;
  useCustomName?: boolean;
  dimCalendarLvl?: DimCalendarLvl;
}
export interface MsTargetConstraint {
  targetKey?: number;
  constraintKey?: number;
  constraintInfos?: MsTargetConstraintInfos;
  expression?: string;
  operands?: MsFormulaTerms;
  lowerBoundFixed?: boolean;
  upperBoundFixed?: boolean;
}
export interface MsUserOptimizationProblem extends MsBaseOptimizationProblem {
  callbackAssemblyKey?: number;
  callbackClass?: string;
  constraintKeys?: ArrLong;
}
export interface MsUserOptimizationConstraint extends MsNonLinearConstraint {
  userOptimizationKey?: number;
  constraintKey?: number;
}
export interface MsModelParamValue extends ItEntity {
  value?: any;
}
export interface MsModelParamValues {
  its: MsModelParamValuesVec;
}
export interface MsDataLoadingPeriod {
  useDefault?: boolean;
  startDate?: any;
  endDate?: any;
}
export interface MsProblemCalculationSettings {
  includedScenarioKeys?: ArrLong;
  factIncluded?: boolean;
  paramValues?: MsModelParamValues;
  period?: MsModelPeriod;
  dataLoadingPeriod?: MsDataLoadingPeriod;
  defaultLevel?: DimCalendarLvl;
  breakOnError?: boolean;
  clearSeriesOnWarning?: boolean;
  filterWarnings?: boolean;
  correctStubPeriod?: MsCorrectStubPeriod;
  targetKey?: number;
}
export interface MsBaseOptimizationProblem {
  criterionFunction?: string;
  controlVariables?: MsFormulaTerms;
  operands?: MsFormulaTerms;
  level?: DimCalendarLvl;
  modelKey?: number;
  executeError?: string;
  criterionFunctionResults?: ArrDouble;
}
export interface MsOptimizationProblem extends MsBaseOptimizationProblem {
  extremum?: CpExtremumType;
  nodesCount?: number;
  maxIterationsCount?: number;
  methodType?: CpNonLinearMethodType;
  tolerance?: number;
  variablesCalculationTechnique?: CpStateVariablesCalculationTechniqueType;
}
export interface MsNonLinearConstraint {
  lowerBound?: string;
  upperBound?: string;
  expression?: string;
  operands?: MsFormulaTerms;
}
export interface MsTargetConstraintCommon {
  timeMoment?: number;
  lowerBound?: number;
  upperBound?: number;
  lowerBoundFixed?: boolean;
  upperBoundFixed?: boolean;
  lowerConstraintStatus?: MsTargetConstraintStatus;
  upperConstraintStatus?: MsTargetConstraintStatus;
}
export interface MsTargetConstraintInfo extends MsTargetConstraintCommon {
  index: number;
  optimalValue?: number;
  lowerBoundLagrangeMultiplier?: number;
  upperBoundLagrangeMultiplier?: number;
}
export interface MsTargetConstraintInfos {
  its: MsTargetConstraintInfosVec;
}
export interface MsTargetConstraints {
  its: MsTargetConstraintsVec;
}
export interface MsProblemDetails {
  period?: MsModelPeriod;
  currentPoint?: any;
}
export interface MsModelValuesForDate {
  date: any;
  scenarioKeys: ArrLong;
  values: ArrDouble;
}
export interface MsModelValues {
  modelKey: number;
  its: MsModelValuesForDateVec;
}
export interface MsModelsValues {
  its: MsModelValuesVec;
}
export interface MsCalculationState {
  values?: MsModelsValues;
  message?: string;
  errors?: ArrString;
}
export interface MsProblemCalculation {
  pointCount?: number;
  pointPassed?: number;
  saveData?: boolean;
  copyFact?: boolean;
  treatNullsAsZeros?: boolean;
  isRunning?: boolean;
  calculationState?: MsCalculationState;
  isSuspend?: boolean;
}
export interface MsScenarioList {
  its: MsScenariosVec;
}
export interface MsProblem {
  metamodel?: MsMetaModel;
  scenarios?: MsScenarioList;
  details?: MsProblemDetails;
  calculation?: MsProblemCalculation;
  problemCalculationKey?: number;
  useSavedCoefficients?: boolean;
  useScenarios?: boolean;
  readOnly?: boolean;
  reportId?: string;
}
export interface MsItem extends ItEntity {
  type: MsItemType;
  metaModelMd?: MsMetaModel;
  modelMd?: MsModel;
  problemMd?: MsProblem;
}
export interface MsItems {
  its?: MsItemsVec;
}
export interface MsMd extends ObjectMd {
  period?: MsPeriod;
  scenarios?: MsScenarioTree;
  items?: MsItems;
  item?: MsItem;
  getModelChart?: GetChartResult;
  setModelChart?: SetChartResult;
}
export interface MsMetaModelPattern {
  calculationChain?: ListOperation;
  mmParams?: ListOperation;
  tag?: boolean;
  filter?: MsMetaModelFilter;
  calcChainPattern?: MsCalculationChainPattern;
  visualControllerPattern?: MsMetaModelVisualControllerPattern;
  save?: boolean;
}
export interface MsModelPattern {
  transform?: MsFormulaTransformPattern;
  stochastic?: boolean;
  calculationPeriod?: boolean;
  useModelPeriod?: boolean;
  useExistingData?: boolean;
  treatNullsAsZeros?: boolean;
  autoName?: boolean;
  generatedName?: boolean;
  period?: boolean;
  isExclusive?: boolean;
  useAutoPeriod?: boolean;
  save?: boolean;
}
export interface MsCalculationChainArrangePattern {
  deleteFolders?: boolean;
  splitSlices?: boolean;
  createSystems?: boolean;
}
export interface MsTargetProblemPattern extends MsOptimizationProblemPattern {
  constraints?: ListOperation;
  constraint?: MsTargetConstraintPattern;
}
export interface MsTargetConstraintPattern {
  constraintInfos?: ListOperation;
  expression?: boolean;
  operands?: ListOperation;
}
export interface MsTargetTrajectoryPattern {
  targetScenario?: boolean;
  trajectoryScenario?: boolean;
}
export interface MsUserOptimizationProblemPattern extends MsBaseOptimizationProblemPattern {
  constraints?: ListOperation;
  constraint?: MsNonLinearConstraintPattern;
}
export interface MsNonLinearConstraintPattern {
  operands?: ListOperation;
}
export interface MsUserOptimizationConstraintPattern extends MsNonLinearConstraintPattern {
}
export interface MsCalculationChainVariablePattern {
  attributes?: boolean;
}
export interface MsCalculationChainPattern {
  metaModelPattern?: MsMetaModelPattern;
  modelPattern?: MsModelPattern;
  arrangePattern?: MsCalculationChainArrangePattern;
  variablePattern?: MsCalculationChainVariablePattern;
  targetProblemPattern?: MsTargetProblemPattern;
  targetConstraintPattern?: MsTargetConstraintPattern;
  targetTrajectoryPattern?: MsTargetTrajectoryPattern;
  userOptimizationProblemPattern?: MsUserOptimizationProblemPattern;
  userOptimizationConstraintPattern?: MsUserOptimizationConstraintPattern;
  parentKey?: ItKey;
  lastEntries?: number;
  entryKeys?: ArrLong;
}
export interface MsMetaModelFilter {
  mmParams?: ListFilter;
}
export interface MsVariableTestEntrySourcePattern {
  inputEntryKey?: boolean;
  inversionInfo?: boolean;
  lag?: boolean;
  name?: boolean;
}
export interface MsVariableTestPattern {
  inputEntrySources?: ListOperation;
  inputEntrySourcesPattern?: MsVariableTestEntrySourcePattern;
  missingData?: boolean;
  startDate?: boolean;
  endDate?: boolean;
}
export interface MsDFTestPattern extends MsVariableTestPattern {
  autoRegressionOrder?: boolean;
  equationType?: boolean;
  testedSeries?: boolean;
}
export interface MsJohansenTestPattern extends MsVariableTestPattern {
  autoRegressionOrder?: boolean;
  modelType?: boolean;
  exogenousEntrySources?: ListOperation;
  exogenousEntrySourcesPattern?: MsVariableTestEntrySourcePattern;
}
export interface MsGrangerTestPattern extends MsVariableTestPattern {
  confidenceLevel?: boolean;
  lag?: boolean;
}
export interface MsPairCorrelationTestPattern extends MsVariableTestPattern {
  balancedSample?: boolean;
}
export interface MsMdExportDataPattern extends EaxExportDataPattern {
}
export interface MsWorkbookPattern {
  types: MsWorkbookTypes;
  key?: boolean;
  getWbkArg?: GetWbkMdArg;
  getEaxArg?: GetEaxMdArg;
}
export interface MsMetaModelVisualControllerPattern {
  variableRubricatorKey?: boolean;
  workbooks?: MsWorkbookPattern;
  useSourceName?: boolean;
  freeVariables?: boolean;
  variables?: boolean;
  levelFormat?: MsLevelFormat;
  DFTest?: MsDFTestPattern;
  GrangerTest?: MsGrangerTestPattern;
  JohansenTest?: MsJohansenTestPattern;
  PairCorrelationTest?: MsPairCorrelationTestPattern;
  chainOperation?: MsChainOperation;
  exportData?: MsMdExportDataPattern;
}
export interface MsFormulaTransformSlicePattern {
  selection?: ListOperation;
}
export interface MsFormulaTransformVariablePattern {
  slices?: ListOperation;
  transformSlice?: MsFormulaTransformSlicePattern;
}
export interface MsCalculationStatePattern {
  modelKeys?: ArrLong;
}
export interface MsProblemCalculationPattern {
  calcAction?: CalcAction;
  calculationState?: MsCalculationStatePattern;
}
export interface MsOPExecuteParams {
  metaModelKey?: number;
}
export interface MsBaseOptimizationProblemPattern {
  controlVariables?: ListOperation;
  operands?: ListOperation;
  execute?: MsOPExecuteParams;
  removeSimilarOperands?: boolean;
}
export interface MsOptimizationProblemPattern extends MsBaseOptimizationProblemPattern {
}
export interface MsProblemPattern {
  metamodel?: MsMetaModelPattern;
  scenarios?: ListOperation;
  details?: boolean;
  useSavedCoefficients?: boolean;
  problemCalculation?: MsProblemCalculationPattern;
  problemCalculationKey?: number;
  calculate?: MsProblemCalculationSettings;
  save?: boolean;
  generateReport?: MsReportType;
}
export interface MsItemPattern {
  key?: number;
  metaModel?: MsMetaModelPattern;
  model?: MsModelPattern;
  problem?: MsProblemPattern;
}
export interface MsModelFactor {
  modelKey: number;
  factorIndex: number;
}
export interface MsModelsFactors {
  its: MsModelFactorVec;
}
export interface MsMdExecRemoveFactor {
  modelsFactors: MsModelsFactors;
  removeSimilar: boolean;
  removeModel: boolean;
}
export interface MsMdExecCreateVariable {
  name: string;
  level: DimCalendarLvl;
  graphMeta?: string;
  parentKey?: number;
}
export interface MsMdExecRenameVariable {
  entryKey: number;
  name: string;
}
export interface MsMdExecAddFactor {
  modelKey: number;
  entryKey?: number;
  factorIndex?: number;
  graphMeta?: string;
  interParentKey?: number;
}
export interface MsMdExecAddInputVariable {
  modelKey: number;
  entryKey?: number;
  graphMeta?: string;
  interParentKey?: number;
}
export interface MsMdExecGetVariablesByFactors {
  rubFacts: RubFactsVec;
  inputRubKey: number;
  graphMetas?: ArrString;
  parentKey?: number;
}
export interface MsMdExecCreateSimpleModel {
  inputEntryKey?: number;
  outputEntryKey: number;
  inputEntryKeys?: ArrLong;
  kind?: TsFormulaKind;
  graphMeta?: string;
  parentKey?: number;
  interParentKey?: number;
  doUseR?: boolean;
}
export interface MsGroupsEntryKeys {
  its: MsGroupsEntryKeysVec;
}
export interface MsVarsConstraintsKeys {
  its: MsVarConstraintsKeysVec;
}
export interface MsMdExecGetData {
  entryKeys?: ArrLong;
  modelKeys?: ArrLong;
  scenarioKeys?: ArrLong;
  groupEntryKeys?: MsGroupsEntryKeys;
  groupSuppressEmptyFilter?: MsSuppressEmptyFilter;
  varsConstraintsKeys?: MsVarsConstraintsKeys;
}
export interface MsMdExecGetTargetConstaintsData {
  targetConstraintKeys?: MsVarsConstraintsKeys;
  scenarioKeys?: ArrLong;
}
export interface MsMdExecGetTargetProblemData {
  entryKey: number;
  scenarioKeys?: ArrLong;
}
export interface MsMdExecCopyScenario {
  destinationScenarioKeys: ArrLong;
  sourceScenarioKey?: number;
  entryKeys: ArrLong;
}
export interface MsMdExecFillWithVariables {
  entryKeys?: ArrLong;
  scenarioKeys?: ArrLong;
  targetEntryKey?: number;
  sortByVariables?: boolean;
}
export interface MsMdExecFillWithTargetConstraints {
  targetEntryKey: number;
  entryKeys?: ArrLong;
  additionalScenarios: boolean;
  scenarioKeys?: ArrLong;
}
export interface MsMdExecFillWithTargetProblem {
  targetEntryKey: number;
  scenarioKeys?: ArrLong;
}
export interface MsMdExecDiagnosticTest {
  diagnosticTestsType: MsDiagnosticTestType;
}
export interface MsMdExecVariableTest {
  variableTestsType: MsVariableTestType;
}
export interface MsMdExecVariableAutoCorrelation {
  entryKey: number;
}
export interface MsMdExecNonLinearEquationsMethod {
  addExternalEquation?: number;
  removeExternalEquation?: number;
}
export interface MsMdExecCreateProblem {
  parent: number;
  key?: number;
  id?: string;
  name?: string;
}
export interface MsMdExecParams {
  k?: number;
  modelKeys?: ArrLong;
  outputKey?: number;
  pdlIndex?: number;
  options?: number;
  level?: DimCalendarLvl;
  name?: string;
  termIndex?: number;
  factIncluded?: boolean;
  scenarioKeys?: ArrLong;
  period?: MsPeriod;
  problemPeriod?: MsModelPeriod;
  entryKeys?: ArrLong;
  kind?: TsFormulaKind;
  dependenceTypeForSeries?: StatDependenceType;
  execMethod?: boolean;
  execSummaryStatistics?: boolean;
  execCoefficients?: boolean;
  execEvaluateSeries?: boolean;
  execPairCorrelationMatrix?: boolean;
  execARMACoefficients?: boolean;
  execPDLStatCoefficients?: boolean;
  execAutoCorrelation?: boolean;
  execInitDefault?: boolean;
  execWeightsMatrix?: boolean;
  execIsCoefficientsSaved?: boolean;
  execStatCoefficients?: boolean;
  execSetAttributeExpression?: boolean;
  execGenerateName?: boolean;
  execFactsMatrix?: boolean;
  execCreateVariable?: MsMdExecCreateVariable;
  execRenameVariable?: MsMdExecRenameVariable;
  execFillWithVariables?: MsMdExecFillWithVariables;
  execVariableAutoCorrelation?: MsMdExecVariableAutoCorrelation;
  execFillWithModel?: boolean;
  execFillChain?: boolean;
  execAddFactor?: MsMdExecAddFactor;
  execAddInputVariable?: MsMdExecAddInputVariable;
  execRemoveFactor?: MsMdExecRemoveFactor;
  execGetVariablesByFactors?: MsMdExecGetVariablesByFactors;
  execCreateSimpleModel?: MsMdExecCreateSimpleModel;
  execRemoveModel?: boolean;
  execSimpleTermToTermInfo?: boolean;
  execTermInfoToSimpleTerm?: boolean;
  execCreateProblem?: MsMdExecCreateProblem;
  execGetData?: MsMdExecGetData;
  execGetTargetConstaintsData?: MsMdExecGetTargetConstaintsData;
  execGetTargetProblemData?: MsMdExecGetTargetProblemData;
  execUpdateVariables?: boolean;
  execDiagnosticTest?: MsMdExecDiagnosticTest;
  execVariableTest?: MsMdExecVariableTest;
  execCopyScenario?: MsMdExecCopyScenario;
  execNonLinearEquationsMethod?: MsMdExecNonLinearEquationsMethod;
  execSaveVariables?: MsSaveVariables;
  execSaveVarsConstraints?: MsSaveVarsConstraints;
  execSaveTargetConstraints?: MsSaveTargetConstraints;
  execFillWithTargetConstraints?: MsMdExecFillWithTargetConstraints;
  execFillWithTargetProblem?: MsMdExecFillWithTargetProblem;
}
export interface MsMdPattern extends ObjectMdPattern {
  all?: boolean;
  scenarios?: ListOperation;
  period?: boolean;
  items?: ListOperation;
  item?: MsItemPattern;
  getModelChart?: GetChartArg;
  setModelChart?: SetChartArg;
}
export interface MsMdFilter {
  items?: ListFilter;
}
export interface GetMsArg {
  pattern?: MsMdPattern;
  filter?: MsMdFilter;
  execParams?: MsMdExecParams;
}
export interface GetMsResult {
  id: MsId;
  meta?: MsMd;
}
export interface SetMsArg {
  pattern: MsMdPattern;
  meta: MsMd;
  metaGet?: MsMdPattern;
  execParams?: MsMdExecParams;
}
export interface SetMsResult {
  id: MsId;
  meta?: MsMd;
}
export interface MsOpenNew {
  key?: number;
  id?: string;
  name?: string;
  parent?: number;
}
export interface MsOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
  openNew?: MsOpenNew;
  onlyProblem?: boolean;
}
export interface OpenMsArg {
  args: MsOpenArgs;
  metaGet?: MsMdPattern;
}
export interface OpenMsResult {
  id: MsId;
  meta?: MsMd;
  readOnly?: boolean;
}
export interface MsMetaAttributeValues extends ItEntity {
  selection?: DimSelection;
  elementGroup?: DmGroup;
  parameterAsSelection?: MsModelParam;
  parameterAsGroup?: MsModelParam;
  selectionText?: string;
}
export interface FormulaEditorFunction {
  category: string;
  format: string;
  dontCheckInParser: boolean;
  name: string;
  description: string;
  arguments: string;
  showFullDescriptionLink: boolean;
  userFunction: boolean;
  calendarFunction: boolean;
}
export interface FormulaEditorFunctions {
  its: FormulaEditorFunctionVec;
}
export interface FormulaEditorInfo {
  userRPath?: string;
  isRExist?: boolean;
  formulaEditorFunctions?: FormulaEditorFunctions;
}
export interface FormulaEditorInfoPattern {
  userRPath?: boolean;
  isRExist?: boolean;
  formulaEditorFunctions?: FormulaEditorFunctionsType;
}
export interface GetFormulaEditorInfoArg {
  pattern?: FormulaEditorInfoPattern;
}
export interface GetFormulaEditorInfoResult {
  meta?: FormulaEditorInfo;
}
export interface SetFormulaEditorInfoArg {
  pattern: FormulaEditorInfoPattern;
  meta: FormulaEditorInfo;
}
export interface SetFormulaEditorInfoResult {
  meta?: FormulaEditorInfo;
}
export interface VfId {
  id: string;
}
export interface VfMissingData {
  type?: VfMissingDataType;
}
export interface VfComparisonValue {
  compOper?: VfComparisonOperator;
  value1?: number;
  value2?: number;
  percentage?: boolean;
}
export interface VfMetaAttributeValue extends ItEntity {
  value?: any;
  kind?: VfMetaAttributeValueType;
  param?: MsModelParam;
  valueText?: string;
}
export interface VfMetaAttributeValues {
  scenarioKey?: number;
  its: VfMetaAttributeValuePtrVec;
}
export interface VfSelectionValue extends ItEntity {
  value?: any;
  element?: number;
  param?: MsModelParam;
  selection?: DimSelection;
  valueText?: string;
  selectionText?: string;
}
export interface VfSelectionValueList {
  scenarioKey?: number;
  its: VfSelectionValuePtrVec;
}
export interface VfSelectionValues extends ItEntity {
  selection?: DimSelection;
  parameterAsSelection?: MsModelParam;
  parameterAsGroup?: MsModelParam;
  outputParameter?: MsModelParam;
  selectionText?: string;
}
export interface VfSelectionFilter {
  its: VfSelectionValuesPtrVec;
}
export interface VfCrossDbMapping {
  type?: VfCrossDbMappingType;
  targetId?: string;
  targetKey?: number;
  comparatorId?: string;
  comparatorKey?: number;
  value?: any;
  targetSelection?: DimSelection;
  comparatorSelection?: DimSelection;
}
export interface VfCrossDbMappings {
  its: VfCrossDbMappingPtrVec;
}
export interface VfCrossDatabase {
  comparator?: VfMetaAttributeValues;
  selComparator?: VfSelectionValueList;
  value?: VfComparisonValue;
  comparatorRubKey?: number;
  comparatorStubKey?: number;
  comparisonType?: VfRevisionMetadataComparisonType;
  mappings?: VfCrossDbMappings;
}
export interface VfRatio {
  comparator?: VfMetaAttributeValues;
  selComparator?: VfSelectionValueList;
  value?: VfComparisonValue;
  comparatorRubKey?: number;
  comparatorStubKey?: number;
}
export interface VfMissingMetadata {
  attributes?: RdsAttrs;
  calcType?: MsCalcType;
}
export interface VfRevisionMetadataComparison {
  attributes?: RdsAttrs;
  revKey?: number;
  compType?: VfRevisionMetadataComparisonType;
  calcType?: MsCalcType;
}
export interface VfTrend {
  comparator?: VfMetaAttributeValues;
  selComparator?: VfSelectionValueList;
}
export interface VfStatisticalOutliers {
  lowerPercentile?: number;
  upperPercentile?: number;
  outliersType?: VfStatisticalOutliersType;
}
export interface VfCorrelation {
  comparator?: VfMetaAttributeValues;
  selComparator?: VfSelectionValueList;
  value?: VfComparisonValue;
}
export interface VfCustom {
  calculationType?: MsCalcType;
  transform?: MsFormulaTransform;
  textValue?: string;
}
export interface VfRevisionComparison {
  revKey?: number;
  compType?: VfRevisionComparisonType;
  value?: VfComparisonValue;
}
export interface VfComponentMismatch {
  compType?: VfRevisionComparisonType;
  value?: VfComparisonValue;
}
export interface VfCrossFrequency {
  fromLevel?: DimCalendarLvl;
  aggrType?: TsCollapseType;
  value?: VfComparisonValue;
}
export interface VfLevel {
  value?: VfComparisonValue;
}
export interface VfGrowthRate {
  value?: VfComparisonValue;
}
export interface VfMetaAttributeFilter {
  its: MsMetaAttributeValuesPtrVec;
}
export interface VfDetails {
  target?: VfMetaAttributeValues;
  filter?: VfMetaAttributeFilter;
  selTarget?: VfSelectionValueList;
  selFilter?: VfSelectionFilter;
  missingData?: VfMissingData;
  missingMetadata?: VfMissingMetadata;
  revisionComparison?: VfRevisionComparison;
  revisionMetadataComparison?: VfRevisionMetadataComparison;
  componentMismatch?: VfComponentMismatch;
  crossFrequency?: VfCrossFrequency;
  level?: VfLevel;
  growthRate?: VfGrowthRate;
  ratio?: VfRatio;
  crossDatabase?: VfCrossDatabase;
  trend?: VfTrend;
  statisticalOutliers?: VfStatisticalOutliers;
  correlation?: VfCorrelation;
  custom?: VfCustom;
}
export interface VfDateSettings {
  DateOptions?: VfDateOptions;
  date?: any;
  lag?: number;
}
export interface VfExecuteSettings {
  wbkMoniker?: WbkId;
  activeSheet?: boolean;
  useScenarios?: boolean;
  paramValues?: MsModelParamValues;
}
export interface VfSettings {
  severity?: VfSeverity;
  cellStyle?: LnCellStyle;
}
export interface VfValidationExecData {
  key?: number;
  stamp?: any;
}
export interface VfMd extends ObjectMd {
  details?: VfDetails;
  kind?: VfKind;
  startDateSettings?: VfDateSettings;
  endDateSettings?: VfDateSettings;
  level?: DimCalendarLvl;
  treatNonExistingSeries?: boolean;
  exceptionsLimit?: number;
  settings?: VfSettings;
  isSeries?: boolean;
  filters?: VfRules;
  data?: VfValidationExecData;
  rubricator?: number;
  params?: MsModelParams;
}
export interface VfRules {
  its?: VfMdVec;
}
export interface VfMdExecParams {
  executeSettings?: VfExecuteSettings;
  execExecute?: boolean;
}
export interface VfCustomPattern {
  transform?: MsFormulaTransformPattern;
  textValue?: boolean;
}
export interface VfDetailsPattern {
  target?: boolean;
  filter?: boolean;
  selTarget?: boolean;
  selFilter?: boolean;
  other?: boolean;
  custom?: VfCustomPattern;
}
export interface VfSettingsPattern {
  severity?: boolean;
  cellStyle?: boolean;
}
export interface VfMdPattern extends ObjectMdPattern {
  details?: VfDetailsPattern;
  kind?: boolean;
  startDateSettings?: boolean;
  endDateSettings?: boolean;
  level?: boolean;
  treatNonExistingSeries?: boolean;
  exceptionsLimit?: boolean;
  settings?: VfSettingsPattern;
  filters?: VfMdPattern;
  editFilters?: ListOperation;
  rubricator?: boolean;
  params?: ListOperation;
}
export interface GetVfMdArg {
  pattern?: VfMdPattern;
  execParams?: VfMdExecParams;
}
export interface GetVfMdResult {
  id: VfId;
  meta?: VfMd;
}
export interface SetVfMdArg {
  pattern: VfMdPattern;
  meta: VfMd;
  metaGet?: VfMdPattern;
}
export interface SetVfMdResult {
  id: VfId;
  meta?: VfMd;
}
export interface VfOpenArgs extends OdOpenArgs {
  openForEdit?: boolean;
}
export interface OpenVfArg {
  args: VfOpenArgs;
  metaGet?: VfMdPattern;
  metaSet?: SetVfMdArg;
}
export interface OpenVfResult {
  id: VfId;
  meta?: VfMd;
  metaSet?: SetVfMdResult;
}
export interface DmReportDataSource {
  sheetIndex?: number;
  range?: TabRange;
}
export interface DmDataSource {
  kind?: DmDataSourceKind;
  moniker?: string;
  reportDataSource?: DmReportDataSource;
  dataInColumns?: boolean;
  recordCount?: number;
  fieldCount?: number;
  fieldNames?: ArrString;
  error?: string;
}
export interface DmField {
  index: number;
  binningType?: StatBinningMethod;
  categoriesCount?: number;
  treatNanAsCategory?: boolean;
  explanatoryType?: DmExplanatoryType;
}
export interface DmDetails {
}
export interface DmAttributesDetails extends DmDetails {
  attributes?: DmFieldVec;
}
export interface DmTargetDetails extends DmAttributesDetails {
  target?: DmField;
}
export interface DmKeyInfluences extends DmTargetDetails {
}
export interface DmClusteringDetails extends DmAttributesDetails {
  categoriesCount?: number;
}
export interface DmKmodesClusterAnalysis extends DmClusteringDetails {
}
export interface DmSelfOrganizingMap extends DmClusteringDetails {
}
export interface DmHighlightExceptions extends DmAttributesDetails {
  threshold?: number;
}
export interface DmTemplateFillDetails extends DmTargetDetails {
}
export interface DmDecisionTree extends DmTemplateFillDetails {
}
export interface DmLogisticRegression extends DmTemplateFillDetails {
}
export interface DmBackPropagation extends DmTemplateFillDetails {
}
export interface DmDiscriminantAnalysis extends DmTargetDetails {
}
export interface DmForecasting extends DmAttributesDetails {
  forecastingPointsCount?: number;
  level?: DimCalendarLvl;
  labels?: number;
}
export interface DmAssociationRules extends DmDetails {
  transactions?: number;
  objects?: number;
  minimumSupport?: number;
  useSupportPercent?: boolean;
  minimumConfidence?: number;
  minimumFrequentItemsetSize?: number;
}
export interface DmCrossValidation {
  active?: boolean;
  samplingType?: DmCrossValidationSamplingType;
  numberOfFolds?: number;
  numberOfRandomTests?: number;
  trainingSetSize?: number;
}
export interface DmTreeSpecification {
  maxLevels?: number;
  minCases?: number;
}
export interface DmForestDetails extends DmTemplateFillDetails {
  treeSpec?: DmTreeSpecification;
}
export interface DmRandomForest extends DmForestDetails {
  forestSize?: number;
  numberOfPredictors?: number;
  learningSamplePortion?: number;
}
export interface DmGradientBoostedTrees extends DmForestDetails {
  learningRate?: number;
  numberOfIterations?: number;
}
export interface DmMethodDetails {
  keyInfluences?: DmKeyInfluences;
  kmodesClusterAnalysis?: DmKmodesClusterAnalysis;
  selfOrganizingMap?: DmSelfOrganizingMap;
  highlightExceptions?: DmHighlightExceptions;
  decisionTree?: DmDecisionTree;
  logisticRegression?: DmLogisticRegression;
  backPropagation?: DmBackPropagation;
  discriminantAnalysis?: DmDiscriminantAnalysis;
  forecasting?: DmForecasting;
  associationRules?: DmAssociationRules;
  crossValidation?: DmCrossValidation;
  randomForest?: DmRandomForest;
  boostedTrees?: DmGradientBoostedTrees;
}
export interface DmMethod {
  inputDataSource?: DmDataSource;
  outputDataSource?: DmDataSource;
  kind?: DmMethodKind;
  details?: DmMethodDetails;
  error?: string;
}
export interface TreeId {
  id: string;
}
export interface TreeEl {
  k: any;
  n: string;
  id?: string;
  p?: any;
  dt?: ItDataType;
  classId?: number;
  tag?: string;
  term?: TreeTermParams;
}
export interface GetTreeElsResult {
  els?: TreeEls;
  filteredCount?: number;
}
export interface TreeTextFilter {
  text: string;
  searchName?: boolean;
  searchId?: boolean;
}
export interface TreeElsFilter {
  levels?: number;
  text?: TreeTextFilter;
  includeParents?: boolean;
  loadedOnly?: boolean;
}
export interface TreeElsPattern {
  getParentKey?: boolean;
  getHasChildren?: boolean;
  getLevel?: boolean;
  getChildIndex?: boolean;
  getChildrenCount?: boolean;
  getTerm?: boolean;
  getClsIdDataType?: boolean;
  getAbacUfe?: boolean;
}
export interface GetTreeElementsArg {
  resetTree?: boolean;
  parent?: ElKey;
  filter?: TreeElsFilter;
  pattern?: TreeElsPattern;
  range?: ListRange;
  filteredCount?: boolean;
}
export interface GetTreeElementsResult extends GetTreeElsResult {
  id: TreeId;
}
export interface OperationStat {
  id: OperationId;
  totalCount: number;
  faultsCount: number;
  totalTime: number;
  maxTime: number;
  minTime: number;
  longRequest?: any;
}
export interface OperationsStatMd {
  its?: OperationStatVec;
}
export interface OperationsStatPattern {
  ids?: OperationIdVec;
}
export interface RequestStatData {
  timeMs?: number;
  memMax?: number;
}
export interface RequestStatRecord {
  statService: RequestStatData;
  statCore: RequestStatData;
  statDal: RequestStatData;
}
export interface RequestStat extends RequestStatRecord {
  id: RequestId;
}
export interface RequestsStatMd {
  its?: RequestStatVec;
}
export interface RequestsStatPattern {
  ids?: RequestIdVec;
}
export interface OperationRequestStatRecord extends RequestStatRecord {
  operation: OperationId;
  timeStart: any;
  timeEnd: any;
  objectKey?: number;
  objectId?: string;
}
export interface OperationRequestStatDetail extends OperationRequestStatRecord {
}
export interface OperationRequestStatDetails {
  its?: OperationRequestStatDetailVec;
}
export interface OperationRequestStat extends OperationRequestStatRecord {
  session: string;
  request: RequestId;
  details?: OperationRequestStatDetails;
}
export interface OperationRequestsStatMd {
  its?: OperationRequestStatVec;
}
export interface OperationRequestsStatPattern {
  requests?: RequestIdVec;
  operations?: OperationIdVec;
  mb?: MbId;
  details?: boolean;
  range?: ListRange;
  startTime?: any;
}
export interface SessionInfo {
  id: string;
  login?: string;
  timeStart?: any;
  mbId?: string;
}
export interface SessionsInfoMd {
  its?: SessionInfoVec;
}
export interface SessionsInfoPattern {
  all?: boolean;
  login?: boolean;
  timeStart?: boolean;
  mbId?: boolean;
  fromLog?: boolean;
  logRange?: ListRange;
}
export interface LicenseInfo {
  type?: LicenseFeatureType;
  enabled?: boolean;
}
export interface LicensesInfoMd {
  its?: LicenseInfoVec;
}
export interface ProcessInformation {
  gdiObjects?: number;
  userObjects?: number;
  handles?: number;
  privateBytes?: number;
  workingSetSize?: number;
  residentSetSize?: number;
  proportionalSetSize?: number;
  sharedBytes?: number;
  swapSize?: number;
}
export interface ProcessInformationPattern {
  all?: boolean;
  gdiObjects?: boolean;
  userObjects?: boolean;
  handles?: boolean;
  privateBytes?: boolean;
  workingSetSize?: boolean;
  residentSetSize?: boolean;
  proportionalSetSize?: boolean;
  sharedBytes?: boolean;
  swapSize?: boolean;
}
export interface GetStatusResult {
  version: string;
  release: string;
  metabaseSessionTimeout?: any;
  metabaseStoreBinaryCount?: number;
  metabaseLocale?: LocaleInt;
  metabaseConnectionPoolMaxCount?: number;
  processInfo?: ProcessInformation;
  platformInfo: string;
  osType: string;
  osInfo: string;
}
export interface GetStatusArg {
  metabase?: MbId;
  processInfo?: ProcessInformationPattern;
}
export interface SvcLogFilter {
  keys?: IntSet;
}
export interface SvcLog {
  activeFlags?: SvcSamplingFlags;
  filter?: SvcLogFilter;
}
export interface SvcLogArg extends SvcLog {
  mb?: MbId;
}
export interface SvcLogResult extends SvcLog {
}
export interface SvcStateServer {
  type: string;
  host: string;
  port?: number;
}
export interface SvcState {
  active?: number;
  server?: SvcStateServer;
}
export interface SvcStateArg extends SvcState {
}
export interface SvcStateResult extends SvcState {
}
export interface SvcPool {
  active: boolean;
  connectionsLimit: number;
}
export interface SvcPoolArg extends SvcPool {
}
export interface SvcPoolResult extends SvcPool {
}
export interface SvcMdBase {
  log?: SvcLogResult;
  state?: SvcStateResult;
  pool?: SvcPoolResult;
}
export interface SvcMd extends SvcMdBase {
  sessions?: SessionsInfoMd;
  operationsStat?: OperationsStatMd;
  requestsStat?: RequestsStatMd;
  operationRequestsStat?: OperationRequestsStatMd;
  licenses?: LicensesInfoMd;
  pp?: any;
}
export interface SvcPattern {
  all?: boolean;
  log?: boolean;
  logMb?: MbId;
  state?: boolean;
  pool?: boolean;
  sessions?: SessionsInfoPattern;
  operationsStat?: OperationsStatPattern;
  requestsStat?: RequestsStatPattern;
  operationRequestsStat?: OperationRequestsStatPattern;
  licenses?: boolean;
  pp?: boolean;
}
export interface SvcEndpoint {
  uri: string;
}
export interface SetSvcArg {
  credentials?: UserCreds;
  log?: SvcLogArg;
  clearLog?: boolean;
  state?: SvcStateArg;
  pool?: SvcPoolArg;
  metaGet?: SvcPattern;
  restart?: boolean;
  setTo?: SvcEndpoint;
  pattern?: SvcPattern;
  meta?: SvcMd;
}
export interface SetSvcResult extends SvcMdBase {
  meta?: SvcMd;
  clearLog?: boolean;
}
export interface GetSvcArg {
  credentials?: UserCreds;
  pattern?: SvcPattern;
}
export interface GetSvcResult {
  meta?: SvcMd;
}
export interface ForeId extends OdId {
}
export interface ForeExecArg {
  methodName: string;
  args?: OdArgs;
}
export interface ForeExecResult {
  result?: any;
  complexResult?: any;
}
export interface BatchExecResult extends AnyArgs {
  bSucceeded?: boolean;
}
export interface BatchExecArg extends AnyArgs {
  bIgnoreError?: boolean;
}
export interface SearchEntityPattern {
  n?: boolean;
  note?: boolean;
}
export interface SearchCustomResultItem {
  fName: string;
  its?: CustomSearchResArrString;
  hlIts?: CustomSearchResArrString;
}
export interface SearchEntity {
  n?: string;
  hlName?: string;
  note?: string;
  hlNote?: string;
  customRes?: SearchCustomResultVec;
  docId?: string;
}
export interface SearchMbObjectsPattern extends SearchEntityPattern {
  id?: boolean;
  classId?: boolean;
  className?: boolean;
  content?: boolean;
  changeDate?: boolean;
}
export interface SearchMbObject extends SearchEntity {
  k?: number;
  hlKey?: string;
  Id?: string;
  hlId?: string;
  classId?: number;
  className?: string;
  hlClassName?: string;
  content?: string;
  hlContent?: string;
  changeDate?: string;
  hlChangeDate?: string;
}
export interface SearchSourceDataPattern extends SearchEntityPattern {
  time?: boolean;
  dateLevels?: boolean;
  freeDims?: boolean;
  sourceMeta?: boolean;
  factorKeys?: boolean;
}
export interface SearchSourceData extends SearchEntity {
  time?: ArrString;
  dateLevels?: IntSet;
  hlTime?: ArrString;
  hlFreeDimensions?: ArrString;
  meta?: SearchSourceDataMeta;
}
export interface SearchFacetFieldResultItem {
  v?: string;
  c?: number;
}
export interface SearchFacetResultItem {
  n: string;
  its: SearchFacetFieldResultVec;
}
export interface SearchEntityResult {
  resCount?: number;
  facetRes?: SearchFacetResultVec;
}
export interface SearchMbObjectsResult extends SearchEntityResult {
  its?: SearchMbObjectVec;
}
export interface SearchSourceDataResult extends SearchEntityResult {
  its?: SearchSourceDataVec;
}
export interface SearchItemSort {
  fName: string;
  dir?: number;
}
export interface SearchFilterValues {
  op?: number;
  its: FilterArrString;
}
export interface SearchFilterCondition {
  fName?: string;
  op?: number;
  v?: SearchFilterValues;
  nested?: SearchFilterConditionVec;
}
export interface SearchItemsArg {
  text: string;
  range?: ListRange;
  type?: number;
  sort?: SearchItemsSortVec;
  filter?: SearchFilterCondition;
  relFormula?: string;
}
export interface SearchMbObjectsArg extends SearchItemsArg {
  pattern?: SearchMbObjectsPattern;
}
export interface SearchSourceDataArg extends SearchItemsArg {
  pattern?: SearchSourceDataPattern;
}
export interface GetSearchResult {
  GetMbObjectsResult?: SearchMbObjectsResult;
  GetSourceDataResult?: SearchSourceDataResult;
}
export interface GetSearchArg {
  GetMbObjectsArg?: SearchMbObjectsArg;
  GetSourceDataArg?: SearchSourceDataArg;
}
export interface UpdateUPCArg {
  userName: string;
  pass: string;
}
export interface IndexedColors {
  C: IndexedColor[];
}
export interface TabRangeVec {
  it: TabComplexRange[];
}
export interface IntSet {
  i: number[];
}
export interface ArrDouble {
  d: number[];
}
export interface ArrLong {
  l: number[];
}
export interface ArrULong {
  u: number[];
}
export interface ArrDate {
  d: any[];
}
export interface ArrString {
  s: string[];
}
export interface ItKeys {
  it: ItKey[];
}
export interface ItEntities {
  it: ItEntity[];
}
export interface AnyArgsVec {
  it: any[];
}
export interface GxFontStyle {
  it: GxFontStylePart[];
}
export interface LocaleIntVec {
  it: LocaleInt[];
}
export interface RealmUserCredsVec {
  it: RealmUserCreds[];
}
export interface TExpressionTerms {
  Item: ExpressionTerm[];
}
export interface TreeTermParams {
  it: TreeTermParam[];
}
export interface OdNames {
  it: OdName[];
}
export interface OdAttributes {
  a: OdAttribute[];
}
export interface OdVec {
  d: Od[];
}
export interface OdClasses {
  it: OdClass[];
}
export interface OdFindAttributes {
  it: OdFindAttribute[];
}
export interface OdArgs {
  it: OdArg[];
}
export interface SpecialObjectIndexVec {
  it: SpecialObjectIndex[];
}
export interface SpecialObjectsMap {
  it?: any[];
}
export interface SharedAdhocPluginsVec {
  it: SharedAdhocPlugin[];
}
export interface UiControlBindingObjectParamValues {
  it: UiControlBindingObjectParamValue[];
}
export interface ObjectMdVec {
  it: ObjectMd[];
}
export interface MbSubjectPtrVec {
  it: MbSubject[];
}
export interface MbSessionPtrVec {
  it: MbSession[];
}
export interface MbSecLogonHourVec {
  it: MbSecLogonHour[];
}
export interface MbSecLogonHoursPeriodVec {
  it: MbSecLogonHoursPeriod[];
}
export interface MbSecAbacRulePtrVec {
  Item: MbSecAbacRule[];
}
export interface MbSecAbacPolicyPtrVec {
  Item: MbSecAbacPolicy[];
}
export interface MbSecAbacPolicySetPtrVec {
  Item: MbSecAbacPolicySet[];
}
export interface MbSecAbacAttributePtrVec {
  Item: MbSecAbacAttribute[];
}
export interface MbSecAbacAttrInstancePtrVec {
  Item: MbSecAbacAttrInstance[];
}
export interface MbSecAbacValsPtrVec {
  Item: MbSecAbacVals[];
}
export interface MbSecSubjFilterPtrVec {
  Item: AbacPatternFilter[];
}
export interface MbSecAbacObjValsPtrVec {
  Item: MbSecAbacObj[];
}
export interface MbSecAbacClAttrsPtrVec {
  Item: MbSecAbacClAttrs[];
}
export interface MbDalDrvItems {
  Item: MbDalDrv[];
}
export interface MbSubjectsSearchItems {
  Item: MbSubjectsSearchItem[];
}
export interface MbSecProfileEmailsVec {
  it: MbSecProfileEmail[];
}
export interface MbSecProfilePropsVec {
  it: MbSecProfileProp[];
}
export interface MbSecProfilePtrVec {
  it: MbSecProfile[];
}
export interface MbSecLevelPtrVec {
  it: MbSecLevel[];
}
export interface MbSecCategoryPtrVec {
  it: MbSecCategory[];
}
export interface MbAccessClassifications {
  it: MbAccessClassification[];
}
export interface MbPrivilegeVec {
  it: MbPrivilege[];
}
export interface ObClassOpVec {
  it: ObClassOp[];
}
export interface ObClassVec {
  it: ObClass[];
}
export interface ObClassAuditVec {
  Item: ObClassAudit[];
}
export interface MbSecDomainVec {
  it: MbSecDomain[];
}
export interface MbSecStationVec {
  it: MbSecStation[];
}
export interface MbSecDomainSubjectAddStateEntryVec {
  it: MbSecDomainSubjectAddStateEntry[];
}
export interface OdCheckAccVec {
  it: OdCheckAcc[];
}
export interface MbSecSnapshotLogItems {
  Item: MbSecSnapshotLogItem[];
}
export interface SdAcePtrVec {
  it: SdAce[];
}
export interface SdLabelsVec {
  it: SdLabel[];
}
export interface SdLabelSubjsVec {
  it: SdLabelSubj[];
}
export interface SdPtrVec {
  it: Sd[];
}
export interface ResourceStrTranslationsVec {
  it: ResourceStrTranslation[];
}
export interface ResourceStrsVec {
  it: ResourceStr[];
}
export interface ResourceLocalesVec {
  it: ResourceLocale[];
}
export interface ResourceBinaryTranslationsVec {
  it: ResourceBinaryTranslation[];
}
export interface ResourceBinariesVec {
  it: ResourceBinary[];
}
export interface MsgQMessagesVec {
  it: MsgQMessage[];
}
export interface CustomOperationsVec {
  it: CustomOperation[];
}
export interface CustomClassesVec {
  it: CustomClass[];
}
export interface CustomObRefsVec {
  it: CustomObRef[];
}
export interface MbUpdateReflectObjectsRightsTypeSet {
  it: MbUpdateReflectObjectsRightsType[];
}
export interface MbUpdateApplyOptionsSet {
  it: MbUpdateApplyOptions[];
}
export interface MbObjectUpdateTypeSet {
  it: MbObjectUpdateType[];
}
export interface MbUpdateObjectApplyStateValueSet {
  it: MbUpdateObjectApplyStateValue[];
}
export interface CustomPropertyVec {
  it: CustomProperty[];
}
export interface MbUpdateSqlNodeSqlEntries {
  it: MbUpdateSqlNodeSqlEntry[];
}
export interface MbUpdateNodeVec {
  it: MbUpdateNode[];
}
export interface MbUpdatePropertyVec {
  it: MbUpdateProperty[];
}
export interface MbUpdateAccessSubjectVec {
  it: MbUpdateAccessSubject[];
}
export interface MbUpdateSecurityLevelVec {
  it: MbUpdateSecurityLevel[];
}
export interface MbUpdateSecurityCategoryVec {
  it: MbUpdateSecurityCategory[];
}
export interface MbUpdateLogRecordVec {
  it: MbUpdateLogRecord[];
}
export interface MbUpdateObjectAlterTypeEntryVec {
  it: MbUpdateObjectAlterTypeEntry[];
}
export interface ElKeys {
  it: ElKey[];
}
export interface Avs {
  it: any[];
}
export interface ElAvTranslations {
  it: ElAvBase[];
}
export interface ElAvs {
  it: ElAv[];
}
export interface ElHistData {
  it: ElHistRec[];
}
export interface Els {
  e: El[];
}
export interface DimAttrIds {
  it: DimAttrId[];
}
export interface DimCalendarLvlSet {
  it: DimCalendarLvl[];
}
export interface DmAttrsVec {
  it: DmAttr[];
}
export interface DmHiers {
  it: DmHier[];
}
export interface DmAttrHiers {
  it: DmAttrHier[];
}
export interface DmLevs {
  it: DmLev[];
}
export interface DmBlocks {
  it: DmBlock[];
}
export interface DmIndexes {
  it: DmIndex[];
}
export interface DmGroups {
  it: DmGroup[];
}
export interface DmSelectionSchemas {
  it: DmSelectionSchema[];
}
export interface DmSelectionSet {
  it: DmSelectionSetItem[];
}
export interface DmSelectionArgVec {
  it: DmSelectionArg[];
}
export interface ElAccessAttributeVec {
  it: ElAccessAttribute[];
}
export interface ElAccessAttLabelsVec {
  it: ElAccessAttLabel[];
}
export interface ElAccessVec {
  it: ElAccess[];
}
export interface DmOrderAttVec {
  it: DmOrderAtt[];
}
export interface CubeExecFiltItemsVec {
  it: CubeExecFiltItem[];
}
export interface EaxDimLevelAggregators {
  Item: EaxDimLevelAggregator[];
}
export interface EaxChronoAggregators {
  Item: EaxChronoDimLevelAggregator[];
}
export interface EaxMatrixAggregators {
  Item: EaxMatrixAggregatorItem[];
}
export interface EaxMatrixAggregatorsCollection {
  Item: EaxMatrixAggregatorsCollectionItem[];
}
export interface PredefinedStylePreviewVec {
  it: BinaryData[];
}
export interface StyleSheetItemVec {
  it: StyleSheetItem[];
}
export interface GetStyleSheetResultVec {
  it: GetStyleSheetResult[];
}
export interface StyleSheetCopyItemVec {
  it: StyleSheetCopyItem[];
}
export interface PvtDimNamingsVec {
  it: PvtDimNaming[];
}
export interface PvtDimVec {
  it: PvtDim[];
}
export interface PvtSlotEls {
  e: PvtSlotEl[];
}
export interface PvtSlots {
  s: PvtSlot[];
}
export interface PvtTableCells {
  c: PvtTableCell[];
}
export interface PvtAttributeLinksVec {
  it: PvtAttributeLink[];
}
export interface EaxExpandersData {
  Item: EaxExpanderMeta[];
}
export interface PvtEvaluatorElementTypes {
  t: PvtEvaluatorElementType[];
}
export interface PvtTotalsItems {
  it: PvtTotalsItem[];
}
export interface PvtDimCalcItemsVec {
  it: PvtDimCalcItem[];
}
export interface PvtDimCalcsVec {
  it: PvtDimCalc[];
}
export interface PvtHeaderDimSorts {
  it: PvtHeaderDimSort[];
}
export interface PvtDataSlotSorts {
  it: PvtDataSlotSort[];
}
export interface PvtSortItemsVec {
  it: PvtSortItem[];
}
export interface PvtHighlightItemsVec {
  it: PvtHighlightItem[];
}
export interface PvtHeaderEvaluatedSlotVec {
  it: PvtHeaderEvaluatedSlot[];
}
export interface EaxDataSourceDims {
  it: EaxDataSourceDim[];
}
export interface SearchStrStrDict {
  Item: SearchStrStrItem[];
}
export interface SearchSelsDict {
  Item: SearchSelsItem[];
}
export interface SearchCalenInfoDict {
  Item: SearchCalenInfoRow[];
}
export interface SearchRubFactorMetaDict {
  Item: SearchRubFactorMetaItem[];
}
export interface SearchRubFactorDict {
  Item: SearchRubFactorItem[];
}
export interface EaxDataSourcesVec {
  it: EaxDataSource[];
}
export interface EaxGridStyleParts {
  it: EaxGridStylePart[];
}
export interface EaxGridStylePartListOps {
  it?: any[];
}
export interface EaxGridIndicatorElements {
  it?: any[];
}
export interface EaxGridIndicatorAggregations {
  it?: any[];
}
export interface EaxGridIndicatorLegendAssignment {
  it?: any[];
}
export interface EaxChartSeriePointsVec {
  Item: number[];
}
export interface EaxChartSeriesPointsVec {
  Item: EaxChartSeriesPoints[];
}
export interface EaxChartIndicatorElements {
  it?: any[];
}
export interface EaxChartIndicatorAggregations {
  it?: any[];
}
export interface EaxChartDrillInfos {
  Item: EaxChartDrillInfo[];
}
export interface EaxObjectSerieIds {
  Item: any[];
}
export interface EaxVisDrillInfos {
  Item: EaxVisDrillInfo[];
}
export interface EaxMapIndicatorElements {
  it?: any[];
}
export interface EaxMapIndicatorAggregations {
  it?: any[];
}
export interface EaxMapDrillInfos {
  Item: EaxMapDrillInfo[];
}
export interface EaxMapTerritoryIds {
  Item: any[];
}
export interface EaxBubbleTreeIndicatorElements {
  it?: any[];
}
export interface EaxBubbleTreeIndicatorAggregations {
  it?: any[];
}
export interface EaxMapChartIndicatorElements {
  it?: any[];
}
export interface EaxMapChartIndicatorAggregations {
  it?: any[];
}
export interface EaxBubbleChartIndicatorElements {
  it?: any[];
}
export interface EaxBubbleChartIndicatorAggregations {
  it?: any[];
}
export interface EaxTreeMapIndicatorElements {
  it?: any[];
}
export interface EaxTreeMapIndicatorAggregations {
  it?: any[];
}
export interface EaxSheetsVec {
  it: EaxSheet[];
}
export interface EaxCalendarOptions {
  it: EaxCalendarOption[];
}
export interface CDElementAttrValues {
  it?: any[];
}
export interface CDAttrVec {
  Item: CDAttr[];
}
export interface CDElementVec {
  Item: CDElement[];
}
export interface CDLevelVec {
  Item: CDLevel[];
}
export interface EaxHierarchyVec {
  Item: EaxHierarchyItem[];
}
export interface EaxTransformPeriodSet {
  Item: LnTransformPeriodPart[];
}
export interface EaxTransformationKeyVec {
  Item: number[];
}
export interface EaxTransformationVec {
  Item: EaxTransformation[];
}
export interface EaxSelectionsVec {
  Item: string[];
}
export interface EaxRangeTypes {
  it: EaxRangeType[];
}
export interface EaxTabRanges {
  it: EaxTabRange[];
}
export interface EaxTablePartDescsVec {
  it: EaxTablePartDesc[];
}
export interface EaxDrillSettingsValueVec {
  it: EaxDrillSettingsValue[];
}
export interface EaxStatisticsVec {
  it: EaxStatistic[];
}
export interface EaxKeysVec {
  it: number[];
}
export interface EaxDimFixInfos {
  Item: EaxDimFixInfo[];
}
export interface EaxPinnedDims {
  Item: EaxPinnedDim[];
}
export interface EaxDimJoinInfos {
  it: EaxDimJoinInfo[];
}
export interface EaxDimDataFiltersResult {
  it: EaxDimDataFilterResult[];
}
export interface EaxDimDataFilterArgs {
  Item: EaxDimDataFilterArg[];
}
export interface EaxDrillInfos {
  Item: EaxDrillInfo[];
}
export interface EaxValidationsVec {
  it: EaxValidation[];
}
export interface TopobaseFormatVec {
  Item: TopobaseFormat[];
}
export interface EaxTimedTopobases {
  Item: EaxTimedTopobase[];
}
export interface EaxDimNamingAttributes {
  Item: EaxDimAttributeNamingItem[];
}
export interface EaxDimAttributesNamingVec {
  Item: EaxDimAttributesNamingItem[];
}
export interface EaxIndicatorsSelections {
  it?: any[];
}
export interface EaxSliceIndicatorAggregations {
  it?: any[];
}
export interface EaxMetaHieMemVec {
  it: string[];
}
export interface ScorecardPerspectivesVec {
  Item: ScorecardPerspective[];
}
export interface ScorecardObjectivesVec {
  Item: ScorecardObjective[];
}
export interface ScDimVec {
  Item: ScDim[];
}
export interface RdsAttrTranslationsVec {
  it: RdsAttrTranslation[];
}
export interface RdsAttrsVec {
  it: RdsAttr[];
}
export interface RdsParamControlsVec {
  it: RdsParamControl[];
}
export interface RdsLinksVec {
  it: RdsLink[];
}
export interface RdsDictionaryTranslationsVec {
  it: RdsDictionaryTranslation[];
}
export interface RdsParamsVec {
  it: RdsParam[];
}
export interface RdsLevelsVec {
  it: RdsLevel[];
}
export interface RdsImportSchemasVec {
  it: RdsImportSchema[];
}
export interface RdsExportSchemasVec {
  it: RdsExportSchema[];
}
export interface RdsUniqueKeyAttributeVec {
  it: RdsUniqueKeyAttribute[];
}
export interface RdsUniqueKeyVec {
  it: RdsUniqueKey[];
}
export interface RdsNonUniqueKeyAttributeVec {
  it: RdsNonUniqueKeyAttribute[];
}
export interface RdsNonUniqueKeyVec {
  it: RdsNonUniqueKey[];
}
export interface ElDatas {
  it: ElData[];
}
export interface AttrConditionsVec {
  Item: AttrCondition[];
}
export interface RdsUpdateElementsVec {
  it: RdsUpdateElement[];
}
export interface CubeDimsVec {
  it: CubeDim[];
}
export interface CubeDestsVec {
  it: CubeDest[];
}
export interface CubeSelControlOptions {
  it: CubeSelControlOption[];
}
export interface CubeSelControlItemsVec {
  it: CubeSelControlItem[];
}
export interface CellCoord {
  e: CoordEl[];
}
export interface CellValues {
  v: CellValue[];
}
export interface DataCellset {
  d: DataCell[];
}
export interface RubAttVec {
  it: RubAtt[];
}
export interface RubFactsVec {
  it: RubFact[];
}
export interface RubDimVec {
  it: RubDim[];
}
export interface RubRevisionsVec {
  it: RubRevision[];
}
export interface RubObVec {
  it: RubOb[];
}
export interface DtFieldsVec {
  it: DtField[];
}
export interface DtRowsVec {
  r: DtRow[];
}
export interface DtTablesVec {
  it: DtTable[];
}
export interface DtMergedCellsVec {
  Item: DtMergedCell[];
}
export interface DtProviderUnpivotFixedCells {
  Item: DtProviderUnpivotFixedCell[];
}
export interface DbCommandTextItemsVec {
  it: DbCommandTextItem[];
}
export interface CubeImportDimBindFieldTranslationsVec {
  Item: CubeImportDimBindFieldTranslation[];
}
export interface CubeImportDimBindFieldsVec {
  Item: CubeImportDimBindField[];
}
export interface CubeImportDimBindNameFieldsVec {
  Item: CubeImportDimBindNameField[];
}
export interface CubeImportDimBindsVec {
  it: CubeImportDimBind[];
}
export interface CubeImportFactBindsVec {
  it: CubeImportFactBind[];
}
export interface CubeImportResultIncorrectSourceRowsVec {
  Item: CubeImportResultIncorrectSourceRow[];
}
export interface StatDependenceTypes {
  it: StatDependenceType[];
}
export interface TsVarsVec {
  it: TsVar[];
}
export interface TsTermsVec {
  it: TsTerm[];
}
export interface TsExprsVec {
  it: TsExpr[];
}
export interface TsAggregationFiltersVec {
  it: TsAggregationFilter[];
}
export interface TsUserMethodParamsVec {
  it: TsUserMethodParam[];
}
export interface TsFormulasVec {
  it: TsFormula[];
}
export interface HieAttPtrVec {
  it: HieAtt[];
}
export interface HieLevPtrVec {
  it: HieLev[];
}
export interface Hms {
  m: Hm[];
}
export interface HmKeys {
  it: HmKey[];
}
export interface LnColumnPtrVec {
  it: LnColumn[];
}
export interface LnTransformPeriodSet {
  it: LnTransformPeriodPart[];
}
export interface TsAutoPeriodOptions {
  it: TsAutoPeriodOption[];
}
export interface LnSeriePtrVec {
  it: LnSerie[];
}
export interface LnRubsVec {
  it: LnRub[];
}
export interface LnHeaderColSorts {
  it: LnHeaderColSort[];
}
export interface LnDataElSorts {
  it: LnDataElSort[];
}
export interface LnStatisticsVec {
  it: LnStatistic[];
}
export interface LnResultsVec {
  it: LnResult[];
}
export interface WbkAttrsTreeOptionsVec {
  it: WbkAttrsTreeOption[];
}
export interface WbkChartSeries {
  it: WbkChartSerie[];
}
export interface FrMethodParamsVec {
  it: FrMethodParam[];
}
export interface FrMethodsVec {
  it: FrMethod[];
}
export interface SchedulerTaskResultPtrVec {
  it: SchedulerTaskResult[];
}
export interface SchedulerTaskPtrVec {
  it: SchedulerTask[];
}
export interface WspShapeObjectVec {
  Item: WspShapeObject[];
}
export interface EtlShapeObjectVec {
  Item: EtlShapeObject[];
}
export interface EtlObjectPtrVec {
  it: EtlObject[];
}
export interface PrxSheetsVec {
  it: PrxSheet[];
}
export interface PrxDataSourcesVec {
  it: PrxDataSource[];
}
export interface PrxTableSourcesVec {
  it: PrxTableSource[];
}
export interface PivotDims {
  it: PivotDim[];
}
export interface EaxDataAreaSlices {
  it: EaxDataAreaSlice[];
}
export interface EaxDataAreaViews {
  it: EaxDataAreaView[];
}
export interface PrxSlicesVec {
  it: PrxSlice[];
}
export interface PrxSliceDimensionsVec {
  it: PrxSliceDimension[];
}
export interface PrxDataIslandsVec {
  it: PrxDataIsland[];
}
export interface PrxChangedCellsStyleVec {
  Item: PrxChangedCellsStyle[];
}
export interface PrxTableIslandsVec {
  it: PrxTableIsland[];
}
export interface PrxControlsOrder {
  it: number[];
}
export interface PrxControlsOrdersVec {
  it: PrxSheetControlsOrder[];
}
export interface PrxControlsVec {
  it: PrxControl[];
}
export interface PrxDrillRanges {
  Item: PrxDrillRange[];
}
export interface EaxDrillRanges {
  Item: EaxDrillRange[];
}
export interface TabRows {
  Row: TabRow[];
}
export interface TabColumns {
  Column: TabColumn[];
}
export interface TabCellSpans {
  CellSpan: TabCellSpan[];
}
export interface TabExpanders {
  Expander: TabExpander[];
}
export interface TabObjects {
  Object: TabObject[];
}
export interface TTabObjectImages {
  TabObjectImage: TabObjectImage[];
}
export interface TabImagesVec {
  TabImage: TabImage[];
}
export interface TabCoords {
  TabCoord: TabCoord[];
}
export interface TabFootnotesVec {
  Footnote: TabFootnote[];
}
export interface TabCells {
  Cell: TabCell[];
}
export interface TabBorders {
  Border: TabBorder[];
}
export interface TabStylesVec {
  Style: TabStyle[];
}
export interface TabIconImagesVec {
  TabImage: TabIconImage[];
}
export interface TabIconsVec {
  TabIcons: TabIcon[];
}
export interface TabRanges {
  Item: TabRange[];
}
export interface TabFormatConditions {
  Condition: TabFormatCondition[];
}
export interface TabFormatValuesPoints {
  Point: TabFormatValuesPoint[];
}
export interface TabTableStyles {
  TableStyle: TabTableStyle[];
}
export interface TabFilterConditions {
  it: TabFilterCondition[];
}
export interface TabFilterValuesVec {
  Value: TabFilterValue[];
}
export interface TabFilterItemsVec {
  it: TabFilterItem[];
}
export interface TabSheetParts {
  Part: TabSheetPart[];
}
export interface TabCoordActions {
  it: TabCoordAction[];
}
export interface TabHeaderSearchConditions {
  it: TabHeaderSearchCondition[];
}
export interface TabSearchResultItems {
  it: TabSearchResultItem[];
}
export interface EaxCalcItemStylesVec {
  it: EaxCalcItemStyle[];
}
export interface RecommendedChartsArr {
  Item: RecommendedChart[];
}
export interface AdHocIdVec {
  Item: AdHocId[];
}
export interface DataSourceObjectsVec {
  it: AdhocDataSourceObject[];
}
export interface AdhocDsoDimensionsVec {
  it: AdhocDsoDimension[];
}
export interface AdhocExportDataSourceVec {
  it: AdhocExportDataSource[];
}
export interface AdhocSyncIndexesVec {
  Item: AdhocSyncIndex[];
}
export interface AdhocSyncIndexDimensionsVec {
  Item: AdhocSyncIndexDimension[];
}
export interface AdhocParamSyncIndexesVec {
  Item: AdhocParamSyncIndex[];
}
export interface AdhocParamSyncItemsVec {
  Item: AdhocParamSyncItem[];
}
export interface AdhocChatHistoryVec {
  it: AdhocChatHistoryAction[];
}
export interface AdhocChatUsersVec {
  it: AdhocChatUser[];
}
export interface AdhocSlidesVec {
  it: AdhocSlide[];
}
export interface AdhocDsoRefreshVec {
  it: AdhocDataSourceObject[];
}
export interface AuditLogRecordsVec {
  r: AuditLogRecord[];
}
export interface AuditLogFilterConditionOperationVec {
  Item: AuditLogFilterConditionOperation[];
}
export interface AuditLogFilterConditionVec {
  Item: AuditLogFilterCondition[];
}
export interface MsScenarioNodePtrVec {
  it: MsScenarioNode[];
}
export interface MsModelParamsVec {
  Item: MsModelParam[];
}
export interface MsVariableByFactorVec {
  Item: MsVariableByFactor[];
}
export interface MsVariableDataVec {
  Item: MsVariableDataByScenario[];
}
export interface MsVariablesDataVec {
  Item: MsVariableData[];
}
export interface MsVarConstraintDataVec {
  Item: MsVarConstraintsData[];
}
export interface MsGetTargetConstraintDataVec {
  Item: MsGetTargetConstraintInfoData[];
}
export interface MsConstraintsFlagsVec {
  Item: MsConstraintsFlags[];
}
export interface MsGroupVariablesDataVec {
  Item: MsGroupVariableData[];
}
export interface MsGroupVariablesVec {
  Item: MsGroupVariables[];
}
export interface MsScenarioValuesVec {
  Item: MsScenarioValue[];
}
export interface MsVariableItemVec {
  Item: MsVariableItem[];
}
export interface MsSaveVarConstraintsVec {
  Item: MsSaveVarConstraints[];
}
export interface MsTargetConstraintDataVec {
  Item: MsTargetConstraintInfoData[];
}
export interface MsMatrixArr {
  Item: Avs[];
}
export interface MsVariableTestDataVec {
  Item: MsVariableTestDataItem[];
}
export interface MsVariableTestEntrySources {
  Item: MsVariableTestEntrySource[];
}
export interface MsWorkbookVec {
  Item: MsWorkbook[];
}
export interface MsFormulaTransformSlicesVec {
  Item: MsFormulaTransformSlice[];
}
export interface MsFormulaTransformVariablesVec {
  Item: MsFormulaTransformVariable[];
}
export interface MsParametrizedDimensionsVec {
  Item: MsParametrizedDimension[];
}
export interface SelectionsVec {
  Item: DimSelection[];
}
export interface MsFormulaObjectVec {
  Item: MsFormulaObject[];
}
export interface MsFormulaTermVec {
  Item: MsFormulaTerm[];
}
export interface MsCompositeFormulaTermsVec {
  Item: MsCompositeFormulaTerm[];
}
export interface MsFactorVec {
  it: MsFactor[];
}
export interface MsCointegrationEquationOperandsVec {
  Item: MsCointegrationEquationOperand[];
}
export interface MsEvaluateSeriesResultVec {
  Item: MsEvaluateSeriesResultForScenario[];
}
export interface StatConstCoefficientsVec {
  Item: StatConstCoefficients[];
}
export interface MsDependenceFormsVec {
  Item: MsDependenceForm[];
}
export interface MsCalcChainVariableAttributesVec {
  it: MsCalcChainVariableAttribute[];
}
export interface MsCalculationChainEntriesVec {
  Item: MsCalculationChainEntry[];
}
export interface MsModelParamValuesVec {
  Item: MsModelParamValue[];
}
export interface MsTargetConstraintInfosVec {
  Item: MsTargetConstraintInfo[];
}
export interface MsTargetConstraintsVec {
  Item: MsTargetConstraint[];
}
export interface MsModelValuesForDateVec {
  Item: MsModelValuesForDate[];
}
export interface MsModelValuesVec {
  Item: MsModelValues[];
}
export interface MsScenariosVec {
  Item: MsScenario[];
}
export interface MsItemsVec {
  it: MsItem[];
}
export interface MsWorkbookTypes {
  Item: MsWorkbookType[];
}
export interface MsModelFactorVec {
  Item: MsModelFactor[];
}
export interface MsGroupsEntryKeysVec {
  Item: ArrLong[];
}
export interface MsVarConstraintsKeysVec {
  Item: MsConstraintsKeys[];
}
export interface MsMetaAttributeValuesPtrVec {
  it: MsMetaAttributeValues[];
}
export interface FormulaEditorFunctionVec {
  Item: FormulaEditorFunction[];
}
export interface VfMetaAttributeValuePtrVec {
  it: VfMetaAttributeValue[];
}
export interface VfSelectionValuePtrVec {
  it: VfSelectionValue[];
}
export interface VfSelectionValuesPtrVec {
  it: VfSelectionValues[];
}
export interface VfCrossDbMappingPtrVec {
  it: VfCrossDbMapping[];
}
export interface VfValidationExecDataVec {
  it: VfValidationExecData[];
}
export interface VfMdVec {
  it: VfMd[];
}
export interface DmFieldVec {
  it: DmField[];
}
export interface TreeEls {
  e: TreeEl[];
}
export interface OperationIdVec {
  it: OperationId[];
}
export interface OperationStatVec {
  it: OperationStat[];
}
export interface RequestIdVec {
  it: RequestId[];
}
export interface RequestStatVec {
  it: RequestStat[];
}
export interface OperationRequestStatDetailVec {
  it: OperationRequestStatDetail[];
}
export interface OperationRequestStatVec {
  it: OperationRequestStat[];
}
export interface SessionInfoVec {
  it: SessionInfo[];
}
export interface LicenseInfoVec {
  it: LicenseInfo[];
}
export interface SvcSamplingFlags {
  it: SvcSamplingFlag[];
}
export interface CustomSearchResArrString {
  Item: any[];
}
export interface SearchCustomResultVec {
  Item: SearchCustomResultItem[];
}
export interface SearchMbObjectVec {
  it: SearchMbObject[];
}
export interface SearchSourceDataVec {
  it: SearchSourceData[];
}
export interface SearchFacetFieldResultVec {
  Item: SearchFacetFieldResultItem[];
}
export interface SearchFacetResultVec {
  Item: SearchFacetResultItem[];
}
export interface SearchItemsSortVec {
  Item: SearchItemSort[];
}
export interface FilterArrString {
  Item: any[];
}
export interface SearchFilterConditionVec {
  Item: SearchFilterCondition[];
}
export interface GetStatus {
  tArg?: GetStatusArg;
}
export interface GetSvc {
  tArg: GetSvcArg;
}
export interface SetSvc {
  tArg: SetSvcArg;
}
export interface OpenMetabase {
  tDef: MbDef;
  tCreds: UserCreds;
  tArg?: OpenMetabaseArg;
}
export interface CloseMetabase {
  tMb: MbId;
  tArg?: CloseMetabaseArg;
}
export interface UpdateUPC {
  tMb: MbId;
  tArg?: UpdateUPCArg;
}
export interface GetOAuthToken {
  tArg: GetOAuthTokenArg;
}
export interface GetSAMLRequest {
  tArg: GetSAMLRequestArg;
}
export interface GetVerifierCode {
}
export interface GetObjects {
  tParent: OdId;
  tFilter: OdsFilt;
  tArg?: GetObjectsArg;
}
export interface SaveObject {
  tObject: OdId;
}
export interface SetObject {
  tObject: OdId;
  tArg: SetObjectArg;
}
export interface SaveObjectAs {
  tObject: OdId;
  tArg: SaveObjectAsArg;
}
export interface CreateObject {
  tParent: OdId;
  tArg: CreateObjectArg;
}
export interface CopyObject {
  tObject: OdId;
  tArg: CopyObjectArg;
}
export interface MoveObject {
  tParent: OdId;
  tArg: MoveObjectArg;
}
export interface DeleteObjects {
  tMb: MbId;
  tArg: DeleteObjectsArg;
}
export interface GetRawMd {
  tObject: OdId;
  pattern: RawMdPattern;
}
export interface SetRawMd {
  tObject: OdId;
  tArg: SetRawMdArg;
}
export interface CloseObject {
  tObject: ObInstId;
}
export interface GetMbSec {
  tMbSec: MbId;
  tArg: GetMbSecArg;
}
export interface SetMbSec {
  tMbSec: MbId;
  tArg: SetMbSecArg;
}
export interface GetSessions {
  tMbSec: MbId;
  tArg: GetSessionsArg;
}
export interface DisconnectSessions {
  tMbSec: MbId;
  tArg: DisconnectSessionsArg;
}
export interface CheckAuditLogin {
  tMbSec: MbId;
  tArg: MbCheckAuditLogin;
}
export interface GetSubjectMemberOf {
  tMbSec: MbId;
  tArg: MbSubjectMemberOf;
}
export interface SubjectsSearch {
  tMbSec: MbId;
  tArg: MbSubjectsSearch;
}
export interface LookupSubjectInfo {
  tMbSec: MbId;
  tArg: MbLookupSubjectInfo;
}
export interface GetMbDrvs {
  tMbSec: MbId;
  tArg: MbDalDrvsArg;
}
export interface ExportMbSubjects {
  tMbSec: MbId;
  tArg: ExportMbSubjectsArg;
}
export interface OpenMbSecSnapshot {
  tMbSec: MbId;
  tArg: OpenMbSecSnapshotArg;
}
export interface CloseMbSecSnapshot {
  tMbSecSnapshot: MbSecSnapshotId;
}
export interface GetMbSecSnapshot {
  tMbSecSnapshot: MbSecSnapshotId;
  tArg: GetMbSecSnapshotArg;
}
export interface SetMbSecSnapshot {
  tMbSecSnapshot: MbSecSnapshotId;
  tArg: SetMbSecSnapshotArg;
}
export interface OpenAuditLog {
  tMb: MbId;
  tArg: OpenAuditLogArg;
}
export interface GetAuditLog {
  tLog: AuditLogId;
  tArg: GetAuditLogArg;
}
export interface GetAuditLogMd {
  tLog: AuditLogId;
  tArg: GetAuditLogMdArg;
}
export interface SetAuditLogMd {
  tLog: AuditLogId;
  tArg: SetAuditLogMdArg;
}
export interface CloseAuditLog {
  tLog: AuditLogId;
}
export interface Share {
  tArg: ShareArg;
}
export interface OpenCustomOb {
  tOb: OdId;
  tArg: OpenCustomObArg;
}
export interface CloseCustomOb {
  tCustomOb: CustomObId;
}
export interface GetCustomOb {
  tCustomOb: CustomObId;
  tArg: GetCustomObArg;
}
export interface SetCustomOb {
  tCustomOb: CustomObId;
  tArg: SetCustomObArg;
}
export interface OpenMbUpdate {
  tMb: MbId;
  tArg: OpenMbUpdateArg;
}
export interface CloseMbUpdate {
  tMbUpdate: MbUpdateId;
}
export interface GetMbUpdate {
  tMbUpdate: MbUpdateId;
  tArg: GetMbUpdateArg;
}
export interface SetMbUpdate {
  tMbUpdate: MbUpdateId;
  tArg: SetMbUpdateArg;
}
export interface OpenDim {
  tObject: OdId;
  tArg: OpenDimArg;
}
export interface CloseDim {
  tDim: DmId;
}
export interface GetDimElements {
  tDim: DmId;
  tArg: GetDimElementsArg;
}
export interface GetDimMetadata {
  tDim: DmId;
  tArg: GetDimMetadataArg;
}
export interface ChangeDimSelection {
  tDim: DmId;
  tArg: DmSelectionArg;
}
export interface OpenEax {
  tObject: OdId;
  tArg: OpenEaxArg;
}
export interface CloseEax {
  tEax: EaxId;
}
export interface GetEaxMd {
  tEax: EaxId;
  tArg: GetEaxMdArg;
}
export interface SetEaxMd {
  tEax: EaxId;
  tArg: SetEaxMdArg;
}
export interface OpenScorecard {
  tObject: OdId;
  tArg: OpenScorecardOpArg;
}
export interface CloseScorecard {
  tScrCard: ScorecardId;
}
export interface GetScorecardMd {
  tScrCard: ScorecardId;
  tArg: GetScorecardMdArg;
}
export interface SetScorecardMd {
  tScrCard: ScorecardId;
  tArg: SetScorecardMdArg;
}
export interface OpenDbCommand {
  tOb: OdId;
  tArg: OpenDbCommandArg;
}
export interface CloseDbCommand {
  tDbCommand: DbCommandId;
}
export interface GetDbCommand {
  tDbCommand: DbCommandId;
  tArg: GetDbCommandArg;
}
export interface SetDbCommand {
  tDbCommand: DbCommandId;
  tArg: SetDbCommandArg;
}
export interface OpenRds {
  tOb: OdId;
  tArg: OpenRdsArg;
}
export interface OpenRdsParams {
  tObject: OdId;
  tArg: OpenRdsParamsArg;
}
export interface CloseParamValues {
  ParamId: ParamValuesId;
}
export interface CloseRds {
  tRds: RdsId;
}
export interface GetRds {
  tRds: RdsId;
  tArg: GetRdsArg;
}
export interface SetRds {
  tRds: RdsId;
  tArg: SetRdsArg;
}
export interface GetRdsElements {
  tRds: RdsId;
  tArg: GetRdsElementsArg;
}
export interface SetRdsElements {
  tRds: RdsId;
  tArg: SetRdsElementsArg;
}
export interface OpenCube {
  tOb: OdId;
  tArg: OpenCubeArg;
}
export interface CloseCube {
  tCube: CubeId;
}
export interface GetCube {
  tCube: CubeId;
  tArg: GetCubeArg;
}
export interface SetCube {
  tCube: CubeId;
  tArg: SetCubeArg;
}
export interface OpenResource {
  tOb: OdId;
  tArg: OpenResourceArg;
}
export interface CloseResource {
  tResource: ResourceId;
}
export interface GetResource {
  tResource: ResourceId;
  tArg: GetResourceArg;
}
export interface SetResource {
  tResource: ResourceId;
  tArg: SetResourceArg;
}
export interface OpenRub {
  tObject: OdId;
  tArg: OpenRubArg;
}
export interface CloseRub {
  tRub: RubId;
}
export interface GetRubMd {
  tRub: RubId;
  tArg: GetRubMdArg;
}
export interface OpenCubeImport {
  tOb: OdId;
  tArg: OpenCubeImportArg;
}
export interface CloseCubeImport {
  tCubeImport: CubeImportId;
}
export interface GetCubeImport {
  tCubeImport: CubeImportId;
  tArg: GetCubeImportArg;
}
export interface SetCubeImport {
  tCubeImport: CubeImportId;
  tArg: SetCubeImportArg;
}
export interface OpenHie {
  tRub?: RubId;
  tArg: OpenHieArg;
}
export interface CloseHie {
  tHie: HieId;
}
export interface GetHieMd {
  tHie: HieId;
  tArg: GetHieMdArg;
}
export interface SetHieMd {
  tHie: HieId;
  tArg: SetHieMdArg;
}
export interface GetHieMembers {
  tHie: HieId;
  tArg: GetHieMembersArg;
}
export interface OpenVf {
  tOb: OdId;
  tArg: OpenVfArg;
}
export interface CloseVf {
  tVf: VfId;
}
export interface GetVfMd {
  tVf: VfId;
  tArg: GetVfMdArg;
}
export interface SetVfMd {
  tVf: VfId;
  tArg: SetVfMdArg;
}
export interface OpenWbk {
  tOb: OdId;
  tArg: OpenWbkArg;
}
export interface CloseWbk {
  tWbk: WbkId;
}
export interface GetWbkMd {
  tWbk: WbkId;
  tArg: GetWbkMdArg;
}
export interface SetWbkMd {
  tWbk: WbkId;
  tArg: SetWbkMdArg;
}
export interface OpenWsp {
  tOb: OdId;
  tArg: OpenWspArg;
}
export interface CloseWsp {
  tWsp: WspId;
}
export interface GetWspMd {
  tWsp: WspId;
  tArg: GetWspMdArg;
}
export interface SetWspMd {
  tWsp: WspId;
  tArg: SetWspMdArg;
}
export interface OpenScheduler {
  tOb: OdId;
  tArg: OpenSchedulerArg;
}
export interface CloseScheduler {
  tScheduler: SchedulerId;
}
export interface GetScheduler {
  tScheduler: SchedulerId;
  tArg: GetSchedulerArg;
}
export interface SetScheduler {
  tScheduler: SchedulerId;
  tArg: SetSchedulerArg;
}
export interface OpenEtl {
  tOb: OdId;
  tArg: OpenEtlArg;
}
export interface CloseEtl {
  tEtl: EtlId;
}
export interface GetEtl {
  tEtl: EtlId;
  tArg: GetEtlArg;
}
export interface SetEtl {
  tEtl: EtlId;
  tArg: SetEtlArg;
}
export interface GetTabSheetData {
  tTabSheet: TabSheetId;
  tArg: GetTabSheetDataArg;
}
export interface SetTabSheetData {
  tTabSheet: TabSheetId;
  tArg: SetTabSheetDataArg;
}
export interface GetDocumentData {
  tPrxSheet: PrxSheetId;
  tArg: GetDocumentDataArg;
}
export interface OpenPrx {
  tObject: OdId;
  tArg: OpenPrxArg;
}
export interface GetPrxMd {
  tPrx: PrxId;
  tArg: GetPrxMdArg;
}
export interface SetPrxMd {
  tPrx: PrxId;
  tArg: SetPrxMdArg;
}
export interface ClosePrx {
  tPrx: PrxId;
}
export interface GetChart {
  tChart: ChartId;
  tArg: GetChartArg;
}
export interface SetChart {
  tChart: ChartId;
  tArg: SetChartArg;
}
export interface GetDefaultChart {
  tArg: GetChartArg;
}
export interface GetChartStyle {
}
export interface GetMap {
  tMap: MapId;
  tArg: GetMapArg;
}
export interface SetMap {
  tMap: MapId;
  tArg: SetMapArg;
}
export interface GetSpeedometer {
  tSpeedometer: SpeedometerId;
  tArg: GetSpeedometerArg;
}
export interface SetSpeedometer {
  tSpeedometer: SpeedometerId;
  tArg: SetSpeedometerArg;
}
export interface GetBubbleTree {
  tBubbleTree: BubbleTreeId;
  tArg: GetBubbleTreeArg;
}
export interface SetBubbleTree {
  tBubbleTree: BubbleTreeId;
  tArg: SetBubbleTreeArg;
}
export interface GetTreeMap {
  tTreeMap: TreeMapId;
  tArg: GetTreeMapArg;
}
export interface SetTreeMap {
  tTreeMap: TreeMapId;
  tArg: SetTreeMapArg;
}
export interface GetMapChart {
  tMapChart: MapChartId;
  tArg: GetMapChartArg;
}
export interface SetMapChart {
  tMapChart: MapChartId;
  tArg: SetMapChartArg;
}
export interface GetBubbleChart {
  tBubbleChart: BubbleChartId;
  tArg: GetBubbleChartArg;
}
export interface SetBubbleChart {
  tBubbleChart: BubbleChartId;
  tArg: SetBubbleChartArg;
}
export interface OpenAdHoc {
  tObject: OdId;
  tOpenArg: AdHocOpenArg;
}
export interface GetAdHoc {
  tAdHocId: AdHocId;
  tArg: GetAdHocMdArg;
}
export interface SetAdHoc {
  tAdHocId: AdHocId;
  tArg: SetAdHocMdArg;
}
export interface CloseAdHoc {
  tAdHocId: AdHocId;
}
export interface OpenMs {
  tOb: OdId;
  tArg: OpenMsArg;
}
export interface CloseMs {
  tMs: MsId;
}
export interface GetMs {
  tMs: MsId;
  tArg: GetMsArg;
}
export interface SetMs {
  tMs: MsId;
  tArg: SetMsArg;
}
export interface GetDm {
  tArg: DmMethod;
}
export interface GetDmDataSource {
  tArg: DmDataSource;
}
export interface GetFormulaEditorInfo {
  tMb: MbId;
  tArg: GetFormulaEditorInfoArg;
}
export interface SetFormulaEditorInfo {
  tArg: SetFormulaEditorInfoArg;
}
export interface GetTreeElements {
  tTree: TreeId;
  tArg: GetTreeElementsArg;
}
export interface GetBinary {
  tBinary: BinaryId;
  tArg?: GetBinaryArg;
}
export interface GetBin {
  mon: string;
  attach?: BinAttachmentDisposition;
  fileName?: string;
  cache?: string;
}
export interface PutBinary {
  tBinary: BinaryId;
  tArg: PutBinaryArg;
}
export interface PutBin {
  mon: string;
  format?: string;
  fileName?: string;
  data?: BinaryData;
  createNewDoc?: string;
}
export interface BatchExec {
  tArg: BatchExecArg;
}
export interface ForeExec {
  tFore: ForeId;
  tArg: ForeExecArg;
}
export interface SetExp {
  tExpressionId: ExpressionId;
  tTermProviderId: TermProviderId;
  tOperations: ExpOperations;
  tExpressionAgrs: ExpressionArgs;
}
export interface GetSearch {
  tMb: MbId;
  tArg: GetSearchArg;
}
export interface OpenDtbDal {
  tObject: OdId;
  tArg: OpenDtbDalArg;
}
export interface ExecDtbDal {
  tDtbDal: DtbDalId;
  tArg: ExecDtbDalArg;
}
export interface CloseDtbDal {
  tDtbDal: DtbDalId;
}
export interface GetTopobase {
  tTopobase: TopobaseId;
  tArg: GetTopobaseArg;
}
export interface OpenStyleSheet {
  tObject: OdId;
  tArg: OpenStyleSheetArg;
}
export interface GetStyleSheet {
  tStyleSheet: StyleSheetId;
  tArg: GetStyleSheetArg;
}
export interface CopyStyleSheet {
  tStyleSheetFrom: StyleSheetId;
  tStyleSheetTo: StyleSheetId;
  tArg: CopyStyleSheetArg;
}
export interface GetPvtTables {
  tDataAreaParam: DataAreaParam;
}
